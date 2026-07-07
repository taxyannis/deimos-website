"use client";

import { useMemo, useState } from "react";
import { JURISDICTION_GROUPS } from "@/content/jurisdictions";
import { RegionFilterButton } from "@/components/jurisdictions/RegionFilterButton";
import {
  JurisdictionDetailPanel,
  type SelectedJurisdiction,
} from "@/components/jurisdictions/JurisdictionDetailPanel";

const ALL = "all";
const VIEW_W = 1200;
const VIEW_H = 500;

// Deliberately NOT a geographically accurate world map — this project has no
// real topology data or tooling to produce one (SITE_COMPLETION_PLAN.md).
// Anchors below place each region in a loose, approximate west-to-east band
// (Americas -> Europe/Africa -> Middle East/Central Asia -> Asia-Pacific) so
// the panel reads as "world coverage" at a glance without claiming precision
// — a "custom institutional map grid with clickable region arcs and
// jurisdiction nodes," one of the explicitly approved feasible approaches
// for a v1 that has no real map data.
const REGION_ANCHORS: Record<string, [number, number]> = {
  americas: [200, 260],
  "international-structuring": [270, 400],
  europe: [620, 140],
  africa: [640, 350],
  "middle-east-central-asia": [830, 260],
  "asia-pacific": [1030, 260],
};

// Column count per cluster grid — chosen per region so each cluster reads
// as a compact, roughly square block rather than a long single-file row.
const REGION_COLUMNS: Record<string, number> = {
  americas: 5,
  "international-structuring": 2,
  europe: 5,
  africa: 3,
  "middle-east-central-asia": 3,
  "asia-pacific": 3,
};

const NODE_DX = 36;
const NODE_DY = 40;

// Loose network mesh between neighboring region anchors — decorative only
// (aria-hidden), evoking cross-border reach without implying any specific
// transaction route or physical connection.
const ARC_PAIRS: Array<[string, string]> = [
  ["americas", "international-structuring"],
  ["americas", "europe"],
  ["europe", "africa"],
  ["europe", "middle-east-central-asia"],
  ["africa", "middle-east-central-asia"],
  ["middle-east-central-asia", "asia-pacific"],
];

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

type Node = {
  id: string;
  name: string;
  region: string;
  regionId: string;
  x: number;
  y: number;
};

// DOM/tab order follows left-to-right visual position (region anchor
// x-coordinate), not JURISDICTION_GROUPS' declared content order. Without
// this, keyboard Tab order would jump Europe -> Africa -> Middle East ->
// Asia-Pacific -> back to Americas on the far left -> International
// Structuring, which doesn't match what a sighted user sees. Only this
// traversal is re-sorted; JURISDICTION_GROUPS itself (and every other
// consumer of it — the region filter buttons, the mobile fallback list)
// keeps its own declared editorial order.
const GROUPS_BY_VISUAL_ORDER = [...JURISDICTION_GROUPS].sort(
  (a, b) => REGION_ANCHORS[a.id][0] - REGION_ANCHORS[b.id][0],
);

// Nodes are laid out on a fixed, deterministic grid per region cluster —
// never randomized — so server and client render identical positions.
const NODES: Node[] = GROUPS_BY_VISUAL_ORDER.flatMap((group) => {
  const [anchorX, anchorY] = REGION_ANCHORS[group.id];
  const columns = REGION_COLUMNS[group.id];
  const rows = Math.ceil(group.jurisdictions.length / columns);

  return group.jurisdictions.map((name, index) => {
    const col = index % columns;
    const row = Math.floor(index / columns);
    const colsInRow = Math.min(columns, group.jurisdictions.length - row * columns);
    const x = anchorX + (col - (colsInRow - 1) / 2) * NODE_DX;
    const y = anchorY + (row - (rows - 1) / 2) * NODE_DY;
    return { id: slugify(name), name, region: group.region, regionId: group.id, x, y };
  });
});

function arcPath([x1, y1]: [number, number], [x2, y2]: [number, number]) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2 - 40;
  return `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`;
}

