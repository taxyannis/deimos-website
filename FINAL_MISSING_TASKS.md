# Deimos Group — Final Missing Tasks

Audit date basis: current repository state after the launch-blocker audit/fix pass and the final six-lens quality pass (see `SITE_COMPLETION_PLAN.md` for full build history). This document is the single "what's left" checklist for two distinct milestones:

- **A. Preview circulation** — sharing the site internally/with the client for review. Bar: nothing broken, nothing embarrassing, nothing that misrepresents the firm even in a draft context.
- **B. Public launch** — going live for real prospects and counterparties. Bar: everything in A, plus legal sign-off, real assets, and full production polish.

Every item below is classified as exactly one of:
- **Preview blocker** — must fix before this is shown to anyone outside this session.
- **Public-launch blocker** — fine for preview, must fix before going live publicly.
- **Non-blocking polish** — improves quality, blocks neither milestone.
- **Deferred Phase 2.5** — intentionally out of v1 scope.
- **External action required** — not something a code/design pass can resolve; needs a decision or asset from the client/counsel.

---

## 1. Routes

All 7 required v1 routes exist and load: `/`, `/firm`, `/advisory`, `/jurisdictions`, `/contact`, `/legal`, `/privacy`. `/services` correctly redirects (308 → `/advisory#capabilities`). `/experience`, `/situations`, `/sectors`, `/insights` correctly 404 (never built, never linked).

**Status: no open items.** (Verified live, re-confirmed in the last two audit passes.)

## 2. Nav/footer links

`MAIN_NAV` (Firm, Advisory, Jurisdictions, Contact) and `FOOTER_NAV` (+ Legal/Disclaimer, Privacy Policy) match the approved v1 set exactly, on all 7 pages. No `/services`, `/experience`, `/situations`, `/sectors`, or Insights links anywhere in nav, footer, or body copy.

**Status: no open items.**

- Nav has no `aria-current="page"` marking the active section — **Non-blocking polish**.

## 3. CTAs

Homepage capability links → `/advisory#capabilities` (5/5 correct). Jurisdiction teaser → `/jurisdictions`. Every subpage's `ClosingContactCTA` → `/contact`. CTA vocabulary is consistent ("Contact Deimos," "Explore Deimos Advisory") with no banned SaaS phrasing anywhere.

**Status: no open items.**

## 4. Contact path

`/contact` uses six categorized `mailto:intake@deimos-group.com?subject=...` links plus a plain direct-email fallback. An explanatory line states the mailto behavior explicitly ("opens your email client..."), so it can't be mistaken for a working backend form.

**Status: no open items** for what's built. See §17 for the inherent limitations of this approach.

## 5. Disclaimers

All three approved disclaimers (`general`, `capitalAccess`, `jurisdictional`) exist in `src/content/site.ts` and appear in the footer sitewide. Capital-access disclaimer now also appears directly on `/advisory` and `/contact` (fixed in the last audit pass, alongside the jurisdictional disclaimer already present on `/jurisdictions` and the homepage teaser).

**Status: no open items.**

## 6. Privacy/legal status

`/legal` renders the three approved disclaimers in full. `/privacy` is an explicit, clearly-marked placeholder ("this Privacy Policy is a placeholder... has not been reviewed by legal counsel").

- Both pages are the client's own approved draft language / an honest placeholder, **not independently reviewed by external counsel** — **External action required**.
- `/legal` has no governing-law / dispute-jurisdiction clause — real counsel may want one added — **External action required**.

## 7. Mobile

Hero video is gated off below 640px width and on slow/data-saver connections (falls back to poster → navy gradient panel). `/jurisdictions`' 50-node interactive map is hidden below `md`, replaced by a dedicated region-filtered list. `InquiryCategories` rows wrap cleanly on narrow viewports (email address hidden, arrow-only, below `sm`). Nav has a working mobile menu (toggle, Escape-to-close, full link set).

**Status: no open items.**

## 8. Video performance

5 active hero clips total **266MB** (cable-bridge 21MB, coastline-city 44MB, dense-skyline 87MB, harbor-night-01 24MB, historic-riverfront 92MB). The two largest are far outside normal web-video budgets for an autoplaying loop and risk slow loads/stutter on non-mobile-but-bandwidth-constrained connections (mobile itself is already gated off).

- **Public-launch blocker** — re-encode/compress at minimum `hero-dense-skyline-01.mp4` and `hero-historic-riverfront-01.mp4`.
- **External action required** — this environment has no `ffmpeg`/`ffprobe` or any video-processing tool; re-encoding must happen outside this session. Swapping in one of the smaller reserve clips (`hero-twilight-skyline-01.mp4` 16MB, `hero-harbor-night-02.mp4` 11MB, `hero-waterfront-skyline-01.mp4` 38MB) instead of re-encoding is possible, but is a content decision requiring visual sign-off (see §9) — not something to change unilaterally.

## 9. Hero transition smoothness

