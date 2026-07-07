import { MANDATE_ORIENTATION, PROCESS_STEPS } from "@/content/advisory";

// Slate-navy tonal pivot, matching the homepage Confidentiality section's
// register. Unlike the homepage's label-only compression, this dedicated
// advisory page has room for the full process description alongside the
// step labels — connected by thin rules/arrows, never numbered circles.
export function MandateProcess() {
  return (
    <section className="section-slate py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <h2 className="text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] font-serif">
          {MANDATE_ORIENTATION.heading}
        </h2>

        <p className="mt-[var(--space-md)] max-w-[65ch] text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)]">
          {MANDATE_ORIENTATION.statement}
        </p>

        <p className="mt-[var(--space-md)] max-w-[65ch] text-[length:var(--text-body)] opacity-90">
          {MANDATE_ORIENTATION.processDescription}
        </p>

        <ol className="mt-[var(--space-xl)] flex flex-col flex-wrap gap-[var(--space-sm)] sm:flex-row sm:items-center sm:gap-0">
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
