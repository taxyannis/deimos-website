import { DISCLAIMERS } from "@/content/site";
import { JurisdictionMap } from "@/components/jurisdictions/JurisdictionMap";
import { RegionJurisdictionList } from "@/components/jurisdictions/RegionJurisdictionList";

// Desktop gets the premium interactive map/panel instrument; below `md`,
// where 50 individually-positioned nodes stop being a usable pointer
// target, a clean region-filtered accordion-style list takes over instead
// (task spec's "mobile fallback uses region accordions, grouped controls,
// or a clean selector"). The two don't share state — only one is ever
// visible/interactive at a time, so there's nothing to keep in sync.
export function JurisdictionsExposure() {
  return (
    <section className="section-light py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <h2 className="text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] font-serif">
          Coverage by Region
        </h2>

        <div className="mt-[var(--space-xl)] hidden md:block">
          <JurisdictionMap />
        </div>

        <div className="mt-[var(--space-xl)] md:hidden">
          <RegionJurisdictionList />
        </div>

        {/* Disclaimer travels with the map/list, not just the footer — the
            "hedge travels with the claim" rule. */}
        <p className="text-muted-on-light mt-[var(--space-lg)] max-w-[65ch] text-[length:var(--text-small)]">
          {DISCLAIMERS.jurisdictional}
        </p>
      </div>
    </section>
  );
}
