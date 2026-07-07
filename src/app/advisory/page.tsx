import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ClosingContactCTA } from "@/components/layout/ClosingContactCTA";
import { WhatWeAdviseOn } from "@/components/advisory/WhatWeAdviseOn";
import { AdvisoryPillars } from "@/components/advisory/AdvisoryPillars";
import { MandateProcess } from "@/components/advisory/MandateProcess";
import { ADVISORY_HERO } from "@/content/advisory";

const TITLE = "Advisory | Deimos Group";
const DESCRIPTION =
  "How Deimos structures, positions and advances complex private-market transactions — capital access, transaction structuring, M&A, special situations, infrastructure, sovereign-linked opportunities, and execution management.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, siteName: "Deimos Group", type: "website" },
  twitter: { card: "summary", title: TITLE, description: DESCRIPTION },
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
