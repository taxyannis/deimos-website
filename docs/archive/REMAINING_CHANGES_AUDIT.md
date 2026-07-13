# Deimos Group — Remaining Changes Audit

Audit date: 2026-07-10. Scope: read-only QA of the current implementation across
`/`, `/firm`, `/advisory`, `/coverage`, `/contact`, `/legal`, `/privacy`, plus the
`/jurisdictions` and `/services` redirects. No files were edited to produce this
report.

**Verified green this pass** (so they are *not* listed as issues below):
- `tsc --noEmit`, `eslint`, and `next build` all pass; all 8 routes prerender static.
- Redirects: `/jurisdictions` → `/coverage` (308), `/services` → `/advisory#capabilities` (308), `/situations` → 404.
- Hero headline renders exactly "Reducing Capital Risk Through Structure, Process, and Execution".
- Coverage entry count is 63 and the hero metric derives 63 from the dataset (consistent).
- No `section-light` / light-surface regressions anywhere (0 occurrences) — the unified navy system holds.
- No guaranteed-financing, eliminate-risk, offices, regulated-operations, licensed-in, fake-client, tombstone, or team-claim language in visible copy.
- Coverage detail panel shows only Name / Region / Classification + a caution line; no industry or service coverage.

Severity key: **Blocker** (looks broken / misleading / legally risky to outside
parties) · **High** · **Medium** · **Low**.

---

## 1. Launch Blockers

| # | Route | Severity | Issue | Recommended fix | Fix before more content work? |
|---|-------|----------|-------|-----------------|-------------------------------|
| 1.1 | All (browser tab) | Blocker | `src/app/favicon.ico` is still the stock `create-next-app` icon (25,931 bytes). A Next.js logo in the tab of a boutique investment-banking site is an obvious "unfinished" tell to a sophisticated external viewer. | Replace with a real Deimos mark (favicon.ico + optional `icon.svg`/`apple-icon`). External dependency: needs a real brand asset. | No — asset-blocked, can proceed with content in parallel. |
| 1.2 | /legal, /privacy | Blocker (public launch) | Disclaimers on `/legal` are the client's own drafts, not counsel-verified; `/privacy` is an explicit placeholder pending real policy. Legally risky to launch publicly, though **acceptable for internal/preview circulation because both are honestly labelled**. | External counsel review of `/legal`; counsel-drafted `/privacy` before public launch. Do not weaken current wording in the meantime. | No — external/legal, not a build or content task. |

Everything else is credible enough to show to outside parties for **preview
circulation today**; the two items above are the only launch-gating blockers,
both external-asset / external-review dependencies rather than code defects.

---

## 2. Content / Positioning Issues

| # | Route | Severity | Issue | Recommended fix | Fix before more content work? |
|---|-------|----------|-------|-----------------|-------------------------------|
| 2.1 | /advisory | Low | All seven workstream definitions open with the same "Where a … , Deimos …" construction. Disciplined parallelism, but at 7× it reads slightly templated. | Vary 2–3 openers for cadence; no meaning change needed. | Optional; safe to defer. |
| 2.2 | / (hero slide 2) | Medium | Metric "63" is labelled "Selected Markets & Structuring Jurisdictions", but the 63 count includes Golden Triangle SEZ, which is a special-market zone, not a market or jurisdiction. Minor precision tension. | Either accept (label is broad enough) or relabel to "Selected Markets, Jurisdictions & Special-Market Entries". Client call. | No — cosmetic wording. |
| 2.3 | Sitewide | Low | The Mandate Discipline statement is intentionally repeated verbatim across homepage, /firm, /advisory and /contact. Deliberate, but a reader visiting several pages will notice. | Leave as-is (consistency is the point) or lightly vary the /contact instance. | No. |
| 2.4 | / , /firm, /advisory | — (confirmed good) | Capital-risk narrative is applied consistently; not structuring-centric, not broker-like. No action. | — | — |

---

## 3. Coverage Map Issues

| # | Route | Severity | Issue | Recommended fix | Fix before more content work? |
|---|-------|----------|-------|-----------------|-------------------------------|
| 3.1 | /coverage + / | High | **Count reconciliation.** The map now displays 63 unique entries and the hero metric derives 63 automatically. The client previously stated "45" and later "50". 63 is the truthful count of the current data, but the client must confirm 63 is the intended public figure (or trim the list). | Client decision: confirm 63, or remove entries to reach the intended number. Do not hard-code a number that contradicts the list. | Yes — confirm the number before circulating the metric widely. |
| 3.2 | /coverage | Low | Map is a stylized, deliberately coarse SVG silhouette (captioned "Illustrative coverage map — simplified geography"). Estonia/Lithuania placement was corrected via reference coordinates + a rebuilt Baltic Sea patch (Baltic proper + Gulf of Bothnia + Gulf of Finland); both now sit on the eastern-Baltic coast, west of Russia. Remaining coarseness is by design. | None required; optional future upgrade to a real low-res world outline if higher fidelity is ever wanted. | No. |
| 3.3 | /coverage | — (confirmed good) | Click behaviour shows only Name / Region / Classification + "Coverage classification does not imply office presence, regulated operations or active mandate activity in this market." No industry/service coverage. Disclaimer visible beneath the map. Special entries (Labuan, Ras Al Khaimah, Nevis = Structuring Relevance; Golden Triangle SEZ = Strategic Market Monitoring) handled carefully. | — | — |

---

## 4. Visual / UX Issues

