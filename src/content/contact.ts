// Copy sourced verbatim from MASTER_WEBSITE_BRIEF.md §15 / original-master-
// prompt.txt §17 (contact statement, intake email, inquiry categories) per
// SITE_COMPLETION_PLAN.md's /contact spec. v1 uses categorized mailto:
// links only — no backend, no third-party form service, no fake submission
// behavior (SITE_COMPLETION_PLAN.md's shared-infrastructure resolution).

import { CONTACT_EMAIL } from "@/content/site";

export const CONTACT_HERO = {
  title: "Contact",
  description:
    "A single, direct channel for confidential transaction, capital formation and strategic advisory dialogue with Deimos Group.",
};

export const CONTACT_STATEMENT =
  "For confidential transaction, capital formation or strategic advisory enquiries, contact Deimos Group.";

// Identical to CONFIDENTIALITY_COPY (homepage.ts) / FIRM_CONFIDENTIALITY.statement
// (firm.ts) / MANDATE_ORIENTATION.statement (advisory.ts) by design — the same
// approved sentence, not a new claim invented for this page.
export const CONTACT_CONFIDENTIALITY_NOTE =
  "Deimos engages on a selective, mandate-oriented basis. The firm prioritizes situations where transaction complexity, capital requirements, stakeholder alignment or cross-border execution require structured advisory work rather than passive introduction.";

export type InquiryCategory = {
  id: string;
  label: string;
  subject: string;
};

// Six categories and their exact subject lines, per SITE_COMPLETION_PLAN.md's
// /contact spec — order matches the spec's own ordering.
export const INQUIRY_CATEGORIES: InquiryCategory[] = [
  {
    id: "transaction-advisory",
    label: "Transaction advisory",
    subject: "Transaction advisory enquiry",
  },
  {
    id: "capital-formation",
    label: "Capital formation",
    subject: "Capital formation enquiry",
  },
  {
    id: "strategic-partnership",
    label: "Strategic partnership",
    subject: "Strategic partnership enquiry",
  },
  {
    id: "jurisdictional-representation",
    label: "Jurisdictional representation",
    subject: "Jurisdictional representation enquiry",
  },
  {
    id: "investor-sponsor-dialogue",
    label: "Investor / sponsor dialogue",
    subject: "Investor / sponsor dialogue",
  },
  {
    id: "general-enquiries",
    label: "General enquiries",
    subject: "General enquiry",
  },
] as const;

// Single source of mailto: construction so every link on this page builds
// its href identically (encodeURIComponent for safety, not because subject
// lines currently contain characters that need it).
export function inquiryMailto(subject: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

export const DIRECT_EMAIL_MAILTO = `mailto:${CONTACT_EMAIL}`;
