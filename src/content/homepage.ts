// Copy originally sourced from HOMEPAGE_BLUEPRINT.md / MASTER_WEBSITE_BRIEF.md /
// original-master-prompt.txt, then refined in the sitewide content pass
// (2026-07: broader positive framing, em dashes removed from public copy,
// restrictive "non-standard / before capital can move" language reduced).
// Legal boundaries (no broker/introducer role, no guaranteed financing)
// are preserved exactly in substance.

// Homepage self-identification / positioning block (the second homepage
// block). Client-specified wording (2026-07); do not paraphrase. This
// intentionally DIVERGES from /firm's WHAT_DEIMOS_IS.statement, which keeps
// the longer capital-risk identity sentence — the two surfaces are no longer
// held identical, so don't "re-sync" them.
export const HOMEPAGE_SELF_IDENTIFICATION =
  "Deimos is an independent private-market advisory firm working across transactions, partnerships and capital situations where structure, process discipline and execution control determine whether capital and counterparties can engage credibly.";

export const POSITIONING_COPY =
  "The firm supports principals, investors and institutions by clarifying the transaction, defining the capital requirement, aligning stakeholders, strengthening materials and controlling the process around serious engagement.";

// Supporting thesis for the advisory preview — one connected process across
// non-standard transactions, framed around what determines credible capital
// engagement, not a services menu. Deliberately does NOT restate the
// "structure, process discipline and execution control" triad (already
// carried by the adjacent Positioning and Mandate Discipline sections on this
// page); instead it sharpens the anti-introduction posture — the firm's value
// is preparation, not access to capital.
export const ADVISORY_INTRO =
  "The firm advises on transactions, strategic assets and cross-border initiatives where transaction structure, capital strategy and execution discipline determine the credibility of capital engagement.";

// Homepage-visible advisory preview — connected workstreams within
// non-standard transactions, not a capability inventory. Each is a short
// name plus a single condition-and-role sentence; the full seven-workstream
// detail lives on /advisory. Names map to /advisory's capability set.
export const ADVISORY_PILLARS = [
  {
    name: "Capital Formation",
    definition:
      "Preparing and positioning a private capital process so financing can be underwritten on institutional terms, not merely sought.",
  },
  {
    name: "Transaction Architecture",
    definition:
      "Framing the structure, terms and materials a situation requires before institutional counterparties will engage.",
  },
  {
    name: "Strategic Counterparties",
    definition:
      "Identifying and aligning the sponsors, operators and capital partners a transaction depends on.",
  },
  {
    name: "Special Situations",
    definition:
      "Advising on recapitalizations, repositioning and restructurings that call for disciplined structure and execution.",
  },
  {
    name: "Execution Support",
    definition:
      "Carrying a transaction through diligence, negotiation and process control to a controlled close.",
  },
] as const;

export const ADVISORY_LINK = {
  label: "Review all advisory capabilities",
  href: "/advisory#capabilities",
};

export const CAPITAL_ACCESS_DISCLAIMER =
  "References to capital access or capital formation refer to advisory, structuring, positioning and counterparty engagement support, and do not constitute a guarantee of financing or investment.";

// Mandate Discipline statement — kept verbatim across the homepage, /firm,
// /advisory and /contact so the firm's engagement posture reads identically
// wherever it appears. Reducing capital risk is the firm's role, never
// eliminating it or guaranteeing an outcome; the closing clause preserves
// the broker/listing-platform boundary.
export const CONFIDENTIALITY_COPY =
  "Deimos engages selectively, through defined advisory mandates. The firm's role is to reduce capital risk through structure, process discipline and execution control. It does not act as a listing platform, an open broker network or a passive introducer.";

// Identical to FIRM_CONFIDENTIALITY.principles (firm.ts) by design — the
// same already-approved five labels, not a new list invented for the
// homepage. Reused here so the Confidentiality section reads as more than
// one paragraph without introducing any claim that doesn't already appear,
// verbatim, on /firm.
export const CONFIDENTIALITY_PRINCIPLES = [
  "Confidentiality",
  "Selective Engagement",
  "Defined Advisory Scope",
  "Mandate Discipline",
  "Institutional Process Control",
] as const;

// The four disciplines Deimos brings to a non-standard transaction — the
// core of the positioning frame, shown as a compact column beside the
// positioning statement. Not activities; the standards the work is held to.
export const POSITIONING_PRINCIPLES = [
  "Transaction clarity",
  "Capital discipline",
  "Counterparty alignment",
  "Execution control",
] as const;

// Labels only on the homepage — full step descriptions live on the Experience
// subpage (HOMEPAGE_BLUEPRINT.md §14).
export const PROCESS_STEPS = [
  "Situation Assessment",
  "Structuring & Diligence",
  "Capital Strategy",
  "Counterparty Positioning",
  "Process Management",
  "Execution Support",
] as const;

// "Coverage" is the public-facing term as of the v1 rebuild (rename from
// "Jurisdictions" across nav, footer, CTAs and page title).
export const JURISDICTION_HEADLINE = "Selected Market Coverage";

export const JURISDICTION_SUBTEXT =
  "Selected coverage reflects markets, structuring jurisdictions and special situations relevant to transaction review, capital positioning, partner coverage and strategic market monitoring.";

export const JURISDICTION_REGIONS = [
  "Europe",
  "Asia-Pacific",
  "Middle East / Central Asia",
  "Africa",
  "Americas",
  "International Structuring",
] as const;

export const JURISDICTION_DISCLAIMER =
  "Selected coverage reflects current or recent market exposure, transaction review, advisory activity, partner coverage, structuring relevance or special-market monitoring, and does not imply physical office presence or regulated operations in each market.";

export const JURISDICTION_LINK = { label: "View selected coverage", href: "/coverage" };

// /experience (and its homepage Experience section) was removed from v1 —
// the same three anonymized exposure themes now live on /firm's Exposure &
// Experience section (src/content/firm.ts's FIRM_EXPOSURE), not here.

export const CONTACT_COPY =
  "Deimos engages selectively. For confidential transaction, capital formation or strategic advisory enquiries, contact the firm directly.";

export const CONTACT_CTA = { label: "Contact Deimos", href: "/contact" };
