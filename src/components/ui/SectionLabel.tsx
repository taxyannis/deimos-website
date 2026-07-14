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

// Indexed section label — the connective tissue that gives the site editorial
// density: a tabular index numeral, a short hairline, then the tracked eyebrow.
// This is the "subtle indexed sections" register used across institutional
// advisory sites (Rothschild / Evercore) — it adds structure and rhythm
// without cards, icons or decoration. The index is aria-hidden: it is a visual
// enumeration cue, not content a screen reader needs to announce before the
// label.
export function SectionLabel({
  index,
  children,
  tone = "on-dark",
  className = "",
}: SectionLabelProps) {
  const muted = tone === "on-slate" ? "text-muted-on-slate" : "text-muted-on-dark";
  const ruleColor = tone === "on-slate" ? "bg-white/25" : "bg-white/20";

  return (
    <div className={`flex items-center gap-[var(--space-sm)] ${className}`}>
      {index && (
        <span aria-hidden="true" className={`metric-figures eyebrow ${muted}`}>
          {index}
        </span>
      )}
      {index && (
        <span aria-hidden="true" className={`h-px w-[var(--space-lg)] ${ruleColor}`} />
      )}
      <span className={`eyebrow ${muted}`}>{children}</span>
    </div>
  );
}
