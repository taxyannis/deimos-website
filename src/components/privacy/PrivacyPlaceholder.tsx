import { CONTACT_EMAIL } from "@/content/site";
import {
  PRIVACY_COLLECTION_STATEMENT,
  PRIVACY_CONTACT_MAILTO,
  PRIVACY_PLACEHOLDER_NOTICE,
  PRIVACY_USE_STATEMENT,
} from "@/content/privacy";

// Plain legal-reference layout, matching /legal's restraint (no accordion,
// no decorative treatment, full text always visible). The placeholder
// notice renders first, in the page's largest available body type size —
// prominence comes from scale and position, not a decorative border —
// since the single most important thing this page communicates is that it
// is NOT final, so it can't be buried below the informational statements.
export function PrivacyPlaceholder() {
  return (
    <section className="section-navy border-t border-white/10 py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <p className="text-on-dark max-w-[65ch] text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] font-serif">
          {PRIVACY_PLACEHOLDER_NOTICE}
        </p>

        {/* Same clause-number device as /legal — a deliberate cross-page
            convention for the site's two legal-adjacent pages, not a
            one-off flourish. */}
        <div className="mt-[var(--space-xl)] divide-y divide-white/10 border-t border-b border-white/10">
          <div className="grid grid-cols-[auto_1fr] gap-x-[var(--space-lg)] py-[var(--space-lg)]">
            <span
              aria-hidden="true"
              className="text-[length:var(--text-display)] leading-none font-serif text-white/10"
            >
              01
            </span>
            <div>
              <h2 className="text-on-dark text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] font-serif">
                Information Deimos May Receive
              </h2>
              <p className="text-muted-on-dark mt-[var(--space-sm)] max-w-[70ch] text-[length:var(--text-body)] leading-[var(--text-body--line-height)]">
                {PRIVACY_COLLECTION_STATEMENT}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-[auto_1fr] gap-x-[var(--space-lg)] py-[var(--space-lg)]">
            <span
              aria-hidden="true"
              className="text-[length:var(--text-display)] leading-none font-serif text-white/10"
            >
              02
            </span>
            <div>
              <h2 className="text-on-dark text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] font-serif">
                How It Is Used
              </h2>
              <p className="text-muted-on-dark mt-[var(--space-sm)] max-w-[70ch] text-[length:var(--text-body)] leading-[var(--text-body--line-height)]">
                {PRIVACY_USE_STATEMENT}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-[auto_1fr] gap-x-[var(--space-lg)] py-[var(--space-lg)]">
            <span
              aria-hidden="true"
              className="text-[length:var(--text-display)] leading-none font-serif text-white/10"
            >
              03
            </span>
            <div>
              <h2 className="text-on-dark text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] font-serif">
                Data-Related Enquiries
              </h2>
              <p className="text-muted-on-dark mt-[var(--space-sm)] max-w-[70ch] text-[length:var(--text-body)] leading-[var(--text-body--line-height)]">
                For any data-related enquiries, contact Deimos Group at{" "}
                <a
                  href={PRIVACY_CONTACT_MAILTO}
                  className="text-on-dark underline decoration-white/30 underline-offset-4 transition-colors hover:text-steel-blue hover:decoration-steel-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-blue"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
