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
    <section className="section-navy border-t border-white/10 pt-[var(--space-xl)] pb-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        {/* Heading and statement live together in the left column so the left
            side (eyebrow + serif heading + body) stands to a similar height as
            the four-row disciplines index on the right — the two registers
            balance instead of leaving a tall void beneath a short paragraph.
            The gap is widened at lg so the columns read as deliberately
            separated. */}
        <div className="grid gap-[var(--space-xl)] lg:grid-cols-[3fr_2fr] lg:items-start lg:gap-[var(--space-3xl)]">
          <div>
            <p className="eyebrow text-muted-on-dark mb-[var(--space-md)]">Overview</p>
            <h2 className="text-on-dark max-w-[20ch] text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] font-serif">
              {WHAT_WE_ADVISE_ON.heading}
            </h2>
            <p className="text-on-dark mt-[var(--space-lg)] max-w-[60ch] text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] opacity-90">
              {WHAT_WE_ADVISE_ON.body}
            </p>
          </div>

          {/* Nudged down at lg to align the disciplines label with the serif
              heading zone opposite it, rather than the eyebrow above. */}
          <div className="lg:border-l lg:border-white/10 lg:pt-[var(--space-2xl)] lg:pl-[var(--space-2xl)]">
            <p className="eyebrow text-muted-on-dark">
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
