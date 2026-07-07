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
    ],
  },
  {
    id: "international-structuring",
    region: "International Structuring Jurisdictions",
    jurisdictions: ["Cayman Islands", "Saint Vincent and the Grenadines"],
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
// IMPORTANT — assignment discipline: no source document maps a specific
// jurisdiction to a specific classification, so per-country values here
// are deliberately conservative: "Structuring Relevance" for the two
// International Structuring jurisdictions (that is literally their
// category) and the baseline "Market Exposure" for everything else.
// Assigning, say, "Principal / Historical Exposure" to a named country
// without client data would make an unsupported claim MORE specific —
// exactly what the credibility rules prohibit. When the client supplies a
// real per-jurisdiction mapping, put it in CLASSIFICATION_OVERRIDES below;
// nothing else needs to change.
export type JurisdictionClassification =
  | "Transaction Review"
  | "Market Exposure"
  | "Partner Coverage"
  | "Structuring Relevance"
  | "Principal / Historical Exposure"
  | "Strategic Market Monitoring";

const DEFAULT_CLASSIFICATION: JurisdictionClassification = "Market Exposure";

const CLASSIFICATION_OVERRIDES: Record<string, JurisdictionClassification> = {
  "Cayman Islands": "Structuring Relevance",
  "Saint Vincent and the Grenadines": "Structuring Relevance",
};

export function jurisdictionClassification(name: string): JurisdictionClassification {
  return CLASSIFICATION_OVERRIDES[name] ?? DEFAULT_CLASSIFICATION;
}
