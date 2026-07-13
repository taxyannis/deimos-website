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
  // Concise, benchmark-grade identity line — deliberately not a capability list
  // (the six buckets live in ADVISORY_PILLARS below, not the hero).
  description:
    "Deimos provides independent strategic advice across private capital, transactions, partnerships and selected proprietary opportunities.",
};

export const WHAT_WE_ADVISE_ON = {
  heading: "What Deimos Advises On",
  // Framed around the four decisions that shape a mandate rather than restating
  // the six capability buckets — those are the accordion's job, not this intro's.
  body: "Advisory at Deimos is built around the decisions that shape a mandate: strategy, capital, counterparties and execution. The firm supports clients in defining the transaction path, structuring the capital requirement and managing the conditions required for serious execution.",
};

// The four doctrine disciplines (CONTENT_DOCTRINE.md), in doctrine order. Framed
// under their own "Advisory Disciplines" label and rendered as a compact
// hairline column beside the statement above, so they read as distinct from the
// six "Advisory Capabilities" accordion buckets. The list renders any number of
// rows, so the layout is unchanged.
export const ADVISORY_DISCIPLINES_HEADING = "Advisory Disciplines";

export const ADVISORY_DISCIPLINES = [
  { label: "Transaction Architecture", note: "Structuring terms, documentation and risk allocation into a coherent transaction path." },
  { label: "Capital Strategy", note: "Defining the capital requirement, financing logic and counterparty approach." },
  { label: "Counterparty Alignment", note: "Aligning sponsors, investors, operators and strategic parties around roles, economics and governance." },
  { label: "Execution Discipline", note: "Managing diligence, negotiation, materials and process through defined execution stages." },
] as const;

export type AdvisoryPillar = {
  id: string;
  name: string;
  definition: string;
  typicalSituations: string;
};

// The six capability buckets (CONTENT_DOCTRINE.md). Each definition states a
// distinct purpose and deliberately varies its opening — sentences no longer
// all begin with "Deimos advises" and do not restate the hero or the Advisory
// Disciplines column. Capability-led and senior; no preparation /
// capital-readiness framing and no long tactical activity lists. Order is
// doctrine order; "Capital Formation" is kept verbatim as a name because
// AdvisoryPillars.tsx resolves the default-open row by that name.
export const ADVISORY_PILLARS: AdvisoryPillar[] = [
  {
    id: "strategic-advisory",
    name: "Strategic Advisory",
    definition:
      "Principals, boards and investors weigh strategic options against the transaction they intend to pursue. Deimos frames the objective, the direction and the sequence of decisions that set a mandate on a credible path from the outset.",
    typicalSituations: "Strategic reviews, capital decisions and cross-border initiatives across transactions, partnerships and strategic assets.",
  },
  {
    id: "capital-formation",
    name: "Capital Formation",
    definition:
      "Raising private capital turns on how a transaction is structured and positioned before it reaches the market. The firm builds the financing case so growth, completion or replacement capital can be underwritten on institutional terms.",
    typicalSituations: "Growth and completion capital, refinancings and private placements across capital situations.",
  },
  {
    id: "transaction-architecture",
    name: "Transaction Architecture",
    definition:
      "A complex transaction stands or falls on how value, risk and control are divided among the parties. Deimos resolves that structure and commits it to terms and documentation that withstand scrutiny and give counterparties a defensible basis to proceed.",
    typicalSituations: "Complex, multi-party and cross-border transactions in which structure determines the outcome.",
  },
  {
    id: "private-capital-partnerships",
    name: "Private Capital & Partnerships",
    definition:
      "Sponsor-led and multi-party transactions depend on the right combination of capital, operators and stakeholders holding together. The firm aligns those counterparties on economics and governance and keeps that position settled through execution.",
    typicalSituations: "Sponsor-led acquisitions, platform formation, joint ventures and consortium partnerships.",
  },
  {
    id: "special-situations",
    name: "Special Situations",
    definition:
      "Recapitalizations, restructurings and repositioning turn on structure and process, not the underlying asset alone. Deimos defines a credible path for the capital and counterparties these situations require, often where conventional routes have closed.",
    typicalSituations: "Recapitalizations, restructurings and repositioning across strategic and real assets.",
  },
  {
    id: "selected-proprietary-transactions",
    name: "Selected Proprietary Transactions",
    definition:
      "Beyond client mandates, the firm selectively originates or sponsors proprietary opportunities where its role, alignment and economics are clearly defined. The same rigor applied to advised transactions governs the firm's own execution path.",
    typicalSituations: "Selective proprietary opportunities across capital situations and strategic assets.",
  },
];

export const MANDATE_ORIENTATION = {
  heading: "Mandate Orientation & Process Discipline",
  // Three short paragraphs, rendered with identical type treatment (same size,
  // line height and opacity). The former boundary sentence — reduce capital
  // risk / structure, process discipline and execution control / listing
  // platform / open broker network / passive introducer — is deliberately
  // removed: no defensive over-explaining, and the repeated capital-risk phrasing
  // is gone. The timeline (PROCESS_STEPS) stays below this section.
  paragraphs: [
    "Deimos engages through defined advisory mandates, supporting clients across transaction strategy, capital access, structuring, counterparty alignment and execution.",
    "A mandate may begin with the transaction, the capital requirement or the strategic objective. The firm then develops the structure, materials, counterparty strategy and process discipline required to move the mandate forward.",
    "Alongside advisory mandates, Deimos may selectively originate or sponsor proprietary opportunities where role, alignment and execution process are clearly defined.",
  ] as const,
};

export const PROCESS_STEPS = [
  "Situation Assessment",
  "Structuring & Diligence",
  "Capital Strategy",
  "Counterparty Positioning",
  "Process Management",
  "Execution Support",
] as const;
