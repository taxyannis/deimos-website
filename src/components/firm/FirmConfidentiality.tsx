import { FIRM_CONFIDENTIALITY } from "@/content/firm";

// Visible heading here, unlike the homepage's title-less treatment
// (MASTER_WEBSITE_BRIEF.md §14: "place prominently on Firm, not buried").
// Principles are separated by a middle dot, not an arrow — parallel
// qualities, not a sequence; the arrow/rail treatment is reserved sitewide
// for the genuine process steps.
export function FirmConfidentiality() {
  return (
    <section className="section-navy border-t border-white/10 py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <h2 className="text-on-dark text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] font-serif">
          {FIRM_CONFIDENTIALITY.heading}
        </h2>
        <p className="text-on-dark mt-[var(--space-md)] max-w-[65ch] text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] opacity-90">
          {FIRM_CONFIDENTIALITY.statement}
        </p>

        <ul className="mt-[var(--space-xl)] flex flex-wrap items-center gap-y-[var(--space-2xs)]">
          {FIRM_CONFIDENTIALITY.principles.map((principle, index) => (
            <li key={principle} className="flex items-center">
              <span className="text-on-dark text-[length:var(--text-label)] tracking-[var(--text-label--letter-spacing)]">
                {principle}
              </span>
              {index < FIRM_CONFIDENTIALITY.principles.length - 1 && (
                <span aria-hidden="true" className="mx-[var(--space-sm)] text-white/30">
                  &middot;
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
