"use client";

import { useState } from "react";
import { FIRM_PRINCIPLES, FIRM_PRINCIPLES_HEADING } from "@/content/firm";

// The /firm page's single interactive section. Each row always shows the
// principle name and a one-line summary; the "+" expands a concise explanation
// and becomes "−". The whole row is the toggle (a native <button>, so
// Enter/Space and aria-expanded/aria-controls behave correctly), and the
// reveal uses the same grid-rows 0fr/1fr height transition as the Advisory
// accordion — collapsing to an instant swap under the global reduced-motion
// reset. The overflow-hidden element that clips the panel stays padding-free
// (overflow clips at the padding edge, so padding there would leave a strip of
// the detail visible when closed); breathing room lives on the inner text.
// No cards, no icons — typography, a hairline rule and a plain +/− only.
export function FirmPrinciples() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="ambient-navy border-t border-white/10 py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <h2 className="text-on-dark text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] font-serif">
          {FIRM_PRINCIPLES_HEADING}
        </h2>

        <div className="mt-[var(--space-lg)] divide-y divide-white/10 border-t border-b border-white/10">
          {FIRM_PRINCIPLES.map((principle) => {
            const isOpen = openId === principle.id;
            const panelId = `firm-principle-${principle.id}`;
            return (
              <div key={principle.id}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenId(isOpen ? null : principle.id)}
                  className="group flex w-full cursor-pointer origin-left items-start justify-between gap-[var(--space-md)] py-[var(--space-md)] text-left select-none transition-transform duration-150 ease-out active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-blue"
                >
                  <span className="flex-1">
                    <span
                      className={`block text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] font-serif transition-colors group-hover:text-steel-blue ${
                        isOpen ? "text-steel-blue" : "text-on-dark"
                      }`}
                    >
                      {principle.name}
                    </span>
                    <span className="text-muted-on-dark mt-[var(--space-3xs)] block max-w-[60ch] text-[length:var(--text-body)]">
                      {principle.summary}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-muted-on-dark text-[length:var(--text-h3)] font-serif leading-none transition-colors group-hover:text-steel-blue"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  id={panelId}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="max-w-[65ch] border-l border-white/15 pt-[var(--space-2xs)] pb-[var(--space-md)] pl-[var(--space-md)] text-[length:var(--text-body)] text-ink-on-dark/85">
                      {principle.detail}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
