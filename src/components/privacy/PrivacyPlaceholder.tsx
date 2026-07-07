import { CONTACT_EMAIL } from "@/content/site";
import {
  PRIVACY_COLLECTION_STATEMENT,
  PRIVACY_CONTACT_MAILTO,
  PRIVACY_PLACEHOLDER_NOTICE,
  PRIVACY_USE_STATEMENT,
} from "@/content/privacy";

// Plain legal-reference layout, matching /legal's restraint (no accordion,
// no side-stripe accents or other decorative treatment, full text always
// visible). The placeholder notice renders first, in the page's largest
// available body type size (same serif statement treatment as /contact's
// ContactStatement) — prominence comes from scale and position, not a
// decorative border — since the single most important thing this page
// communicates is that it is NOT final, so it can't be buried below the
// informational statements.
export function PrivacyPlaceholder() {
  return (
    <section className="section-light py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <p className="max-w-[65ch] text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] font-serif">
          {PRIVACY_PLACEHOLDER_NOTICE}
        </p>

        {/* Same clause-number device as /legal — a deliberate cross-page
            convention for the site's two legal-adjacent pages, not a
            one-off flourish. */}
        <div className="mt-[var(--space-xl)] divide-y divide-ink-on-light/15 border-t border-b border-ink-on-light/15">
          <div className="grid grid-cols-[auto_1fr] gap-x-[var(--space-lg)] py-[var(--space-lg)]">
            <span
              aria-hidden="true"
              className="text-ink-on-light/10 text-[length:var(--text-display)] leading-none font-serif"
            >
              01
            </span>
            <div>
              <h2 className="text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] font-serif">
                Information Deimos May Receive
              </h2>
              <p className="mt-[var(--space-sm)] max-w-[70ch] text-[length:var(--text-body)] leading-[var(--text-body--line-height)] text-ink-on-light/85">
                {PRIVACY_COLLECTION_STATEMENT}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-[auto_1fr] gap-x-[var(--space-lg)] py-[var(--space-lg)]">
            <span
              aria-hidden="true"
              className="text-ink-on-light/10 text-[length:var(--text-display)] leading-none font-serif"
            >
              02
            </span>
            <div>
              <h2 className="text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] font-serif">
                How It Is Used
              </h2>
              <p className="mt-[var(--space-sm)] max-w-[70ch] text-[length:var(--text-body)] leading-[var(--text-body--line-height)] text-ink-on-light/85">
                {PRIVACY_USE_STATEMENT}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-[auto_1fr] gap-x-[var(--space-lg)] py-[var(--space-lg)]">
            <span
              aria-hidden="true"
              className="text-ink-on-light/10 text-[length:var(--text-display)] leading-none font-serif"
            >
              03
            </span>
            <div>
              <h2 className="text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] font-serif">
                Data-Related Enquiries
              </h2>
              <p className="mt-[var(--space-sm)] max-w-[70ch] text-[length:var(--text-body)] leading-[var(--text-body--line-height)] text-ink-on-light/85">
                For any data-related enquiries, contact Deimos Group at{" "}
                <a
                  href={PRIVACY_CONTACT_MAILTO}
                  className="text-ink-on-light underline decoration-ink-on-light/30 underline-offset-4 transition-colors hover:text-steel-blue-on-light hover:decoration-steel-blue-on-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-blue-on-light"
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
