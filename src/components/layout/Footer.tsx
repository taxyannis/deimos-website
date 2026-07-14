"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACT_EMAIL, DISCLAIMERS, FOOTER_NAV, SITE_NAME } from "@/content/site";
import { Wordmark } from "@/components/layout/Wordmark";

// FOOTER_NAV is authored as four primary destinations followed by the two
// legal links; the footer groups them into labelled columns ("Navigate" /
// "Legal") rather than one flat wrap, which reads as a more deliberate,
// substantial imprint.
const PRIMARY_NAV = FOOTER_NAV.slice(0, 4);
const LEGAL_NAV = FOOTER_NAV.slice(4);

export function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  const navLinkClass = (isActive: boolean) =>
    `inline-block py-[var(--space-3xs)] text-[length:var(--text-body)] transition-colors duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-blue ${
      isActive
        ? "text-steel-blue"
        : "text-on-dark hover:text-steel-blue focus-visible:text-steel-blue active:text-steel-blue"
    }`;

  return (
    <footer className="section-slate border-t border-white/10">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] pt-[var(--space-xl)] pb-[var(--space-md)] sm:px-[var(--space-lg)]">
        {/* Masthead row — brand, direct line and firm descriptor on the left,
            grouped nav columns on the right. Kept deliberately compact: a
            single-line descriptor and tight column spacing so the footer reads
            as a premium imprint rather than a tall sitemap. */}
        <div className="grid gap-x-[var(--space-2xl)] gap-y-[var(--space-lg)] border-b border-white/10 pb-[var(--space-lg)] lg:grid-cols-[2fr_1fr_1fr] lg:gap-x-[var(--space-3xl)]">
          <div>
            <Wordmark className="text-[length:var(--text-h3)]" />
            <p className="text-muted-on-slate mt-[var(--space-xs)] max-w-[38ch] text-[length:var(--text-small)] leading-[var(--text-small--line-height)]">
              A global independent strategic advisory firm advising principals, investors and institutions across international markets.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-on-dark mt-[var(--space-sm)] inline-block text-[length:var(--text-body)] underline decoration-white/25 underline-offset-4 transition-colors hover:text-steel-blue hover:decoration-steel-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-blue"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow text-muted-on-slate mb-[var(--space-sm)]">Navigate</p>
            <ul className="flex flex-col gap-0">
              {PRIMARY_NAV.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={navLinkClass(isActive)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <p className="eyebrow text-muted-on-slate mb-[var(--space-sm)]">Legal</p>
            <ul className="flex flex-col gap-0">
              {LEGAL_NAV.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={navLinkClass(isActive)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/*
          Disclaimers use text-muted-on-slate (not text-muted-on-dark): the
          footer's surface is slate-navy, a meaningfully lighter mid-tone than
          the deep-navy/ink-blue muted-on-dark was calibrated against. Using
          muted-on-dark here measured 2.43:1 in a live audit — see globals.css.
        */}
        <div className="text-muted-on-slate mt-[var(--space-md)] flex flex-col gap-[var(--space-2xs)] text-[length:var(--text-small)] leading-[var(--text-small--line-height)]">
          <p className="max-w-none">{DISCLAIMERS.general}</p>
          <p className="max-w-none">{DISCLAIMERS.jurisdictional}</p>
          <p className="max-w-none">{DISCLAIMERS.capitalAccess}</p>
          <p className="mt-[var(--space-2xs)] border-t border-white/10 pt-[var(--space-sm)]">
            © {year} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
