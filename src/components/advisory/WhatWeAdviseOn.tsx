import { WHAT_WE_ADVISE_ON } from "@/content/advisory";

// Deep navy, continuous with the page header — /advisory now reads as one
// unified environment; the capability accordion that follows sits on an
// ink-blue tonal panel, so this statement flows straight into it with no
// intervening empty surface or bright block.
export function WhatWeAdviseOn() {
  return (
    <section className="section-navy border-t border-white/10 py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <h2 className="text-on-dark text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] font-serif">
          {WHAT_WE_ADVISE_ON.heading}
        </h2>
        <p className="text-on-dark mt-[var(--space-md)] max-w-[70ch] text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] opacity-90">
          {WHAT_WE_ADVISE_ON.body}
        </p>
      </div>
    </section>
  );
}
