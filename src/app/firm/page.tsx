import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ClosingContactCTA } from "@/components/layout/ClosingContactCTA";
import { FirmPrinciples } from "@/components/firm/FirmPrinciples";
import { FirmEngagement } from "@/components/firm/FirmEngagement";
import { FirmUseful } from "@/components/firm/FirmUseful";
import { FirmExposure } from "@/components/firm/FirmExposure";
import { FirmOperatingPosture } from "@/components/firm/FirmOperatingPosture";
import { FIRM_HERO, WHAT_DEIMOS_IS } from "@/content/firm";

const TITLE = "Firm | Deimos Group";
const DESCRIPTION =
  "Deimos Group is a global independent strategic advisory firm working across advisory mandates, capital situations, strategic assets and selected proprietary transactions.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, siteName: "Deimos Group", type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

// Editorial rework of /firm (2026-07). Section spine: hero (canonical
// self-identification) -> How the Firm Thinks (the one interactive section, an
// operating-principles accordion) -> How Deimos Engages (mandate, boundary,
// process) -> Where Deimos Is Useful (editorial index of situations) ->
// Selected Exposure (merged /experience content, kept with its disclaimer)
// -> Operating Posture (independence and discipline) -> contact CTA. No
// leadership/team content anywhere in this sequence — resolved out of v1 scope
// entirely.
export default function FirmPage() {
  return (
    <>
      <PageHeader title={FIRM_HERO.title} description={WHAT_DEIMOS_IS.statement} />
      <FirmPrinciples />
      <FirmEngagement />
      <FirmUseful />
      <FirmExposure />
      <FirmOperatingPosture />
      <ClosingContactCTA />
    </>
  );
}
