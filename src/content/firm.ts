// Copy sourced verbatim from original-master-prompt.txt §10/§11/§14/§15 and
// MASTER_WEBSITE_BRIEF.md §1, per SITE_COMPLETION_PLAN.md's /firm spec.
// No leadership, founder biography, team profiles or pedigree content —
// resolved out of v1 scope entirely, not merely deferred.

export const FIRM_HERO = {
  title: "Firm",
  description:
    "An independent advisory platform for complex private-market opportunities — how Deimos is built, who it serves, and how it engages.",
};

export const WHAT_DEIMOS_IS = {
  heading: "What Deimos Is",
  statement:
    "Deimos is an independent advisory platform built for complex private-market opportunities. It works with owners, sponsors, investors, operators and public-sector stakeholders where institutional capital requires more than a standard introduction process.",
  notPositioning:
    "Deimos is explicitly not: a broker, finder, passive introducer, listing platform, venture studio, fund, accelerator, AI company, real estate agency, generic consultancy, or investor-matching platform.",
};

export const WHO_DEIMOS_SERVES = {
  heading: "Who Deimos Serves",
  intro: "Deimos works with a defined range of counterparties across complex private-market situations.",
  counterparties: [
    "Asset owners",
    "Sponsors",
    "Entrepreneurs",
    "Developers",
    "Operators",
    "Family offices",
    "HNWIs",
    "Private investors",
    "Strategic investors",
    "Capital partners",
    "Public-sector stakeholders",
    "Concession holders",
    "Infrastructure sponsors",
    "Real asset developers",
    "Intermediaries with credible transaction access",
    "Government-linked and sovereign-linked counterparties",
  ] as const,
};

export const WHY_CLIENTS_ENGAGE = {
  heading: "Where Deimos Is Engaged",
  statement:
    "Deimos is built for situations where value exists, but the transaction is not yet institutional. The firm helps define the structure, sharpen the capital story, identify gaps, align stakeholders, prepare the opportunity for investor review and manage the process required to advance toward execution.",
  reasons: [
    "Complex transactions require structure before capital.",
    "Early-stage opportunities often lack investor-ready materials.",
    "Cross-border situations require trusted stakeholder alignment.",
    "Real assets and infrastructure require disciplined capital sequencing.",
    "Sponsors need credible access to aligned capital partners.",
    "Investors need sharper diligence, risk framing and execution pathways.",
    "Operators and owners need more than passive introductions.",
  ] as const,
};

// /experience was removed as a standalone page for v1 and merged here at a
// high level (SITE_COMPLETION_PLAN.md) — themes are the exact three
// anonymized exposure themes previously shown on the homepage, never
// tombstones, named clients or claimed completed mandates. The specific
// US$21.2bn figure is deliberately NOT repeated here: /firm's register is
// identity/posture, not metrics, and the hero/homepage already carry that
// number with its required hedge — omitting it here avoids a second,
// less-hedged repetition in a page context built around restraint.
export const FIRM_EXPOSURE = {
  heading: "Exposure & Experience",
  statement:
    "Deimos's principal, affiliated advisory and transaction exposure spans a range of cross-border, private-market situations. The themes below are illustrative categories of that exposure, not a record of specific closed transactions, named clients or completed mandates.",
  themes: [
    "Infrastructure and logistics opportunities.",
    "Energy and natural resource situations.",
    "Sovereign-linked and concession-linked processes.",
  ] as const,
};

// Statement is identical to homepage CONFIDENTIALITY_COPY / advisory
// MANDATE_ORIENTATION.statement by design — MASTER_WEBSITE_BRIEF.md §14
// requires this exact language to appear "prominently on Firm, not buried."
// The principles list is new-to-this-page framing of the same source
// section's own "this section should communicate" bullets (§14), minus
// "no open-ended broker positioning" — that idea already appears explicitly
// in What Deimos Is, so repeating it here would be redundant rather than
// reinforcing.
export const FIRM_CONFIDENTIALITY = {
  heading: "Confidentiality & Mandate Orientation",
  statement:
    "Deimos engages on a selective, mandate-oriented basis. The firm prioritizes situations where transaction complexity, capital requirements, stakeholder alignment or cross-border execution require structured advisory work rather than passive introduction.",
  principles: [
    "Confidentiality",
    "Selective Engagement",
    "Defined Advisory Workstreams",
    "Mandate Discipline",
    "Institutional Process Control",
  ] as const,
};

// Distinct from Confidentiality & Mandate Orientation above: that section
// establishes identity/posture, this one describes the actual selection
// and progression mechanics. Statement is the same process description
// used on /advisory's Mandate Orientation & Process Discipline section;
// the criteria list is drawn from the qualifying clause of the statement
// itself, not newly invented.
export const SELECTIVE_ENGAGEMENT = {
  heading: "Selective Engagement Model",
  statement:
    "Deimos begins by defining the transaction reality: capital requirement, stakeholder position, documentation gaps, execution risk and investor readiness. The firm then supports the structuring, materials, counterparty strategy and process discipline required to advance credible opportunities toward mandate and execution.",
  criteria: [
    "Transaction Complexity",
    "Capital Requirements",
    "Stakeholder Alignment",
    "Cross-Border Execution",
  ] as const,
};
