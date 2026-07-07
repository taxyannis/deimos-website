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

// Safe, sitewide-consistent classification shown in the map/list detail
// view for every jurisdiction — never a claim of offices, licenses, or
// completed mandates (task spec §D.4 / DISCLAIMERS.jurisdictional).
export const JURISDICTION_EXPOSURE_TYPE_LABEL =
  "Market exposure / transaction review / partner coverage / structuring relevance";
