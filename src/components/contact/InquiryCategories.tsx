import { CONTACT_EMAIL, DISCLAIMERS } from "@/content/site";
import { INQUIRY_CATEGORIES, inquiryMailto } from "@/content/contact";

// Navy tonal pivot for the page's one real action — categorized mailto:
// links, not a form (SITE_COMPLETION_PLAN.md: no backend, no third-party
// form service, no fake submission behavior for v1). Plain full-width
// links in a divided list, not buttons-as-cards — each is a real <a
// href="mailto:...">, so keyboard users tab and activate them exactly like
// any other link; no JS is involved. The explanatory line above the list
// makes the mailto behavior explicit rather than implying a working
// backend form.
export function InquiryCategories() {
  return (
    <section className="section-dark border-t border-white/10 py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <h2 className="text-on-dark text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] font-serif">
          Inquiry Categories
        </h2>
        <p className="text-muted-on-dark mt-[var(--space-sm)] max-w-[60ch] text-[length:var(--text-body)]">
          Each category below opens your email client, addressed to{" "}
          <span className="text-on-dark">{CONTACT_EMAIL}</span>, with the
          category pre-filled as the subject line.
        </p>

        {/* Two-column editorial grid at sm+ — a single full-width column
            for six short rows left a lot of unused space on wide screens.
            Row-major grid flow means items 0-1 are row 1, 2-3 are row 2,
            3-4 are row 3; border-t applies from index 2 on (row 2+) at
            sm+, and from index 1 on (every row) below sm where it's a
            single stacked column — index 1 is the one case that differs
            between the two layouts (top-right at sm+, second row on
            mobile), so it explicitly opts out of the mobile border. */}
        <ul className="mt-[var(--space-xl)] border-t border-b border-white/15 sm:grid sm:grid-cols-2 sm:gap-x-[var(--space-xl)]">
          {INQUIRY_CATEGORIES.map((category, index) => (
            <li
              key={category.id}
              className={`${index >= 1 ? "border-t border-white/15" : ""} ${
                index === 1 ? "sm:border-t-0" : ""
              } ${index >= 2 ? "sm:border-t sm:border-white/15" : ""}`}
            >
              <a
                href={inquiryMailto(category.subject)}
                className="group flex flex-wrap items-center justify-between gap-x-[var(--space-md)] gap-y-[var(--space-3xs)] py-[var(--space-md)] transition-colors hover:text-steel-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-blue"
              >
                <span className="text-on-dark text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] font-serif transition-colors group-hover:text-steel-blue">
                  {category.label}
                </span>
                <span
                  aria-hidden="true"
                  className="text-muted-on-dark hidden text-[length:var(--text-label)] tracking-[var(--text-label--letter-spacing)] transition-colors group-hover:text-steel-blue sm:inline"
                >
                  {CONTACT_EMAIL} &rarr;
                </span>
                <span
                  aria-hidden="true"
                  className="text-muted-on-dark text-[length:var(--text-label)] tracking-[var(--text-label--letter-spacing)] transition-colors group-hover:text-steel-blue sm:hidden"
                >
                  &rarr;
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Capital access disclaimer travels with the claim: one of the six
            categories above is Capital formation, so the hedge sits here,
            not only in the sitewide footer. */}
        <p className="text-muted-on-dark mt-[var(--space-lg)] max-w-[65ch] text-[length:var(--text-small)]">
          {DISCLAIMERS.capitalAccess}
        </p>
      </div>
    </section>
  );
}
