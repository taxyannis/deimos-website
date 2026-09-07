import { JURISDICTION_GROUPS } from "@/content/jurisdictions";

export type HeroSlide = {
  id: string;
  order: number;
  metric: string;
  label: string;
  supportingLine: string;
  video: {
    src: string;
    poster: string | null;
    alt: string;
  };
};

export const COVERAGE_ENTRY_COUNT = new Set(
  JURISDICTION_GROUPS.flatMap((group) => group.jurisdictions),
).size;

export const HERO_HEADLINE = "Global Independent Strategic Advisory Firm";

export const HERO_SUBLINE =
  "Deimos provides independent strategic advice to principals, investors and institutions across private capital, strategic transactions and partnerships.";

export const HERO_THESIS = "Reducing capital risk through structure, process and execution.";

export const HERO_CTAS = [
  { label: "Explore Deimos Advisory", href: "/advisory" },
  { label: "Contact Deimos", href: "/contact" },
] as const;

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-1",
    order: 1,
    metric: "US$21.2bn",
    label: "Historical Transaction Exposure",
    supportingLine:
      "Aggregate historical exposure across principal, advisory and market involvement.",
    video: {
      src: "/videos/hero-historic-riverfront-01.mp4",
      poster: "/images/video-posters/hero-historic-riverfront-01-poster.webp",
      alt: "Aerial view of a historic riverfront old town",
    },
  },
  {
    id: "slide-2",
    order: 2,
    metric: `${Math.floor(COVERAGE_ENTRY_COUNT / 10) * 10}+`,
    label: "Global Markets & Structuring Jurisdictions",
    supportingLine:
      "Active across selected markets and structuring jurisdictions worldwide.",
    video: {
      src: "/videos/hero-cable-bridge-skyline-01.mp4",
      poster: "/images/video-posters/hero-cable-bridge-skyline-01-poster.webp",
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
      poster: "/images/video-posters/hero-coastline-city-01-poster.webp",
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
      poster: "/images/video-posters/hero-dense-skyline-01-poster.webp",
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
      poster: "/images/video-posters/hero-harbor-night-01-poster.webp",
      alt: "Night aerial view over a dense harbor-front skyline",
    },
  },
];

export const HERO_SLIDE_DURATION_MS = 9000;
export const HERO_TRANSITION_MS = 1400;
