import {
  HOMEPAGE_SELF_IDENTIFICATION,
  POSITIONING_COPY,
  POSITIONING_PRINCIPLES,
} from "@/content/homepage";

// Two-column editorial layout at lg+ (stacked below it): the main statement
// paired with three short, structured restatements of ideas already in that
// statement (see homepage.ts's sourcing comment on POSITIONING_PRINCIPLES).
// Still no visible headline and no serif treatment on the body copy —
// DESIGN.md's One-Serif Rule and this section's original restraint call
// both stay intact; the added structure comes from composition (a second
// column, thin rule dividers) not from decoration, cards, or icons.
export function Positioning() {
  return (
    <section className="section-light py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        {/* Visually hidden — this section deliberately has no visible title
            (HOMEPAGE_BLUEPRINT.md §18's restraint call), but still needs a
            heading so screen-reader heading-navigation doesn't skip it. */}
        <h2 className="sr-only">Institutional Positioning</h2>

        <div className="grid gap-[var(--space-xl)] lg:grid-cols-[3fr_2fr] lg:items-start">
          <div>
            <p className="max-w-[65ch] text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] font-medium">
              {HOMEPAGE_SELF_IDENTIFICATION}
            </p>
            <p className="mt-[var(--space-sm)] max-w-[65ch] text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)]">
              {POSITIONING_COPY}
            </p>
          </div>

          <ul className="divide-y divide-ink-on-light/15 border-t border-b border-ink-on-light/15 lg:mt-[var(--space-3xs)]">
            {POSITIONING_PRINCIPLES.map((line) => (
              <li
                key={line}
                className="py-[var(--space-sm)] text-[length:var(--text-label)] tracking-[var(--text-label--letter-spacing)] text-ink-on-light/85"
              >
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
