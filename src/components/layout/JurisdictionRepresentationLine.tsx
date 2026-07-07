import { JURISDICTION_REPRESENTATION_LINE } from "@/content/site";

// Deliberately quiet and title-less (sr-only heading, same pattern as the
// homepage's Positioning/Confidentiality sections) — original-master-
// prompt.txt §9 explicitly warns this line must not read as open
// recruitment or a generic call for agents, so it gets the smallest,
// least promotional section on the page rather than a heading and CTA.
// Lives in layout/, not firm/, because it's reused verbatim on both /firm
// and /jurisdictions (SITE_COMPLETION_PLAN.md "Shared infrastructure").
export function JurisdictionRepresentationLine() {
  return (
    <section className="section-slate py-[var(--space-section-tight)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <h2 className="sr-only">Representation in Additional Jurisdictions</h2>
        <p className="max-w-[60ch] text-[length:var(--text-body)] opacity-90">
          {JURISDICTION_REPRESENTATION_LINE}
        </p>
      </div>
    </section>
  );
}
