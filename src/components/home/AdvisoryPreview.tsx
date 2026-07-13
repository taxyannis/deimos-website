import {
  ADVISORY_INTRO,
  ADVISORY_LINK,
  ADVISORY_PILLARS,
  CAPITAL_ACCESS_DISCLAIMER,
} from "@/content/homepage";
import { CTALink } from "@/components/ui/CTALink";

// Editorial index, not cards — per HOMEPAGE_BLUEPRINT.md §8/§18: large label
// typography, thin rule dividers, one-line definitions in sans, no icons, no
// bordered boxes. Ink-blue tonal panel against the deep-navy page base —
// the section shift reads as a quiet change of register, not a zebra flip
// to a bright surface. The pillar names are deliberately NON-clickable
// editorial labels (not links): the homepage index never navigates — the
// single CTA below is the only navigation action. Each name stays keyboard-
// focusable (tabIndex 0, no role/href/onClick) purely so the hover reveal of
// its definition also fires on focus, matching the mouse hover.
export function AdvisoryPreview() {
  return (
    <section className="section-dark border-t border-white/10 py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <h2 className="text-on-dark max-w-[60ch] text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] font-serif">
          {ADVISORY_INTRO}
        </h2>

        <div className="mt-[var(--space-xl)] divide-y divide-white/10 border-t border-b border-white/10">
          {ADVISORY_PILLARS.map((pillar) => (
            <div key={pillar.name} className="group py-[var(--space-md)]">
              <span
                tabIndex={0}
                className="text-on-dark inline-block text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] font-serif transition-colors duration-150 ease-out hover:text-steel-blue focus-visible:text-steel-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-blue"
              >
                {pillar.name}
              </span>
              <p className="text-muted-on-dark mt-[var(--space-2xs)] max-w-[65ch] text-[length:var(--text-body)] sm:max-h-0 sm:overflow-hidden sm:opacity-0 sm:transition-all sm:duration-300 sm:group-hover:max-h-24 sm:group-hover:opacity-100 sm:group-focus-within:max-h-24 sm:group-focus-within:opacity-100">
                {pillar.definition}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-[var(--space-lg)] flex flex-col gap-[var(--space-sm)]">
          <CTALink href={ADVISORY_LINK.href} tone="on-dark">
            {ADVISORY_LINK.label}
            <span aria-hidden="true" className="ml-[var(--space-2xs)]">
              &rarr;
            </span>
          </CTALink>

          {/* Capital access disclaimer travels with the claim: Capital
              Formation is one of the capabilities above, so the hedge sits
              here, not only in the footer. */}
          <p className="text-muted-on-dark max-w-[65ch] text-[length:var(--text-small)]">
            {CAPITAL_ACCESS_DISCLAIMER}
          </p>
        </div>
      </div>
    </section>
  );
}
