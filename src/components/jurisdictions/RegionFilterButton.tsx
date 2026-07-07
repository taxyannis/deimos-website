// Shared toggle-filter button, light-surface variant — used by both the
// mobile RegionJurisdictionList and the desktop JurisdictionMap's filter
// row (which sits on the light section surrounding the navy map panel, not
// inside it), so the two interactive treatments stay visually consistent.
// Horizontal/vertical padding brings the tap target to ~44px (UI/UX audit
// finding) purely via invisible hit-area growth — no background, no
// radius, so the visible label stays exactly as restrained as before, not
// a SaaS pill. The parent row compensates the first button's added left
// padding with a matching negative margin so the row's left edge still
// lines up with the rest of the page (see RegionJurisdictionList.tsx /
// JurisdictionMap.tsx).
export function RegionFilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`border-b-2 px-[var(--space-sm)] py-[var(--space-xs)] text-[length:var(--text-label)] tracking-[var(--text-label--letter-spacing)] transition-[color,border-color,transform] duration-150 ease-out active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-blue-on-light ${
        active
          ? "border-steel-blue-on-light text-steel-blue-on-light"
          : "text-muted-on-light border-transparent hover:border-ink-on-light/30 hover:text-ink-on-light"
      }`}
    >
      {children}
    </button>
  );
}
