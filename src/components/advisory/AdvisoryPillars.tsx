"use client";

import { useState } from "react";
import { ADVISORY_PILLARS } from "@/content/advisory";
import { DISCLAIMERS } from "@/content/site";

// Accordion, not cards — DESIGN.md's anti-card-grid stance. These 7 pillars
// are the single, authoritative "Advisory Capabilities" surface (the old
// /services page was merged back in here). No icons — each trigger is
// typography plus a plain +/− indicator. Interaction states: the whole row
// is the trigger, hover tints the name toward steel blue, the open row's
// name holds steel blue as its active state, and the detail panel reveals
// via the grid-rows 0fr/1fr height transition (collapses under the global
// reduced-motion reset). Ink-blue tonal panel against the navy page base.
export function AdvisoryPillars() {
  const [openId, setOpenId] = useState<string | null>(ADVISORY_PILLARS[0].id);

  return (
    <section
      id="capabilities"
      className="section-dark scroll-mt-24 border-t border-white/10 py-[var(--space-section)]"
    >
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <h2 className="text-on-dark text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] font-serif">
          Advisory Capabilities
        </h2>

        <div className="mt-[var(--space-lg)] divide-y divide-white/10 border-t border-b border-white/10">
          {ADVISORY_PILLARS.map((pillar) => {
            const isOpen = openId === pillar.id;
            const panelId = `advisory-panel-${pillar.id}`;
            return (
              <div key={pillar.id} className="py-[var(--space-md)]">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenId(isOpen ? null : pillar.id)}
                  className="group flex w-full items-center justify-between gap-[var(--space-md)] text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-blue"
                >
                  <span
                    className={`text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] font-serif transition-colors group-hover:text-steel-blue ${
                      isOpen ? "text-steel-blue" : "text-on-dark"
                    }`}
                  >
                    {pillar.name}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-muted-on-dark text-[length:var(--text-h3)] font-serif transition-colors group-hover:text-steel-blue"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <p className="text-muted-on-dark mt-[var(--space-2xs)] max-w-[65ch] text-[length:var(--text-body)]">
                  {pillar.definition}
                </p>

                {/* CSS grid height-transition (grid-template-rows 0fr/1fr) —
                    a real smooth reveal; the sitewide reduced-motion reset
                    collapses its duration for those users. */}
                <div
                  id={panelId}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="mt-[var(--space-sm)] max-w-[65ch] border-l border-white/15 pl-[var(--space-sm)]">
                      <p className="text-muted-on-dark text-[length:var(--text-label)] tracking-[var(--text-label--letter-spacing)]">
                        Typical situations
                      </p>
                      <p className="text-on-dark mt-[var(--space-2xs)] text-[length:var(--text-body)] opacity-90">
                        {pillar.typicalSituations}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Capital access disclaimer travels with the claim: the first
            pillar above is Capital Access & Private Capital Formation, so
            the hedge sits here, not only in the sitewide footer. */}
        <p className="text-muted-on-dark mt-[var(--space-lg)] max-w-[65ch] text-[length:var(--text-small)]">
          {DISCLAIMERS.capitalAccess}
        </p>
      </div>
    </section>
  );
}
