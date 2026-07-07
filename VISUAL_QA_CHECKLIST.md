# Visual QA Checklist

No screenshot/pixel-diff tooling exists in this environment, so every visual
claim in prior audit passes was verified by code inspection, computed WCAG
contrast math, and live dev-server/curl checks — not by looking at a
rendered screenshot. **Before circulating any preview build, a human must
run this checklist in an actual browser.** Nothing below has been confirmed
visually; treat every box as unchecked until someone with a browser does it.

Routes to check on every pass: `/`, `/firm`, `/advisory`, `/jurisdictions`,
`/contact`, `/legal`, `/privacy`.

## 1. Breakpoint sweep

Resize (or use devtools device sizing) to each width below, on every route.
Look for: overlapping text, cramped touch targets, orphaned single words in
headings, horizontal scrollbars, and awkward line breaks in the serif
display headings specifically (they're the widest type on the page).

- [ ] **Desktop — 1440px.** Content should sit inside the `max-w-7xl`
      (1280px) container with visible breathing room on both sides, not
      stretched edge-to-edge.
- [ ] **Laptop — ~1280px.** This is the container's own cap — confirm
      nothing overflows it and the jurisdiction map's 2-column split
      (`2xl:grid-cols-[2fr_1fr]`, which only activates above 1536px) is
      correctly still single-column here.
- [ ] **Tablet — 768–1024px.** The single most load-bearing range for the
      jurisdiction map fix (see §3). Also check the nav's mobile/desktop
      breakpoint switch lands cleanly — no dead zone where neither the
      hamburger nor the full nav is visible.
- [ ] **Mobile — ~390px.** Check the legal/privacy ghost-numeral layout
      (`grid-cols-[auto_1fr]`) doesn't crowd the heading/paragraph column —
      the numeral column is `auto`-sized off a `clamp()` display size, so
      confirm it hasn't eaten more width than intended at this floor.
      Check the homepage Positioning section's two-column layout has
      correctly collapsed to a single stacked column (it's `lg:` gated).

## 2. Homepage specifics

- [ ] **Hero readability.** Headline and subline are legible against the
      video/poster background across all five hero slides, not just the
      first. Check the overlay gradient holds up on the brightest slide.
      Confirm the hero CTAs (outline "advisory" + filled "contact") are
      both comfortably tappable and don't wrap awkwardly at ~390px.
- [ ] **Positioning section substance.** Confirm the two-column layout
      (statement + three `POSITIONING_PRINCIPLES` lines) reads as
      intentional editorial structure, not as a mismatched sidebar. At
      `lg:` and above, check the right-column list doesn't look
      disconnected from the left-column statement (vertical alignment,
      spacing).
- [ ] **Confidentiality section substance.** Confirm the three-tier stack
      (statement → middot-separated principles → arrow-separated process
      steps) reads clearly as three distinct groups, not as one run-on
      list. Check the middot separators don't get orphaned at line-wrap
      points in the principles row on narrow viewports.

## 3. Jurisdiction map interaction

- [ ] **Node hit area.** On an actual touchscreen or touch-emulated
      devtools, tap several adjacent nodes in a dense cluster (Americas —
      14 nodes, Europe — 10 nodes) at tablet width (~768–1024px) and
      confirm each tap selects the intended jurisdiction, not a neighbor.
- [ ] **Region filter → picker list.** Select a region filter (e.g.
      "Americas"), confirm the detail panel switches to a scrollable text
      list of that region's jurisdictions, and confirm clicking a name in
      that list selects it (panel switches to the readout state). Confirm
      switching regions clears any prior selection rather than showing a
      stale readout for a jurisdiction outside the new filter.
- [ ] **No layout shift.** Selecting a node, or switching between the
      three detail-panel states (empty / region picker list / readout),
      should not shift the map or push the page content below it.
- [ ] **Keyboard.** Tab through nodes in a filtered region; confirm dimmed
      (filtered-out) nodes are skipped (not just visually dimmed but
      actually untabbable), and that `Enter`/`Space` selects a focused
      node with a visible focus ring.
- [ ] **Hover tooltip.** Hovering a node on desktop shows its name in a
      small tooltip without causing layout shift or clipping at the
      viewport edge for edge-cluster nodes.
- [ ] **Mobile fallback.** Below the breakpoint where the map is
      impractical, confirm `RegionJurisdictionList`'s flat grouped-list
      fallback renders instead and its own region filter works
      independently of the map's.

## 4. Contact page

- [ ] **Mailto buttons.** Click each of the six inquiry-category rows and
      confirm the OS/browser mail client opens with the correct
      pre-filled subject line and the correct recipient address. Also
      test the plain "direct email" link at the bottom of the page.
- [ ] **Not a SaaS form.** Confirm the page reads as an editorial list of
      real `<a href="mailto:...">` links (serif category names, arrow
      affordance) rather than a generic input-field contact form — there
      should be no text inputs, no submit button, no "we'll get back to
      you" copy anywhere on the page.

## 5. Legal / Privacy pages

- [ ] **Not abandoned-looking.** Both pages should show multiple clearly
      structured sections (ghost-numeral + heading + disclaimer text),
      not a single undifferentiated block of legal text.
- [ ] **Readability.** Body text stays within its `max-w-[70ch]` measure
      at every breakpoint; the near-invisible ghost numerals stay
      decorative (don't compete with or overlap the heading text) at
      every breakpoint, especially mobile.

## 6. Sitewide chrome

- [ ] **Nav active state.** On each of the 7 routes, confirm the
      corresponding nav item is visually distinguished (steel-blue,
      `aria-current="page"`) and that no other item is marked active.
- [ ] **Footer links.** Confirm every footer link resolves to a real,
      correct route (no dead links, no accidental `/services` or
      `/experience`), and that the footer's active-state logic matches
      the nav's.
- [ ] **Mobile hamburger.** Confirm the mobile nav toggle opens/closes
      reliably, has a comfortably large tap target, and traps focus
      sensibly while open.

## 7. Contrast spot-checks

Prior contrast fixes were verified by computed OKLCH math, not eyeballing —
still worth a human sanity check on real rendering (fonts/anti-aliasing can
shift perceived contrast slightly even when the numbers pass):

- [ ] Body text on off-white sections (`text-ink-on-light/85` and
      `text-muted-on-light`).
- [ ] Body/label text on slate sections (`text-muted-on-slate`).
- [ ] Muted text on navy/ink-blue sections (`text-muted-on-dark`).
- [ ] Footer disclaimer text (smallest type size sitewide — the
      highest-risk combination of small size + muted color).
- [ ] Link underlines and hover/focus states remain visible against their
      surface at every color pairing above.

## 8. Generic/SaaS pattern check

Scan every route for anything that would read as a templated AI/SaaS
generation rather than a bespoke institutional site:

- [ ] No icon grids, no badge rows, no identical-card feature grids.
- [ ] No gradient text, no glassmorphism, no drop shadows on flat content
      blocks.
- [ ] No tiny uppercase tracked "eyebrow" label repeated above every
      section.
- [ ] No numbered `01 / 02 / 03` section markers outside the two places
      that legitimately earn them (legal/privacy clause numbers, and the
      homepage's real `PROCESS_STEPS` sequence).
- [ ] No stock-photo-style imagery or generic dashboard chrome anywhere.
