// Hero copy only. The actual disclaimer text is the client's own approved
// language and lives in src/content/site.ts's DISCLAIMERS (single source of
// truth, already reused verbatim in the sitewide footer) — nothing here
// restates or paraphrases it, per SITE_COMPLETION_PLAN.md's /legal spec
// ("the three disclaimers already live in src/content/site.ts and can be
// reused directly").

export const LEGAL_HERO = {
  title: "Legal / Disclaimer",
  description:
    "The full disclaimer reference for this website: general information, jurisdictional exposure, and capital access.",
};

export type LegalSection = {
  id: string;
  heading: string;
  disclaimerKey: "general" | "capitalAccess" | "jurisdictional";
};

// Order matches MASTER_WEBSITE_BRIEF.md §16's own ordering (general ->
// jurisdictional -> capital access) — the same order DISCLAIMERS itself uses
// in site.ts and the sitewide Footer renders in. A prior version of this
// array read general -> capital access -> jurisdictional, which didn't
// actually match §16 despite the comment's claim; reordered to fix that
// drift, not to change any wording. The single "general" disclaimer string
// already covers several distinct legal points in one approved sentence
// (no-offer/no-solicitation, no investment/legal/tax/regulated advice, and
// selective engagement subject to applicable laws/documentation/mandate
// terms/jurisdictional requirements) — it is presented as one paragraph
// under one heading rather than split apart, since restructuring an
// already-approved sentence would mean editing client-approved legal
// language without authorization.
export const LEGAL_SECTIONS: LegalSection[] = [
  { id: "general", heading: "General Disclaimer", disclaimerKey: "general" },
  {
    id: "jurisdictional-exposure",
    heading: "Jurisdictional Exposure",
    disclaimerKey: "jurisdictional",
  },
  { id: "capital-access", heading: "Capital Access", disclaimerKey: "capitalAccess" },
];
