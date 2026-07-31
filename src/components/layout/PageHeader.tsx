type PageHeaderProps = {
  title: string;
  description: string;
  /** Optional uppercase kicker above the title — the institutional page-open
      label used across the reference advisory firms. */
  eyebrow?: string;
};

// Shared subpage header — navy surface, serif title + one-line description.
// Subpages do not get a full video hero each; DESIGN.md reserves cinematic
// treatment for the homepage hero/coverage moments specifically, not every
// page (SITE_COMPLETION_PLAN.md "Shared infrastructure"). The inner block
// gets one quiet rise on mount (rise-in, globals.css) — load-time only,
// never scroll-gated, collapsed under reduced motion.
export function PageHeader({ title, description, eyebrow }: PageHeaderProps) {
  // A blank line in `description` splits it into stacked paragraphs; a plain
  // single-line description (every other page) renders as one paragraph
  // unchanged.
  const paragraphs = description.split("\n\n");
  return (
    <section className="section-navy pt-[var(--space-section-tight)] pb-[var(--space-xl)]">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] sm:px-[var(--space-lg)] [animation:rise-in_700ms_cubic-bezier(0.25,1,0.5,1)_both]">
        {eyebrow && (
          <p className="eyebrow text-muted-on-dark mb-[var(--space-md)]">{eyebrow}</p>
        )}
        <h1 className="text-on-dark max-w-[20ch] text-[length:var(--text-display)] leading-[var(--text-display--line-height)] tracking-[var(--text-display--letter-spacing)] font-serif">
          {title}
        </h1>
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={`text-on-dark ${index === 0 ? "mt-[var(--space-md)]" : "mt-[var(--space-sm)]"} max-w-[60ch] text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] opacity-90`}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
