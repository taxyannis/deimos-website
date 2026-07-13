import { FIRM_ENGAGEMENT } from "@/content/firm";
import { DISCLAIMERS } from "@/content/site";

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
          <p className="text-muted-on-dark text-[length:var(--text-label)] tracking-[var(--text-label--letter-spacing)]">
            {FIRM_ENGAGEMENT.processLabel}
          </p>
          <p className="text-on-dark mt-[var(--space-xs)] max-w-[65ch] text-[length:var(--text-body)] opacity-90">
            {FIRM_ENGAGEMENT.process}
          </p>

          <ul className="text-muted-on-dark mt-[var(--space-lg)] flex flex-wrap items-center gap-y-[var(--space-2xs)] text-[length:var(--text-label)] tracking-[var(--text-label--letter-spacing)]">
            {FIRM_ENGAGEMENT.criteria.map((criterion, index) => (
              <li key={criterion} className="flex items-center">
                <span>{criterion}</span>
                {index < FIRM_ENGAGEMENT.criteria.length - 1 && (
                  <span aria-hidden="true" className="mx-[var(--space-sm)] text-white/30">
                    &middot;
                  </span>
                )}
              </li>
            ))}
          </ul>
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
