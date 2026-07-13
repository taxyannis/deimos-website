// Copy sourced verbatim from MASTER_WEBSITE_BRIEF.md §15 / original-master-
// prompt.txt §17 (contact statement, intake email, inquiry categories) per
// SITE_COMPLETION_PLAN.md's /contact spec. v1 uses categorized mailto:
// links only — no backend, no third-party form service, no fake submission
// behavior (SITE_COMPLETION_PLAN.md's shared-infrastructure resolution).

import { CONTACT_EMAIL, INTAKE_EMAIL, OFFICE_EMAIL, PARTNERS_EMAIL } from "@/content/site";

export const CONTACT_HERO = {
  title: "Contact",
  description:
    "A direct, confidential channel for transaction, capital formation and strategic advisory enquiries.",
};

export const CONTACT_STATEMENT =
  "Deimos reviews a limited number of enquiries at any one time. For confidential transaction, capital formation, strategic partnership or coverage enquiries, contact the firm directly.";

// The /contact confidentiality note. It still carries the explicit boundary
// clause (listing platform / open broker network / passive introducer) that the
// homepage and /advisory have since dropped — /contact keeps it deliberately, as
// the one surface where the boundary is stated to prospective enquirers.
export const CONTACT_CONFIDENTIALITY_NOTE =
  "Deimos engages selectively, through defined advisory mandates. The firm's role is to reduce capital risk through structure, process discipline and execution control. It does not act as a listing platform, an open broker network or a passive introducer.";

export type InquiryCategory = {
  id: string;
  label: string;
  subject: string;
  email: string;
};

// Five categories, each routed to the address that owns the stream. General
// enquiries go to CONTACT_EMAIL (contact@); transaction & capital advisory to
// INTAKE_EMAIL (intake@); partnerships and investor dialogue to PARTNERS_EMAIL;
// press to OFFICE_EMAIL. The subject line mirrors the category so the recipient
// sees the stream at a glance.
export const INQUIRY_CATEGORIES: InquiryCategory[] = [
  {
    id: "general-enquiries",
    label: "General enquiries",
    subject: "General enquiry",
    email: CONTACT_EMAIL,
  },
  {
    id: "transaction-capital-advisory",
    label: "Transaction & capital advisory",
    subject: "Transaction & capital advisory enquiry",
    email: INTAKE_EMAIL,
  },
  {
    id: "strategic-partnerships",
    label: "Strategic partnerships",
    subject: "Strategic partnerships enquiry",
    email: PARTNERS_EMAIL,
  },
  {
    id: "investor-capital-partner-dialogue",
    label: "Investor & capital partner dialogue",
    subject: "Investor & capital partner dialogue",
    email: PARTNERS_EMAIL,
  },
  {
    id: "press",
    label: "Press",
    subject: "Press enquiry",
    email: OFFICE_EMAIL,
  },
] as const;

// Single source of mailto: construction so every link on this page builds
// its href identically. The address now varies per category (routing above),
// so both the recipient and the subject are passed in; encodeURIComponent is
// kept for safety even though current subject lines don't require it.
export function inquiryMailto(email: string, subject: string) {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}

export const DIRECT_EMAIL_MAILTO = `mailto:${CONTACT_EMAIL}`;
