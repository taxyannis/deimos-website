import { SELECTIVE_ENGAGEMENT } from "@/content/firm";

// Distinct from the preceding Confidentiality & Mandate Orientation
// section: that section establishes posture/identity, this one describes
// the actual selection and progression mechanics — so the criteria list
// (drawn from the qualifying clause of that section's own statement) reads
// as mechanics, not a restatement, even though both sections sit back to
// back on the page. Ink-blue tonal panel closes the page's navy/ink rhythm.
export function SelectiveEngagementModel() {
  return (
    <section className="section-dark border-t border-white/10 py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <h2 className="text-on-dark text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] font-serif">
          {SELECTIVE_ENGAGEMENT.heading}
        </h2>
        <p className="text-on-dark mt-[var(--space-md)] max-w-[65ch] text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] opacity-90">
          {SELECTIVE_ENGAGEMENT.statement}
        </p>

        <ul className="text-muted-on-dark mt-[var(--space-lg)] flex flex-wrap items-center gap-y-[var(--space-2xs)] text-[length:var(--text-label)] tracking-[var(--text-label--letter-spacing)]">
          {SELECTIVE_ENGAGEMENT.criteria.map((criterion, index) => (
            <li key={criterion} className="flex items-center">
              <span>{criterion}</span>
              {index < SELECTIVE_ENGAGEMENT.criteria.length - 1 && (
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
