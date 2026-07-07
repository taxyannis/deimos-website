import { WHY_CLIENTS_ENGAGE } from "@/content/firm";

// Plain divided list, not an accordion — unlike AdvisoryPillars, each reason
// is already a single line with nothing to hide behind an expansion, so a
// click-to-reveal interaction would add friction without adding content.
// Thin rule dividers only, matching DESIGN.md's anti-card-grid stance.
export function WhyClientsEngage() {
  return (
    <section className="section-light py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <h2 className="text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] font-serif">
          {WHY_CLIENTS_ENGAGE.heading}
        </h2>
        <p className="mt-[var(--space-md)] max-w-[70ch] text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)]">
          {WHY_CLIENTS_ENGAGE.statement}
        </p>

        <ul className="divide-ink-on-light/15 mt-[var(--space-xl)] divide-y border-t border-b border-ink-on-light/15">
          {WHY_CLIENTS_ENGAGE.reasons.map((reason) => (
            <li
              key={reason}
              className="max-w-[65ch] py-[var(--space-sm)] text-[length:var(--text-body)] text-ink-on-light/85"
            >
              {reason}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
