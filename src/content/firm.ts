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
  // Primary identity language, governed by src/content/CONTENT_DOCTRINE.md:
  // Deimos is a global independent strategic advisory firm. First sentence
  // states the identity and the four things the firm works across; the second
  // states the client universe. Used verbatim as the /firm hero subline. This
  // no longer tracks HOMEPAGE_SELF_IDENTIFICATION — the two surfaces are
  // decoupled; do not re-sync them.
  statement:
    "Deimos is a global independent strategic advisory firm working across advisory mandates, capital situations, strategic assets and selected proprietary transactions. The firm works with owners, sponsors, investors, operators, capital partners and public-sector counterparties across transactions, partnerships and strategic initiatives.",
  // No standalone "what Deimos is not" line here by design — the page reads on
  // positive identity, and the single boundary sentence lives once inside
  // Operating Posture (FIRM_OPERATING_POSTURE) instead.
};

// "How the Firm Thinks" — the four disciplines that carry the doctrine's core
// language system (structure, capital strategy, counterparty alignment,
// execution discipline), rendered in that order as the page's one interactive
// section (FirmPrinciples.tsx). Each row shows the discipline and a one-line
// summary; the "+" expands the concise explanation and becomes "−". These
// restate, as disciplines, the frame the identity statement already carries —
// no new claim, and nothing implying guaranteed financing or execution.
export const FIRM_PRINCIPLES_HEADING = "How the Firm Thinks";

export const FIRM_PRINCIPLES = [
  {
    id: "transaction-architecture",
    name: "Transaction Architecture",
    summary: "Structure, terms and materials built to withstand institutional review.",
    detail:
      "The firm frames the structure, terms and supporting materials a transaction requires, resolving the questions serious counterparties will raise before they are asked to engage.",
  },
  {
    id: "capital-strategy",
    name: "Capital Strategy",
    summary: "Capital engaged on institutional terms, not sought prematurely.",
    detail:
      "Deimos defines the capital requirement precisely and positions a situation so that financing can be underwritten on institutional terms. The aim is a credible capital case, not the widest possible distribution.",
  },
  {
    id: "counterparty-alignment",
    name: "Counterparty Alignment",
    summary: "Owners, sponsors, operators and capital partners aligned before outreach.",
    detail:
      "Deimos aligns the owners, sponsors, operators, capital partners and public-sector counterparties a transaction depends on, so that commitment rests on a settled position rather than an open negotiation.",
  },
  {
    id: "execution-discipline",
    name: "Execution Discipline",
    summary: "Diligence, negotiation and process held to a controlled close.",
    detail:
      "The firm carries a transaction through diligence, negotiation and process management, keeping control of sequence and information from mandate through to close.",
  },
] as const;

// "How Deimos Engages" — the mandate / selective-engagement section. Leads with
// the Mandate Discipline statement, then describes the process. The boundary is
// no longer stated here; it lives once in Operating Posture. The process
// description is shared verbatim with /advisory and must not be edited in
// isolation.
export const FIRM_ENGAGEMENT = {
  heading: "How Deimos Engages",
  // Mandate Discipline statement, kept prominent (MASTER_WEBSITE_BRIEF.md §14).
  // NOTE: /firm intentionally diverges from the homepage/advisory/contact copy
  // (CONFIDENTIALITY_COPY in homepage.ts) — the trailing broker-boundary clause
  // has been dropped here so the single boundary sentence reads once only, in
  // Operating Posture below. Do not "re-sync" this to the other surfaces.
  mandate:
    "Deimos engages selectively, through defined advisory mandates. The firm's role is to reduce capital risk through structure, process discipline and execution control.",
  processLabel: "How a mandate progresses",
  // Shared process description — verbatim with /advisory's
  // MANDATE_ORIENTATION.processDescription.
  process:
    "Deimos begins by defining the transaction: the capital requirement, stakeholder position, documentation, risk framing and execution path. The firm then brings the structure, materials, counterparty strategy and process control that reduce capital risk and advance the transaction toward mandate and execution.",
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
    "Deimos is engaged when the outcome of a transaction depends on more than the quality of the underlying asset. The firm defines the transaction, clarifies the capital requirement, aligns stakeholders and counterparties, and controls the process that brings capital risk within institutional reach.",
  areas: [
    {
      name: "Transactions",
      note: "Acquisitions, disposals, capital raises and refinancings that must be structured to institutional standards.",
    },
    {
      name: "Partnerships",
      note: "Joint ventures, consortium formation and strategic partnerships that depend on aligned capital and operators.",
    },
    {
      name: "Strategic initiatives",
      note: "Platform builds, market entry and long-horizon initiatives where capital and structure are decided early.",
    },
    {
      name: "Strategic assets and operating platforms",
      note: "Real assets, infrastructure and operating businesses whose value turns on structure, counterparties and execution.",
    },
    {
      name: "Public-private and cross-border situations",
      note: "Concession, public-sector and multi-jurisdiction transactions that require careful counterparty and process management.",
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
    "Selected exposure reflects prior principal experience, advisory review and market involvement across strategic assets, capital situations and cross-border private-market transactions. The categories below are illustrative of that exposure.",
  categories: [
    "Strategic Assets",
    "Capital Situations",
    "Cross-Border Initiatives",
    "Operating Platforms",
    "Selected Proprietary Transactions",
  ] as const,
};

// "Operating Posture" — the closing section (doctrine point 5: independent,
// selective, internationally oriented) and the ONE place the boundary is
// stated. Independence is framed positively — each mandate is built around the
// transaction, not a fixed product or predetermined path — and the proprietary
// sentence follows the same discipline (role, alignment and process defined up
// front). The broker boundary (advisory-led, not a listing platform or passive
// introducer) is the single restrained qualifier and appears nowhere else on
// the page. No guarantee of outcome.
export const FIRM_OPERATING_POSTURE = {
  heading: "Operating Posture",
  statement:
    "Deimos structures each mandate around the transaction, the capital requirement and the counterparties involved, rather than a fixed product or predetermined execution path. Alongside advisory mandates, Deimos may selectively originate or sponsor proprietary opportunities where its role, alignment and execution process are clearly defined. The firm is advisory-led and does not operate as a listing platform or passive introducer. It engages selectively, on defined terms, and works across international markets.",
  points: [
    {
      label: "Independence",
      note: "Each mandate is built around the transaction and its counterparties, not a fixed product or predetermined path.",
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
      note: "Deimos stays engaged through diligence and execution, not only at introduction.",
    },
  ] as const,
};
