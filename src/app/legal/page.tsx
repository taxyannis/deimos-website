import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { LegalDisclaimers } from "@/components/legal/LegalDisclaimers";
import { LEGAL_HERO } from "@/content/legal";

const TITLE = "Legal / Disclaimer | Deimos Group";
const DESCRIPTION =
  "General disclaimer, capital access disclaimer and jurisdictional exposure disclaimer for Deimos Group.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, siteName: "Deimos Group", type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

// Section order per SITE_COMPLETION_PLAN.md /legal spec: hero -> the three
// approved disclaimers in full. No ClosingContactCTA — a legal reference
// page doesn't need a conversion path, per the plan's own component list.
export default function LegalPage() {
  return (
    <>
      <PageHeader title={LEGAL_HERO.title} description={LEGAL_HERO.description} />
      <LegalDisclaimers />
    </>
  );
}
