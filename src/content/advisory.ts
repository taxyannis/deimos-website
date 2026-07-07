// Copy sourced verbatim from original-master-prompt.txt (pillar definitions)
// and MASTER_WEBSITE_BRIEF.md (mandate-orientation, process sequence) per
// SITE_COMPLETION_PLAN.md's /advisory spec. "Typical situations" per pillar
// cross-reference the already-approved Selected Situations (§11) and
// Experience exposure themes (§14) — no new claims invented for this page.
//
// /services was merged back into this page for v1 (SITE_COMPLETION_PLAN.md):
// a separate practical-capabilities page duplicated this content and read as
// generic-consultancy padding. This page — via the 7 pillars below, rendered
// under the "Advisory Capabilities" heading at #capabilities — is now the
// single public surface for both the strategic advisory model and what
// Deimos can actually be engaged for. Kept deliberately concise: definition
// + typical situations per pillar, not a long tactical activity inventory.

export const ADVISORY_HERO = {
  title: "Advisory",
  description:
    "How Deimos structures, positions and advances complex private-market transactions.",
};

export const WHAT_WE_ADVISE_ON = {
  heading: "What Deimos Advises On",
  body: "Deimos advises on complex private-market transactions where capital access, transaction structure, stakeholder alignment and execution discipline determine whether an opportunity can move from interest to mandate. Deimos is not a passive introducer — it works across defined advisory workstreams to sharpen the transaction, prepare the capital narrative, identify execution gaps, align counterparties and support the process required to advance complex opportunities.",
};

export type AdvisoryPillar = {
  id: string;
  name: string;
  definition: string;
  typicalSituations: string;
};

export const ADVISORY_PILLARS: AdvisoryPillar[] = [
  {
    id: "capital-access",
    name: "Capital Access & Private Capital Formation",
    definition:
      "Deimos advises on the preparation, positioning and execution of private capital processes for complex transactions.",
    typicalSituations:
      "Completion capital and refinancing; growth capital and private placements.",
  },
  {
    id: "strategic-advisory",
    name: "Strategic Advisory & Transaction Structuring",
    definition:
      "Deimos helps turn commercially attractive but incomplete opportunities into structured, investable and executable transactions.",
    typicalSituations:
      "Early-stage opportunities requiring bankability work before financing; under-documented opportunities requiring institutional preparation.",
  },
  {
    id: "ma-jv-partnerships",
    name: "M&A, Joint Ventures & Strategic Partnerships",
    definition:
      "Deimos advises on acquisition, disposal, merger, joint venture and partnership situations where capital, operators, sponsors and stakeholders need to be aligned.",
    typicalSituations:
      "Sponsor-led acquisitions and platform formation; cross-border M&A and joint ventures.",
  },
  {
    id: "special-situations",
    name: "Special Situations, Restructuring & Recapitalizations",
    definition:
      "Deimos works on situations where assets, companies or projects require capital, repositioning, stakeholder alignment or restructuring before they can move forward.",
    typicalSituations:
      "Special situations and distressed or under-capitalized assets; stalled developments requiring recapitalization or repositioning.",
  },
  {
    id: "infrastructure",
    name: "Infrastructure, Real Assets & Project Finance",
    definition:
      "Deimos advises on capital-intensive real asset, infrastructure and project-backed opportunities requiring structured capital, stakeholder coordination and investor readiness.",
    typicalSituations:
      "Infrastructure and logistics opportunities; energy and natural resource situations.",
  },
  {
    id: "sovereign-linked",
    name: "Sovereign-Linked, Public-Private & Concession Opportunities",
    definition:
      "Deimos supports complex opportunities involving government-linked stakeholders, public-sector assets, concessions, privatizations, infrastructure mandates and development-linked capital.",
    typicalSituations:
      "Public-private, concession and sovereign-linked opportunities; sovereign-linked and concession-linked processes.",
  },
  {
    id: "bankability-execution",
    name: "Bankability, Diligence & Execution Management",
    definition:
      "Deimos helps prepare transactions for serious investor review — identifying what is missing, what must be clarified, and what needs to be structured — and can manage the workstreams required to advance a transaction through diligence, negotiation and execution.",
    typicalSituations:
      "Early-stage opportunities requiring bankability work before financing; under-documented opportunities requiring institutional preparation.",
  },
];

export const MANDATE_ORIENTATION = {
  heading: "Mandate Orientation & Process Discipline",
  statement:
    "Deimos engages on a selective, mandate-oriented basis. The firm prioritizes situations where transaction complexity, capital requirements, stakeholder alignment or cross-border execution require structured advisory work rather than passive introduction.",
  processDescription:
    "Deimos begins by defining the transaction reality: capital requirement, stakeholder position, documentation gaps, execution risk and investor readiness. The firm then supports the structuring, materials, counterparty strategy and process discipline required to advance credible opportunities toward mandate and execution.",
};

export const PROCESS_STEPS = [
  "Situation Assessment",
  "Structuring & Diligence",
  "Capital Strategy",
  "Counterparty Positioning",
  "Process Management",
  "Execution Support",
] as const;
