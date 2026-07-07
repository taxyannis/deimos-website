import { WHAT_DEIMOS_IS } from "@/content/firm";

// The explicit negative-space line ("Deimos is explicitly not...") sits
// directly under the identity statement, not deferred to a footnote — it's
// the sentence doing the most work against a broker misread, so it travels
// with the claim it's qualifying (same "hedge travels with the claim" rule
// SITE_COMPLETION_PLAN.md applies to capital-access/jurisdictional copy).
export function WhatDeimosIs() {
  return (
    <section className="section-light py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <h2 className="text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] font-serif">
          {WHAT_DEIMOS_IS.heading}
        </h2>
        <p className="mt-[var(--space-md)] max-w-[70ch] text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)]">
          {WHAT_DEIMOS_IS.statement}
        </p>
        <p className="text-muted-on-light mt-[var(--space-md)] max-w-[65ch] text-[length:var(--text-body)]">
          {WHAT_DEIMOS_IS.notPositioning}
        </p>
      </div>
    </section>
  );
}
