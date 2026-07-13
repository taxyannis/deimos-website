import Link from "next/link";

type CTALinkProps = {
  href: string;
  children: React.ReactNode;
  /** primary = the page's one real ask (filled); secondary = every other link (outline). */
  variant?: "primary" | "secondary";
  /** Surface pairing. Only on-dark exists now — the whole site is navy-led;
      the former on-light variant was unused after the dark rebuild. */
  tone?: "on-dark";
  className?: string;
};

// active:scale gives the one real per-page ask a moment of tactile press
// feedback (Emil Kowalski's "scale your buttons" tip) — subtle enough
// (0.97) to read as physical response, not bounce. transform is combined
// into the same transition-property list as the color states so both
// animate on one timeline instead of two separately-configured ones.
// Uppercase, medium-weight, widely tracked label — the restrained
// institutional button voice (Franklin caps) that reads as considered rather
// than a rounded SaaS pill.
const BASE =
  "inline-flex w-fit items-center justify-center px-[var(--space-lg)] py-[var(--space-sm)] text-[length:var(--text-label)] font-medium uppercase tracking-[0.1em] transition-[color,background-color,border-color,transform] duration-150 ease-out active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4";

// Filled vs. outline — not a color introduced for decoration, but a real
// hierarchy signal: PRODUCT.md's "one clear path to contact" only reads as
// one clear path if the contact CTA looks more consequential than every
// secondary link on the page, which every CTA sharing an identical thin
// outline (the pre-existing sitewide pattern) couldn't communicate. No new
// hues — primary reuses the surface's own ink/off-white pairing, inverted.
const VARIANTS = {
  "on-dark": {
    primary: "bg-off-white text-deep-navy hover:bg-off-white/85 focus-visible:outline-steel-blue",
    secondary:
      "text-on-dark border border-ink-on-dark/50 hover:border-steel-blue hover:text-steel-blue focus-visible:outline-steel-blue",
  },
} as const;

export function CTALink({
  href,
  children,
  variant = "secondary",
  tone = "on-dark",
  className = "",
}: CTALinkProps) {
  return (
    <Link href={href} className={`${BASE} ${VARIANTS[tone][variant]} ${className}`}>
      {children}
    </Link>
  );
}
