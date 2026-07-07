import { FIRM_EXPOSURE } from "@/content/firm";

// Ink-blue tonal panel. This is where /experience's content lives now that
// it's been removed as a standalone page (SITE_COMPLETION_PLAN.md) — three
// anonymized exposure themes only, no tombstones, no named clients, no
// claimed completed mandates, and deliberately no repeat of the US$21.2bn
// figure (the hero carries that number with its required hedge).
export function FirmExposure() {
  return (
    <section className="section-dark border-t border-white/10 py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <h2 className="text-on-dark text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] font-serif">
          {FIRM_EXPOSURE.heading}
        </h2>
        <p className="text-on-dark mt-[var(--space-md)] max-w-[65ch] text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] opacity-90">
          {FIRM_EXPOSURE.statement}
        </p>

        <div className="mt-[var(--space-lg)] flex flex-col gap-[var(--space-sm)]">
          {FIRM_EXPOSURE.themes.map((theme) => (
            <p key={theme} className="text-muted-on-dark max-w-[55ch] text-[length:var(--text-body)]">
              {theme}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
