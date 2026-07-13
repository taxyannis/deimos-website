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
      "Portugal",
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
      "Panama",
      "Chile",
      "Dominican Republic",
      "Antigua and Barbuda",
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
    ],
  },
];

// Per-jurisdiction exposure classification shown in the coverage detail
// panel — never a claim of offices, licenses, local teams, or completed
// mandates (DISCLAIMERS.jurisdictional). The approved vocabulary is
// exactly these six values (client-provided):
//
//   Transaction Review · Market Exposure · Partner Coverage ·
//   Structuring Relevance · Principal / Historical Exposure ·
//   Strategic Market Monitoring
//
// The six canonical classification values (client-provided vocabulary):
//
//   Transaction Review · Market Exposure · Partner Coverage ·
//   Structuring Relevance · Principal / Historical Exposure ·
//   Strategic Market Monitoring
//
// Per-jurisdiction assignments below are the client's explicit mapping.
// Where the client didn't name one, a jurisdiction keeps the conservative
// baseline "Market Exposure" — never invent a stronger classification for a
// named market (that would make an unsupported claim more specific).
// Switzerland uses a client-specified dual label ("Partner Coverage /
// Structuring Relevance"), so override values are typed as string rather
// than the strict union.
export type JurisdictionClassification =
  | "Transaction Review"
  | "Market Exposure"
  | "Partner Coverage"
  | "Structuring Relevance"
  | "Principal / Historical Exposure"
  | "Strategic Market Monitoring";

const DEFAULT_CLASSIFICATION = "Market Exposure";

const CLASSIFICATION_OVERRIDES: Record<string, string> = {
  // International Structuring Jurisdictions — Structuring Relevance
  "Cayman Islands": "Structuring Relevance",
  "Saint Vincent and the Grenadines": "Structuring Relevance",
  Bermuda: "Structuring Relevance",
  Belize: "Structuring Relevance",
  Labuan: "Structuring Relevance",
  "Timor-Leste": "Structuring Relevance",
  "Ras Al Khaimah": "Structuring Relevance",
  Nevis: "Structuring Relevance",
  Ireland: "Structuring Relevance",
  Vanuatu: "Structuring Relevance",
  "Cook Islands": "Structuring Relevance",
  Seychelles: "Structuring Relevance",
  // General coverage additions (explicit, though Market Exposure is default)
  Jamaica: "Market Exposure",
  Japan: "Market Exposure",
  // Switzerland — client-specified dual classification
  Switzerland: "Partner Coverage / Structuring Relevance",
  // Golden Triangle SEZ — special-market monitoring only; NOT a country,
  // office, formal jurisdiction, or standard structuring jurisdiction.
  "Golden Triangle SEZ": "Strategic Market Monitoring",
  // Somaliland — client-specified dual classification, reflecting actual
  // exposure; not an office/branch/local-team/regulated-presence claim and
  // not a sovereign-recognition statement.
  Somaliland: "Market Exposure / Strategic Market Monitoring",
};

export function jurisdictionClassification(name: string): string {
  return CLASSIFICATION_OVERRIDES[name] ?? DEFAULT_CLASSIFICATION;
}
