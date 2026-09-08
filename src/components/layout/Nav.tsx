"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback, useRef } from "react";
import { MAIN_NAV } from "@/content/site";
import { Wordmark } from "@/components/layout/Wordmark";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile panel when the viewport crosses back to desktop width
  // (md, 768px — matches the mobile panel's own `md:hidden`). Without this,
  // resizing/rotating past the breakpoint with the menu open leaves
  // `menuOpen` stale: invisible at desktop width since the panel and
  // toggle are both `md:hidden`, but it would incorrectly reopen already-
  // expanded if the viewport narrows back below md again later in the same
  // session. matchMedia fires only on the breakpoint crossing, not on
  // every resize pixel.
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setMenuOpen(false);
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Escape closes the menu and returns focus to the toggle button — without
  // this, focus lands on the now-inert panel content and effectively gets
  // dropped (a plain `setMenuOpen(false)` alone leaves keyboard focus
  // nowhere in particular). Scoped to only listen while the menu is open,
  // both to make this focus-return correct and to avoid an always-on
  // listener for a key that only matters while the panel is up.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuToggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-sm focus:bg-off-white focus:px-4 focus:py-2 focus:text-[length:var(--text-label)] focus:text-ink-on-light"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors ${
          scrolled
            ? "bg-deep-navy/95 backdrop-blur-sm border-b border-white/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-7xl items-center justify-between px-[var(--space-md)] py-[var(--space-sm)] sm:px-[var(--space-lg)]"
        >
          {/* Same serif masthead treatment as the footer (shared Wordmark),
              scaled down to nav height. */}
          <Link
            href="/"
            className="text-ink-on-dark transition-colors duration-150 ease-out hover:text-steel-blue active:text-steel-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-blue"
          >
            <Wordmark className="text-[length:var(--text-body-lg)]" />
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-[var(--space-lg)] md:flex">
            {MAIN_NAV.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`border-b-2 pb-[var(--space-3xs)] text-[length:var(--text-label)] tracking-[var(--text-label--letter-spacing)] transition-colors duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-blue ${
                      isActive
                        ? "border-steel-blue text-steel-blue"
                        : "border-transparent text-ink-on-dark/85 hover:text-steel-blue focus-visible:text-steel-blue active:text-steel-blue"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile menu trigger — p-[var(--space-xs)] (12px) around the
              22x22 icon gives a ~46x46px hit area, meeting the 44px touch
              comfort target without enlarging the icon itself. */}
          <button
            ref={menuToggleRef}
            type="button"
            className="inline-flex items-center justify-center rounded-sm p-[var(--space-xs)] text-ink-on-dark transition-transform duration-150 ease-out active:scale-[0.97] md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel-blue"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
            onClick={toggleMenu}
          >
            <span className="sr-only">
              {menuOpen ? "Close menu" : "Open menu"}
            </span>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path
                  d="M4 4L18 18M18 4L4 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <>
                  <path
                    d="M3 6H19"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 11H19"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 16H19"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </>
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile panel — grid-template-rows 0fr/1fr transition (same trick
            as AdvisoryPillars' accordion) instead of an instant `hidden`
            toggle, so the menu opens/closes with a quiet slide rather than
            a hard cut. `inert` (not `hidden`) removes the collapsed panel
            from the tab order and accessibility tree while still allowing
            it to participate in the height transition — `hidden` would
            skip the animation entirely. The padding/border live inside a
            padding-free clipping wrapper so the 0fr row truly reaches zero
            height when closed; otherwise the first item can leak over the
            hero on narrow screens. */}
        <div
          id="mobile-nav-panel"
          inert={!menuOpen}
          className={`grid overflow-hidden bg-deep-navy transition-[grid-template-rows] duration-300 ease-out md:hidden ${
            menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <ul className="flex flex-col gap-[var(--space-2xs)] border-t border-white/10 px-[var(--space-md)] py-[var(--space-md)]">
              {MAIN_NAV.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`block py-[var(--space-2xs)] text-[length:var(--text-body)] transition-colors duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel-blue ${
                        isActive ? "text-steel-blue" : "text-ink-on-dark hover:text-steel-blue active:text-steel-blue"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
