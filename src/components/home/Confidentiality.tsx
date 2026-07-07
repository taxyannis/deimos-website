import { CONFIDENTIALITY_COPY, CONFIDENTIALITY_PRINCIPLES, PROCESS_STEPS } from "@/content/homepage";

// Slate-navy: a deliberate tonal pivot, distinct from the off-white sections
// above and the deep-navy jurisdiction section below (HOMEPAGE_BLUEPRINT.md
// §18). Still the quietest, most typographic section on the page — no
// imagery, no cards, no icons. Now three typographic tiers instead of one:
// statement -> principles (middot-separated, parallel qualities, no
// implied order) -> process (arrow-connected, a real sequence). The middot
// vs. arrow distinction matters: arrows are reserved sitewide for genuine
// sequences, and using them for the principles list would misleadingly
// imply an order these five qualities don't have.
export function Confidentiality() {
  return (
    <section className="section-slate py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        {/* Visually hidden — quiet, title-less by design, but still exposed
            to screen-reader heading navigation. */}
        <h2 className="sr-only">Confidentiality &amp; Mandate Orientation</h2>
        <p className="max-w-[65ch] text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)]">
          {CONFIDENTIALITY_COPY}
        </p>

        <ul className="mt-[var(--space-lg)] flex flex-wrap items-center gap-y-[var(--space-2xs)] text-[length:var(--text-label)] tracking-[var(--text-label--letter-spacing)] text-muted-on-slate">
          {CONFIDENTIALITY_PRINCIPLES.map((principle, index) => (
            <li key={principle} className="flex items-center">
              <span>{principle}</span>
              {index < CONFIDENTIALITY_PRINCIPLES.length - 1 && (
                <span aria-hidden="true" className="mx-[var(--space-sm)] text-muted-on-slate/60">
                  &middot;
                </span>
              )}
            </li>
          ))}
        </ul>

        <ol className="mt-[var(--space-xl)] flex flex-col flex-wrap gap-[var(--space-sm)] border-t border-white/10 pt-[var(--space-lg)] sm:flex-row sm:items-center sm:gap-0">
          {PROCESS_STEPS.map((step, index) => (
            <li key={step} className="flex items-center">
              <span className="text-[length:var(--text-label)] tracking-[var(--text-label--letter-spacing)]">
                {step}
              </span>
              {index < PROCESS_STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="text-muted-on-slate mx-[var(--space-sm)] hidden sm:inline"
                >
                  &rarr;
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
