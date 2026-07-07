"use client";

import { useState } from "react";
import { JURISDICTION_GROUPS } from "@/content/jurisdictions";
import { RegionFilterButton } from "@/components/jurisdictions/RegionFilterButton";

const ALL = "all";

// Toggle-button region filter over a grouped list — the mobile fallback for
// the interactive world map. Default view ("All Regions") already shows the
// full grouped list, and picking a region narrows it. Accordion pattern was
// deliberately not reused here — jurisdictions within a region are a flat
// reference list, not content worth collapsing one item at a time.
export function RegionJurisdictionList() {
  const [activeRegion, setActiveRegion] = useState<string>(ALL);

  const visibleGroups =
    activeRegion === ALL
      ? JURISDICTION_GROUPS
      : JURISDICTION_GROUPS.filter((group) => group.id === activeRegion);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter coverage by region"
        className="flex flex-wrap gap-y-[var(--space-sm)] border-b border-white/15 pb-[var(--space-md)] [&>button:first-child]:-ml-[var(--space-sm)]"
      >
        <RegionFilterButton active={activeRegion === ALL} onClick={() => setActiveRegion(ALL)}>
          All Regions
        </RegionFilterButton>
        {JURISDICTION_GROUPS.map((group) => (
          <RegionFilterButton
            key={group.id}
            active={activeRegion === group.id}
            onClick={() => setActiveRegion(group.id)}
          >
            {group.region}
          </RegionFilterButton>
        ))}
      </div>

      <div className="mt-[var(--space-lg)] divide-y divide-white/10 border-b border-white/10">
        {visibleGroups.map((group) => (
          <div key={group.id} className="py-[var(--space-md)]">
            <h3 className="text-on-dark text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] font-serif">
              {group.region}
            </h3>
            <ul className="mt-[var(--space-2xs)] flex flex-wrap gap-x-[var(--space-md)] gap-y-[var(--space-2xs)]">
              {group.jurisdictions.map((jurisdiction) => (
                <li
                  key={jurisdiction}
                  className="text-muted-on-dark text-[length:var(--text-body)]"
                >
                  {jurisdiction}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
