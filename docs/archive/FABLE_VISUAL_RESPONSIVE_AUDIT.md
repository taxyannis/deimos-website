# Fable Visual Polish & Responsive Audit — Deimos Group

Focused visual-polish and responsive pass. No redesign; existing design
language only (navy institutional surfaces, editorial spacing, restrained
hairline dividers, process rails, controlled max-widths, subtle motion, one
Caslon type voice). No route/nav/footer/legal-meaning/contact/coverage-data
changes. No fake team, offices, logos, tombstones, case studies, stock imagery,
SaaS cards, or dashboard panels introduced.

**Overall:** the site is already mature and internally consistent — restrained
navy surfaces, hairline-divided editorial lists, controlled 65–70ch measures,
serif headings over a Caslon Text body. Few genuine defects. The confirmed
issues below were fixed; the rest are minor, subjective, or need in-browser
visual QA (this environment has no headless browser, so pixel-level judgment
calls are deferred rather than guessed).

---

## Applied (safe) improvements

### A. Process-rail station dots float on wrapped rows — FIXED
**Where.** `Confidentiality.tsx` (homepage "Mandate Discipline") and
`MandateProcess.tsx` (Advisory) share one process-rail pattern: a single
absolutely-positioned hairline at the top of a `grid-cols-2 sm:grid-cols-3
lg:grid-cols-6` grid of 6 steps, with a station dot at each cell's top edge.
**Issue (responsive, items 3 & 8).** Only the `lg` single-row layout puts all
dots on the rail. At **390px** (2 cols → 3 rows) and **768px** (3 cols → 2
rows), the rail sits only above row 1, so rows 2–3 dots float with no line
under them — reads as stray bullets, not stations.
**Fix.** Gate the animated single-line rail to `lg` (`hidden … lg:block`) and
give each cell its own hairline below `lg` (`border-t border-white/15
lg:border-t-0`), so every wrapped row's dots sit on a line at all widths. Uses
the existing hairline-divider language; desktop rail + its draw-in animation
unchanged. Applied identically to both components for parity.

### B. Inert `font-medium` on the homepage lead statement — FIXED
**Where.** `Positioning.tsx` (homepage self-identification statement).
**Issue (item 1 / typography).** The body face is now Libre Caslon Text, which
ships 400/700 only. `font-medium` (500) silently rounds to 400, so the
intended emphasis on the opening statement was lost after the font unification.
**Fix.** Removed the dead utility; the lead keeps primacy through full opacity
against the following paragraph's `opacity-90` (tone-based hierarchy, on-brand
for the serif). Also corrected the now-stale note in `lib/fonts.ts` so
`font-medium` isn't reintroduced.

---

## Audit by area

1. **Homepage headline sizing / line breaks / spacing below wordmark** —
   GOOD. `<h1>` uses the `--text-display` clamp (2.5→6rem), `text-wrap:
   balance` (global), and `max-w-[18ch]`; the hero reserves nav clearance via
   `pt-[clamp(6rem,14vh,9rem)]` and metric clearance via
   `pb-[clamp(10rem,22vh,16rem)]`. No overflow. *Deferred:* the 18ch measure
   forces ~4 lines on very wide desktops — a slightly wider measure could read
   calmer, but that's a judgment call best made against a live screenshot.
2. **Hero transition smoothness & rhythm** — GOOD. Recently hardened: outgoing
   layer is marked in the same batched commit as the incoming (no flash),
   video + metric share one 1400ms `cubic-bezier(0.25,1,0.5,1)` crossfade,
   9s cadence, reduced-motion honored. No change needed.
3. **Post-hero section flow** — GOOD (plus fix A). Sections alternate tonally
   within the navy family (`ambient-navy` / `section-dark` / `section-navy`)
   separated by `border-t border-white/10` hairlines and consistent
   `py-[var(--space-section)]` rhythm — no bright-surface zebra. Fix A tightens
   the Mandate Discipline rail on small screens.
4. **Firm page visual density & hierarchy** — GOOD. Seven sections, but each is
   a restrained statement + hairline-divided list at a controlled 65ch measure;
   no cards, no clutter. *Deferred:* with seven stacked sections the page is
   long; optional future tightening of inter-section rhythm is a design call,
   not a defect.
5. **Advisory density, accordion, repeated phrasing** — GOOD. Accordion is a
   full-row tap target with a plain +/− and a smooth `grid-rows` reveal;
   definitions stay visible while deeper "Typical situations" toggles
   (progressive disclosure). Pillar copy is client-sourced and already
   deliberately varied in its openings (per the content comment), so no
   phrasing rewrite was warranted (and copy edits are out of safe scope).
6. **Coverage map size, hover, cleanliness** — GOOD (addressed in prior
   passes). Full-content-width on desktop, single-SVG markers with concentric
   hitboxes, visible hover/focus name label, artifact rings and the Caspian
   inland-sea fill resolved. *Deferred:* any further size increase should be
   validated visually before committing.
7. **Contact readability** — GOOD. Statement → categorized `mailto:` list
   (two-column editorial grid at sm+, single column at 390px) → confidentiality
   → direct email; clear 60–65ch measures, generous section padding, real link
   affordances (not fake form buttons).
8. **Mobile at ~390 / 768 / desktop** — GOOD (plus fix A). Consistent
   `px-[var(--space-md)] sm:px-[var(--space-lg)]` gutters, grids that collapse
   to single column below `lg`, the coverage map swapped for a region list
   below `md`, ≥44px nav/menu tap targets, no horizontal overflow found in the
   markup. Fix A was the one real small-width blemish.

---

## Deferred items (need in-browser visual QA or are non-defects)

- **Headline measure on ultra-wide desktop** (item 1) — possible calmer line
  breaks with a slightly wider `max-w`; verify against a screenshot first.
- **Firm page length** (item 4) — optional inter-section rhythm tightening;
  design judgment, not a bug.
- **Coverage map further enlargement** (item 6) — only with visual confirmation.
- **Live cross-device screenshot pass** — recommended at 390 / 768 / 1280 /
  1600 widths before launch; not possible in this headless environment.

No copy, routes, nav, footer, Legal/Privacy meaning, contact behavior, coverage
data, classifications, or hero copy were changed.
