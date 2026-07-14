import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { JurisdictionsExposure } from "@/components/jurisdictions/JurisdictionsExposure";
import { JURISDICTIONS_HERO } from "@/content/jurisdictions";

const TITLE = "Coverage | Deimos Group";
const DESCRIPTION =
  "Selected coverage reflects markets, structuring jurisdictions and cross-border situations relevant to transaction review, capital positioning, partner coverage and strategic market monitoring, not offices or regulated operations.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, siteName: "Deimos Group", type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

// Public route for what was /jurisdictions in earlier v1 builds —
// "Jurisdictions" was renamed to "Coverage" across the public UI (nav,
// footer, CTAs, page title) and /jurisdictions now permanently redirects
// here (next.config.ts). Internal component/content module names keep the
// jurisdictions vocabulary to limit churn; only public-facing language
// changed. Section order: hero -> map + region filters + disclaimer. The
// closing contact band was removed sitewide; the footer carries contact.
export default function CoveragePage() {
  return (
    <>
      <PageHeader eyebrow="Coverage" title={JURISDICTIONS_HERO.title} description={JURISDICTIONS_HERO.description} />
      <JurisdictionsExposure />
    </>
  );
}
