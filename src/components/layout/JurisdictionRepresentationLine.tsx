import { JURISDICTION_REPRESENTATION_LINE } from "@/content/site";

// Deliberately quiet and title-less (sr-only heading, same pattern as the
// homepage's Positioning/Confidentiality sections) — original-master-
// prompt.txt §9 explicitly warns this line must not read as open
// recruitment or a generic call for agents, so it gets the smallest,
// least promotional section on the page rather than a heading and CTA.
// Lives in layout/, not firm/, because it's reused verbatim on both /firm
// and /jurisdictions (SITE_COMPLETION_PLAN.md "Shared infrastructure").
//
// Kept inside the navy family (ambient-navy + a hairline top rule) rather
// than the old lighter slate surface: on /firm and /coverage this line sat
// between navy sections as a distinctly brighter grey band — the exact
// "grey document block" interruption the navy-continuity direction rules
// out. As a tonal navy section separated only by a fine divider, it now
// reads as a quiet aside within one coherent environment. A short steel
// hairline marks the note without giving it a promotional heading.
export function JurisdictionRepresentationLine() {
  return (
    <section className="ambient-navy border-t border-white/10 py-[var(--space-section-tight)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <h2 className="sr-only">Representation in Additional Jurisdictions</h2>
        <span aria-hidden="true" className="block h-px w-10 bg-steel-blue/40" />
        <p className="text-muted-on-dark mt-[var(--space-md)] max-w-[60ch] text-[length:var(--text-body)]">
          {JURISDICTION_REPRESENTATION_LINE}
        </p>
      </div>
    </section>
  );
}
