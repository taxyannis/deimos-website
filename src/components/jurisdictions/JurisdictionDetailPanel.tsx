import { jurisdictionThemes, type JurisdictionGroup } from "@/content/jurisdictions";

export type SelectedJurisdiction = { name: string; region: string };

// Read-out panel for the interactive map's selected node — deliberately
// plain (no icons, no metrics) so the only claim made per jurisdiction is a
// set of relevant themes, never an office/license/team implication.
// Structured as an instrument "readout": identity block (region + name),
// a thin rule, then the Relevant Themes line — a spec-sheet convention
// rather than a plain stacked paragraph, matching the map's own restrained
// "institutional instrument" register.
//
// Three states, same min-height (min-h-[12rem]) so switching between them
// never shifts surrounding layout:
//   1. Nothing selected, no region filter — quiet placeholder prompt.
//   2. A region filter is active but nothing is selected yet — a full-
//      precision text picker list of that region's jurisdictions. This is
//      requirement 11's "better detail panel behavior for dense node
//      areas": on a crowded cluster (Americas = 14 nodes, Europe = 10),
//      tapping a name in this list is a reliable alternative to tapping a
//      small map node, without changing the map's geometry or claiming any
//      geographic precision it doesn't have. Capped at max-h-[14rem] with
//      internal scroll so a 14-item region can't grow the panel taller
//      than a 2-item one and shift the layout around it.
//   3. A jurisdiction is selected — the full readout.
//
// Each state's root element carries a distinct `key` plus the shared
// `panel-fade-in` keyframe (globals.css) so switching states remounts and
// quietly fades the new content in, rather than snapping between an empty
// prompt, a list, and a readout with zero transition. Short (220ms) and
// low-frequency by construction — it only fires on a click, never on a
// timer, so it never competes for attention with the hero crossfade.
export function JurisdictionDetailPanel({
  jurisdiction,
  activeGroup,
  onSelect,
}: {
  jurisdiction: SelectedJurisdiction | null;
  activeGroup: JurisdictionGroup | null;
  onSelect: (jurisdiction: SelectedJurisdiction) => void;
}) {
  if (jurisdiction) {
    return (
      <div
        key={`j-${jurisdiction.name}`}
        className="flex h-full min-h-[12rem] flex-col justify-center p-[var(--space-lg)] [animation:panel-fade-in_220ms_cubic-bezier(0.25,1,0.5,1)_both]"
      >
        <p className="eyebrow text-muted-on-dark">
          {jurisdiction.region}
        </p>
        <h3 className="text-on-dark mt-[var(--space-2xs)] text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] font-serif">
          {jurisdiction.name}
        </h3>
        <div className="mt-[var(--space-sm)] border-t border-white/15 pt-[var(--space-sm)]">
          <p className="eyebrow text-muted-on-dark">
            Relevant Themes
          </p>
          {/* Sector, asset, transaction and structuring themes on one restrained
              readout line. The per-card disclaimer is gone: it now lives once as
              a global note below the map (COVERAGE_THEMES_NOTE). */}
          <p className="text-on-dark mt-[var(--space-3xs)] max-w-[40ch] text-[length:var(--text-body)]">
            {jurisdictionThemes(jurisdiction.name).join(" · ")}
          </p>
        </div>
      </div>
    );
  }

  if (activeGroup) {
    return (
      <div
        key={`g-${activeGroup.id}`}
        className="flex h-full min-h-[12rem] flex-col p-[var(--space-lg)] [animation:panel-fade-in_220ms_cubic-bezier(0.25,1,0.5,1)_both]"
      >
        <p className="eyebrow text-muted-on-dark">
          {activeGroup.region}
        </p>
        <ul className="scrollbar-dark mt-[var(--space-sm)] max-h-[14rem] overflow-y-auto border-t border-white/15">
          {activeGroup.jurisdictions.map((name) => (
            <li key={name} className="border-b border-white/10 last:border-b-0">
              <button
                type="button"
                onClick={() => onSelect({ name, region: activeGroup.region })}
                className="text-on-dark hover:text-steel-blue focus-visible:text-steel-blue block w-full origin-left py-[var(--space-xs)] text-left text-[length:var(--text-body)] transition-[color,transform] duration-150 ease-out active:scale-[0.99] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-steel-blue"
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div
      key="empty"
      className="flex h-full min-h-[12rem] flex-col justify-center p-[var(--space-lg)] [animation:panel-fade-in_220ms_cubic-bezier(0.25,1,0.5,1)_both]"
    >
      <p className="text-muted-on-dark max-w-[36ch] text-[length:var(--text-body)]">
        Select a region or jurisdiction to view its relevant themes.
      </p>
    </div>
  );
}