// Premium interactive "instrument" — an institutional map grid, not a
// literal geographic map (DESIGN.md's no-Google-Maps stance): fine-line
// graticule texture, decorative network arcs, and jurisdiction nodes as
// real HTML buttons overlaid on an SVG backdrop (not interactive SVG
// elements) for robust keyboard/focus behavior. All motion here is plain
// CSS transitions/transforms, so the sitewide reduced-motion reset in
// globals.css (which collapses every transition/animation duration to
// ~0 under prefers-reduced-motion) already makes this fully non-animated
// for those users without any extra branching logic.
export function JurisdictionMap() {
  const [activeRegion, setActiveRegion] = useState<string>(ALL);
  const [selected, setSelected] = useState<SelectedJurisdiction | null>(null);

  const arcs = useMemo(
    () => ARC_PAIRS.map(([a, b]) => arcPath(REGION_ANCHORS[a], REGION_ANCHORS[b])),
    [],
  );

  // Drives the detail panel's picker-list state (requirement 11): once a
  // region filter narrows the map to one cluster, the panel offers every
  // jurisdiction in that cluster as a full-precision text target instead of
  // only the small map nodes.
  const activeGroup =
    activeRegion === ALL
      ? null
      : (JURISDICTION_GROUPS.find((group) => group.id === activeRegion) ?? null);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter jurisdictions by region"
        className="flex flex-wrap gap-y-[var(--space-sm)] border-b border-ink-on-light/15 pb-[var(--space-md)] [&>button:first-child]:-ml-[var(--space-sm)]"
      >
        <RegionFilterButton
          active={activeRegion === ALL}
          onClick={() => {
            setActiveRegion(ALL);
            setSelected(null);
          }}
        >
          All Regions
        </RegionFilterButton>
        {JURISDICTION_GROUPS.map((group) => (
          <RegionFilterButton
            key={group.id}
            active={activeRegion === group.id}
            onClick={() => {
              setActiveRegion(group.id);
              setSelected(null);
            }}
          >
            {group.region}
          </RegionFilterButton>
        ))}
      </div>

      {/* The map/panel split is deferred to 2xl (not lg) on purpose: the
          container is capped at max-w-7xl (1280px) regardless of viewport,
          so from md up to 2xl the map renders single-column at up to the
          full ~1216px content width instead of losing a third of that
          width to the side-by-side panel. That's real rendered pixels per
          node, not a cosmetic change — it's what actually widens node
          spacing across the entire tablet-landscape-to-laptop range the
          audit flagged, without touching NODE_DX/DY or REGION_ANCHORS. */}
      <div className="section-navy mt-[var(--space-xl)] grid overflow-hidden rounded-sm border border-white/10 2xl:grid-cols-[2fr_1fr]">
        <div className="relative aspect-[12/5] w-full">
          <svg
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <defs>
              <pattern id="jurisdiction-graticule" width="60" height="60" patternUnits="userSpaceOnUse">
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="var(--color-muted-on-dark)"
                  strokeWidth="0.5"
                  strokeOpacity="0.08"
                />
              </pattern>
            </defs>
            <rect width={VIEW_W} height={VIEW_H} fill="url(#jurisdiction-graticule)" />
            {arcs.map((d, i) => (
              <path
                key={i}
                d={d}
                fill="none"
                stroke="var(--color-steel-blue)"
                strokeWidth="1"
                strokeOpacity="0.25"
              />
            ))}
          </svg>

          {NODES.map((node) => {
            const dimmed = activeRegion !== ALL && node.regionId !== activeRegion;
            const isSelected = selected?.name === node.name;
            return (
              <button
                key={node.id}
                type="button"
                tabIndex={dimmed ? -1 : 0}
                aria-pressed={isSelected}
                aria-label={`${node.name} — ${node.region}`}
                onClick={() => setSelected({ name: node.name, region: node.region })}
                style={{
                  left: `${(node.x / VIEW_W) * 100}%`,
                  top: `${(node.y / VIEW_H) * 100}%`,
                }}
                // Invisible hit-area only — the padding never renders (no
                // background/border on the button itself), so the visible
                // dot stays exactly as restrained as before. Padding scales
                // up at wider breakpoints: deferring the map/panel split to
                // 2xl (above) means the map itself renders far larger from
                // md up, so there's real extra room to grow into at lg/xl
                // that didn't exist when the panel was eating a third of
                // the width from lg up. At the single narrowest edge (md,
                // ~768px, before the map has grown into that extra room)
                // node spacing is still tight enough that a much bigger box
                // would overlap neighbors — p-[11px] stays the floor there.
                // A filtered-out node also drops pointer-events, not just
                // opacity/tabIndex: with a region filter active, an
                // overlapping dimmed neighbor from another region can no
                // longer intercept a tap meant for the active region's
                // node, which is the concrete version of "region-filtered
                // interaction makes dense areas easier to select."
                className={`group absolute -translate-x-1/2 -translate-y-1/2 rounded-full p-[11px] transition-opacity duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel-blue lg:p-[14px] xl:p-[16px] ${
                  dimmed ? "pointer-events-none opacity-20" : "opacity-100"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`block h-2.5 w-2.5 rounded-full transition-all ${
                    isSelected
                      ? "scale-125 bg-steel-blue shadow-[0_0_10px_2px_var(--color-steel-blue)]"
                      : "bg-steel-blue/60 group-hover:scale-125 group-hover:bg-steel-blue group-hover:shadow-[0_0_10px_2px_var(--color-steel-blue)] group-focus-visible:scale-125 group-focus-visible:bg-steel-blue group-focus-visible:shadow-[0_0_10px_2px_var(--color-steel-blue)]"
                  }`}
                />
                <span
                  aria-hidden="true"
                  className="text-on-dark pointer-events-none absolute top-full left-1/2 z-10 mt-1 -translate-x-1/2 rounded-sm bg-ink-blue px-2 py-1 text-[length:var(--text-small)] whitespace-nowrap opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  {node.name}
                </span>
              </button>
            );
          })}
        </div>

        <div className="border-t border-white/10 2xl:border-t-0 2xl:border-l">
          <JurisdictionDetailPanel
            jurisdiction={selected}
            activeGroup={activeGroup}
            onSelect={setSelected}
          />
        </div>
      </div>

      <p className="text-muted-on-light mt-[var(--space-sm)] text-[length:var(--text-small)]">
        Illustrative regional coverage — not to geographic scale.
      </p>
    </div>
  );
}
