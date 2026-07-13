import {
  HOMEPAGE_COVERAGE_TEASER,
  JURISDICTION_DISCLAIMER,
  JURISDICTION_HEADLINE,
  JURISDICTION_LINK,
  JURISDICTION_REGIONS,
} from "@/content/homepage";
import { CoverageMapCanvas } from "@/components/jurisdictions/CoverageMapCanvas";
import { CTALink } from "@/components/ui/CTALink";

// Coverage teaser — the exact same map canvas as /coverage
// (CoverageMapCanvas), rendered STATIC and non-interactive: no onSelect, so
// there are no clickable markers, no hover panels and no detail panel. It
// simply supports the "View selected coverage" CTA visually, reading as one
// instrument with the destination page. Ink-blue tonal panel against the
// deep-navy base, ahead of the navy contact bookend that follows.
export function JurisdictionTeaser() {
  return (
    <section className="section-dark border-t border-white/10 py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <div className="grid gap-[var(--space-xl)] lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-muted-on-dark mb-[var(--space-lg)]">Coverage</p>
            <h2 className="text-on-dark text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] font-serif">
              {JURISDICTION_HEADLINE}
            </h2>
            <p className="text-on-dark mt-[var(--space-md)] max-w-[55ch] text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] opacity-90">
              {HOMEPAGE_COVERAGE_TEASER}
            </p>

            <ul className="text-muted-on-dark mt-[var(--space-lg)] flex flex-wrap gap-x-[var(--space-md)] gap-y-[var(--space-2xs)] text-[length:var(--text-label)] tracking-[var(--text-label--letter-spacing)]">
              {JURISDICTION_REGIONS.map((region) => (
                <li key={region}>{region}</li>
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
