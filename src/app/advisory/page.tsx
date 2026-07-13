import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ClosingContactCTA } from "@/components/layout/ClosingContactCTA";
import { WhatWeAdviseOn } from "@/components/advisory/WhatWeAdviseOn";
import { AdvisoryPillars } from "@/components/advisory/AdvisoryPillars";
import { MandateProcess } from "@/components/advisory/MandateProcess";
import { ADVISORY_HERO } from "@/content/advisory";

const TITLE = "Advisory | Deimos Group";
const DESCRIPTION =
  "Deimos advises across strategic advisory, capital formation, transaction architecture, private capital and partnerships, special situations and selected proprietary transactions.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, siteName: "Deimos Group", type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

// Section order per SITE_COMPLETION_PLAN.md /advisory spec:
// hero -> what we advise on -> 7 pillars -> mandate/process -> contact CTA.
export default function AdvisoryPage() {
  return (
    <>
      <PageHeader title={ADVISORY_HERO.title} description={ADVISORY_HERO.description} />
      <WhatWeAdviseOn />
      <AdvisoryPillars />
      <MandateProcess />
      <ClosingContactCTA />
    </>
  );
}
