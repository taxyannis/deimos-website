// Conservative v1 placeholder only — no source document in this project
// contains real, counsel-drafted privacy-policy content (SITE_COMPLETION_
// PLAN.md's /privacy spec). Deliberately minimal: no data-processing detail,
// no compliance-certification claims, no GDPR/CCPA-style boilerplate, since
// none of that is approved content — inventing it would represent unreviewed
// legal commitments as real, which is worse than an honest placeholder.

import { CONTACT_EMAIL } from "@/content/site";

export const PRIVACY_HERO = {
  title: "Privacy Policy",
  description: "How Deimos Group handles information submitted through this website.",
};

export const PRIVACY_PLACEHOLDER_NOTICE =
  "This Privacy Policy is a placeholder in preparation. It does not yet reflect a complete or final policy and has not been reviewed by legal counsel. A complete, counsel-reviewed Privacy Policy will replace this placeholder before public launch.";

export const PRIVACY_COLLECTION_STATEMENT =
  "Deimos Group may receive contact information — such as a name, email address, or the content of an enquiry — when a visitor submits an enquiry by email or through one of this website's contact links.";

export const PRIVACY_USE_STATEMENT =
  "Information submitted in this way is used only to respond to the enquiry it relates to.";

export const PRIVACY_CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;
