import {
  HOMEPAGE_SELF_IDENTIFICATION,
  POSITIONING_COPY,
  POSITIONING_PRINCIPLES,
} from "@/content/homepage";
import { SectionLabel } from "@/components/ui/SectionLabel";

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
        <h2 className="sr-only">Institutional Positioning</h2>

        <SectionLabel index="01" className="mb-[var(--space-xl)]">
          Positioning
        </SectionLabel>

        <div className="grid gap-[var(--space-xl)] lg:grid-cols-[3fr_2fr] lg:items-start lg:gap-[var(--space-3xl)]">
          <div>
            {/* Lead statement raised to display-adjacent serif so the
                positioning thesis carries real weight at the top of the page,
                with the second paragraph stepping down to sans body — a clear
                two-tier editorial hierarchy rather than two equal paragraphs. */}
            <p className="text-on-dark max-w-[20ch] text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] font-serif text-balance">
              {HOMEPAGE_SELF_IDENTIFICATION}
            </p>
            <p className="text-on-dark mt-[var(--space-lg)] max-w-[62ch] text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] opacity-80">
              {POSITIONING_COPY}
            </p>
          </div>

          {/* Operating framework — the four disciplines as a numbered register
              with a quiet caption above, rather than a loose label list. The
              index + hairline rows read as a standing frame, adding structure
              and density to the right column. */}
          <div className="lg:border-l lg:border-white/10 lg:pl-[var(--space-2xl)]">
            <p className="eyebrow text-muted-on-dark mb-[var(--space-md)]">Operating Framework</p>
            <ul className="border-t border-white/10">
              {POSITIONING_PRINCIPLES.map((line, index) => (
                <li
                  key={line}
                  className="flex items-baseline gap-[var(--space-md)] border-b border-white/10 py-[var(--space-sm)]"
                >
                  <span aria-hidden="true" className="metric-figures text-steel-blue w-[2ch] shrink-0 text-[length:var(--text-small)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-on-dark text-[length:var(--text-body)]">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
