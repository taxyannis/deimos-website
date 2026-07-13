"use client";

import { useState } from "react";
import { JURISDICTION_GROUPS } from "@/content/jurisdictions";
import { MAP_H, MAP_W } from "@/components/jurisdictions/WorldMap";
import { RegionFilterButton } from "@/components/jurisdictions/RegionFilterButton";
import {
  ALL,
  CoverageMapCanvas,
  type SelectedJurisdiction,
} from "@/components/jurisdictions/CoverageMapCanvas";
import { JurisdictionDetailPanel } from "@/components/jurisdictions/JurisdictionDetailPanel";

// Interactive coverage instrument — region filters, the SVG map canvas
// (land + markers in one coordinate system, see CoverageMapCanvas), an
// internal Back control, and the selected-entry detail panel. Dense clusters
// stay precise because the region filter dims out-of-region markers and the
// detail panel offers a full-precision picker list; the map is
// desktop/mouse-primary (md+), with the grouped list as the mobile fallback.
export function JurisdictionMap() {
  const [activeRegion, setActiveRegion] = useState<string>(ALL);
  const [selected, setSelected] = useState<SelectedJurisdiction | null>(null);

  const activeGroup =
    activeRegion === ALL
      ? null
      : (JURISDICTION_GROUPS.find((group) => group.id === activeRegion) ?? null);

  // Internal map-state navigation (not the browser Back button):
  //   selected entry -> region view -> All/world -> hidden.
  const canGoBack = selected !== null || activeRegion !== ALL;
  const backLabel = selected
    ? activeRegion !== ALL && activeGroup
      ? `Back to ${activeGroup.region}`
      : "Back to world view"
    : "Back to all regions";
  const handleBack = () => {
    if (selected) setSelected(null);
    else if (activeRegion !== ALL) setActiveRegion(ALL);
  };

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

      {/* The map is the primary instrument: it always takes the full content
          width (no side-by-side split that would shrink it into a compressed
          strip on wide screens), and the selected-entry readout stacks
          directly beneath it. The cell keeps the SVG's own aspect ratio so the
          drawing fills it edge to edge with no letterboxing. */}
      <div className="mt-[var(--space-xl)] overflow-hidden rounded-sm border border-white/10 bg-white/[0.02]">
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: `${MAP_W} / ${MAP_H}` }}
        >
          {/* Internal Back control — overlaid top-left so it never shifts the
              map layout; hidden in the All/world view. */}
          {canGoBack && (
            <button
              type="button"
              onClick={handleBack}
              className="text-on-dark absolute top-[var(--space-2xs)] left-[var(--space-2xs)] z-20 inline-flex items-center gap-[var(--space-2xs)] rounded-sm border border-white/10 bg-deep-navy/80 px-[var(--space-2xs)] py-[var(--space-3xs)] text-[length:var(--text-small)] tracking-[var(--text-small--letter-spacing)] backdrop-blur-sm transition-[color,border-color,transform] duration-150 ease-out hover:border-white/25 hover:text-steel-blue active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel-blue"
            >
              <span aria-hidden="true">&larr;</span>
              {backLabel}
            </button>
          )}

          <CoverageMapCanvas
            className="absolute inset-0 h-full w-full"
            activeRegion={activeRegion}
            selectedName={selected?.name ?? null}
            onSelect={setSelected}
          />
        </div>

        <div className="border-t border-white/10">
          <JurisdictionDetailPanel
            jurisdiction={selected}
            activeGroup={activeGroup}
            onSelect={setSelected}
          />
        </div>
      </div>
    </div>
  );
}
