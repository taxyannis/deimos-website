import { FIRM_EXPOSURE } from "@/content/firm";
import { SectionLabel } from "@/components/ui/SectionLabel";

// Ink-blue tonal panel. This is where /experience's content lives now that
// it's been removed as a standalone page (SITE_COMPLETION_PLAN.md) — five
// restrained exposure categories only, no named clients or specific
// transactions, and deliberately no repeat of the US$21.2bn figure (the hero
// carries that number as aggregate historical exposure with its required hedge).
export function FirmExposure() {
  return (
    <section className="section-dark border-t border-white/10 py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <SectionLabel index="04" className="mb-[var(--space-lg)]">
          Background
        </SectionLabel>
        <h2 className="text-on-dark text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] font-serif">
          {FIRM_EXPOSURE.heading}
        </h2>
        <p className="text-on-dark mt-[var(--space-md)] max-w-[65ch] text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] opacity-90">
          {FIRM_EXPOSURE.statement}
        </p>

        {/* Numbered exposure register — a two-column hairline index at sm+
            that reads as a considered set of domains, giving the section
            structure and horizontal weight without cards. */}
        <dl className="mt-[var(--space-xl)] grid grid-cols-1 gap-x-[var(--space-2xl)] border-t border-white/10 sm:grid-cols-2">
          {FIRM_EXPOSURE.categories.map((category, index) => (
            <div
              key={category}
              className="flex items-baseline gap-[var(--space-md)] border-b border-white/10 py-[var(--space-sm)]"
            >
              <dt className="metric-figures text-steel-blue w-[2ch] shrink-0 text-[length:var(--text-small)]" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </dt>
              <dd className="text-on-dark text-[length:var(--text-body)]">{category}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
