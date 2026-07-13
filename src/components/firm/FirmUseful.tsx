import { WHY_CLIENTS_ENGAGE } from "@/content/firm";

// Where Deimos Is Useful — a restrained editorial index of the recurring
// situations the firm is engaged on. Static by design: the page's one
// interactive surface is the principles accordion, so this reads as a
// contents-style list, not a second accordion. Each row pairs a small index
// numeral (a genuine table-of-contents device for the five areas, not a
// decorative section marker) with the area name and a one-line descriptor,
// separated by hairline rules. Descriptions are capability statements only,
// never a claim of offices, local teams or active mandates in any market.
export function FirmUseful() {
  return (
    <section className="section-navy border-t border-white/10 py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <p className="eyebrow text-muted-on-dark mb-[var(--space-md)]">Situations</p>
        <h2 className="text-on-dark text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] font-serif">
          {WHY_CLIENTS_ENGAGE.heading}
        </h2>
        <p className="text-on-dark mt-[var(--space-md)] max-w-[65ch] text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] opacity-90">
          {WHY_CLIENTS_ENGAGE.statement}
        </p>

        <ul className="mt-[var(--space-xl)] divide-y divide-white/10 border-t border-b border-white/10">
          {WHY_CLIENTS_ENGAGE.areas.map((area, index) => (
            <li
              key={area.name}
              className="flex items-baseline gap-[var(--space-md)] py-[var(--space-md)] sm:gap-[var(--space-lg)]"
            >
              <span
                aria-hidden="true"
                className="text-muted-on-dark shrink-0 text-[length:var(--text-label)] tracking-[var(--text-label--letter-spacing)] tabular-nums"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <p className="text-on-dark text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] font-serif">
                  {area.name}
                </p>
                <p className="text-muted-on-dark mt-[var(--space-2xs)] max-w-[60ch] text-[length:var(--text-body)]">
                  {area.note}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
