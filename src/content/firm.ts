// Copy originally sourced from original-master-prompt.txt §10/§11/§14/§15 and
// MASTER_WEBSITE_BRIEF.md §1, per SITE_COMPLETION_PLAN.md's /firm spec, then
// refined in the sitewide content pass (2026-07: broader positive framing,
// em dashes removed, "non-standard" reduced; legal boundaries preserved) and
// again in the /firm editorial rework (2026-07: page rebuilt around an
// operating-principles accordion, an engagement section and an editorial
// "where useful" index; shared-verbatim statements kept exactly so /firm still
// matches homepage/advisory/contact). No leadership, founder biography, team
// profiles or pedigree content — resolved out of v1 scope entirely.

export const FIRM_HERO = {
  title: "Firm",
  // Hero subline is the primary identity language (WHAT_DEIMOS_IS.statement,
  // below) — passed straight into the PageHeader so "global independent
  // strategic advisory firm" sits at the top of the page.
};

export const WHAT_DEIMOS_IS = {
  heading: "What Deimos Is",
  // Primary identity language (CONTENT_DOCTRINE.md), rendered as the /firm hero
  // subline. Two paragraphs (split on the blank line by PageHeader): the
  // identity, then the capability combination. Decoupled from
  // HOMEPAGE_SELF_IDENTIFICATION — do not re-sync.
  statement:
    "Deimos is a global independent strategic advisory firm advising principals, investors and institutions across private capital, strategic transactions and selected proprietary opportunities.\n\nThe firm combines strategic advisory, capital formation, transaction architecture and execution discipline across international markets.",
  // No standalone "what Deimos is not" line here by design — the page reads on
  // positive identity; no defensive boundary sentence appears on /firm.
};

// "Advisory Principles" — the four disciplines that carry the doctrine's core
// language system (transaction architecture, capital strategy, counterparty
// alignment, execution discipline), rendered in that order as the page's one
// interactive section (FirmPrinciples.tsx). Each row shows the discipline and a
// one-line summary; the "+" expands the explanation. Detail copy deliberately
// varies its sentence openings (no repeated "The firm"/"Deimos") and implies no
// guaranteed financing or execution.
export const FIRM_PRINCIPLES_HEADING = "Advisory Principles";

export const FIRM_PRINCIPLES = [
  {
    id: "transaction-architecture",
    name: "Transaction Architecture",
    summary: "Structure, terms and materials built to withstand institutional review.",
    detail:
      "Structure, terms and supporting materials are shaped to answer the questions serious counterparties raise, so a transaction can withstand institutional review from the outset.",
  },
  {
    id: "capital-strategy",
    name: "Capital Strategy",
    summary: "Capital engaged on institutional terms, not sought prematurely.",
    detail:
      "Capital requirements are defined precisely and positioned so financing can be underwritten on institutional terms. The aim is a credible capital case, not the widest possible distribution.",
  },
  {
    id: "counterparty-alignment",
    name: "Counterparty Alignment",
    summary: "Owners, sponsors, operators and capital partners aligned before outreach.",
    detail:
      "Owners, sponsors, operators and capital partners are brought to a settled position before outreach, so commitment rests on aligned economics and governance rather than an open negotiation.",
  },
  {
    id: "execution-discipline",
    name: "Execution Discipline",
    summary: "Diligence, negotiation and process held to a controlled close.",
    detail:
      "Through diligence, negotiation and process management, sequence and information stay under control from mandate to close, protecting terms as momentum builds.",
  },
] as const;

