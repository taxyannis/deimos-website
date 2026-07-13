import { FIRM_EXPOSURE } from "@/content/firm";

// Ink-blue tonal panel. This is where /experience's content lives now that
// it's been removed as a standalone page (SITE_COMPLETION_PLAN.md) — five
// restrained exposure categories only, no named clients or specific
// transactions, and deliberately no repeat of the US$21.2bn figure (the hero
// carries that number as aggregate historical exposure with its required hedge).
export function FirmExposure() {
  return (
    <section className="section-dark border-t border-white/10 py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <p className="eyebrow text-muted-on-dark mb-[var(--space-md)]">Background</p>
        <h2 className="text-on-dark text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] font-serif">
          {FIRM_EXPOSURE.heading}
        </h2>
        <p className="text-on-dark mt-[var(--space-md)] max-w-[65ch] text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] opacity-90">
          {FIRM_EXPOSURE.statement}
        </p>

        {/* Hairline-divided list (same treatment as Where Deimos Is Engaged)
            rather than loose stacked paragraphs — gives the three exposure
            themes institutional structure and weight without cards. */}
        <ul className="mt-[var(--space-xl)] divide-y divide-white/10 border-t border-b border-white/10">
          {FIRM_EXPOSURE.categories.map((category) => (
            <li
              key={category}
              className="text-muted-on-dark max-w-[65ch] py-[var(--space-sm)] text-[length:var(--text-body)]"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
