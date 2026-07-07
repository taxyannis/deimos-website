export type HeroSlide = {
  id: string;
  order: number;
  metric: string;
  metricRegister: "numeric" | "qualitative";
  label: string;
  supportingLine: string;
  video: {
    src: string;
    poster: string;
    /** Accessible name for the poster fallback only — the video itself is aria-hidden. */
    alt: string;
  };
};

export const HERO_HEADLINE = "Where Structure Precedes Capital";

export const HERO_SUBLINE =
  "Deimos advises on complex private-market transactions where structure, capital, and execution must be aligned before institutional capital can move.";

export const HERO_CTAS = [
  { label: "Explore Deimos Advisory", href: "/advisory" },
  { label: "Contact Deimos", href: "/contact" },
] as const;

/**
 * Final hero manifest — HERO_COMPONENT_BLUEPRINT.md §14.
 *
 * Video-to-slide assignment here is DELIBERATELY NEUTRAL, not a creative
 * decision: content has been visually reviewed via a single low-res thumbnail
 * per clip (VIDEO_ASSET_INVENTORY.md §3), not confirmed by anyone watching
 * the footage play back. Swap the `video.src` / `video.poster` values freely;
 * nothing else in this file or in Hero.tsx should need to change.
 *
 * Held in reserve, not used below: hero-waterfront-skyline-01.mp4,
 * hero-twilight-skyline-01.mp4 (window/balcony-edge concern, needs a look),
 * hero-harbor-night-02.mp4 (likely duplicate angle of hero-harbor-night-01).
 */
export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-1",
    order: 1,
    metric: "US$21.2bn",
    metricRegister: "numeric",
    label: "Historical transaction exposure",
    supportingLine:
      "Principal and advisory transaction exposure across complex private-market situations.",
    video: {
      src: "/videos/hero-cable-bridge-skyline-01.mp4",
      poster: "/images/video-posters/hero-cable-bridge-skyline-01-poster.jpg",
      alt: "Aerial view of a cable-stayed bridge over a dense city skyline",
    },
  },
  {
    id: "slide-2",
    order: 2,
    // Matches the actual count of JURISDICTION_GROUPS in
    // src/content/jurisdictions.ts — keep this in sync if that list changes.
    metric: "50",
    metricRegister: "numeric",
    label: "Selected market coverage",
    supportingLine:
      "Cross-border market activity, transaction review, and aligned counterparty coverage.",
    video: {
      src: "/videos/hero-coastline-city-01.mp4",
      poster: "/images/video-posters/hero-coastline-city-01-poster.jpg",
      alt: "Aerial view of a dense coastal city built along a steep hillside",
    },
  },
  {
    id: "slide-3",
    order: 3,
    metric: "7",
    metricRegister: "numeric",
    label: "Advisory disciplines",
    supportingLine:
      "Capital formation, structuring, M&A, special situations, infrastructure, investor coverage and execution management.",
    video: {
      src: "/videos/hero-dense-skyline-01.mp4",
      poster: "/images/video-posters/hero-dense-skyline-01-poster.jpg",
      alt: "Dense overcast skyscraper skyline",
    },
  },
  {
    id: "slide-4",
    order: 4,
    metric: "Cross-Border",
    metricRegister: "qualitative",
    label: "Private capital situations",
    supportingLine:
      "Advisory work across jurisdictions where capital, structure and stakeholder alignment must be sequenced.",
    video: {
      src: "/videos/hero-harbor-night-01.mp4",
      poster: "/images/video-posters/hero-harbor-night-01-poster.jpg",
      alt: "Night aerial view over a dense harbor-front skyline",
    },
  },
  {
    id: "slide-5",
    order: 5,
    metric: "Complex Assets",
    metricRegister: "qualitative",
    label:
      "Real assets, infrastructure, energy, hospitality, sports and strategic sectors",
    supportingLine:
      "Focused on situations where conventional capital processes often require deeper structuring before execution.",
    video: {
      src: "/videos/hero-historic-riverfront-01.mp4",
      poster: "/images/video-posters/hero-historic-riverfront-01-poster.jpg",
      alt: "Aerial view of a historic riverfront old town",
    },
  },
];

export const HERO_SLIDE_DURATION_MS = 7000;
// Slow, deliberate institutional cadence — also long enough that the next
// slide's pre-loaded video (see Hero.tsx) is already playing by the time the
// dissolve starts, so the crossfade blends two live frames, not a frame into
// a black/loading video.
export const HERO_TRANSITION_MS = 1400;
