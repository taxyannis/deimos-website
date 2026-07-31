import { FIRM_OPERATING_POSTURE } from "@/content/firm";
import { SectionLabel } from "@/components/ui/SectionLabel";

// Operating Posture — the closing section. Three short statements (mandate
// structure, selective proprietary capability, selective/international
// engagement), then four labelled points in a two-column editorial grid at
// sm+. Static and restrained; positive framing only, with no defensive broker
// boundary. Ink-blue tonal panel closes the page's navy/ink rhythm.
export function FirmOperatingPosture() {
  return (
    <section className="section-dark border-t border-white/10 py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <SectionLabel index="05" className="mb-[var(--space-lg)]">
          Standing
        </SectionLabel>
        <h2 className="text-on-dark text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] font-serif">
          {FIRM_OPERATING_POSTURE.heading}
        </h2>
        {FIRM_OPERATING_POSTURE.statements.map((statement, index) => (
          <p
            key={index}
            className={`text-on-dark ${index === 0 ? "mt-[var(--space-md)]" : "mt-[var(--space-sm)]"} max-w-[65ch] text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] opacity-90`}
          >
            {statement}
          </p>
        ))}

        {/* Posture points as a numbered two-column register — the label sits
            in the serif with its index above, giving each point the weight of
            a stated principle rather than a definition-list caption. */}
        <dl className="mt-[var(--space-2xl)] grid gap-x-[var(--space-2xl)] border-t border-white/10 sm:grid-cols-2">
          {FIRM_OPERATING_POSTURE.points.map((point, index) => (
            <div
              key={point.label}
              className={`border-b border-white/10 py-[var(--space-lg)] ${
                index >= 2 ? "sm:border-b-0" : ""
              }`}
            >
              <span aria-hidden="true" className="metric-figures text-steel-blue block text-[length:var(--text-small)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <dt className="text-on-dark mt-[var(--space-xs)] text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] font-serif">
                {point.label}
              </dt>
              <dd className="text-muted-on-dark mt-[var(--space-2xs)] max-w-[52ch] text-[length:var(--text-body)]">
                {point.note}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
