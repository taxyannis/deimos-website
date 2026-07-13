import {
  ADVISORY_DISCIPLINES,
  ADVISORY_DISCIPLINES_HEADING,
  WHAT_WE_ADVISE_ON,
} from "@/content/advisory";

// Deep navy, continuous with the page header — /advisory reads as one
// unified environment. Two-column at lg (same editorial treatment as the
// homepage positioning block): the statement paired with the four Advisory
// Disciplines as a labelled hairline column, giving the intro structure and
// density without cards or panels, and marking the disciplines as distinct
// from the six Advisory Capabilities accordion below.
export function WhatWeAdviseOn() {
  return (
    <section className="section-navy border-t border-white/10 py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <h2 className="text-on-dark text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] font-serif">
          {WHAT_WE_ADVISE_ON.heading}
        </h2>

        <div className="mt-[var(--space-md)] grid gap-[var(--space-xl)] lg:grid-cols-[3fr_2fr] lg:items-start">
          <p className="text-on-dark max-w-[65ch] text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] opacity-90">
            {WHAT_WE_ADVISE_ON.body}
          </p>

          {/* Pulled up slightly (-16px at lg) so the index's top rule
              bridges toward the heading zone and the column reads as
              anchored to the left body copy rather than floating just
              below its first line. lg-scoped: the stacked mobile/tablet
              flow keeps its full gap. */}
          <div className="lg:-mt-[var(--space-sm)]">
            <p className="text-muted-on-dark text-[length:var(--text-label)] tracking-[var(--text-label--letter-spacing)]">
              {ADVISORY_DISCIPLINES_HEADING}
            </p>
            <ul className="mt-[var(--space-xs)] divide-y divide-white/10 border-t border-b border-white/10">
              {ADVISORY_DISCIPLINES.map(({ label, note }) => (
                <li key={label} className="py-[var(--space-sm)]">
                  <p className="text-on-dark text-[length:var(--text-label)] tracking-[var(--text-label--letter-spacing)]">
                    {label}
                  </p>
                  <p className="text-muted-on-dark mt-[var(--space-3xs)] text-[length:var(--text-small)] leading-[var(--text-small--line-height)]">
                    {note}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
