import { COVERAGE_THEMES_NOTE } from "@/content/jurisdictions";
import { JurisdictionMap } from "@/components/jurisdictions/JurisdictionMap";
import { RegionJurisdictionList } from "@/components/jurisdictions/RegionJurisdictionList";

// Desktop gets the interactive world-map instrument; below `md`, where 50
// individually-positioned nodes stop being a usable pointer target, a clean
// region-filtered list takes over instead. The two don't share state — only
// one is ever visible/interactive at a time, so there's nothing to sync.
export function JurisdictionsExposure() {
  return (
    <section className="section-navy texture-contour border-t border-white/10 py-[var(--space-section)]">
      {/* Standard content column up to xl; at 2xl the coverage instrument is
          allowed a modest breakout (7xl -> 86rem) so the map reads as a
          primary feature on ultra-wide screens rather than a short strip in a
          sea of margin. The map already fills this column's full width, so the
          wider container directly enlarges the map. Sub-2xl is unchanged, so
          mobile/tablet/laptop and the page-header alignment are preserved. */}
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)] 2xl:max-w-[86rem]">
        <p className="eyebrow text-muted-on-dark mb-[var(--space-md)]">Global Footprint</p>
        <h2 className="text-on-dark text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] font-serif">
          Coverage by Region
        </h2>

        <div className="mt-[var(--space-xl)] hidden md:block">
          <JurisdictionMap />
        </div>

        <div className="mt-[var(--space-xl)] md:hidden">
          <RegionJurisdictionList />
        </div>

        {/* One global coverage note below the map — replaces the per-card
            disclaimer that used to repeat on every selected jurisdiction.
            Carries the legal negatives, so the hedge still travels with the
            claim; the formal sitewide disclaimer also remains in the footer. */}
        <p className="text-muted-on-dark mt-[var(--space-lg)] max-w-[65ch] text-[length:var(--text-small)]">
          {COVERAGE_THEMES_NOTE}
        </p>
      </div>
    </section>
  );
}
