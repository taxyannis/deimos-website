import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { PrivacyPlaceholder } from "@/components/privacy/PrivacyPlaceholder";
import { PRIVACY_HERO } from "@/content/privacy";

const TITLE = "Privacy Policy | Deimos Group";
const DESCRIPTION =
  "Placeholder privacy policy for Deimos Group, pending final legal review before public launch.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, siteName: "Deimos Group", type: "website" },
  twitter: { card: "summary", title: TITLE, description: DESCRIPTION },
};

// Section order per SITE_COMPLETION_PLAN.md /privacy spec: hero ->
// placeholder notice + information/use statements + contact email. No
// ClosingContactCTA — a placeholder legal page doesn't need a conversion
// path, matching /legal's component list.
export default function PrivacyPage() {
  return (
    <>
      <PageHeader title={PRIVACY_HERO.title} description={PRIVACY_HERO.description} />
      <PrivacyPlaceholder />
    </>
  );
}
