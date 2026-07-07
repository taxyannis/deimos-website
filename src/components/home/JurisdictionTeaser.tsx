import {
  JURISDICTION_DISCLAIMER,
  JURISDICTION_HEADLINE,
  JURISDICTION_LINK,
  JURISDICTION_REGIONS,
  JURISDICTION_SUBTEXT,
} from "@/content/homepage";
import {
  JURISDICTION_COORDS,
  MAP_H,
  MAP_W,
  WorldMapPaths,
  project,
} from "@/components/jurisdictions/WorldMap";
import { CTALink } from "@/components/ui/CTALink";

// Coverage teaser — the world-map silhouette from /coverage (WorldMap.tsx),
// rendered here as a static, non-interactive miniature with every selected
// jurisdiction as a small fixed dot. Same geometry as the real map, so the
// teaser and the destination page read as one instrument; interactivity
// (filters, selection, detail panel) lives only on /coverage. Ink-blue
// tonal panel against the deep-navy base, ahead of the navy contact
// bookend that follows.
export function JurisdictionTeaser() {
  return (
    <section className="section-dark border-t border-white/10 py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <div className="grid gap-[var(--space-xl)] lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-on-dark text-[length:var(--text-h1)] leading-[var(--text-h1--line-height)] tracking-[var(--text-h1--letter-spacing)] font-serif">
              {JURISDICTION_HEADLINE}
            </h2>
            <p className="text-on-dark mt-[var(--space-md)] max-w-[55ch] text-[length:var(--text-body)] opacity-90">
              {JURISDICTION_SUBTEXT}
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

          <svg
            viewBox={`0 0 ${MAP_W} ${MAP_H}`}
            className="h-auto w-full"
            role="img"
            aria-label="Stylized world map marking Deimos's selected market coverage"
          >
            <WorldMapPaths />
            {Object.values(JURISDICTION_COORDS).map(([lon, lat], i) => {
              const [x, y] = project(lon, lat);
              return <circle key={i} cx={x} cy={y} r="3" fill="var(--color-steel-blue)" fillOpacity="0.8" />;
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}
