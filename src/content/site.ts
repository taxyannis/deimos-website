export const SITE_NAME = "Deimos Group";

// Canonical production origin — the single source consumed by robots.ts,
// sitemap.ts and layout's metadataBase. Overridable via NEXT_PUBLIC_SITE_URL
// for preview/staging deployments; falls back to the production URL (assumed
// from the firm's domain, intake@deimos-group.com — update the fallback if the
// live host differs, e.g. an apex domain without www). Any trailing slash is
// stripped so `${SITE_URL}${path}` can never produce a doubled slash.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.deimos-group.com"
).replace(/\/+$/, "");

// v1 nav is deliberately lean (4 items): Situations, Sectors and Experience
// are not linked here — Situations/Sectors are optional Phase 2.5 pages not
// yet built, and Experience was removed from v1 entirely and merged into
// /firm's Exposure & Experience section (SITE_COMPLETION_PLAN.md).
// "Jurisdictions" renamed to "Coverage" across the public UI (client
// decision, v1 rebuild pass) — /coverage is the public route and
// /jurisdictions permanently redirects to it (next.config.ts).
export const MAIN_NAV = [
  { label: "Firm", href: "/firm" },
  { label: "Advisory", href: "/advisory" },
  { label: "Coverage", href: "/coverage" },
  { label: "Contact", href: "/contact" },
] as const;

// Footer nav per MASTER_WEBSITE_BRIEF.md §16 — a deliberately narrower set than MAIN_NAV.
export const FOOTER_NAV = [
  { label: "Firm", href: "/firm" },
  { label: "Advisory", href: "/advisory" },
  { label: "Coverage", href: "/coverage" },
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
  // Wording updated with the Jurisdictions -> Coverage rename and again to
  // add "special-market monitoring" (client-provided text) once the Golden
  // Triangle SEZ was added — same legal substance, broadened only to cover
  // the special-market entry accurately; never offices or regulated
  // operations.
  jurisdictional:
    "Selected coverage reflects current or recent market exposure, transaction review, advisory activity, partner coverage, structuring relevance or special-market monitoring, and does not imply physical office presence or regulated operations in each market.",
  capitalAccess:
    "References to capital access or capital formation refer to advisory, structuring, positioning and counterparty engagement support, and do not constitute a guarantee of financing or investment.",
} as const;

export const CONTACT_EMAIL = "intake@deimos-group.com";

// Verbatim, original-master-prompt.txt §9 (first of three approved
// formulations). Shared across /firm and, later, /jurisdictions — both
// pages carry the same discreet representation invitation.
export const JURISDICTION_REPRESENTATION_LINE =
  "Deimos selectively welcomes dialogue with qualified counterparties, local representatives and operating partners in jurisdictions not presently covered.";
