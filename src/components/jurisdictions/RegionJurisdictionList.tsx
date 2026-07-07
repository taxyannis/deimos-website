"use client";

import { useState } from "react";
import { JURISDICTION_GROUPS } from "@/content/jurisdictions";
import { RegionFilterButton } from "@/components/jurisdictions/RegionFilterButton";

const ALL = "all";

// Toggle-button region filter over a grouped list — satisfies "region
// filters or grouped region sections" with one control rather than forcing
// a choice between the two: default view ("All Regions") already shows the
// full grouped list, and picking a region narrows it. Accordion pattern was
// deliberately not reused here (unlike AdvisoryPillars) — jurisdictions
// within a region are a flat reference list, not content worth
// collapsing/expanding one at a time.
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
        aria-label="Filter jurisdictions by region"
        className="flex flex-wrap gap-y-[var(--space-sm)] border-b border-ink-on-light/15 pb-[var(--space-md)] [&>button:first-child]:-ml-[var(--space-sm)]"
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

      <div className="divide-ink-on-light/15 mt-[var(--space-lg)] divide-y border-b border-ink-on-light/15">
        {visibleGroups.map((group) => (
          <div key={group.id} className="py-[var(--space-md)]">
            <h3 className="text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] font-serif">
              {group.region}
            </h3>
            <ul className="mt-[var(--space-2xs)] flex flex-wrap gap-x-[var(--space-md)] gap-y-[var(--space-2xs)]">
              {group.jurisdictions.map((jurisdiction) => (
                <li
                  key={jurisdiction}
                  className="text-[length:var(--text-body)] text-ink-on-light/85"
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
