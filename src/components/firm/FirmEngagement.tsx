import { FIRM_ENGAGEMENT } from "@/content/firm";
import { DISCLAIMERS } from "@/content/site";
import { SectionLabel } from "@/components/ui/SectionLabel";

// How Deimos Engages — the mandate / selective-engagement section. Leads with
// the shared Mandate Discipline statement (kept prominent per
// MASTER_WEBSITE_BRIEF.md §14), then a hairline-set-off process block describes
// how a mandate progresses. No standalone "what Deimos is not" line here — the
// page reads on positive identity, and the single boundary sentence lives once
// in Operating Posture. The capital-access disclaimer closes the section, near
// the capital / financing language above rather than only in the footer.
// Ink-blue tonal panel.
export function FirmEngagement() {
  return (
    <section className="section-dark border-t border-white/10 py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <SectionLabel index="02" className="mb-[var(--space-lg)]">
          Engagement
        </SectionLabel>
        <h2 className="text-on-dark text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] font-serif">
          {FIRM_ENGAGEMENT.heading}
        </h2>
        <p className="text-on-dark mt-[var(--space-md)] max-w-[65ch] text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] opacity-90">
          {FIRM_ENGAGEMENT.mandate}
        </p>

        {/* Process block, set off by a hairline and a quiet overline label so
            it reads as engagement mechanics rather than a second paragraph of
            the same statement. */}
        <div className="mt-[var(--space-xl)] border-t border-white/10 pt-[var(--space-lg)]">
          <p className="eyebrow text-muted-on-dark">
            {FIRM_ENGAGEMENT.processLabel}
          </p>
          <p className="text-on-dark mt-[var(--space-sm)] max-w-[65ch] text-[length:var(--text-body)] opacity-90">
            {FIRM_ENGAGEMENT.process}
          </p>

          {/* Mandate criteria as a structured hairline grid — reads as the
              defined conditions the firm engages against, not a runline. */}
          <dl className="mt-[var(--space-lg)] grid grid-cols-1 gap-x-[var(--space-2xl)] border-t border-white/10 sm:grid-cols-2">
            {FIRM_ENGAGEMENT.criteria.map((criterion, index) => (
              <div
                key={criterion}
                className="flex items-baseline gap-[var(--space-md)] border-b border-white/10 py-[var(--space-sm)]"
              >
                <dt className="metric-figures text-steel-blue w-[2ch] shrink-0 text-[length:var(--text-small)]" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </dt>
                <dd className="text-on-dark text-[length:var(--text-body)]">{criterion}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Capital access disclaimer travels with the claim: this section and
            the principles above reference capital formation and financing, so
            the hedge sits here, not only in the sitewide footer. */}
        <p className="text-muted-on-dark mt-[var(--space-lg)] max-w-[65ch] text-[length:var(--text-small)]">
          {DISCLAIMERS.capitalAccess}
        </p>
      </div>
    </section>
  );
}
