// Copy sourced verbatim from HOMEPAGE_BLUEPRINT.md / MASTER_WEBSITE_BRIEF.md /
// original-master-prompt.txt where quoted directly in those documents.
// Presentation (line breaks, grouping) may differ from the source docs;
// wording does not.

// Verbatim first sentence of /firm's WHAT_DEIMOS_IS.statement (firm.ts) — the
// site's one canonical self-identification sentence, reused here rather than
// redrafted. Closes a long-tracked gap (SITE_COMPLETION_PLAN.md's deferred
// items list: "missing explicit self-identification sentence on the
// homepage") — POSITIONING_COPY below describes what Deimos DOES, but the
// homepage never explicitly stated what Deimos IS, unlike /firm.
export const HOMEPAGE_SELF_IDENTIFICATION =
  "Deimos is an independent advisory platform built for complex private-market opportunities.";

export const POSITIONING_COPY =
  "Deimos advises on complex private-market transactions where value exists, but the transaction is not yet institutional. The firm supports sponsors, owners, operators, investors and public-sector stakeholders in defining structure, clarifying the capital requirement, and advancing the process toward execution.";

export const ADVISORY_INTRO =
  "Deimos structures complex private-market situations across a defined set of advisory disciplines.";

// The 4 confirmed homepage-visible pillars (HOMEPAGE_BLUEPRINT.md §8), each
// with its exact one-definition-sentence from the approved backbone
// (original-master-prompt.txt A/B/C/E) — not paraphrased.
export const ADVISORY_PILLARS = [
  {
    name: "Capital Access & Private Capital Formation",
    definition:
      "Deimos advises on the preparation, positioning and execution of private capital processes for complex transactions.",
  },
  {
    name: "Strategic Advisory & Transaction Structuring",
    definition:
      "Deimos helps turn commercially attractive but incomplete opportunities into structured, investable and executable transactions.",
  },
  {
    name: "M&A, Joint Ventures & Strategic Partnerships",
    definition:
      "Deimos advises on acquisition, disposal, merger, joint venture and partnership situations where capital, operators, sponsors and stakeholders need to be aligned.",
  },
  {
    name: "Infrastructure, Real Assets & Project Finance",
    definition:
      "Deimos advises on capital-intensive real asset, infrastructure and project-backed opportunities requiring structured capital, stakeholder coordination and investor readiness.",
  },
] as const;

export const ADVISORY_LINK = {
  label: "Review all advisory capabilities",
  href: "/advisory#capabilities",
};

export const CAPITAL_ACCESS_DISCLAIMER =
  "References to capital access or capital formation refer to advisory, structuring, positioning and counterparty engagement support, and do not constitute a guarantee of financing or investment.";

export const CONFIDENTIALITY_COPY =
  "Deimos engages on a selective, mandate-oriented basis. The firm prioritizes situations where transaction complexity, capital requirements, stakeholder alignment or cross-border execution require structured advisory work rather than passive introduction.";

// Identical to FIRM_CONFIDENTIALITY.principles (firm.ts) by design — the
// same already-approved five labels, not a new list invented for the
// homepage. Reused here so the Confidentiality section reads as more than
// one paragraph without introducing any claim that doesn't already appear,
// verbatim, on /firm.
export const CONFIDENTIALITY_PRINCIPLES = [
  "Confidentiality",
  "Selective Engagement",
  "Defined Advisory Workstreams",
  "Mandate Discipline",
  "Institutional Process Control",
] as const;

// Three parallel "X precedes Y" restatements of ideas already present in
// POSITIONING_COPY and elsewhere on the site — not new claims. Line 1
// echoes HERO_HEADLINE ("Where Structure Precedes Capital") directly; line
// 2 echoes WHY_CLIENTS_ENGAGE's "Cross-border situations require trusted
// stakeholder alignment" (firm.ts); line 3 echoes POSITIONING_COPY's own
// "value exists, but the transaction is not yet institutional" framing.
export const POSITIONING_PRINCIPLES = [
  "Structure precedes capital.",
  "Stakeholder alignment precedes outreach.",
  "Institutional readiness precedes process.",
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
  "Deimos operates across a selective set of cross-border markets where the firm is evaluating, structuring, advising on, or advancing transaction situations through direct activity or aligned counterparty coverage.";

export const JURISDICTION_REGIONS = [
  "Europe",
  "Asia-Pacific",
  "Middle East / Central Asia",
  "Africa",
  "Americas",
  "International Structuring",
] as const;

export const JURISDICTION_DISCLAIMER =
  "Selected coverage reflects current or recent market exposure, transaction review, advisory activity, partner coverage or structuring relevance, and does not imply physical office presence or regulated operations in each market.";

export const JURISDICTION_LINK = { label: "View selected coverage", href: "/coverage" };

// /experience (and its homepage Experience section) was removed from v1 —
// the same three anonymized exposure themes now live on /firm's Exposure &
// Experience section (src/content/firm.ts's FIRM_EXPOSURE), not here.

export const CONTACT_COPY =
  "For confidential transaction, capital formation or strategic advisory enquiries, contact Deimos Group.";

export const CONTACT_CTA = { label: "Contact Deimos", href: "/contact" };
