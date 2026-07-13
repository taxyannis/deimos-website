import {
  HOMEPAGE_SELF_IDENTIFICATION,
  POSITIONING_COPY,
  POSITIONING_PRINCIPLES,
} from "@/content/homepage";

// Two-column editorial layout at lg+ (stacked below it): the main statement
// paired with three short, structured restatements of ideas already in that
// statement (see homepage.ts's sourcing comment on POSITIONING_PRINCIPLES).
// Deep navy, continuous with the hero it follows — the homepage is one
// coherent capital-markets environment now, not alternating light/dark
// blocks; sections separate by hairline rules and tonal shifts within the
// navy family, never by flipping to a bright surface. Still no visible
// headline and no serif on body copy (One-Serif Rule intact).
export function Positioning() {
  return (
    <section className="ambient-navy border-t border-white/10 py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        {/* Visually hidden — this section deliberately has no visible title
            (HOMEPAGE_BLUEPRINT.md §18's restraint call), but still needs a
            heading so screen-reader heading-navigation doesn't skip it. */}
        <h2 className="sr-only">Institutional Positioning</h2>

        <div className="grid gap-[var(--space-xl)] lg:grid-cols-[3fr_2fr] lg:items-start">
          <div>
            {/* Lead statement stays visually primary through full opacity
                against the following paragraph's opacity-90 — the previous
                `font-medium` is inert under the Caslon Text body face (it
                ships 400/700 only), so hierarchy is carried by tone, not an
                unavailable 500 weight. */}
            <p className="text-on-dark max-w-[65ch] text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)]">
              {HOMEPAGE_SELF_IDENTIFICATION}
            </p>
            <p className="text-on-dark mt-[var(--space-sm)] max-w-[65ch] text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] opacity-90">
              {POSITIONING_COPY}
            </p>
          </div>

          <ul className="divide-y divide-white/10 border-t border-b border-white/10 lg:mt-[var(--space-3xs)]">
            {POSITIONING_PRINCIPLES.map((line) => (
              <li
                key={line}
                className="text-muted-on-dark py-[var(--space-sm)] text-[length:var(--text-label)] tracking-[var(--text-label--letter-spacing)]"
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
