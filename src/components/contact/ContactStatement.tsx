import { CONTACT_STATEMENT } from "@/content/contact";

// Restrained single-statement treatment — serif display statement on the
// navy page surface, generous whitespace, no visible title (this line IS
// the heading).
export function ContactStatement() {
  return (
    <section className="section-navy border-t border-white/10 pt-[var(--space-xl)] pb-[var(--space-lg)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <h2 className="sr-only">Contact Statement</h2>
        <p className="text-on-dark max-w-[65ch] text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] font-serif">
          {CONTACT_STATEMENT}
        </p>
      </div>
    </section>
  );
}