// "How Deimos Engages" — the mandate / engagement section, broadened beyond
// capital-risk reduction to the full advisory remit. The process description is
// now /firm-specific: it diverges from /advisory's MANDATE_ORIENTATION.process
// (out of scope for this pass), so do not "re-sync" them.
export const FIRM_ENGAGEMENT = {
  heading: "How Deimos Engages",
  mandate:
    "Deimos engages through defined advisory mandates, supporting clients across transaction strategy, capital access, structuring, counterparty alignment and execution.",
  processLabel: "How a mandate progresses",
  process:
    "A mandate may begin with the transaction, the capital requirement or the strategic objective. The firm then develops the structure, materials, counterparty strategy and process discipline required to move the mandate forward.",
  criteria: [
    "Transaction Complexity",
    "Capital Requirements",
    "Counterparty Alignment",
    "Cross-Border Execution",
  ] as const,
};

// "Where Deimos Is Useful" — a restrained editorial index of the recurring
// situations the firm is engaged on. The intro reuses WHY_CLIENTS_ENGAGE
// below. Areas are descriptive of capability, never a claim of offices, local
// teams or active mandates in any specific market.
export const WHY_CLIENTS_ENGAGE = {
  heading: "Where Deimos Is Useful",
  statement:
    "Deimos is engaged where strategic objectives, capital requirements, counterparties and execution conditions must be brought into a coherent transaction path.",
  areas: [
    {
      name: "Transactions",
      note: "M&A, capital raises, refinancings and recapitalizations requiring clear structure and execution discipline.",
    },
    {
      name: "Partnerships",
      note: "Joint ventures, consortium formation and strategic partnerships built around aligned capital, operators and governance.",
    },
    {
      name: "Strategic Initiatives",
      note: "Platform builds, market entry and long-horizon initiatives where capital and structure are decided early.",
    },
    {
      name: "Strategic Assets & Operating Platforms",
      note: "Real assets, infrastructure and operating businesses requiring transaction architecture, counterparties and execution control.",
    },
    {
      name: "Public-Private & Cross-Border Situations",
      note: "Concession, public-sector and multi-jurisdiction transactions requiring careful stakeholder and process management.",
    },
  ] as const,
};

// /experience was removed as a standalone page for v1 and merged here at a
// high level (SITE_COMPLETION_PLAN.md). "Selected Exposure" (CONTENT_DOCTRINE.md)
// frames the firm's background as prior principal experience, advisory review
// and market involvement. It stays at the level of restrained domain
// categories — never named clients, specific transactions, a guaranteed
// execution record or direct regulated investment banking activity. The
// US$21.2bn figure is not repeated here: /firm's register is identity/posture,
// not metrics, and the hero carries that figure as aggregate historical
// exposure with its required hedge.
export const FIRM_EXPOSURE = {
  heading: "Selected Exposure",
  statement:
    "Selected exposure reflects prior principal, advisory and market involvement across strategic assets, capital situations and cross-border private-market activity.",
  categories: [
    "Strategic Assets",
    "Capital Situations",
    "Cross-Border Initiatives",
    "Operating Platforms",
    "Selected Proprietary Transactions",
  ] as const,
};

// "Operating Posture" — the closing section (independent, selective,
// internationally oriented). Positive framing only; the passive-introducer /
// broker boundary is deliberately not stated here or elsewhere on /firm (no
// defensive over-explaining). Rendered as three short paragraphs. No guarantee
// of outcome.
export const FIRM_OPERATING_POSTURE = {
  heading: "Operating Posture",
  statements: [
    "Deimos structures each mandate around the transaction, the capital requirement and the counterparties involved.",
    "Alongside advisory mandates, the firm may selectively originate or sponsor proprietary opportunities where role, alignment and execution process are clearly defined.",
    "The firm works selectively, on defined terms, across international markets.",
  ] as const,
  points: [
    {
      label: "Independence",
      note: "Advice shaped by the mandate, not by a product or distribution incentive.",
    },
    {
      label: "Selective engagement",
      note: "A defined set of mandates and situations, taken on deliberately.",
    },
    {
      label: "International orientation",
      note: "Cross-border transactions and counterparties across selected markets.",
    },
    {
      label: "Execution discipline",
      note: "Engagement continues through diligence and execution, not only at the outset.",
    },
  ] as const,
};
