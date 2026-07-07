import { CONTACT_STATEMENT } from "@/content/contact";

// Same restrained single-statement treatment as the homepage's Positioning
// section — no serif display treatment on body copy (DESIGN.md's One-Serif
// Rule), generous whitespace, no visible title (this line IS the heading).
export function ContactStatement() {
  return (
    <section className="section-light py-[var(--space-section-tight)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <h2 className="sr-only">Contact Statement</h2>
        <p className="max-w-[65ch] text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] font-serif">
          {CONTACT_STATEMENT}
        </p>
      </div>
    </section>
  );
}
