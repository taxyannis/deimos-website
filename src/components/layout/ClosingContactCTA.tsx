import { CONTACT_CTA } from "@/content/homepage";
import { CTALink } from "@/components/ui/CTALink";

type ClosingContactCTAProps = {
  /** Defaults to the sitewide approved contact statement if omitted. */
  statement?: string;
};

const DEFAULT_STATEMENT =
  "For confidential transaction, capital formation or strategic advisory enquiries, contact Deimos Group.";

// Same navy-bookend pattern as the homepage's Contact section, reused at the
// foot of every subpage so "one clear path to contact" holds sitewide
// (SITE_COMPLETION_PLAN.md "Shared infrastructure"). Filled primary CTA
// treatment — this is the one real ask on every page it appears on, so it
// reads as more consequential than the outline-only secondary links used
// everywhere else, rather than one more identical thin-bordered button.
export function ClosingContactCTA({ statement }: ClosingContactCTAProps) {
  return (
    <section className="section-navy py-[var(--space-section)]">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-[var(--space-md)] text-center sm:px-[var(--space-lg)]">
        <h2 className="text-on-dark text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] font-serif">
          {statement ?? DEFAULT_STATEMENT}
        </h2>
        <CTALink href={CONTACT_CTA.href} variant="primary" tone="on-dark" className="mt-[var(--space-lg)]">
          {CONTACT_CTA.label}
        </CTALink>
      </div>
    </section>
  );
}
