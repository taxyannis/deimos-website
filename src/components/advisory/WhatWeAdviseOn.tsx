import { WHAT_WE_ADVISE_ON } from "@/content/advisory";

export function WhatWeAdviseOn() {
  return (
    <section className="section-light py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)]">
        <h2 className="text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] font-serif">
          {WHAT_WE_ADVISE_ON.heading}
        </h2>
        <p className="mt-[var(--space-md)] max-w-[70ch] text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)]">
          {WHAT_WE_ADVISE_ON.body}
        </p>
      </div>
    </section>
  );
}
