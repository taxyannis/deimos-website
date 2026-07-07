import { CONTACT_CONFIDENTIALITY_NOTE } from "@/content/contact";

// Same quiet, title-less slate treatment as the homepage's Confidentiality
// section — the sitewide convention for this exact sentence wherever it
// appears (homepage, /advisory, /firm), reused verbatim here rather than
// redrafted.
export function ContactConfidentiality() {
  return (
    <section className="section-slate py-[var(--space-section-tight)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <h2 className="sr-only">Confidentiality &amp; Selective Engagement</h2>
        <p className="max-w-[65ch] text-[length:var(--text-body)] leading-[var(--text-body--line-height)] opacity-90">
          {CONTACT_CONFIDENTIALITY_NOTE}
        </p>
      </div>
    </section>
  );
}
