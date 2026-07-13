import { DISCLAIMERS } from "@/content/site";
import { JurisdictionMap } from "@/components/jurisdictions/JurisdictionMap";
import { RegionJurisdictionList } from "@/components/jurisdictions/RegionJurisdictionList";

// Desktop gets the interactive world-map instrument; below `md`, where 50
// individually-positioned nodes stop being a usable pointer target, a clean
// region-filtered list takes over instead. The two don't share state — only
// one is ever visible/interactive at a time, so there's nothing to sync.
export function JurisdictionsExposure() {
  return (
    <section className="section-navy border-t border-white/10 py-[var(--space-section)]">
      {/* Standard content column up to xl; at 2xl the coverage instrument is
          allowed a modest breakout (7xl -> 86rem) so the map reads as a
          primary feature on ultra-wide screens rather than a short strip in a
          sea of margin. The map already fills this column's full width, so the
          wider container directly enlarges the map. Sub-2xl is unchanged, so
          mobile/tablet/laptop and the page-header alignment are preserved. */}
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)] 2xl:max-w-[86rem]">
        <h2 className="text-on-dark text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] font-serif">
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
        <p className="text-muted-on-dark mt-[var(--space-lg)] max-w-[65ch] text-[length:var(--text-small)]">
          {DISCLAIMERS.jurisdictional}
        </p>
      </div>
    </section>
  );
}
