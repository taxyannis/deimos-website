"use client";

import { useState } from "react";
import { ADVISORY_PILLARS } from "@/content/advisory";
import { DISCLAIMERS } from "@/content/site";

// Accordion, not cards — DESIGN.md's anti-card-grid stance. These six
// capability buckets are the single, authoritative "Advisory Capabilities"
// surface (the old /services page was merged back in here). No icons — each trigger is
// typography plus a plain +/− indicator. Interaction states: the whole row
// is the trigger, hover tints the name toward steel blue, the open row's
// name holds steel blue as its active state, and the detail panel reveals
// via the grid-rows 0fr/1fr height transition (collapses under the global
// reduced-motion reset). Ink-blue tonal panel against the navy page base.
// All rows load closed; each panel toggles independently via click or
// keyboard (aria-expanded + button semantics), and the whole row from title
// to +/− indicator is a single <button>, so the full width is clickable.
export function AdvisoryPillars() {
  const [openId, setOpenId] = useState<string | null>(null);

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
            // The button carries the full row padding (top and bottom), so the
            // entire visible header — full width out to the +/− indicator and
            // the whole row height — is one contiguous tap target with no dead
            // strip. Bottom breathing room for the revealed panel lives inside
            // the collapsible region instead, so it exists only when open.
            return (
              <div key={pillar.id}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenId(isOpen ? null : pillar.id)}
                  className="group flex w-full cursor-pointer origin-left items-center justify-between gap-[var(--space-md)] py-[var(--space-md)] text-left select-none transition-transform duration-150 ease-out active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-blue"
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

                {/* CSS grid height-transition (grid-template-rows 0fr/1fr) —
                    a real smooth reveal; the sitewide reduced-motion reset
                    collapses its duration for those users. Both the
                    definition and the "typical situations" gloss live inside
                    this collapsed region, so a closed row shows only the name
                    and the "+" — the indicator is honest (+ = nothing shown
                    yet, − = the context text is revealed).
                    The overflow-hidden element itself must stay padding-free:
                    overflow clips at the PADDING edge, so any padding here
                    would keep a strip of the first content line visible even
                    at grid-rows-[0fr]. All breathing room lives one level
                    deeper, on the inner wrapper. */}
                <div
                  id={panelId}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="pt-[var(--space-2xs)] pb-[var(--space-lg)]">
                      <p className="max-w-[65ch] text-[length:var(--text-body)] text-ink-on-dark/85">
                        {pillar.definition}
                      </p>
                      <div className="mt-[var(--space-md)] max-w-[65ch] border-l border-white/15 pl-[var(--space-md)]">
                        <p className="text-muted-on-dark text-[length:var(--text-label)] tracking-[var(--text-label--letter-spacing)]">
                          Typical situations
                        </p>
                        <p className="mt-[var(--space-2xs)] text-[length:var(--text-body)] text-ink-on-dark/85">
                          {pillar.typicalSituations}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Capital access disclaimer travels with the claim: Capital Formation
            is one of the capabilities above, so the hedge sits here, not only
            in the sitewide footer. */}
        <p className="text-muted-on-dark mt-[var(--space-lg)] max-w-[65ch] text-[length:var(--text-small)]">
          {DISCLAIMERS.capitalAccess}
        </p>
      </div>
    </section>
  );
}
