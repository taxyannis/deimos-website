type PageHeaderProps = {
  title: string;
  description: string;
};

// Shared subpage header — navy surface, serif title + one-line description.
// Subpages do not get a full video hero each; DESIGN.md reserves cinematic
// treatment for the homepage hero/coverage moments specifically, not every
// page (SITE_COMPLETION_PLAN.md "Shared infrastructure"). The inner block
// gets one quiet rise on mount (rise-in, globals.css) — load-time only,
// never scroll-gated, collapsed under reduced motion.
export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="section-navy py-[var(--space-section-tight)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)] [animation:rise-in_700ms_cubic-bezier(0.25,1,0.5,1)_both]">
        <h1 className="text-on-dark max-w-[20ch] text-[length:var(--text-display)] leading-[var(--text-display--line-height)] tracking-[var(--text-display--letter-spacing)] font-serif">
          {title}
        </h1>
        <p className="text-on-dark mt-[var(--space-md)] max-w-[60ch] text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] opacity-90">
          {description}
        </p>
      </div>
    </section>
  );
}
