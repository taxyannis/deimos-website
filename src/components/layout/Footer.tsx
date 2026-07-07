"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DISCLAIMERS, FOOTER_NAV, SITE_NAME } from "@/content/site";

export function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  return (
    <footer className="section-slate">
      <div className="mx-auto max-w-7xl px-[var(--space-md)] py-[var(--space-2xl)] sm:px-[var(--space-lg)]">
        <div className="flex flex-col gap-[var(--space-xl)] border-b border-white/10 pb-[var(--space-xl)] sm:flex-row sm:justify-between">
          <div>
            {/* Serif masthead treatment, not the small uppercase UI-chrome
                label used elsewhere — the footer imprint reads as the
                firm's name, not another nav element. */}
            <p className="text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] font-serif">
              {SITE_NAME}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-[var(--space-lg)] gap-y-[var(--space-2xs)] sm:flex sm:flex-wrap sm:gap-[var(--space-lg)]">
              {FOOTER_NAV.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`inline-block py-[var(--space-3xs)] text-[length:var(--text-label)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-blue ${
                        isActive
                          ? "text-steel-blue"
                          : "text-on-dark hover:text-steel-blue focus-visible:text-steel-blue"
                      }`}
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
        <div className="text-muted-on-slate mt-[var(--space-xl)] flex flex-col gap-[var(--space-sm)] text-[length:var(--text-small)] leading-[var(--text-small--line-height)]">
          <p className="max-w-none">{DISCLAIMERS.general}</p>
          <p className="max-w-none">{DISCLAIMERS.jurisdictional}</p>
          <p className="max-w-none">{DISCLAIMERS.capitalAccess}</p>
        </div>

        <p className="text-muted-on-slate mt-[var(--space-lg)] text-[length:var(--text-small)]">
          © {year} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
