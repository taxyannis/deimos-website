import { FIRM_CONFIDENTIALITY } from "@/content/firm";

// Slate-navy tonal pivot, matching the homepage Confidentiality section's
// and /advisory's MandateProcess register. Unlike those two, this is a
// visible heading (MASTER_WEBSITE_BRIEF.md §14: "place prominently on
// Firm, not buried" — the homepage version is deliberately title-less).
// Principles are separated by a middle dot, not an arrow — these are
// parallel qualities, not a sequence, and the arrow glyph is reserved
// sitewide for genuine process steps (PROCESS_STEPS on /advisory and the
// homepage) so it doesn't get read as implying an order here.
export function FirmConfidentiality() {
  return (
    <section className="section-slate py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <h2 className="text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] font-serif">
          {FIRM_CONFIDENTIALITY.heading}
        </h2>
        <p className="mt-[var(--space-md)] max-w-[65ch] text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)]">
          {FIRM_CONFIDENTIALITY.statement}
        </p>

        <ul className="mt-[var(--space-xl)] flex flex-wrap items-center gap-y-[var(--space-2xs)]">
          {FIRM_CONFIDENTIALITY.principles.map((principle, index) => (
            <li key={principle} className="flex items-center">
              <span className="text-[length:var(--text-label)] tracking-[var(--text-label--letter-spacing)]">
                {principle}
              </span>
              {index < FIRM_CONFIDENTIALITY.principles.length - 1 && (
                <span aria-hidden="true" className="text-muted-on-slate mx-[var(--space-sm)]">
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
