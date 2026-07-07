import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ClosingContactCTA } from "@/components/layout/ClosingContactCTA";
import { WhatDeimosIs } from "@/components/firm/WhatDeimosIs";
import { WhoDeimosServes } from "@/components/firm/WhoDeimosServes";
import { WhyClientsEngage } from "@/components/firm/WhyClientsEngage";
import { FirmExposure } from "@/components/firm/FirmExposure";
import { FirmConfidentiality } from "@/components/firm/FirmConfidentiality";
import { SelectiveEngagementModel } from "@/components/firm/SelectiveEngagementModel";
import { JurisdictionRepresentationLine } from "@/components/layout/JurisdictionRepresentationLine";
import { FIRM_HERO } from "@/content/firm";

const TITLE = "Firm | Deimos Group";
const DESCRIPTION =
  "Deimos Group is an independent advisory platform for complex private-market opportunities — how the firm is built, who it serves, and how it engages.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, siteName: "Deimos Group", type: "website" },
  twitter: { card: "summary", title: TITLE, description: DESCRIPTION },
};

// Section order per SITE_COMPLETION_PLAN.md /firm spec: hero -> what Deimos
// is -> who Deimos serves -> why clients engage -> exposure & experience
// (merged in from the removed /experience page) -> confidentiality/mandate
// orientation -> selective engagement model -> jurisdictional
// representation line -> contact CTA. No leadership/team content anywhere
// in this sequence — resolved out of v1 scope entirely.
export default function FirmPage() {
  return (
    <>
      <PageHeader title={FIRM_HERO.title} description={FIRM_HERO.description} />
      <WhatDeimosIs />
      <WhoDeimosServes />
      <WhyClientsEngage />
      <FirmExposure />
      <FirmConfidentiality />
      <SelectiveEngagementModel />
      <JurisdictionRepresentationLine />
      <ClosingContactCTA />
    </>
  );
}