Tracked as deferred in `SITE_COMPLETION_PLAN.md` (`DEFERRED_POLISH.md`), untouched across every pass in this session per explicit instruction not to touch it absent a usability/credibility/accessibility break. No such break was found — the crossfade, pause control (WCAG 2.2.2), and reduced-motion handling all work correctly.

**Status: Deferred Phase 2.5 / non-blocking polish** — not a preview or launch blocker.

## 10. Video posters

`public/images/video-posters/` is **empty** — zero poster images exist for any of the 5 active slides.

- Confirmed **not** a broken/blank hero: `HeroSlideLayer`'s Tier-3 navy gradient fallback catches every poster's 404 via `onError` and renders correctly, with full text legibility.
- Effect: one wasted 404 request + a sub-second flash before the fallback engages, on every load where video isn't shown (mobile, reduced-motion, slow connection).
- **Public-launch blocker** — should be populated with real frame grabs before public launch (a "the site never shows a broken image" standard is met today only via the fallback design, not because real posters exist).
- **External action required** — needs either video-processing tooling (unavailable here) or manually-exported still frames from the source footage.

## 11. Video re-encoding

Same underlying constraint as §8 — no transcoding tooling in this environment.

- **External action required.**

## 12. SEO/metadata

Every page (root layout + all 7 routes) has a distinct `<title>`/`description` via Next.js `Metadata` exports — confirmed present on all 7.

