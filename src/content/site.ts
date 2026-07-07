export const SITE_NAME = "Deimos Group";

// v1 nav is deliberately lean (4 items): Situations, Sectors and Experience
// are not linked here — Situations/Sectors are optional Phase 2.5 pages not
// yet built, and Experience was removed from v1 entirely and merged into
// /firm's Exposure & Experience section (SITE_COMPLETION_PLAN.md).
export const MAIN_NAV = [
  { label: "Firm", href: "/firm" },
  { label: "Advisory", href: "/advisory" },
  { label: "Jurisdictions", href: "/jurisdictions" },
  { label: "Contact", href: "/contact" },
] as const;

// Footer nav per MASTER_WEBSITE_BRIEF.md §16 — a deliberately narrower set than MAIN_NAV.
export const FOOTER_NAV = [
  { label: "Firm", href: "/firm" },
  { label: "Advisory", href: "/advisory" },
  { label: "Jurisdictions", href: "/jurisdictions" },
  { label: "Contact", href: "/contact" },
  { label: "Legal / Disclaimer", href: "/legal" },
  { label: "Privacy Policy", href: "/privacy" },
] as const;

// Three disclaimers, verbatim from MASTER_WEBSITE_BRIEF.md §16 / GRILL_ME_CRITIQUE.md.
// Every instance of capital-access language or jurisdictional exposure elsewhere on the
// site must sit near its matching disclaimer, per the "hedge travels with the claim" rule —
// this footer copy is the sitewide baseline, not the only place these should appear.
export const DISCLAIMERS = {
  general:
    "Information on this website is provided for general institutional and informational purposes only. It does not constitute an offer to sell, a solicitation to buy, investment advice, legal advice, tax advice or regulated financial advice. Deimos Group engages selectively and subject to applicable laws, documentation, mandate terms and jurisdictional requirements.",
  jurisdictional:
    "Selected jurisdictions reflect current or recent market exposure, transaction review, advisory activity, partner coverage or structuring relevance, and do not imply physical office presence or regulated operations in each market.",
  capitalAccess:
    "References to capital access or capital formation refer to advisory, structuring, positioning and counterparty engagement support, and do not constitute a guarantee of financing or investment.",
} as const;

export const CONTACT_EMAIL = "intake@deimos-group.com";

// Verbatim, original-master-prompt.txt §9 (first of three approved
// formulations). Shared across /firm and, later, /jurisdictions — both
// pages carry the same discreet representation invitation.
export const JURISDICTION_REPRESENTATION_LINE =
  "Deimos selectively welcomes dialogue with qualified counterparties, local representatives and operating partners in jurisdictions not presently covered.";
