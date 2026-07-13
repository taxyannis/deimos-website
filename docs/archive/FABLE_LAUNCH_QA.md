# Fable Launch QA — Deimos Group Website

Final QA and launch-credibility pass. Scope: audit only, apply safe
Blocker/High/Medium fixes, no redesign, no copy rewrites, no route/nav/legal
meaning changes.

Approved routes audited: `/`, `/firm`, `/advisory`, `/coverage`, `/contact`,
`/legal`, `/privacy`.
Governing narrative: *"Reducing Capital Risk Through Structure, Process, and Execution."*

---

## Summary

The site is launch-solid. Routing, links, infrastructure (favicon, OG/Twitter
image, robots, sitemap), and the risk/claims posture are all clean and
well-hedged. Two items surfaced: one safe metadata fix (applied) and one
launch-readiness item that requires legal counsel (deferred — not a code fix).

| # | Issue | Severity | Safe to fix now | Status |
|---|-------|----------|-----------------|--------|
| 1 | Twitter card set to `summary` on 6 subpages while a 1200×630 branded card exists and the root layout uses `summary_large_image` | Medium | Yes | **Fixed** |
| 2 | Privacy Policy is an explicit, counsel-unreviewed placeholder | High (launch-readiness) | No | **Deferred** |
| 3 | `SITE_URL` is assumed from the email domain (`www.deimos-group.com`) | Low | No (needs confirmation) | Deferred |
| 4 | Unused reserved hero clips shipped in `public/videos/` | Low | Yes, but out of scope | Deferred |

---

## Confirmed issues

### 1. Inconsistent Twitter card type — Medium — FIXED
**Finding.** The root layout declares `twitter.card: "summary_large_image"`,
and a real 1200×630 branded share card is generated for **every** route via
`src/app/opengraph-image.tsx` (reused by `twitter-image.tsx`). But all six
subpages (`/firm`, `/advisory`, `/coverage`, `/contact`, `/legal`, `/privacy`)
override with `twitter.card: "summary"`, forcing a small square card on
shared subpage links even though the large branded image exists.
**Impact.** Inconsistent, lower-credibility social previews for the most
likely deep-linked pages.
**Recommended fix.** Change the six subpages' `twitter.card` to
`summary_large_image` to match the layout and the actual image dimensions.
**Safe to fix now.** Yes — metadata-only, no visual/content/route change.

### 2. Privacy Policy is a placeholder — High (launch-readiness) — DEFERRED
**Finding.** `/privacy` renders an honest, explicit placeholder: the visible
notice and page metadata both state it is "a placeholder in preparation… has
not been reviewed by legal counsel… will replace this placeholder before
public launch." (`src/content/privacy.ts`).
**Impact.** A placeholder privacy policy should not go live on a public,
credibility-sensitive institutional site.
**Recommended fix.** Replace with a complete, counsel-reviewed Privacy Policy
before public launch.
**Safe to fix now.** No — the task forbids changing Legal/Privacy meaning, and
inventing legal text (or hiding the placeholder status) would be worse than an
honest placeholder. Requires client/legal counsel content, not a code change.

### 3. `SITE_URL` assumed from email domain — Low — DEFERRED
**Finding.** `SITE_URL = "https://www.deimos-group.com"` is explicitly assumed
from the firm's email domain and drives `robots.ts`/`sitemap.ts` and absolute
OG image URLs (`src/content/site.ts`).
**Impact.** If the live host differs (e.g. apex domain without `www`), sitemap
and canonical share URLs would be wrong.
**Recommended fix.** Confirm the production origin and update the one constant.
**Safe to fix now.** No — needs confirmation of the live host; guessing could
introduce an error rather than fix one.

### 4. Unused reserved hero clips in `public/videos/` — Low — DEFERRED
**Finding.** `hero-harbor-night-02.mp4`, `hero-twilight-skyline-01.mp4`, and
`hero-waterfront-skyline-01.mp4` exist but are not referenced by the hero
manifest (`src/content/hero.ts`).
**Impact.** None at runtime (never served); only repo weight.
**Recommended fix.** Optionally remove if confirmed unneeded.
**Safe to fix now.** Out of scope for this pass (asset removal, not a defect).

---

## Audit checklist results (all other points: PASS)

1. **Broken routes / redirects** — PASS. All 7 approved routes present.
   `next.config.ts` permanently redirects `/services → /advisory#capabilities`
   and `/jurisdictions → /coverage`; both targets exist (the `#capabilities`
   anchor is present in `AdvisoryPillars.tsx`). No removed routes
   (`/experience`, `/situations`, `/sectors`, Insights) exist or are linked.
2. **Broken links / CTAs** — PASS. Every internal `href` points to an approved
   route (or `/advisory#capabilities`, `#main-content`, `/`); `mailto:` links
   resolve to `intake@deimos-group.com`. No dead anchors.
3. **Default favicon / missing OG image** — PASS. Default `favicon.ico`
   removed; custom `src/app/icon.svg` present. Branded 1200×630 OG image
   (`opengraph-image.tsx`) and reused Twitter image exist and apply to all
   routes.
4. **robots.ts / sitemap.ts** — PASS. Both present; sitemap lists exactly the
   7 approved routes; robots allows all and points to the sitemap.
5. **Invalid image/poster references** — PASS. All hero posters are `null` and
   the poster `<Image>` only mounts when a real path exists, so no missing file
   is ever requested. No other image string references exist in `src/`.
6. **Console-risk issues** — PASS. No `console.*`, `debugger`, or `alert` in
   `src/`; ESLint reports no errors across `src/`.
7. **Dead imports / stale duplicate components** — PASS. No unused component
   files; ESLint finds no unused imports.
8. **Inconsistent metadata** — MOSTLY PASS. Page titles follow a consistent
   `"<Page> | Deimos Group"` pattern with the branded governing line on the
   home title. The only inconsistency was the Twitter card type (Issue #1,
   fixed).
9. **Claims implying offices / regulated ops / guaranteed financing / fake
   proof / mandates / clients / logos / tombstones / team** — PASS. No such
   claims in visible copy. The only matches for these terms are in code
   comments and in the three disclaimers that explicitly negate them
   (`DISCLAIMERS` in `site.ts`, mirrored where each claim appears —
   "hedge travels with the claim").
10. **"Reducing capital risk" framed as eliminating risk** — PASS. Copy
    consistently uses "reducing"; comments and disclaimers explicitly guard
    against "eliminating risk" or "guaranteeing" an outcome.

---

## Fixes applied in this pass

- **Issue #1** — Set `twitter.card` to `summary_large_image` on `/firm`,
  `/advisory`, `/coverage`, `/contact`, `/legal`, `/privacy` to match the root
  layout and the actual 1200×630 branded card.

## Deferred (require confirmation / non-code decisions)

- **Issue #2** — Counsel-reviewed Privacy Policy before public launch.
- **Issue #3** — Confirm production `SITE_URL`.
- **Issue #4** — Optional cleanup of unused reserved hero clips.
