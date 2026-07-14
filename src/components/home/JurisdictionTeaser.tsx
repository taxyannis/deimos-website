import {
  HOMEPAGE_COVERAGE_TEASER,
  JURISDICTION_DISCLAIMER,
  JURISDICTION_HEADLINE,
  JURISDICTION_LINK,
  JURISDICTION_REGIONS,
} from "@/content/homepage";
import { CoverageMapCanvas } from "@/components/jurisdictions/CoverageMapCanvas";
import { CTALink } from "@/components/ui/CTALink";
import { SectionLabel } from "@/components/ui/SectionLabel";

// Coverage teaser — the exact same map canvas as /coverage
// (CoverageMapCanvas), rendered STATIC and non-interactive: no onSelect, so
// there are no clickable markers, no hover panels and no detail panel. It
// simply supports the "View selected coverage" CTA visually, reading as one
// instrument with the destination page. Ink-blue tonal panel against the
// deep-navy base, ahead of the navy contact bookend that follows.
export function JurisdictionTeaser() {
  return (
    <section className="section-dark texture-contour border-t border-white/10 py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <div className="grid gap-[var(--space-xl)] lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel index="04" className="mb-[var(--space-lg)]">
              Coverage
            </SectionLabel>
            <h2 className="text-on-dark text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] font-serif">
              {JURISDICTION_HEADLINE}
            </h2>
            <p className="text-on-dark mt-[var(--space-md)] max-w-[55ch] text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] opacity-80">
              {HOMEPAGE_COVERAGE_TEASER}
            </p>

            {/* Regions as a two-column hairline register rather than a wrapped
                inline row — reads as a structured coverage index and fills the
                left column with deliberate weight. */}
            <ul className="mt-[var(--space-lg)] grid grid-cols-1 gap-x-[var(--space-xl)] border-t border-white/10 sm:grid-cols-2">
              {JURISDICTION_REGIONS.map((region) => (
                <li
                  key={region}
                  className="text-on-dark flex items-center gap-[var(--space-sm)] border-b border-white/10 py-[var(--space-xs)] text-[length:var(--text-body)]"
                >
                  <span aria-hidden="true" className="h-[5px] w-[5px] shrink-0 rounded-full bg-steel-blue/60" />
                  {region}
                </li>
              ))}
            </ul>

            <div className="mt-[var(--space-lg)] flex flex-col gap-[var(--space-sm)]">
              <CTALink href={JURISDICTION_LINK.href} tone="on-dark">
                {JURISDICTION_LINK.label}
                <span aria-hidden="true" className="ml-[var(--space-2xs)]">
                  &rarr;
                </span>
              </CTALink>

              {/* Disclaimer travels with the map claim, not just the footer. */}
              <p className="text-muted-on-dark max-w-[60ch] text-[length:var(--text-small)]">
                {JURISDICTION_DISCLAIMER}
              </p>
            </div>
          </div>

          <CoverageMapCanvas className="h-auto w-full" />
        </div>
      </div>
    </section>
  );
}
