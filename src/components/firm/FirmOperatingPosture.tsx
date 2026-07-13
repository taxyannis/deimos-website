import { FIRM_OPERATING_POSTURE } from "@/content/firm";

// Operating Posture — the closing section. A short statement of independence,
// then four labelled points (independence, selective engagement, international
// orientation, execution discipline) in a two-column editorial grid at sm+.
// Static and restrained; the labels reinforce that independence means no
// captive product or distribution mandate — which keeps the firm clear of
// broker / placement-agent territory while it participates in selected
// proprietary transactions. Ink-blue tonal panel closes the page's navy/ink
// rhythm before the representation line.
export function FirmOperatingPosture() {
  return (
    <section className="section-dark border-t border-white/10 py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <h2 className="text-on-dark text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] font-serif">
          {FIRM_OPERATING_POSTURE.heading}
        </h2>
        <p className="text-on-dark mt-[var(--space-md)] max-w-[65ch] text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] opacity-90">
          {FIRM_OPERATING_POSTURE.statement}
        </p>

        <dl className="mt-[var(--space-xl)] grid gap-x-[var(--space-xl)] border-t border-white/10 sm:grid-cols-2">
          {FIRM_OPERATING_POSTURE.points.map((point, index) => (
            <div
              key={point.label}
              className={`border-b border-white/10 py-[var(--space-md)] ${
                index >= 2 ? "sm:border-b-0" : ""
              }`}
            >
              <dt className="text-on-dark text-[length:var(--text-label)] tracking-[var(--text-label--letter-spacing)]">
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
