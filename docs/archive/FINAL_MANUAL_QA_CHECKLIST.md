# Deimos Group — Final Manual QA Checklist

**No automated screenshot / device QA has been performed.** This environment
has no headless browser or device farm, so the checks below must be run by a
human against a real browser before public launch. Nothing here is claimed as
verified — these are the items to verify.

How to run: `npm.cmd run dev`, then load each route at each width using browser
devtools responsive mode (or real devices). Approved routes only: `/`, `/firm`,
`/advisory`, `/coverage`, `/contact`, `/legal`, `/privacy`.

---

## Breakpoint sweep — run every route at each width

### 390px (small mobile)
- [ ] No horizontal scroll / overflow on any route.
- [ ] Nav collapses to the wordmark + hamburger; menu opens, closes, Escape returns focus to the toggle.
- [ ] Body copy is comfortably readable (Caslon Text), gutters even (`space-md`).
- [ ] Homepage process rail: station dots sit on a hairline in every wrapped row (2-col layout), none floating.
- [ ] Tap targets (nav, accordion headers, mailto links, hero controls) are ≥44px.

### 768px (tablet)
- [ ] Two-column editorial blocks and the contact inquiry grid read correctly.
- [ ] Process rail (3-col layout) dots sit on per-row hairlines.
- [ ] Coverage: below `md` the map is replaced by the region list; confirm the correct one shows.

### 1280px (standard desktop)
- [ ] Full nav row visible; active route underlined.
- [ ] Homepage hero headline breaks cleanly (see hero section below).
- [ ] Coverage map is full content width; markers, hover labels and panel usable.
- [ ] All sections align to the `max-w-7xl` column (page headers and section bodies share the same left edge).

### 1600px / ultra-wide (2xl)
- [ ] Homepage hero headline uses the wider `24ch` measure and reads in fewer, calmer lines (not a narrow tower). Text unchanged.
- [ ] Coverage instrument takes its modest `86rem` breakout and reads as a primary feature (not a short strip). Confirm the slightly wider left edge vs the page header looks intentional, not broken.
- [ ] No line-length blowouts on body copy (measures still capped ~65ch).

---

## Feature-specific checks

### Homepage hero headline line breaks
- [ ] Text is exactly: "Reducing Capital Risk Through Structure, Process, and Execution".
- [ ] Clear vertical clearance remains between the fixed "Deimos Group" wordmark and the headline at every width.
- [ ] No awkward single-word orphan lines; `text-wrap: balance` distributing evenly.
- [ ] Hero crossfade is smooth (no flash of old frame), video + metric transition together, 9s cadence; reduced-motion setting collapses motion.

### Firm page rhythm
- [ ] Sections alternate tonally (ambient-navy → dark → navy → dark → navy → dark) with hairline separators — reads as one navy environment, not zebra blocks.
- [ ] Lead statements share a consistent measure (65ch) across sections.
- [ ] Page length feels sequenced, not monotonous; headings hierarchy (display H1 → H2 sections) is clear.

### Advisory — default Capital Formation open state
- [ ] On load, the "Capital Formation" accordion is **expanded** and shows its "Typical situations" detail.
- [ ] Only Capital Formation is open by default (not all).
- [ ] Clicking it collapses it; other rows open/close independently; keyboard (Tab to header, Enter/Space) toggles; `aria-expanded` reflects state.

### Coverage map — size & interaction (/coverage)
- [ ] Map is interactive: hover/focus shows the jurisdiction name; markers and hitboxes align.
- [ ] Click shows only Name, Region, Classification (no offices/teams/mandates).
- [ ] No stray horizontal/vertical grid or line artifacts; Caspian renders as water; land outline clean.
- [ ] Region filters and internal Back control work; map is comfortably large on desktop/ultra-wide.

### Homepage static map teaser
- [ ] The homepage map is **static / non-interactive** — no clickable markers, no hover panel, no detail panel, no zoom.
- [ ] Exactly one map teaser on the homepage; it visually matches the /coverage map's corrected visual layer.

### Contact / Legal / Privacy readability
- [ ] Contact reads as selective/mandate-oriented; categorized `mailto:` links open the mail client with the right subject.
- [ ] Legal disclaimers are legible with comfortable spacing; meaning unchanged.
- [ ] Privacy placeholder is legible; still clearly labeled as a placeholder (see launch blocker below).

---

## Launch blockers / sign-off required (not code fixes)

- [ ] **Privacy Policy is a placeholder** — must be replaced with complete, counsel-reviewed text before public launch. Do **not** present the current page as counsel-reviewed. (`src/content/privacy.ts`)
- [ ] **Legal / Disclaimer** — confirm the disclaimer language is counsel-approved for public use before launch. Content is conservative and unchanged by dev; legal review still required.
- [ ] **Production `SITE_URL`** — defaults to `https://www.deimos-group.com`; overridable via `NEXT_PUBLIC_SITE_URL`. Confirm the live host (apex vs `www`) and set the env var if it differs; verify `sitemap.xml` / `robots.txt` / OG URLs resolve to the intended origin.
- [ ] **Deferred content sign-off** (see FABLE_CONTENT_TONE_AUDIT.md): "Who Deimos Serves" 16-item list, the "explicitly not…" negation list, and the "Defined Advisory Workstreams" label are proposed tightenings awaiting client approval.

---

## Notes
- Sitemap includes only the 7 approved routes; deprecated paths (`/services`, `/jurisdictions`, `/experience`, `/situations`, `/sectors`, Insights) are excluded and, where applicable, redirect.
- Hero serves only the 5 clips it plays; 3 unused reserved clips were removed (recoverable from git history).
