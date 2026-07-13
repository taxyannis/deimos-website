// Copy sourced verbatim from MASTER_WEBSITE_BRIEF.md §15 / original-master-
// prompt.txt §17 (contact statement, intake email, inquiry categories) per
// SITE_COMPLETION_PLAN.md's /contact spec. v1 uses categorized mailto:
// links only — no backend, no third-party form service, no fake submission
// behavior (SITE_COMPLETION_PLAN.md's shared-infrastructure resolution).

import { CONTACT_EMAIL } from "@/content/site";

export const CONTACT_HERO = {
  title: "Contact",
  description:
    "A direct, confidential channel for transaction, capital formation and strategic advisory enquiries.",
};

export const CONTACT_STATEMENT =
  "Deimos reviews a limited number of enquiries at any one time. For confidential transaction, capital formation, strategic partnership or coverage enquiries, contact the firm directly.";

// Identical to CONFIDENTIALITY_COPY (homepage.ts) / FIRM_CONFIDENTIALITY.statement
// (firm.ts) / MANDATE_ORIENTATION.statement (advisory.ts) by design — the same
// Mandate Discipline sentence, not a new claim invented for this page.
export const CONTACT_CONFIDENTIALITY_NOTE =
  "Deimos engages selectively, through defined advisory mandates. The firm's role is to reduce capital risk through structure, process discipline and execution control. It does not act as a listing platform, an open broker network or a passive introducer.";

export type InquiryCategory = {
  id: string;
  label: string;
  subject: string;
  email: string;
};

// Five categories, routed to the address that owns each stream. Transaction
// advisory and capital formation (including any public-private / concession
// enquiries) are consolidated under "Transaction & capital advisory", which
// keeps the intake@ address; the former Jurisdictional representation and
// standalone Public-private categories were removed. Subject line mirrors the
// category so the recipient sees the stream at a glance. CONTACT_EMAIL
// (intake@) stays the transaction-intake address; the direct/closing channel
// (DIRECT_EMAIL_MAILTO) is unchanged.
export const INQUIRY_CATEGORIES: InquiryCategory[] = [
  {
    id: "general-enquiries",
    label: "General enquiries",
    subject: "General enquiry",
    email: "contact@deimos-group.com",
  },
  {
    id: "transaction-capital-advisory",
    label: "Transaction & capital advisory",
    subject: "Transaction & capital advisory enquiry",
    email: CONTACT_EMAIL,
  },
  {
    id: "strategic-partnerships",
    label: "Strategic partnerships",
    subject: "Strategic partnerships enquiry",
    email: "partners@deimos-group.com",
  },
  {
    id: "investor-capital-partner-dialogue",
    label: "Investor & capital partner dialogue",
    subject: "Investor & capital partner dialogue",
    email: "partners@deimos-group.com",
  },
  {
    id: "press",
    label: "Press",
    subject: "Press enquiry",
    email: "office@deimos-group.com",
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
