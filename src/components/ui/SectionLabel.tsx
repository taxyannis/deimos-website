import type { ReactNode } from "react";

type SectionLabelProps = {
  /** Two-digit section index, e.g. "01". Rendered in tabular figures so a
      column of section numbers stays optically aligned down the page. */
  index?: string;
  /** The eyebrow text, e.g. "Positioning". */
  children: ReactNode;
  /** Surface-specific muted tone (see globals.css). Muted tuned for one navy
      surface is not automatically legible on another, so choose deliberately. */
  tone?: "on-dark" | "on-slate";
  className?: string;
};

// Institutional section header — a single refined system used sitewide.
// A short vertical steel-blue marker opens the header, followed by an
// optional compact index numeral and the small uppercase label, on tight
// asymmetric spacing. This replaces the earlier "01 — Label" treatment with
// its long horizontal rule: the vertical tick reads as a considered editorial
// index cue (the register used on institutional advisory/annual-report
// mastheads) rather than a dash. The marker and index are aria-hidden — they
// are visual enumeration, not content a screen reader needs to announce.
export function SectionLabel({
  index,
  children,
  tone = "on-dark",
  className = "",
}: SectionLabelProps) {
  const muted = tone === "on-slate" ? "text-muted-on-slate" : "text-muted-on-dark";

  return (
    <div className={`flex items-center ${className}`}>
      {/* Short vertical marker — a steel-blue tick, slightly taller than the
          cap height, that anchors the header. */}
      <span
        aria-hidden="true"
        className="mr-[var(--space-xs)] h-[1.15em] w-px shrink-0 bg-steel-blue/70"
      />
      {index && (
        <span
          aria-hidden="true"
          className={`metric-figures mr-[var(--space-sm)] text-[length:var(--text-small)] tracking-[0.06em] text-steel-blue`}
        >
          {index}
        </span>
      )}
      <span className={`eyebrow ${muted}`}>{children}</span>
    </div>
  );
}
