// Copy sourced verbatim from MASTER_WEBSITE_BRIEF.md §13 (jurisdiction
// backbone list, region filters — confirmed real, current/recent activity,
// not a placeholder, per §13's grilling-session resolution) and
// original-master-prompt.txt §8 (per-region jurisdiction lists, map
// headline/subtext). Hero title/description reuse the homepage teaser's
// exact approved strings (JURISDICTION_HEADLINE / JURISDICTION_SUBTEXT in
// src/content/homepage.ts) rather than re-typing them, so the two surfaces
// can't drift out of sync.
//
// North America and Latin America/Caribbean (listed separately in
// original-master-prompt.txt §8) are combined into the single "Americas"
// group, matching the confirmed region-filter set in both source docs.
// Offshore jurisdictions (Cayman Islands, Saint Vincent and the Grenadines)
// get identical treatment to every other market — no separate visual tier —
// per §13's explicit reversal of an earlier draft recommendation.

import { JURISDICTION_HEADLINE, JURISDICTION_SUBTEXT } from "@/content/homepage";

export const JURISDICTIONS_HERO = {
  title: JURISDICTION_HEADLINE,
  description: JURISDICTION_SUBTEXT,
};

export type JurisdictionGroup = {
  id: string;
  region: string;
  jurisdictions: readonly string[];
};

export const JURISDICTION_GROUPS: JurisdictionGroup[] = [
  {
    id: "europe",
    region: "Europe",
    jurisdictions: [
      "Greece",
      "Estonia",
      "Lithuania",
      "France",
      "Spain",
      "Luxembourg",
      "United Kingdom",
      "Switzerland",
      "Cyprus",
      "Georgia",
    ],
  },
  {
    id: "africa",
    region: "Africa",
    jurisdictions: [
      "Uganda",
      "Kenya",
      "Namibia",
      "Ghana",
      "Democratic Republic of the Congo",
      "Malawi",
      "Morocco",
      "South Africa",
      "Rwanda",
      // Named at the level the market and existing exposure use — not a
      // sovereign-recognition statement. Inclusion reflects actual coverage
      // in the Horn of Africa only; never implies an office, branch, local
      // team, or regulated presence there (DISCLAIMERS.jurisdictional).
      "Somaliland",
    ],
  },
  {
    id: "middle-east-central-asia",
    region: "Middle East / Central Asia",
    jurisdictions: [
      "Saudi Arabia",
      "United Arab Emirates",
      "Qatar",
      "Kazakhstan",
      "Uzbekistan",
      "Oman",
    ],
  },
  {
    id: "asia-pacific",
    region: "Asia-Pacific",
    jurisdictions: [
      "Cambodia",
      "China",
      "Philippines",
      "Indonesia",
      "India",
      "Hong Kong SAR",
      "Singapore",
      "Australia",
      "Malaysia",
      "Japan",
      // Special economic zone in Laos — NOT a country and NOT a standard
      // structuring jurisdiction. Included strictly as a special-market /
      // strategic-monitoring entry (see its Strategic Market Monitoring
      // classification below); never imply office presence, regulated
      // operations, formal mandate, local representation, or clean
      // structuring status for this entry.
      "Golden Triangle SEZ",
    ],
  },
  {
    id: "americas",
    region: "Americas",
    jurisdictions: [
      "United States",
      "Canada",
      "Mexico",
      "Nicaragua",
      "Chile",
      "Dominican Republic",
      "Argentina",
      "Brazil",
      "Peru",
      "Colombia",
      "Ecuador",
      "Paraguay",
      "Jamaica",
    ],
  },
  {
    id: "international-structuring",
    region: "International Structuring Jurisdictions",
    // Several entries here are deliberately sub-national financial centres
    // or territories, named at the level the structuring market knows them:
    // "Labuan" (a federal territory of Malaysia), "Ras Al Khaimah" (an
    // emirate within the UAE), "Nevis" (named as Nevis, not expanded to
    // country-level St. Kitts and Nevis). Structuring relevance only —
    // never offices, branches, local teams, licenses, or regulated
    // operations, and inclusion does not imply active use on current
    // mandates (DISCLAIMERS.jurisdictional).
    jurisdictions: [
      "Cayman Islands",
      "Saint Vincent and the Grenadines",
      "Bermuda",
      "Belize",
      "Labuan",
      "Timor-Leste",
      "Ras Al Khaimah",
      "Nevis",
      "Ireland",
      "Vanuatu",
      "Cook Islands",
      "Seychelles",
      // Moved here from the Americas group — treated as structuring
      // jurisdictions (Coverage Type "Structuring Jurisdiction" below).
      "Antigua and Barbuda",
      "Panama",
    ],
  },
];

