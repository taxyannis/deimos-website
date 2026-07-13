// Copy originally sourced from original-master-prompt.txt (pillar definitions)
// and MASTER_WEBSITE_BRIEF.md (mandate-orientation, process sequence) per
// SITE_COMPLETION_PLAN.md's /advisory spec, then refined in the sitewide
// content pass (2026-07: positive framing, em dashes removed, repeated
// "Where/When..." openings reduced). "Typical situations" per pillar
// cross-reference the already-approved Selected Situations (§11) and
// Experience exposure themes (§14) — no new claims invented for this page.
//
// /services was merged back into this page for v1 (SITE_COMPLETION_PLAN.md):
// a separate practical-capabilities page duplicated this content and read as
// generic-consultancy padding. This page — via the six capability buckets
// below, rendered under the "Advisory Capabilities" heading at #capabilities —
// is now the single public surface for both the strategic advisory model and
// what Deimos can be engaged for. Kept deliberately concise: definition +
// typical situations per capability, not a long tactical activity inventory.

export const ADVISORY_HERO = {
  title: "Advisory",
  description:
    "Deimos advises across strategic advisory, capital formation, transaction architecture, private capital and partnerships, special situations and selected proprietary transactions.",
};

export const WHAT_WE_ADVISE_ON = {
  heading: "What Deimos Advises On",
  body: "Deimos advises across strategic advisory, capital formation, transaction architecture, private capital and partnerships, special situations and selected proprietary transactions. Structure, capital strategy, counterparty alignment and execution discipline are brought to bear as one institutional process that sharpens the terms on which each mandate is run and executed.",
};

// The four doctrine disciplines (CONTENT_DOCTRINE.md), in doctrine order, each
// glossed only with vocabulary used in the capabilities below — not new claims.
// Rendered as a compact hairline column beside the statement above (same
// treatment as the homepage positioning block), to give the advisory intro
// structure. The list renders any number of rows, so the layout is unchanged.
export const ADVISORY_DISCIPLINES = [
  { label: "Transaction Architecture", note: "Structure, terms and documentation built to withstand institutional review." },
  { label: "Capital Strategy", note: "How capital is raised, structured and positioned across capital situations." },
  { label: "Counterparty Alignment", note: "Sponsors, operators and capital partners aligned around a settled position." },
  { label: "Execution Discipline", note: "Diligence, negotiation and process managed through to close." },
] as const;

export type AdvisoryPillar = {
  id: string;
  name: string;
  definition: string;
  typicalSituations: string;
};

// The six capability buckets (CONTENT_DOCTRINE.md). Each reads: what Deimos
// advises on -> how a core discipline (transaction architecture, capital
// strategy, counterparty alignment or execution discipline) improves the
// mandate. typicalSituations states where the capability is useful.
// Capability-led and senior — no preparation / capital-readiness framing, no
// long tactical activity lists. Order is doctrine order; "Capital Formation"
// is kept verbatim as a name because AdvisoryPillars.tsx resolves the
// default-open row by that name.
export const ADVISORY_PILLARS: AdvisoryPillar[] = [
  {
    id: "strategic-advisory",
    name: "Strategic Advisory",
    definition:
      "Deimos advises principals, boards and investors on the strategic and capital decisions that define a transaction: its objective, structure, counterparties and execution path. Clear strategic advisory and capital strategy at the outset set the terms on which the mandate is run.",
    typicalSituations: "Strategic reviews, capital decisions and cross-border initiatives across transactions, partnerships and strategic assets.",
  },
  {
    id: "capital-formation",
    name: "Capital Formation",
    definition:
      "Deimos advises on how private capital is raised, structured and positioned so that financing can be underwritten on institutional terms. Disciplined capital strategy and transaction architecture make the capital case credible to institutional counterparties.",
    typicalSituations: "Growth and completion capital, refinancings and private placements across capital situations.",
  },
  {
    id: "transaction-architecture",
    name: "Transaction Architecture",
    definition:
      "Deimos designs the structure, terms and documentation a transaction requires to withstand institutional review. Sound transaction architecture resolves how value, risk and control are allocated and aligns counterparties around a single, defensible structure.",
    typicalSituations: "Complex, multi-party or cross-border transactions where structure determines the outcome.",
  },
  {
    id: "private-capital-partnerships",
    name: "Private Capital & Partnerships",
    definition:
      "Deimos structures the combinations of capital, sponsors, operators and stakeholders a transaction depends on. Counterparty alignment and clear economics establish a settled position among partners and hold it through execution.",
    typicalSituations: "Sponsor-led acquisitions, platform formation, joint ventures and consortium partnerships.",
  },
  {
    id: "special-situations",
    name: "Special Situations",
    definition:
      "Deimos advises on recapitalizations, restructurings and repositioning where value turns on structure and process rather than the underlying asset alone. Capital strategy and execution discipline define a credible path for the capital and counterparties the situation requires.",
    typicalSituations: "Recapitalizations, restructurings and repositioning across strategic and real assets.",
  },
  {
    id: "selected-proprietary-transactions",
    name: "Selected Proprietary Transactions",
    definition:
      "Alongside advisory mandates, Deimos may selectively originate or sponsor proprietary opportunities where its role, alignment and execution process are clearly defined. The same transaction architecture and execution discipline applied to client mandates govern the firm's own participation.",
    typicalSituations: "Selective proprietary opportunities across capital situations and strategic assets.",
  },
];

export const MANDATE_ORIENTATION = {
  heading: "Mandate Orientation & Process Discipline",
  // Shared Mandate Discipline statement (see CONFIDENTIALITY_COPY, homepage.ts).
  // The process description opens verbatim with firm.ts's shared process, then
  // adds one restrained closing sentence — reflecting the selected proprietary
  // transactions capability without letting it dominate. That trailing sentence
  // is Advisory-specific by design; do not "re-sync" it to the other surfaces.
  statement:
    "Deimos engages selectively, through defined advisory mandates. The firm's role is to reduce capital risk through structure, process discipline and execution control. It does not act as a listing platform, an open broker network or a passive introducer.",
  processDescription:
    "Deimos begins by defining the transaction: the capital requirement, stakeholder position, documentation, risk framing and execution path. The firm then brings the structure, materials, counterparty strategy and process control that reduce capital risk and advance the transaction toward mandate and execution. Alongside advisory mandates, Deimos may selectively originate or sponsor proprietary opportunities where its role, alignment and execution process are clearly defined.",
};

export const PROCESS_STEPS = [
  "Situation Assessment",
  "Structuring & Diligence",
  "Capital Strategy",
  "Counterparty Positioning",
  "Process Management",
  "Execution Support",
] as const;
