import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { WhatWeAdviseOn } from "@/components/advisory/WhatWeAdviseOn";
import { AdvisoryPillars } from "@/components/advisory/AdvisoryPillars";
import { MandateProcess } from "@/components/advisory/MandateProcess";
import { ADVISORY_HERO } from "@/content/advisory";

const TITLE = "Advisory | Deimos Group";
const DESCRIPTION =
  "Independent strategic advisory across private capital, transactions, partnerships and selected proprietary opportunities.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, siteName: "Deimos Group", type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

// Section order per SITE_COMPLETION_PLAN.md /advisory spec:
// hero -> what we advise on -> 7 pillars -> mandate/process. The closing
// contact band was removed sitewide; the footer carries the contact path.
export default function AdvisoryPage() {
  return (
    <>
      <PageHeader title={ADVISORY_HERO.title} description={ADVISORY_HERO.description} />
      <WhatWeAdviseOn />
      <AdvisoryPillars />
      <MandateProcess />
    </>
  );
}