| # | Route | Severity | Issue | Recommended fix | Fix before more content work? |
|---|-------|----------|-------|-----------------|-------------------------------|
| 4.1 | /advisory | Medium | Accordion row padding (`py-[var(--space-md)]`) is on the wrapping `<div>`, not the `<button>`. The button's own tap height is the heading line-height — likely above the 24px WCAG 2.5.8 minimum but below the 44px comfort target. | Move the vertical padding onto the button (or add a matching invisible hit-area) so the full row height is tappable. Avoid extending it into the definition paragraph. | No — accessibility polish, low risk. |
| 4.2 | / , /firm, /advisory | — (confirmed good) | Post-hero sections use the unified navy system with `ambient-navy` depth (4 sections) and the animated `rail-line` process rail (2 sections). No grey/white/zebra regressions; no empty boxes or unused panels found. | — | — |
| 4.3 | Sitewide | — (confirmed good) | Active-nav `aria-current` present; CTA hierarchy (filled primary / outline secondary) intact; hover/focus states present. | — | — |

---

## 5. Legal / Credibility Issues

| # | Route | Severity | Issue | Recommended fix | Fix before more content work? |
|---|-------|----------|-------|-----------------|-------------------------------|
| 5.1 | /legal, /privacy | Blocker (public launch) | Same as 1.2 — counsel review outstanding. | See 1.2. | No. |
| 5.2 | / (hero slide 1) | Medium | US$21.2bn "Historical Transaction Exposure" is shown with a hedge, but there is no documented internal breakdown (advisor-of-record vs principal vs affiliated) behind it. Not a website defect, but the first question a sophisticated counterparty asks. | Internal (non-public): document the breakdown so the team answers consistently. | No — internal task. |
| 5.3 | Sitewide | — (confirmed good) | No guaranteed-financing, no risk-elimination framing ("reduce/lower/bring within reach", never "eliminate"), no offices/branches/regulated/licensed, no fake proof/clients/tombstones/team, no broker/finder positioning. Disclaimers (general, capital-access, jurisdictional) present sitewide and intact. | — | — |

---

## 6. Technical / Build Issues

| # | Route | Severity | Issue | Recommended fix | Fix before more content work? |
|---|-------|----------|-------|-----------------|-------------------------------|
| 6.1 | Build | — (confirmed good) | `tsc`, `eslint`, `next build` all clean; 8 routes prerender; no broken links; redirects work. | — | — |
| 6.2 | src/components/ui/CTALink.tsx | Low | The `tone="on-light"` variant is defined but no longer referenced anywhere (0 usages) after the navy rebuild — dead code. | Remove the unused variant (and its color pairings) or leave for future light surfaces. Harmless either way. | No. |
| 6.3 | SEO | Medium | No `robots.ts` and no `sitemap.ts`. Fine for an 8-route site at preview stage; worth adding before public launch. | Add `src/app/robots.ts` and `src/app/sitemap.ts` before public launch. | No. |
| 6.4 | Metadata | High | Open Graph / Twitter Card **text** metadata exists on every route, but there is **no OG image** (`opengraph-image`). A forwarded Deimos link produces an imageless preview — weak at the exact moment a link is shared. | Add a real, non-AI institutional OG image once a brand asset exists. External dependency. | No — asset-blocked. |

---

## 7. Mobile / Responsive Issues

| # | Route | Severity | Issue | Recommended fix | Fix before more content work? |
|---|-------|----------|-------|-----------------|-------------------------------|
| 7.1 | / (hero) | Medium | New headline "Reducing Capital Risk Through Structure, Process, and Execution" (61 chars) sits in a large-display `max-[18ch]` measure and wraps to ~4 lines. Needs a real-device check at ~390px that it doesn't crowd the CTAs / metric lower-third on short viewports. | Manual check at 390px; if crowded, nudge the display clamp or headline measure (design, not copy). | No — verify visually, likely fine. |
| 7.2 | /coverage | — (confirmed good) | Below `md`, the interactive map is replaced by the region-filtered `RegionJurisdictionList`; region filters work in both; touch targets on filters use invisible padding to ~44px. | Manual touch check still recommended. | — |
| 7.3 | Sitewide | — (confirmed good) | Mobile nav: hamburger toggle, Escape-to-close with focus return, matchMedia close on resize to desktop, full link set, active state. Footer links padded to a minimum hit area. | — | — |

> Note: items marked "confirmed good" are recorded so the audit is complete and
> traceable; they require no change. Real-device visual QA (per
> `VISUAL_QA_CHECKLIST.md`) is still the outstanding manual step this codebase
> cannot perform itself — screenshots/pixel checks were never available in this
> environment, so all "confirmed good" visual items are code-level confirmations,
> not pixel confirmations.

---

## Deferred / external items (tracked, not code defects)

- Hero video weight: `hero-dense-skyline-01.mp4` (86 MB) and `hero-historic-riverfront-01.mp4` (92 MB) are far above web-video budgets. Mobile/slow connections are already gated to the poster→navy fallback, but a bandwidth-constrained desktop viewer can stutter. Needs re-encoding (no `ffmpeg` in this environment) or a client-signed swap to a lighter reserve clip. **High**, external.
- Video posters: `public/images/video-posters/` is empty (0 files). Self-healing today via the Tier-3 navy gradient fallback, but real frame-grabs are expected before public launch. **Medium**, external.
- Final hero slide-to-clip visual sign-off (video assignment is documented as neutral, reviewed only via thumbnails). **Medium**, external.
