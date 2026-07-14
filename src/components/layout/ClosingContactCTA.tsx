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
// .md "Shared infrastructure"). Rebuilt from a centered statement + button
// into a fuller editorial band: an indexed eyebrow and the serif statement
// hold the left, while the right rail carries the filled primary action above
// a quiet direct-email line — the two-column "close" the reference advisory
// firms use, with a hairline dividing it from the page above. The filled CTA
// stays the single most consequential control on the page.
export function ClosingContactCTA({ statement }: ClosingContactCTAProps) {
  return (
    <section className="section-navy border-t border-white/10 py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <SectionLabel className="mb-[var(--space-xl)]">Contact</SectionLabel>

        <div className="grid gap-[var(--space-xl)] border-t border-white/10 pt-[var(--space-xl)] lg:grid-cols-[1.6fr_1fr] lg:items-end lg:gap-[var(--space-3xl)]">
          <h2 className="text-on-dark max-w-[24ch] text-[length:var(--text-h1)] leading-[var(--text-h1--line-height)] tracking-[var(--text-h1--letter-spacing)] font-serif text-balance">
            {statement ?? DEFAULT_STATEMENT}
          </h2>

          <div className="flex flex-col gap-[var(--space-lg)] lg:items-end">
            <CTALink href={CONTACT_CTA.href} variant="primary" tone="on-dark">
              {CONTACT_CTA.label}
            </CTALink>

            {/* A quiet secondary path beneath the primary ask — the plain
                email, giving the block a second tier without competing with
                the filled CTA. */}
            <div className="lg:text-right">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-on-dark font-serif text-[length:var(--text-h3)] underline decoration-white/25 underline-offset-4 transition-colors hover:text-steel-blue hover:decoration-steel-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-blue"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
