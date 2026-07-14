import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactStatement } from "@/components/contact/ContactStatement";
import { InquiryCategories } from "@/components/contact/InquiryCategories";
import { ContactConfidentiality } from "@/components/contact/ContactConfidentiality";
import { CONTACT_HERO } from "@/content/contact";

const TITLE = "Contact | Deimos Group";
const DESCRIPTION =
  "A direct, confidential channel for transaction, capital formation and strategic advisory enquiries to Deimos Group.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, siteName: "Deimos Group", type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

// Section order per SITE_COMPLETION_PLAN.md /contact spec: hero -> contact
// statement -> categorized mailto: inquiry links -> confidentiality/
// selective-engagement note. No ClosingContactCTA here — this page already IS
// the contact destination every other page's contact CTA points to. The
// former trailing direct-email + disclaimer block was removed to keep the
// page sharp; the categorized inquiry links remain the primary routing.
export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title={CONTACT_HERO.title} description={CONTACT_HERO.description} />
      <ContactStatement />
      <InquiryCategories />
      <ContactConfidentiality />
    </>
  );
}
