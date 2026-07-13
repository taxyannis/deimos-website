// Homepage copy, governed by src/content/CONTENT_DOCTRINE.md. Positioning is
// capability-led (advisory mandates, capital situations, strategic assets,
// selected proprietary transactions); legal boundaries (no broker/introducer
// role, no guaranteed financing) are preserved in substance.

// Homepage positioning block, paragraph 1 (CONTENT_DOCTRINE.md): the fields
// Deimos operates across. Paragraph 2 (POSITIONING_COPY) states who it works
// with and what it does for them.
export const HOMEPAGE_SELF_IDENTIFICATION =
  "Deimos operates across strategic advisory, capital formation, transaction architecture and private-market partnerships.";

export const POSITIONING_COPY =
  "The firm works with principals, investors and institutions to structure transactions, align counterparties and support disciplined execution.";

// Intro line for the homepage advisory preview (CONTENT_DOCTRINE.md): advisory
// framed around the decisions that shape a mandate, not a services menu.
export const ADVISORY_INTRO =
  "Advisory at Deimos is structured around the decisions that shape a mandate: strategy, capital, counterparties and execution.";

// Homepage-visible advisory preview — the six capability buckets mirrored from
// /advisory (CONTENT_DOCTRINE.md), each a short label plus a one-line
// definition. Full detail lives on /advisory.
export const ADVISORY_PILLARS = [
  {
    name: "Strategic Advisory",
    definition:
      "Strategic options, capital decisions and transaction paths framed for principals, investors and institutions.",
  },
  {
    name: "Capital Formation",
    definition:
      "Capital requirements, structures and counterparties positioned around a credible financing strategy.",
  },
  {
    name: "Transaction Architecture",
    definition:
      "Terms, documentation and risk allocation shaped into an executable transaction structure.",
  },
  {
    name: "Private Capital & Partnerships",
    definition:
      "Sponsors, operators and capital partners aligned around roles, economics and governance.",
  },
  {
    name: "Special Situations",
    definition:
      "Recapitalizations, restructurings and repositionings approached through structure, capital strategy and process control.",
  },
  {
    name: "Selected Proprietary Transactions",
    definition:
      "Selective originated or sponsored opportunities governed by defined role, alignment and execution process.",
  },
] as const;

export const ADVISORY_LINK = {
  label: "Review all advisory capabilities",
  href: "/advisory#capabilities",
};

export const CAPITAL_ACCESS_DISCLAIMER =
  "References to capital access or capital formation refer to advisory, structuring, positioning and counterparty engagement support, and do not constitute a guarantee of financing or investment.";

// Mandate Discipline statement for the homepage Confidentiality section.
// Reducing capital risk is the firm's role, never eliminating it or
// guaranteeing an outcome. The homepage deliberately carries no defensive
// boundary clause (benchmark posture: no defensive homepage explanations);
// the broker/listing-platform boundary lives quietly on /firm's Operating
// Posture and /contact's confidentiality note.
export const CONFIDENTIALITY_COPY =
  "Deimos engages selectively, through defined advisory mandates. The firm's role is to reduce capital risk through structure, process and execution.";

// Five engagement-posture labels shown beside the Mandate Discipline statement
// so the Confidentiality section reads as more than one paragraph.
export const CONFIDENTIALITY_PRINCIPLES = [
  "Confidentiality",
  "Selective Engagement",
  "Defined Advisory Scope",
  "Mandate Discipline",
  "Institutional Process Control",
] as const;

// The four operating pillars, shown as a compact column beside the positioning
// statement — the canonical disciplines named as pillars, not a service list.
// Kept deliberately terse so they read as a standing frame rather than echoing
// the paragraph's prose.
export const POSITIONING_PRINCIPLES = [
  "Transaction architecture",
  "Capital strategy",
  "Counterparty alignment",
  "Execution discipline",
] as const;

// Process-step labels shown on the homepage; full descriptions live on /advisory.
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

// Shared /coverage hero intro (consumed by JURISDICTIONS_HERO.description).
export const JURISDICTION_SUBTEXT =
  "International advisory coverage across selected markets, structuring jurisdictions and cross-border situations.";

// Homepage coverage-teaser line only. Kept separate from JURISDICTION_SUBTEXT
// (the /coverage hero subtext) so the homepage can read more assertively
// without changing the Coverage page, which is out of scope for this pass.
export const HOMEPAGE_COVERAGE_TEASER =
  "Active across selected global markets, structuring jurisdictions and cross-border situations.";

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

export const CONTACT_COPY =
  "Deimos engages selectively. For confidential transaction, capital formation or strategic advisory enquiries, contact the firm directly.";

export const CONTACT_CTA = { label: "Contact Deimos", href: "/contact" };
