/*
 * World-map base for the coverage instrument. The silhouette is now REAL
 * geography — Natural Earth land (world-atlas land-110m), projected once at
 * build time into committed SVG path strings (see worldLandPaths.ts and
 * scripts/generate-world-paths.mjs). No geo library ships to the browser;
 * the runtime only ever sees plain path data. This replaces the earlier
 * hand-authored low-poly silhouette, whose coarse Eurasia outline had no
 * Baltic Sea and left Estonia/Lithuania reading as inside Russia.
 *
 * Nodes are projected with the SAME equirectangular function used to
 * generate the land paths, so accurate lat/lon markers land on the correct
 * coastline. Style is unchanged: restrained steel-blue land on the navy
 * surface, no country borders (land-110m is borderless — which also suits
 * the "coverage, not a political/office map" posture).
 */

import { WORLD_LAND_PATHS, WORLD_VIEW_H, WORLD_VIEW_W } from "./worldLandPaths";

export const MAP_W = WORLD_VIEW_W;
export const MAP_H = WORLD_VIEW_H;

// Equirectangular (plate carrée) — MUST match the generator's projection.
const SCALE = MAP_W / 360;
const LAT_TOP = 84;

export function project(lon: number, lat: number): [number, number] {
  return [(lon + 180) * SCALE, (LAT_TOP - lat) * SCALE];
}

// Islands too small to survive in land-110m at this scale but that carry a
// jurisdiction node — rendered as faint dots so their markers don't float
// in open sea. (lon, lat.)
const ISLAND_DOTS: ReadonlyArray<readonly [number, number]> = [
  [-81.4, 19.3], // Cayman Islands
  [-61.8, 17.1], // Antigua and Barbuda
  [-61.2, 13.2], // Saint Vincent and the Grenadines
  [-64.75, 32.31], // Bermuda
  [-77.3, 18.11], // Jamaica
  [-62.58, 17.16], // Nevis
  [166.96, -15.38], // Vanuatu
  [-159.78, -21.24], // Cook Islands
  [55.49, -4.68], // Seychelles
  [125.73, -8.87], // Timor-Leste
  [115.23, 5.28], // Labuan (islet off NW Borneo)
];

/**
 * The silhouette layer only — consumers wrap it in their own <svg
 * viewBox={`0 0 ${MAP_W} ${MAP_H}`}> so the interactive coverage map and the
 * homepage teaser can each control size, labels and overlays.
 */
export function WorldMapPaths() {
  return (
    <g strokeLinejoin="round">
      {WORLD_LAND_PATHS.map((d, i) => (
        <path
          key={i}
          d={d}
          fillRule="evenodd"
          fill="var(--color-steel-blue)"
          fillOpacity="0.09"
          stroke="var(--color-steel-blue)"
          strokeOpacity="0.28"
          strokeWidth="0.5"
        />
      ))}
      {ISLAND_DOTS.map(([lon, lat], i) => {
        const [x, y] = project(lon, lat);
        return (
          <circle
            key={`island-${i}`}
            cx={x}
            cy={y}
            r="1.6"
            fill="var(--color-steel-blue)"
            fillOpacity="0.22"
          />
        );
      })}
    </g>
  );
}

// Approximate capital / centroid coordinates (lon, lat) for every
// jurisdiction in JURISDICTION_GROUPS — keys must match those names exactly.
// Europe/Baltic and special entries verified against client reference points.
export const JURISDICTION_COORDS: Record<string, [number, number]> = {
  // Europe
  Greece: [21.8243, 39.0742],
  Estonia: [25.0136, 58.5953],
  Lithuania: [23.8813, 55.1694],
  France: [2.35, 48.85],
  Spain: [-3.7, 40.4],
  Portugal: [-9.14, 38.7],
  "United Kingdom": [-0.13, 51.5],
  Switzerland: [8.2275, 46.8182],
  Cyprus: [33.4299, 35.1264],
  Georgia: [43.3569, 42.3154],
  // Africa
  Uganda: [32.6, 0.3],
  Kenya: [36.8, -1.3],
  Namibia: [17.1, -22.6],
  Ghana: [-0.2, 5.6],
  "Democratic Republic of the Congo": [15.3, -4.3],
  Malawi: [33.8, -14.0],
  Morocco: [-6.8, 34.0],
  "South Africa": [28.2, -25.7],
  Rwanda: [30.1, -1.95],
  Somaliland: [46.8253, 9.4117],
  // Middle East / Central Asia
  "Saudi Arabia": [46.7, 24.7],
  "United Arab Emirates": [54.6, 24.2],
  Qatar: [51.3, 25.6],
  Kazakhstan: [66.9237, 48.0196],
  Uzbekistan: [64.5853, 41.3775],
  Oman: [58.6, 23.6],
  // Asia-Pacific
  Cambodia: [104.9, 11.6],
  China: [116.4, 39.9],
  Philippines: [121.0, 14.6],
  Indonesia: [106.8, -6.2],
  India: [77.2, 28.6],
  "Hong Kong SAR": [114.2, 22.3],
  Singapore: [103.85, 1.35],
  Australia: [149.1, -35.3],
  Malaysia: [101.7, 3.1],
  Japan: [138.25, 36.2],
  // Special economic zone in Laos — a special-market monitoring point, not a
  // country/office/jurisdiction (see classification in jurisdictions.ts).
  "Golden Triangle SEZ": [100.09, 20.36],
  // Americas
  "United States": [-77.0, 38.9],
  Canada: [-75.7, 45.4],
  Mexico: [-99.1, 19.4],
  Nicaragua: [-86.3, 12.1],
  Panama: [-79.5, 9.0],
  Chile: [-70.7, -33.4],
  "Dominican Republic": [-69.9, 18.5],
  "Antigua and Barbuda": [-61.8, 17.1],
  Argentina: [-58.4, -34.6],
  Brazil: [-47.9, -15.8],
  Peru: [-77.0, -12.0],
  Colombia: [-74.1, 4.7],
  Ecuador: [-78.5, -0.2],
  Paraguay: [-57.6, -25.3],
  Jamaica: [-77.3, 18.11],
  // International Structuring
  "Cayman Islands": [-81.4, 19.3],
  "Saint Vincent and the Grenadines": [-61.2, 13.2],
  Bermuda: [-64.75, 32.31],
  Belize: [-88.5, 17.19],
  // Labuan is a federal territory of Malaysia (islet off NW Borneo), named
  // at the level the structuring market knows it — not an independent country.
  Labuan: [115.23, 5.28],
  "Timor-Leste": [125.73, -8.87],
  // Ras Al Khaimah is an emirate within the UAE (correct spelling, not
  // "Ras Al Khaiman") — nudged slightly off Abu Dhabi's UAE node.
  "Ras Al Khaimah": [55.98, 25.67],
  Nevis: [-62.58, 17.16],
  Ireland: [-7.69, 53.14],
  Vanuatu: [166.96, -15.38],
  "Cook Islands": [-159.78, -21.24],
  Seychelles: [55.49, -4.68],
};
