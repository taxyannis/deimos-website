import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ClosingContactCTA } from "@/components/layout/ClosingContactCTA";
import { JurisdictionsExposure } from "@/components/jurisdictions/JurisdictionsExposure";
import { JurisdictionRepresentationLine } from "@/components/layout/JurisdictionRepresentationLine";
import { JURISDICTIONS_HERO } from "@/content/jurisdictions";

const TITLE = "Coverage | Deimos Group";
const DESCRIPTION =
  "Selected coverage reflects markets, structuring jurisdictions and special situations relevant to transaction review, capital positioning, partner coverage and strategic market monitoring, not offices or regulated operations.";

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
// changed. Section order unchanged from the approved /jurisdictions spec:
// hero -> map + region filters + disclaimer -> representation line -> CTA.
export default function CoveragePage() {
  return (
    <>
      <PageHeader title={JURISDICTIONS_HERO.title} description={JURISDICTIONS_HERO.description} />
      <JurisdictionsExposure />
      <JurisdictionRepresentationLine />
      <ClosingContactCTA />
    </>
  );
}
