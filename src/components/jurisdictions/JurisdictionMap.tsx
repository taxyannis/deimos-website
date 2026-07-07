"use client";

import { useState } from "react";
import { JURISDICTION_GROUPS } from "@/content/jurisdictions";
import { RegionFilterButton } from "@/components/jurisdictions/RegionFilterButton";
import {
  JURISDICTION_COORDS,
  MAP_H,
  MAP_W,
  WorldMapPaths,
  project,
} from "@/components/jurisdictions/WorldMap";
import {
  JurisdictionDetailPanel,
  type SelectedJurisdiction,
} from "@/components/jurisdictions/JurisdictionDetailPanel";

const ALL = "all";

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

// One node per jurisdiction at its projected capital-city position on the
// world silhouette. DOM/tab order is sorted by projected x so keyboard
// traversal sweeps the map left-to-right, matching what a sighted user
// sees, instead of following the content file's region declaration order.
const NODES: Node[] = JURISDICTION_GROUPS.flatMap((group) =>
  group.jurisdictions.map((name) => {
    const [lon, lat] = JURISDICTION_COORDS[name];
    const [x, y] = project(lon, lat);
    return { id: slugify(name), name, region: group.region, regionId: group.id, x, y };
  }),
).sort((a, b) => a.x - b.x);

// Premium interactive coverage instrument — a stylized world-map silhouette
// (see WorldMap.tsx) with jurisdiction nodes as real HTML buttons overlaid
// on the SVG backdrop (not interactive SVG elements) for robust
// keyboard/focus behavior. Dense clusters (the Gulf, Western Europe, the
// Caribbean) are physically close on any honest world map; precise
// selection there is guaranteed by the region-filtered picker list in the
// detail panel, not by inflating node hit areas until they overlap. All
// motion is plain CSS transitions, so the sitewide reduced-motion reset in
// globals.css collapses it with no extra branching.
export function JurisdictionMap() {
  const [activeRegion, setActiveRegion] = useState<string>(ALL);
  const [selected, setSelected] = useState<SelectedJurisdiction | null>(null);

  const activeGroup =
    activeRegion === ALL
      ? null
      : (JURISDICTION_GROUPS.find((group) => group.id === activeRegion) ?? null);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter coverage by region"
        className="flex flex-wrap gap-y-[var(--space-sm)] border-b border-white/15 pb-[var(--space-md)] [&>button:first-child]:-ml-[var(--space-sm)]"
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

      {/* Map/panel split defers to 2xl so the map keeps the full content
          width across the tablet-to-laptop range, where node spacing needs
          every rendered pixel it can get. */}
      <div className="mt-[var(--space-xl)] grid overflow-hidden rounded-sm border border-white/10 bg-white/[0.02] 2xl:grid-cols-[2fr_1fr]">
        <div className="relative w-full" style={{ aspectRatio: `${MAP_W} / ${MAP_H}` }}>
          <svg
            viewBox={`0 0 ${MAP_W} ${MAP_H}`}
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <defs>
              <pattern id="coverage-graticule" width="50" height="50" patternUnits="userSpaceOnUse">
                <path
                  d="M 50 0 L 0 0 0 50"
                  fill="none"
                  stroke="var(--color-muted-on-dark)"
                  strokeWidth="0.5"
                  strokeOpacity="0.07"
                />
              </pattern>
            </defs>
            <rect width={MAP_W} height={MAP_H} fill="url(#coverage-graticule)" />
            <WorldMapPaths />
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
                  left: `${(node.x / MAP_W) * 100}%`,
                  top: `${(node.y / MAP_H) * 100}%`,
                }}
                // Invisible hit-area only — padding never renders, the
                // visible dot stays small and precise. Filtered-out nodes
                // drop pointer-events as well as opacity/tabIndex so a
                // dimmed neighbor from another region can't intercept a
                // tap meant for the active region's node.
                className={`group absolute -translate-x-1/2 -translate-y-1/2 rounded-full p-[9px] transition-opacity duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel-blue lg:p-[11px] ${
                  dimmed ? "pointer-events-none opacity-15" : "opacity-100"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`block h-[7px] w-[7px] rounded-full transition-all ${
                    isSelected
                      ? "scale-125 bg-steel-blue shadow-[0_0_9px_2px_var(--color-steel-blue)]"
                      : "bg-steel-blue/70 group-hover:scale-125 group-hover:bg-steel-blue group-hover:shadow-[0_0_9px_2px_var(--color-steel-blue)] group-focus-visible:scale-125 group-focus-visible:bg-steel-blue group-focus-visible:shadow-[0_0_9px_2px_var(--color-steel-blue)]"
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

      <p className="text-muted-on-dark mt-[var(--space-sm)] text-[length:var(--text-small)]">
        Illustrative coverage map — simplified geography, shown for orientation only.
      </p>
    </div>
  );
}
