import { CONTACT_CONFIDENTIALITY_NOTE } from "@/content/contact";

// Quiet, title-less treatment for the sitewide selective-engagement
// sentence, reused verbatim here rather than redrafted.
export function ContactConfidentiality() {
  return (
    <section className="section-navy border-t border-white/10 py-[var(--space-section-tight)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <h2 className="sr-only">Confidentiality &amp; Selective Engagement</h2>
        <p className="text-on-dark max-w-[65ch] text-[length:var(--text-body)] leading-[var(--text-body--line-height)] opacity-90">
          {CONTACT_CONFIDENTIALITY_NOTE}
        </p>
      </div>
    </section>
  );
}
