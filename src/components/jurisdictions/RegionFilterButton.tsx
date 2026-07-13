// Shared toggle-filter button, dark-surface variant — used by both the
// mobile RegionJurisdictionList and the desktop coverage map's filter row,
// which now both sit on the navy page surface. Horizontal/vertical padding
// keeps the tap target at ~44px purely via invisible hit-area growth — no
// background, no radius, so the visible label stays restrained, not a SaaS
// pill. The parent row compensates the first button's added left padding
// with a matching negative margin so the row's left edge lines up with the
// rest of the page.
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
      className={`eyebrow border-b-2 px-[var(--space-sm)] py-[var(--space-xs)] transition-[color,border-color,transform] duration-150 ease-out active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-blue ${
        active
          ? "border-steel-blue text-steel-blue"
          : "text-muted-on-dark border-transparent hover:border-white/30 hover:text-on-dark"
      }`}
    >
      {children}
    </button>
  );
}
