import { CONTACT_EMAIL, DISCLAIMERS } from "@/content/site";
import { DIRECT_EMAIL_MAILTO } from "@/content/contact";

// Closing "CTA area" — not another link back into /contact (this IS
// /contact), so it restates the plain email address directly for anyone who
// doesn't want to pick a category, plus a disclaimer reminder (both already
// live in the footer; repeating here keeps the hedge close to the page's
// one real action, per the "hedge travels with the claim" rule).
export function ContactDirectEmail() {
  return (
    <section className="section-navy border-t border-white/10 py-[var(--space-xl)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        {/* The plain email address is set larger and in the serif so it reads
            as the page's quiet closing action, not another line of body copy. */}
        <p className="text-on-dark max-w-[60ch] text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] opacity-90">
          Email Deimos Group directly at{" "}
          <a
            href={DIRECT_EMAIL_MAILTO}
            className="text-on-dark font-serif underline decoration-white/30 underline-offset-4 transition-colors hover:text-steel-blue hover:decoration-steel-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-blue"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>

        <p className="text-muted-on-dark mt-[var(--space-lg)] max-w-[65ch] text-[length:var(--text-small)]">
          {DISCLAIMERS.general}
        </p>
      </div>
    </section>
  );
}
