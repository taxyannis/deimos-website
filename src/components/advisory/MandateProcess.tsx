import { MANDATE_ORIENTATION, PROCESS_STEPS } from "@/content/advisory";

// Same process-rail treatment as the homepage's Mandate Discipline section
// (Confidentiality.tsx) — the two surfaces showing this sequence share one
// visual language: a hairline rail with a station dot per step, restrained
// hover sharpening, no arrows, no numbered circles. This dedicated page
// keeps the full process description the homepage compresses away.
export function MandateProcess() {
  return (
    <section className="ambient-navy border-t border-white/10 py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <h2 className="text-on-dark text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] font-serif">
          {MANDATE_ORIENTATION.heading}
        </h2>

        {/* All three paragraphs share one type treatment (size, line height,
            opacity) so the section reads as a single, level statement. */}
        {MANDATE_ORIENTATION.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={`text-on-dark ${index === 0 ? "mt-[var(--space-md)]" : "mt-[var(--space-sm)]"} max-w-[65ch] text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] opacity-90`}
          >
            {paragraph}
          </p>
        ))}

        {/* See Confidentiality.tsx: the animated single-line rail only holds
            on the lg one-row layout; below lg each cell carries its own
            hairline so wrapped rows' station dots don't float. */}
        <div className="relative mt-[var(--space-2xl)]">
          <span aria-hidden="true" className="rail-line absolute top-0 left-0 hidden h-px w-full bg-white/15 lg:block" />
          <ol className="grid grid-cols-2 gap-x-[var(--space-lg)] gap-y-[var(--space-lg)] sm:grid-cols-3 lg:grid-cols-6">
            {PROCESS_STEPS.map((step) => (
              <li key={step} className="group relative border-t border-white/15 pt-[var(--space-md)] lg:border-t-0">
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 h-[7px] w-[7px] -translate-y-1/2 rounded-full bg-steel-blue/60 transition-colors group-hover:bg-steel-blue"
                />
                <span className="text-muted-on-dark block text-[length:var(--text-label)] tracking-[var(--text-label--letter-spacing)] transition-colors group-hover:text-on-dark">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
