import {
  CONFIDENTIALITY_COPY,
  CONFIDENTIALITY_PRINCIPLES,
  PROCESS_STEPS,
} from "@/content/homepage";

// "Mandate Discipline" — the former grey confidentiality box, rebuilt as a
// premium process/control section inside the dark homepage system rather
// than a disconnected slate panel. Three typographic tiers, all editorial
// (no cards, no icons, no panel background): statement -> principles
// (middot-separated, parallel qualities with no implied order) -> the
// process RAIL: a single hairline with a station dot above each step,
// which is what actually conveys "controlled sequence" — the arrow glyphs
// the old version used are retired here because the rail itself now does
// that job. The heading reuses the approved principle label "Mandate
// Discipline" (FIRM_CONFIDENTIALITY.principles) — no new claim. Hover on a
// step is a restrained focus detail (dot + label sharpen), not decoration.
export function Confidentiality() {
  // The section heading IS "Mandate Discipline," so that label is filtered
  // out of the principles row below — showing it twice within a few lines
  // read as an awkward near-phrase ("...Mandate Discipline · Institutional
  // Process Control") stacked under the same words. The full five-label
  // list still appears intact on /firm, where the heading differs.
  const principles = CONFIDENTIALITY_PRINCIPLES.filter((p) => p !== "Mandate Discipline");

  return (
    <section className="ambient-navy border-t border-white/10 py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <p className="eyebrow text-muted-on-dark mb-[var(--space-lg)]">Engagement</p>
        <h2 className="text-on-dark text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] font-serif">
          Mandate Discipline
        </h2>

        <p className="text-on-dark mt-[var(--space-md)] max-w-[65ch] text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] opacity-90">
          {CONFIDENTIALITY_COPY}
        </p>

        <ul className="text-muted-on-dark mt-[var(--space-lg)] flex flex-wrap items-center gap-y-[var(--space-2xs)] text-[length:var(--text-label)] tracking-[var(--text-label--letter-spacing)]">
          {principles.map((principle, index) => (
            <li key={principle} className="flex items-center">
              <span>{principle}</span>
              {index < principles.length - 1 && (
                <span aria-hidden="true" className="mx-[var(--space-sm)] text-white/30">
                  &middot;
                </span>
              )}
            </li>
          ))}
        </ul>

        {/* Process rail — a hairline that draws in from the left as the
            section enters view (rail-line, globals.css; static full-width
            under reduced motion or without scroll-timeline support); each
            step's dot sits centered on it. A real sequence, so an ordered
            list; order is carried by the rail geometry, left to right. */}
        {/* The single animated rail only reads as a "rail" when all steps sit
            on one row (lg). Below lg the grid wraps to 2–3 rows, so each cell
            carries its own hairline (matching the rail tone) to keep every
            station dot sitting on a line instead of floating. */}
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
