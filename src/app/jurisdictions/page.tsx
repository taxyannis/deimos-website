import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ClosingContactCTA } from "@/components/layout/ClosingContactCTA";
import { JurisdictionsExposure } from "@/components/jurisdictions/JurisdictionsExposure";
import { JurisdictionRepresentationLine } from "@/components/layout/JurisdictionRepresentationLine";
import { JURISDICTIONS_HERO } from "@/content/jurisdictions";

const TITLE = "Jurisdictions | Deimos Group";
const DESCRIPTION =
  "Selected jurisdictional exposure across Europe, Africa, the Middle East/Central Asia, Asia-Pacific, the Americas and international structuring jurisdictions — market exposure and advisory activity, not offices or regulated operations.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, siteName: "Deimos Group", type: "website" },
  twitter: { card: "summary", title: TITLE, description: DESCRIPTION },
};

// Section order per SITE_COMPLETION_PLAN.md /jurisdictions spec: hero ->
// region filter + grouped list + density visual + disclaimer -> discreet
// representation-in-uncovered-jurisdictions line -> contact CTA.
// JurisdictionRepresentationLine is reused as-is from /firm (src/content/
// site.ts's JURISDICTION_REPRESENTATION_LINE) since it already carries no
// page-specific coupling.
export default function JurisdictionsPage() {
  return (
    <>
      <PageHeader title={JURISDICTIONS_HERO.title} description={JURISDICTIONS_HERO.description} />
      <JurisdictionsExposure />
      <JurisdictionRepresentationLine />
      <ClosingContactCTA />
    </>
  );
}
