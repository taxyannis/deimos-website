import { WHO_DEIMOS_SERVES } from "@/content/firm";

// Navy tonal pivot against the light sections either side of it, per the
// section-order contrast pass for this page. Counterparties render as a
// single flowing, wrapped label list — the same visual language as the
// homepage's JurisdictionTeaser region list — not a grid of boxes, per
// original-master-prompt.txt §10's own instruction that this section
// "should not become a crowded list of boxes."
export function WhoDeimosServes() {
  return (
    <section className="section-navy py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <h2 className="text-on-dark text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] font-serif">
          {WHO_DEIMOS_SERVES.heading}
        </h2>
        <p className="text-on-dark mt-[var(--space-md)] max-w-[65ch] text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] opacity-90">
          {WHO_DEIMOS_SERVES.intro}
        </p>

        <ul className="text-muted-on-dark mt-[var(--space-lg)] flex flex-wrap gap-x-[var(--space-md)] gap-y-[var(--space-2xs)] text-[length:var(--text-label)] tracking-[var(--text-label--letter-spacing)]">
          {WHO_DEIMOS_SERVES.counterparties.map((counterparty) => (
            <li key={counterparty}>{counterparty}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
