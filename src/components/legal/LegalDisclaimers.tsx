import { DISCLAIMERS } from "@/content/site";
import { LEGAL_SECTIONS } from "@/content/legal";

// Deliberately plain — a legal reference page, not an editorial one. Full
// text always visible (no accordion; nothing worth hiding behind a click on
// a page whose whole purpose is to be read/scanned/printed in full), thin
// rule dividers only, no icons, no decorative treatment. Same off-white
// surface and type scale as every other subpage — "restrained legal
// layout," not a special legal-page skin.
//
// The one deliberate device: a large, near-invisible serif clause number
// beside each heading. This earns its place here (unlike a decorative
// 01/02/03 eyebrow elsewhere on the site) because legal disclaimers are
// conventionally cited by number/clause — it's real structure, not a
// borrowed onboarding-flow trope.
export function LegalDisclaimers() {
  return (
    <section className="section-light py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <div className="divide-y divide-ink-on-light/15 border-t border-b border-ink-on-light/15">
          {LEGAL_SECTIONS.map((section, index) => (
            <div
              key={section.id}
              className="grid grid-cols-[auto_1fr] gap-x-[var(--space-lg)] py-[var(--space-lg)]"
            >
              <span
                aria-hidden="true"
                className="text-ink-on-light/10 text-[length:var(--text-display)] leading-none font-serif"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] font-serif">
                  {section.heading}
                </h2>
                <p className="mt-[var(--space-sm)] max-w-[70ch] text-[length:var(--text-body)] leading-[var(--text-body--line-height)] text-ink-on-light/85">
                  {DISCLAIMERS[section.disclaimerKey]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