Gaps found in this audit:
- **No favicon replacement** — `src/app/favicon.ico` is still the unmodified default Next.js icon (25,931 bytes, matches the stock `create-next-app` file exactly, untouched since initial scaffold). Browser tabs currently show the Next.js logo, not a Deimos mark. **Public-launch blocker** (arguably visible enough to matter for preview too — flagging here since it's a five-minute swap once a real icon asset exists).
- **`public/` still contains the 5 unused default Next.js template SVGs** (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`) — dead scaffold files, unreferenced by any component. **Non-blocking polish** (harmless clutter, not user-facing).
- **No Open Graph / Twitter Card metadata anywhere** — sharing any Deimos URL (e.g., forwarding `/advisory` internally at a fund) produces a bare/generic link preview with no image or curated description. **Public-launch blocker** given PRODUCT.md's own framing that visitors judge institutional seriousness "within seconds" — a blank share-preview undercuts that at the exact moment a link gets forwarded.
- **No `robots.ts`/`sitemap.ts`** — no explicit crawl/sitemap configuration exists. **Non-blocking polish** for a 7-route site (Next.js's default behavior is fine at this scale), worth adding before public launch for cleanliness but not launch-critical.
- **Real Deimos brand image asset needed for the OG image itself** — **External action required** (needs a real, non-AI-generated institutional image per the site's own imagery policy).

## 13. Accessibility

Verified in this and the prior audit pass: WCAG AA contrast (all previously-failing opacity-based text fixed and re-verified via computed contrast ratios, not estimates), full keyboard operability (all interactive elements are real `<button>`/`<a>` with visible `focus-visible` states), hero auto-advance has an explicit pause control (WCAG 2.2.2) with ≥24px hit areas (WCAG 2.5.8), `<html lang="en">` present, skip-to-content link present and functional, all images carry `alt` text, reduced-motion respected sitewide via a global CSS reset.

- **No `aria-current="page"` on nav** (see §2) — **Non-blocking polish**.
- No further accessibility blockers found.

## 14. Copy/legal risk

No broker/finder/regulated-bank language, no guaranteed-financing language, no "licensed in"/"regulated in"/"on the ground in" language found anywhere (re-grepped this pass). The explicit "Deimos is explicitly not: a broker, finder..." negation statement is intact and legible (contrast-fixed).

**Status: no open items** from a code/copy standpoint. Underlying legal risk in the disclaimer *language itself* remains subject to §6's external counsel review.

## 15. Unsupported claims

No fake tombstones, fake client names, fake logos, fake offices, fake team members, or fake completed-mandate claims found anywhere in content files (re-verified this pass). The US$21.2bn figure appears exactly once (homepage hero slide 1) with a contextual hedge ("Principal and advisory transaction exposure across complex private-market situations"); `/firm`'s `FirmExposure` section deliberately omits repeating the raw figure, using only the fuller hedge phrase ("principal, affiliated advisory and transaction exposure") without a number.

**Status: no open items.**

## 16. Jurisdiction map risk

`/jurisdictions`' interactive map uses a stylized, explicitly non-geographic node-grid layout with an on-page caption ("Illustrative regional coverage — not to geographic scale"), a safe per-node exposure label ("Market exposure / transaction review / partner coverage / structuring relevance"), and the jurisdictional disclaimer directly beneath. No office, branch, license, local-team, or regulated-operations language anywhere on the page.

- **External action required (already flagged, unresolved):** the client's own jurisdiction-expansion request stated "45 jurisdictions" as the expected total, but its own itemized list sums to **50**. The itemized list was built as-given (per its own "do not add extra jurisdictions beyond this list" instruction), and the site currently shows 50 with the homepage metric updated to match. **Needs a client decision** on which number is correct before this is considered fully closed.

## 17. Mailto/contact-path limitations

v1 uses `mailto:` links only — no backend, no CRM intake, no submission tracking, no confirmation state, and no protection against a visitor without a configured local mail client (who would need to manually copy the address). This is an accepted, explicit v1 scope decision, not an oversight.

- **Deferred Phase 2.5** — a real backend/CRM-integrated contact form, if ever wanted, is future scope, not a v1 gap.

## 18. Phase 2.5 pages or features

- `/situations` — Selected Situations index. **Deferred Phase 2.5.**
- `/sectors` — Sector Coverage index (blocked additionally on sourcing curated, non-AI-generated imagery for 10 sectors). **Deferred Phase 2.5.**
- Fully interactive, geographically-accurate (real-topology) jurisdiction map graphic, replacing the current stylized node-grid. **Deferred Phase 2.5** — no real-world topology data/tooling exists in this environment regardless.
- Insights — explicitly omitted from v1 nav/scope per standing decision; no placeholder route exists (correct — a placeholder-with-no-real-posts was explicitly rejected earlier in this project). **Deferred Phase 2.5.**

## 19. Assets still missing

- Hero video posters (5 files) — see §10. **External action required.**
- Re-encoded/compressed hero video masters (or a client sign-off swap to lighter reserve clips) — see §8/§11. **External action required.**
- Real favicon/brand mark — see §12. **External action required.**
- Open Graph share image — see §12. **External action required.**
- Curated sector imagery (10 sectors, real drone footage or approved non-AI stock) — blocks `/sectors` only, which is already Phase 2.5. **External action required / Deferred Phase 2.5.**
- Final hero slide-to-clip visual sign-off — the `HERO_SLIDES` video assignment is explicitly documented as "deliberately neutral," reviewed only via low-res thumbnails, not by anyone watching the footage play. Includes one flagged, unresolved concern (a possible window/balcony-edge issue on the held-in-reserve `hero-twilight-skyline-01.mp4`, not currently used). **External action required.**

## 20. External legal/privacy review still required

- `/legal`'s three disclaimers are the client's own approved drafts, not independently verified by counsel.
- `/privacy` is a conservative placeholder with zero real policy content, explicitly pending counsel-drafted replacement.
- No terms-of-use or governing-law clause exists anywhere on the site.
- The specific license Deimos holds in one jurisdiction remains, by deliberate prior decision, undisclosed anywhere in public copy — confirm this posture still holds before public launch.

**All of the above: External action required.**

---

## Summary tables

### Preview blockers (must fix before showing anyone)
**None.** All 7 routes are coherent, nav/footer/CTAs are correct, no broken links, no fake claims, disclaimers are present and legible, and the site does not misrepresent the firm even in draft form.

### Public-launch blockers
1. Favicon still the default Next.js icon (§12).
2. No Open Graph/social share metadata or image (§12).
3. Hero video payload unoptimized — at minimum the two 87–92MB clips (§8).
4. Hero poster images missing (self-healing today, but real assets expected before public launch) (§10).

### Non-blocking polish
1. No `aria-current="page"` on nav links (§2, §13).
2. Unused default Next.js template SVGs left in `/public` (§12).
3. No explicit `robots.ts`/`sitemap.ts` (§12).
4. Deferred hero transition smoothness (§9) — untouched, no usability/credibility/accessibility break found.

### Deferred Phase 2.5
1. `/situations`, `/sectors` (§18).
2. Fully interactive, real-topology jurisdiction map (§16, §18).
3. Insights (§18).
4. Backend/CRM-integrated contact form beyond mailto (§17).

### External action required
1. Real, non-AI-generated video posters for 5 hero slides (§10, §19).
2. Video re-encoding/compression, or a signed-off clip swap (§8, §11, §19).
3. Real favicon/brand mark asset (§12, §19).
4. Open Graph share image asset (§12, §19).
5. Curated sector imagery for future `/sectors` (§19).
6. Hero slide-to-clip visual sign-off, including the flagged window/balcony-edge concern on a reserve clip (§19).
7. External counsel review of `/legal` and `/privacy`, and a decision on adding a governing-law clause (§6, §20).
8. Confirm the jurisdiction count: client's stated "45" vs. the itemized list's actual 50 (§16).
9. Reconfirm the standing decision to keep the firm's specific license/jurisdiction undisclosed in public copy (§20).

### Ready for preview circulation?
**Yes.** No preview blockers exist. Every public-launch blocker and external-action item above is either invisible in an internal/client-review context (favicon, OG image, video weight are real but not disqualifying for a preview audience) or already an explicitly-flagged, client-facing decision point (jurisdiction count, legal review) rather than a defect.
