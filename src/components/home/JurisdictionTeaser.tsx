import {
  JURISDICTION_DISCLAIMER,
  JURISDICTION_HEADLINE,
  JURISDICTION_LINK,
  JURISDICTION_REGIONS,
  JURISDICTION_SUBTEXT,
} from "@/content/homepage";
import { CTALink } from "@/components/ui/CTALink";

// Muted background dots — a loose, deliberately abstract scatter, not a
// geographically accurate map (HOMEPAGE_BLUEPRINT.md §12 explicitly calls
// for "dot-density... not a literal Google-Maps-style render"). Fixed
// coordinates, not runtime-random, so server/client output matches.
const BACKGROUND_DOTS = [
  [40, 120], [70, 90], [95, 150], [130, 70], [150, 130], [180, 100],
  [210, 160], [230, 60], [260, 120], [290, 90], [320, 150], [350, 70],
  [120, 200], [160, 220], [200, 190], [240, 230], [280, 200], [320, 220],
  [400, 100], [430, 140], [460, 80], [490, 160], [520, 110], [550, 70],
  [580, 150], [610, 100], [640, 130], [420, 210], [460, 230], [500, 200],
  [540, 220], [660, 190], [690, 150], [710, 100], [730, 170], [700, 220],
  [760, 130], [780, 90],
] as const;

// A handful of highlighted nodes standing in for "selected jurisdictional
// exposure" — deliberately not tied to specific real coordinates, since this
// is a teaser abstraction, not the geographically real subpage map.
const HIGHLIGHTED_DOTS = [
  [70, 90], [230, 60], [460, 80], [580, 150], [690, 150], [350, 70], [520, 110],
] as const;

const HIGHLIGHT_LINKS: Array<[number, number]> = [
  [0, 5], [5, 6], [6, 3], [3, 4], [1, 2],
];

// section-dark (ink-blue), not section-navy — with /experience removed from
// the homepage, this section now sits directly before the navy Contact
// bookend (ClosingContactCTA), and the two need to read as distinct tones
// rather than repeating the same deep-navy surface back to back.
export function JurisdictionTeaser() {
  return (
    <section className="section-dark py-[var(--space-section)]">
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
            viewBox="0 0 800 280"
            className="h-auto w-full"
            role="img"
            aria-label="Abstract representation of Deimos's selected cross-border jurisdictional exposure"
          >
            {HIGHLIGHT_LINKS.map(([a, b], i) => (
              <line
                key={i}
                x1={HIGHLIGHTED_DOTS[a][0]}
                y1={HIGHLIGHTED_DOTS[a][1]}
                x2={HIGHLIGHTED_DOTS[b][0]}
                y2={HIGHLIGHTED_DOTS[b][1]}
                stroke="var(--color-steel-blue)"
                strokeWidth="1"
                strokeOpacity="0.35"
              />
            ))}
            {BACKGROUND_DOTS.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="3" fill="var(--color-muted-on-dark)" opacity="0.35" />
            ))}
            {HIGHLIGHTED_DOTS.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="5" fill="var(--color-steel-blue)" />
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
