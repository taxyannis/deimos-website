"use client";

import { useState } from "react";
import { ADVISORY_PILLARS } from "@/content/advisory";
import { DISCLAIMERS } from "@/content/site";

// Accordion, not cards — DESIGN.md's anti-card-grid stance. /services was
// merged back into this page (v1 scope decision: one advisory page, not two
// near-duplicate ones) — these 7 pillars are now the single, authoritative
// "Advisory Capabilities" surface, covering strategic framing and typical-
// situation detail together. No icons — each trigger is typography plus a
// plain +/− indicator, not a generic icon.
export function AdvisoryPillars() {
  const [openId, setOpenId] = useState<string | null>(ADVISORY_PILLARS[0].id);

  return (
    <section
      id="capabilities"
      className="section-light scroll-mt-24 py-[var(--space-section)]"
    >
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <h2 className="text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] font-serif">
          Advisory Capabilities
        </h2>

        <div className="divide-ink-on-light/15 mt-[var(--space-lg)] divide-y border-t border-b border-ink-on-light/15">
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
                  className="flex w-full items-center justify-between gap-[var(--space-md)] text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-blue-on-light"
                >
                  <span className="text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] font-serif">
                    {pillar.name}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-muted-on-light text-[length:var(--text-h3)] font-serif"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <p className="mt-[var(--space-2xs)] max-w-[65ch] text-[length:var(--text-body)] text-ink-on-light/85">
                  {pillar.definition}
                </p>

                {/* CSS grid height-transition trick (transitioning
                    grid-template-rows between 0fr/1fr) — a real smooth
                    reveal instead of the previous instant `hidden` toggle.
                    The sitewide reduced-motion reset in globals.css already
                    collapses this transition's duration for those users, so
                    no extra branching is needed here. */}
                <div
                  id={panelId}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="mt-[var(--space-sm)] max-w-[65ch] border-l border-ink-on-light/15 pl-[var(--space-sm)]">
                      <p className="text-muted-on-light text-[length:var(--text-label)] tracking-[var(--text-label--letter-spacing)]">
                        Typical situations
                      </p>
                      <p className="mt-[var(--space-2xs)] text-[length:var(--text-body)] text-ink-on-light/85">
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
        <p className="text-muted-on-light mt-[var(--space-lg)] max-w-[65ch] text-[length:var(--text-small)]">
          {DISCLAIMERS.capitalAccess}
        </p>
      </div>
    </section>
  );
}