// Per-jurisdiction coverage data. Each market carries ONE Coverage Type (the
// categorical axis) and a short set of "Relevant Themes" (the sector / asset /
// transaction themes shown on the card). Neither claims offices, licenses, local
// teams or completed mandates (see COVERAGE_THEMES_NOTE).
//
// Rules held across this data: title case throughout; 2–4 representative (not
// exhaustive) themes; no firm-wide capabilities pasted onto every market; no
// "or" in any label; "Partner Coverage" (never "Counterparty Coverage"); and no
// "Structuring Relevance". Coverage Type is restricted to the four values below.
export type CoverageType =
  | "Market Exposure"
  | "Structuring Jurisdiction"
  | "Partner Coverage"
  | "Strategic Market Monitoring";

type CoverageEntry = { type: CoverageType; themes: readonly string[] };

// Fallback for any market without an explicit entry below — the conservative
// baseline; themes are not invented for it. Every current jurisdiction now has
// an explicit entry, so this remains only as a safety net.
const DEFAULT_ENTRY: CoverageEntry = { type: "Market Exposure", themes: [] };

const STRUCTURING_THEMES = ["Corporate Structuring", "International Structuring"] as const;

const COVERAGE: Record<string, CoverageEntry> = {
  // ---- Europe ----
  Greece: { type: "Market Exposure", themes: ["Debt Refinancing", "Hospitality", "FinTech"] },
  Cyprus: {
    type: "Structuring Jurisdiction",
    themes: ["International Structuring", "Banking", "Hospitality"],
  },
  Estonia: {
    type: "Market Exposure",
    themes: ["FinTech", "Defense & Security", "Data Infrastructure"],
  },
  Lithuania: { type: "Partner Coverage", themes: ["Strategic Partnerships", "Industrial Assets"] },
  Georgia: { type: "Market Exposure", themes: ["Hospitality", "Privatization", "Education"] },
  Luxembourg: {
    type: "Structuring Jurisdiction",
    themes: ["Fund Structuring", "International Structuring", "Banking"],
  },
  France: {
    type: "Market Exposure",
    themes: ["Precious Metals", "Industrial Assets", "Hospitality", "Sports"],
  },
  Spain: { type: "Market Exposure", themes: ["Renewable Energy", "Sports", "Hospitality"] },
  "United Kingdom": {
    type: "Partner Coverage",
    themes: ["Banking", "Private Equity", "Sports", "Strategic Partnerships"],
  },
  Switzerland: {
    type: "Structuring Jurisdiction",
    themes: ["International Structuring", "Banking", "Corporate Structuring", "Precious Metals"],
  },

  // ---- Africa ----
  Uganda: {
    type: "Market Exposure",
    themes: ["Public-Private Partnerships", "Foreign Investment", "Energy"],
  },
  Kenya: {
    type: "Market Exposure",
    themes: ["Infrastructure", "Energy", "Public-Private Partnerships"],
  },
  Rwanda: { type: "Market Exposure", themes: ["Infrastructure", "Public-Private Partnerships"] },
  Malawi: { type: "Market Exposure", themes: ["Energy", "Infrastructure"] },
  "South Africa": {
    type: "Market Exposure",
    themes: ["Debt Markets", "Real Assets", "Energy", "Mining"],
  },
  Namibia: { type: "Market Exposure", themes: ["Real Estate", "Private Residences"] },
  Ghana: { type: "Market Exposure", themes: ["Oil & Gas", "Mining", "Commodities"] },
  "Democratic Republic of the Congo": {
    type: "Market Exposure",
    themes: ["Critical Minerals", "Mining", "Mineral Processing", "Public-Private Partnerships"],
  },
  // Somaliland — reflects actual exposure; not an office/branch/local-team/
  // regulated-presence claim and not a sovereign-recognition statement.
  Somaliland: { type: "Strategic Market Monitoring", themes: ["Public-Sector Advisory", "Infrastructure"] },
  Morocco: {
    type: "Market Exposure",
    themes: ["Commodities", "Oil & Gas", "Sports", "Defense & Security"],
  },

  // ---- Asia-Pacific ----
  Australia: { type: "Market Exposure", themes: ["Energy", "Oil & Gas", "Hospitality"] },
  Singapore: {
    type: "Structuring Jurisdiction",
    themes: ["International Structuring", "Corporate Structuring", "Banking", "Fund Advisory"],
  },
  Cambodia: { type: "Market Exposure", themes: ["Energy", "Commodity Trading"] },
  Philippines: {
    type: "Market Exposure",
    themes: ["Fund Advisory", "Commodity Trading", "Trade Finance", "Banking"],
  },
  // Golden Triangle SEZ — special-market monitoring only; NOT a country,
  // office, formal jurisdiction, or standard structuring jurisdiction.
  "Golden Triangle SEZ": {
    type: "Strategic Market Monitoring",
    themes: ["International Structuring", "Corporate Structuring", "Banking", "Hospitality & Tourism"],
  },
  Indonesia: {
    type: "Market Exposure",
    themes: ["Infrastructure", "Energy", "Data Infrastructure", "Aviation"],
  },
  Malaysia: { type: "Market Exposure", themes: ["Hospitality", "Aviation", "Oil & Gas"] },
  "Hong Kong SAR": {
    type: "Structuring Jurisdiction",
    themes: ["Financial Services", "Banking", "International Structuring", "Real Estate"],
  },
  China: {
    type: "Market Exposure",
    themes: ["Manufacturing", "Technology", "Commodities", "Critical Minerals"],
  },
  India: {
    type: "Market Exposure",
    themes: ["Public-Private Partnerships", "Energy", "Infrastructure"],
  },
  Japan: { type: "Market Exposure", themes: ["FinTech", "Technology"] },

  // ---- Middle East / Central Asia ----
  Kazakhstan: { type: "Market Exposure", themes: ["Infrastructure", "Oil & Gas", "Commodities"] },
  Uzbekistan: {
    type: "Market Exposure",
    themes: ["Hospitality", "Automotive Manufacturing"],
  },
  Oman: {
    type: "Market Exposure",
    themes: ["Public-Sector Advisory", "Oil & Gas", "Renewable Energy"],
  },
  Qatar: { type: "Market Exposure", themes: ["Financial Services", "Islamic Finance", "Sports"] },
  "United Arab Emirates": {
    type: "Structuring Jurisdiction",
    themes: ["Real Estate", "International Structuring", "Hospitality", "Precious Metals"],
  },
  "Saudi Arabia": {
    type: "Market Exposure",
    themes: ["Sports", "Infrastructure", "Hospitality & Tourism", "Precious Metals"],
  },

  // ---- Americas ----
  "United States": {
    type: "Market Exposure",
    themes: [
      "Commodity Trading",
      "Real Estate",
      "Hospitality",
      "Financial Services",
      "Oil & Gas",
      "Renewable Energy",
    ],
  },
  Canada: { type: "Market Exposure", themes: ["Private Equity", "Oil & Gas", "Renewable Energy"] },
  Mexico: {
    type: "Market Exposure",
    themes: ["Public-Private Partnerships", "Mining", "Commodity Trading", "Agriculture", "Sports"],
  },
  Jamaica: { type: "Market Exposure", themes: ["Energy", "Hospitality"] },
  "Dominican Republic": {
    type: "Market Exposure",
    themes: ["Commodity Trading", "Oil & Gas", "Public-Private Partnerships"],
  },
  Nicaragua: { type: "Market Exposure", themes: ["Infrastructure"] },
  Colombia: {
    type: "Market Exposure",
    themes: ["Sports", "Hospitality", "Mining", "Agriculture"],
  },
  Ecuador: {
    type: "Market Exposure",
    themes: ["Public-Private Partnerships", "Sports", "Mining", "Renewable Energy"],
  },
  Peru: {
    type: "Market Exposure",
    themes: [
      "Public-Private Partnerships",
      "Hospitality",
      "Renewable Energy",
      "Mining",
      "Manufacturing",
    ],
  },
  Brazil: {
    type: "Market Exposure",
    themes: ["Renewable Energy", "Infrastructure", "Mining", "Agriculture", "Sports"],
  },
  Paraguay: {
    type: "Market Exposure",
    themes: [
      "Logistics",
      "Public-Sector Advisory",
      "Public-Private Partnerships",
      "Renewable Energy",
      "Refining",
      "Infrastructure",
    ],
  },
  Chile: {
    type: "Market Exposure",
    themes: ["Renewable Energy", "Mining", "Public-Sector Advisory", "Hospitality", "Refining"],
  },
  Argentina: {
    type: "Market Exposure",
    themes: ["Renewable Energy", "Hospitality", "Mining", "Agriculture"],
  },

  // ---- International Structuring Jurisdictions ----
  // Structuring centres share the structuring-theme baseline; not client-named
  // in this pass, so themes are left at that baseline (not invented per market).
  "Cayman Islands": { type: "Structuring Jurisdiction", themes: STRUCTURING_THEMES },
  "Saint Vincent and the Grenadines": { type: "Structuring Jurisdiction", themes: STRUCTURING_THEMES },
  Bermuda: { type: "Structuring Jurisdiction", themes: STRUCTURING_THEMES },
  Belize: { type: "Structuring Jurisdiction", themes: STRUCTURING_THEMES },
  Labuan: { type: "Structuring Jurisdiction", themes: STRUCTURING_THEMES },
  "Timor-Leste": { type: "Structuring Jurisdiction", themes: STRUCTURING_THEMES },
  "Ras Al Khaimah": { type: "Structuring Jurisdiction", themes: STRUCTURING_THEMES },
  Nevis: { type: "Structuring Jurisdiction", themes: STRUCTURING_THEMES },
  Ireland: { type: "Structuring Jurisdiction", themes: STRUCTURING_THEMES },
  Vanuatu: { type: "Structuring Jurisdiction", themes: STRUCTURING_THEMES },
  "Cook Islands": { type: "Structuring Jurisdiction", themes: STRUCTURING_THEMES },
  Seychelles: {
    type: "Structuring Jurisdiction",
    themes: ["Hospitality", "Corporate Structuring", "International Structuring"],
  },
  // Moved from the Americas group into the structuring set.
  "Antigua and Barbuda": {
    type: "Structuring Jurisdiction",
    themes: ["International Structuring", "Corporate Structuring", "Hospitality", "Real Estate"],
  },
  Panama: {
    type: "Structuring Jurisdiction",
    themes: ["International Structuring", "Banking", "Corporate Structuring", "Logistics"],
  },
};

// Relevant Themes shown on the card. Where a market carries no specific themes
// yet (the conservative baseline), the card falls back to its Coverage Type so
// the line is never empty — preserving the prior display for those markets.
export function jurisdictionThemes(name: string): readonly string[] {
  const entry = COVERAGE[name] ?? DEFAULT_ENTRY;
  return entry.themes.length > 0 ? entry.themes : [entry.type];
}

// Coverage Type — the categorical axis for a market (one of the four values in
// CoverageType). Exposed for organisation/future surfaces; the detail panel
// itself still shows only Relevant Themes (unchanged layout).
export function jurisdictionCoverageType(name: string): CoverageType {
  return (COVERAGE[name] ?? DEFAULT_ENTRY).type;
}

// One global coverage note, shown once below the map (replacing the per-card
// disclaimer that formerly repeated on every selected jurisdiction). Carries the
// required legal negatives, so the hedge still travels with the claim.
export const COVERAGE_THEMES_NOTE =
  "Coverage reflects market relevance, structuring familiarity and historical exposure. It does not imply office presence, regulated local operations or active mandate activity in every market shown.";
