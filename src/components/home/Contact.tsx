import { ClosingContactCTA } from "@/components/layout/ClosingContactCTA";
import { CONTACT_COPY } from "@/content/homepage";

// Navy bookend echoing the hero — the most whitespace-heavy section on the
// page, one statement, one ask (HOMEPAGE_BLUEPRINT.md §16/§18). The full
// segmented inquiry form lives on the Contact subpage, not here.
// Delegates to the shared ClosingContactCTA (SITE_COMPLETION_PLAN.md) so
// the homepage and every subpage close on the exact same pattern.
export function Contact() {
  return <ClosingContactCTA statement={CONTACT_COPY} />;
}
