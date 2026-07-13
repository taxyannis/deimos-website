import { JURISDICTION_GROUPS } from "@/content/jurisdictions";

export type HeroSlide = {
  id: string;
  order: number;
  metric: string;
  label: string;
  supportingLine: string;
  video: {
    src: string;
    /** Poster frame path, or null when no real poster exists yet — null is
        deliberate so next/image is never asked to load a missing file (the
        navy fallback panel shows instead). */
    poster: string | null;
    /** Accessible name for the poster fallback only — the video itself is aria-hidden. */
    alt: string;
  };
};

// Derived at build time from the actual coverage dataset (jurisdictions.ts)
// so the hero metric can never drift from the map. Counts unique displayed
// entries across every region group — no double-counting, no assumed figure.
export const COVERAGE_ENTRY_COUNT = new Set(
  JURISDICTION_GROUPS.flatMap((group) => group.jurisdictions),
).size;

// Homepage identity block — governed by src/content/CONTENT_DOCTRINE.md.
// Deimos is positioned as a global independent strategic advisory firm. The
// headline states the identity; the subline states who it advises and on what;
// the thesis line ("Reducing capital risk…") carries the firm's discipline
// frame. "Reducing" is deliberate — never eliminating risk or guaranteeing
// financing/execution. Wording is doctrine-specified — do not paraphrase.
export const HERO_HEADLINE = "Global Independent Strategic Advisory Firm";

export const HERO_SUBLINE =
  "Deimos provides independent strategic advice to principals, investors and institutions across private capital, strategic transactions and partnerships.";

export const HERO_THESIS = "Reducing capital risk through structure, process and execution.";

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
 * Previously reserved but unused, now removed from public/videos so the
 * deployed asset set is only what the hero actually plays:
 * hero-waterfront-skyline-01.mp4, hero-twilight-skyline-01.mp4 (window/
 * balcony-edge concern), hero-harbor-night-02.mp4 (duplicate angle of
 * hero-harbor-night-01). All three remain recoverable from git history if a
 * future swap wants them back.
 *
 * Video-to-slide assignment note: the approved slide COPY order (metric,
 * label, supporting line) is fixed; only the video clips rotate. The clip
 * that previously played last (hero-historic-riverfront-01) now opens the
 * sequence, and every other clip shifts one slide later, so no src is
 * dropped or duplicated. Each clip's `alt` travels with it.
 */
export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-1",
    order: 1,
    metric: "US$21.2bn",
    label: "Historical Transaction Exposure",
    // The figure is AGGREGATE — frame it only as aggregate historical exposure
    // across prior principal experience, advisory review and market
    // involvement. It must never imply closed or regulated-bank transactions.
    supportingLine:
      "Aggregate historical exposure across principal, advisory and market involvement.",
    video: {
      // Rotated to first (was slide-5).
      src: "/videos/hero-historic-riverfront-01.mp4",
      poster: null,
      alt: "Aerial view of a historic riverfront old town",
    },
  },
  {
    id: "slide-2",
    order: 2,
    // Shown as a rounded "60+" band rather than the exact count, to avoid
    // over-precision on the public hero — but still derived from the live
    // coverage dataset (COVERAGE_ENTRY_COUNT, currently 63) via a floor to
    // the nearest ten, so it can never overstate and updates itself if the
    // list crosses the next ten.
    metric: `${Math.floor(COVERAGE_ENTRY_COUNT / 10) * 10}+`,
    label: "Global Markets & Structuring Jurisdictions",
    supportingLine:
      "Active across selected markets and structuring jurisdictions worldwide.",
    video: {
      src: "/videos/hero-cable-bridge-skyline-01.mp4",
      poster: null,
      alt: "Aerial view of a cable-stayed bridge over a dense city skyline",
    },
  },
  {
    id: "slide-3",
    order: 3,
    metric: "3",
    label: "Structure. Process. Execution.",
    supportingLine: "Core pillars of the Deimos operating model.",
    video: {
      src: "/videos/hero-coastline-city-01.mp4",
      poster: null,
      alt: "Aerial view of a dense coastal city built along a steep hillside",
    },
  },
  {
    id: "slide-4",
    order: 4,
    metric: "Cross-Border",
    label: "International Transaction Execution",
    supportingLine:
      "Capital, counterparties and process coordination across jurisdictions.",
    video: {
      src: "/videos/hero-dense-skyline-01.mp4",
      poster: null,
      alt: "Dense overcast skyscraper skyline",
    },
  },
  {
    id: "slide-5",
    order: 5,
    metric: "Strategic Assets",
    label: "Private Markets, Real Assets & Operating Platforms",
    supportingLine:
      "Advisory focus across asset-backed transactions and operating businesses.",
    video: {
      src: "/videos/hero-harbor-night-01.mp4",
      poster: null,
      alt: "Night aerial view over a dense harbor-front skyline",
    },
  },
];

export const HERO_SLIDE_DURATION_MS = 9000;
// Slow, deliberate institutional cadence — also long enough that the next
// slide's pre-loaded video (see Hero.tsx) is already playing by the time the
// dissolve starts, so the crossfade blends two live frames, not a frame into
// a black/loading video.
export const HERO_TRANSITION_MS = 1400;
