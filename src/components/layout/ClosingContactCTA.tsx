import { CONTACT_CTA } from "@/content/homepage";
import { CONTACT_EMAIL } from "@/content/site";
import { CTALink } from "@/components/ui/CTALink";
import { SectionLabel } from "@/components/ui/SectionLabel";

type ClosingContactCTAProps = {
  /** Defaults to the sitewide approved contact statement if omitted. */
  statement?: string;
};

const DEFAULT_STATEMENT =
  "For confidential transaction, capital formation or strategic advisory enquiries, contact Deimos Group.";

// The sitewide contact bookend, reused at the foot of the homepage and every
// subpage so "one clear path to contact" holds sitewide (SITE_COMPLETION_PLAN
// .md "Shared infrastructure"). Deliberately compact: this is a closing
// pathway, not a contact page (the full inquiry routing lives on /contact).
// A quiet indexed label, a restrained serif statement, and the filled primary
// action with the plain email beside it — one clean two-column close on a
// single hairline, with tight vertical rhythm so it never reads as a bulky
// second contact page.
export function ClosingContactCTA({ statement }: ClosingContactCTAProps) {
  return (
    <section className="section-navy border-t border-white/10 py-[var(--space-2xl)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <SectionLabel className="mb-[var(--space-lg)]">Contact</SectionLabel>

        <div className="grid gap-[var(--space-lg)] lg:grid-cols-[1.5fr_1fr] lg:items-end lg:gap-[var(--space-2xl)]">
          <h2 className="text-on-dark max-w-[26ch] text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] tracking-[var(--text-h3--letter-spacing)] font-serif text-balance">
            {statement ?? DEFAULT_STATEMENT}
          </h2>

          {/* Action rail — filled CTA and the plain email on one baseline at
              lg, stacked on mobile. Kept to a single tight tier so the close
              stays light. */}
          <div className="flex flex-col gap-[var(--space-sm)] lg:items-end">
            <CTALink href={CONTACT_CTA.href} variant="primary" tone="on-dark">
              {CONTACT_CTA.label}
            </CTALink>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-muted-on-dark text-[length:var(--text-body)] underline decoration-white/25 underline-offset-4 transition-colors hover:text-steel-blue hover:decoration-steel-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-blue"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
