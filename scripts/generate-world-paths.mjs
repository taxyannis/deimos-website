// One-off generator: world-atlas land-110m TopoJSON -> equirectangular SVG
// path strings, committed to src/components/jurisdictions/worldLandPaths.ts so
// the runtime bundle carries only plain path data (no geo dependency ships).
// Re-run with: node scripts/generate-world-paths.mjs
import { feature } from "topojson-client";
import { writeFileSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const topo = require("world-atlas/land-110m.json");
const land = feature(topo, topo.objects.land);

// Projection — must stay identical to project() in WorldMap.tsx.
const W = 1000;
const SCALE = W / 360; // equal-scale equirectangular (plate carrée)
const LAT_TOP = 84;
const LAT_BOTTOM = -56; // crops most of Antarctica; viewBox clips the rest
const H = Math.round((LAT_TOP - LAT_BOTTOM) * SCALE);

const px = (lon, lat) => [
  +((lon + 180) * SCALE).toFixed(1),
  +((LAT_TOP - lat) * SCALE).toFixed(1),
];

// topojson feature() yields a Feature or FeatureCollection; normalize to a
// flat list of Polygon coordinate arrays (each = array of rings).
const geoms = land.type === "FeatureCollection" ? land.features.map((f) => f.geometry) : [land.geometry];
const polygons = [];
for (const geom of geoms) {
  if (geom.type === "Polygon") polygons.push(geom.coordinates);
  else if (geom.type === "MultiPolygon") polygons.push(...geom.coordinates);
}

// Artifact-ring signature: a "thin full-width bar" — a degenerate ring that
// traces (near) a single parallel, so its PROJECTED x-span is almost the whole
// map while its y-span is only a few pixels. These are the stray horizontal
// lines (and their edge-closing verticals). Screening on the projected bbox is
// what makes this reliable regardless of the ring's cause.
//
// Note: we deliberately do NOT filter on antimeridian longitude jumps. The
// real Afro-Eurasia landmass is a single ring whose coastline runs out to
// far-east Siberia and legitimately spans the full map width — an antimeridian
// test drops the whole continent. A thin-bar test never touches it, because
// Afro-Eurasia's y-span is enormous (it reaches from the Arctic to South
// Africa), nowhere near the thin-bar threshold.
function isThinFullWidthBar(ring) {
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  for (const [lon, lat] of ring) {
    const [x, y] = px(lon, lat);
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  }
  return maxX - minX > 0.85 * W && maxY - minY < 0.03 * H;
}

// The Afro-Eurasia land ring in land-110m is cut at the antimeridian: its
// coastline reaches ±180° (far-east Siberia / Chukotka) and the ring stores
// the two seam vertices at the SAME latitude but opposite signs. Drawn
// straight, that seam segment runs the full map width as a horizontal line
// near the top (~65°N and ~69°N) — the "northern line" artifact. Splitting the
// ring at every >180° longitude jump turns each seam into a break: each arc is
// closed along the map's own vertical edge (x=0 or x=1000, i.e. the ±180°
// meridian at the very margin) instead of a bar across the middle of the map.
// Rings that don't cross the antimeridian (everything else, incl. the Caspian
// hole) pass through as a single arc unchanged.
function splitAntimeridian(ring) {
  const crossLat = (a, b) => {
    let lon0 = a[0];
    let lon1 = b[0];
    if (lon1 - lon0 > 180) lon1 -= 360;
    else if (lon0 - lon1 > 180) lon1 += 360;
    const seam = lon1 > lon0 ? 180 : -180;
    const t = (seam - lon0) / (lon1 - lon0);
    return a[1] + t * (b[1] - a[1]);
  };
  const edge = (lon, lat) => [lon >= 0 ? 180 : -180, lat];

  const arcs = [];
  let cur = [];
  for (let i = 0; i < ring.length; i++) {
    if (i > 0 && Math.abs(ring[i][0] - ring[i - 1][0]) > 180) {
      const lat = crossLat(ring[i - 1], ring[i]);
      cur.push(edge(ring[i - 1][0], lat)); // close current arc on its own side
      arcs.push(cur);
      cur = [edge(ring[i][0], lat)]; // open next arc on the opposite side
    }
    cur.push(ring[i]);
  }
  arcs.push(cur);

  // The ring is cyclic: reconcile the wrap segment last -> first.
  const first = ring[0];
  const last = ring[ring.length - 1];
  if (Math.abs(first[0] - last[0]) > 180) {
    const lat = crossLat(last, first);
    arcs[arcs.length - 1].push(edge(last[0], lat));
    arcs[0].unshift(edge(first[0], lat));
  } else if (arcs.length > 1) {
    // Ring started mid-arc: the final arc continues into the first one.
    arcs[0] = arcs.pop().concat(arcs[0]);
  }
  return arcs;
}

// GeoJSON/TopoJSON Polygon coordinates are [exteriorRing, hole1, hole2, ...] —
// a hole is not a separate shape, it's a cutout inside the exterior ring
// (e.g. the Caspian Sea is a hole inside the single Eurasia polygon). The
// previous generator drew every ring — exterior AND holes — as its own
// independently solid-filled land shape, so holes were painted in land color
// instead of being cut out, and their outline stroke showed as a stray shape
// sitting inside the landmass. The fix: emit ONE <path> per polygon whose `d`
// concatenates all of that polygon's ring subpaths, rendered with
// fill-rule="evenodd" (see WorldMapPaths in WorldMap.tsx) so holes correctly
// subtract and show the navy page background — the same "water" color as
// every ocean, since oceans are never drawn, only implied by absent land.
const paths = [];
let skippedArtifacts = 0;
for (const poly of polygons) {
  let d = "";
  for (const ring of poly) {
    // Skip rings sitting entirely in the deep south (Antarctica) — clipped
    // anyway, but dropping them keeps the committed file small.
    if (ring.every(([, lat]) => lat < LAT_BOTTOM + 1)) continue;
    // Skip the stray horizontal-line artifacts (see above).
    if (isThinFullWidthBar(ring)) {
      skippedArtifacts++;
      continue;
    }
    // Split at the antimeridian so a seam-crossing ring can't draw a
    // full-width horizontal bar; each arc becomes its own closed subpath.
    for (const arc of splitAntimeridian(ring)) {
      for (let i = 0; i < arc.length; i++) {
        const [x, y] = px(arc[i][0], arc[i][1]);
        d += (i === 0 ? "M" : "L") + x + " " + y;
      }
      d += "Z";
    }
  }
  if (d) paths.push(d);
}

const out = `// AUTO-GENERATED by scripts/generate-world-paths.mjs — do not edit by hand.
// Source: world-atlas land-110m (public domain, Natural Earth) projected with
// equirectangular (LAT_TOP ${LAT_TOP}, scale W/360). Regenerate after any
// projection change in WorldMap.tsx.
export const WORLD_VIEW_W = ${W};
export const WORLD_VIEW_H = ${H};
export const WORLD_LAND_PATHS: readonly string[] = [
${paths.map((d) => "  " + JSON.stringify(d) + ",").join("\n")}
];
`;

writeFileSync("src/components/jurisdictions/worldLandPaths.ts", out);
console.log(`wrote ${paths.length} land paths, viewBox ${W}x${H} (skipped ${skippedArtifacts} line-artifact rings)`);
