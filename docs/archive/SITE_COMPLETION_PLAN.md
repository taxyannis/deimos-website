# Deimos Group — Site Completion Plan

**Scope:** everything after the homepage. Primary references: `MASTER_WEBSITE_BRIEF.md`, `HOMEPAGE_BLUEPRINT.md`, `DESIGN.md`. `original-master-prompt.txt` is used only where this plan explicitly says so — for full service/situation/sector/jurisdiction content and page-level detail the leaner homepage-era docs compressed away. No code in this document.

**Build status (current):** all seven required v1 routes are built and shipped — `/`, `/advisory`, `/firm`, `/coverage`, `/contact`, `/legal` and `/privacy` (the last as a conservative, clearly-marked placeholder pending real counsel-drafted content). `/situations` and `/sectors` remain optional Phase 2.5.

**Visual rebuild + Coverage rename (done):** a full front-end rebuild moved the site to a unified dark navy-led system — deep-navy body base, ink-blue tonal panels, hairline `white/10` dividers, no off-white section blocks anywhere (the old light/navy alternation is gone). "Jurisdictions" was renamed **"Coverage"** across the public UI: `/coverage` is the canonical route (`/jurisdictions` 308-redirects to it), nav/footer labels read "Coverage," the page title is "Selected Market Coverage," and the jurisdictional disclaimer wording was updated to the client-provided "Selected coverage reflects..." form (same legal substance). The coverage map is now a stylized inline SVG **world-map silhouette** (hand-authored simplified continents from real lat/lon geometry, equirectangular projection, `src/components/jurisdictions/WorldMap.tsx`) with the 50 jurisdictions plotted at projected capital positions — replacing the abstract node-grid; the homepage teaser reuses the same silhouette as a static miniature. The homepage Confidentiality section was rebuilt as the dark "Mandate Discipline" process-rail section, and the hero crossfade was reworked into a true dissolve (incoming slide fades in over a held outgoing slide — no mid-fade dark dip) with a synchronized delayed rise on the metric lower-third.

**Launch-blocker audit + fixes — done:** a full-site audit found (1) several real, computed WCAG contrast failures — `text-ink-on-light` at `/70`/`/60`/`/50` opacity measured as low as 1.89:1 against the off-white surface (needs 4.5:1 for body text), affecting disclaimer text, the "explicitly not a broker..." statement on `/firm`, and other labels across `/advisory`, `/firm`, `/jurisdictions`, `/contact`'s inactive filter states; and (2) `/advisory` and `/contact` both discuss capital access/capital formation as a named claim without the capital-access disclaimer anywhere on the page itself (footer-only). Both are fixed: failing opacity classes were swapped for the dedicated, pre-verified `text-muted-on-light`/`text-muted-on-dark` tokens (7.52:1 / 6–7.5:1), and `DISCLAIMERS.capitalAccess` now renders directly on `/advisory` (`AdvisoryPillars`) and `/contact` (`InquiryCategories`), in addition to the sitewide footer.

**v1 route set (re-resolved):** required v1 routes are `/`, `/firm`, `/advisory`, `/jurisdictions`, `/contact`, `/legal`, `/privacy`. `/experience` is removed from v1 entirely (see its section below); `/services` remains removed/merged into `/advisory` (unchanged from the prior resolution); `/situations` and `/sectors` remain optional Phase 2.5 only. `MAIN_NAV` is now a lean 4 items — Firm, Advisory, Jurisdictions, Contact — dropping Situations/Sectors/Experience from the header entirely (they were never all buildable for v1 launch, and a nav link to a missing or since-removed page is worse than not listing it).

**On /advisory vs. /services (re-resolved — /services removed for v1):** an earlier pass built `/services` as a separate practical-capabilities page, distinct from `/advisory`'s strategic-model framing. That decision is reversed. `/services` duplicated most of `/advisory`'s real content and made the site read as a generic consultancy rather than a lean, credible advisory platform — "Advisory" is the stronger institutional label, and the v1 site should not carry two near-identical pages. Current state:
- **`/advisory`** is now the single public-facing page for both the strategic advisory model *and* the practical advisory capabilities. Its 7-pillar accordion (`AdvisoryPillars`), rendered under the heading "Advisory Capabilities" at the `#capabilities` anchor, carries the capability content that used to live on `/services` — kept concise (definition + typical situations per pillar), not expanded into a long tactical inventory.
- **`/services` is removed as a route.** `next.config.ts` issues a permanent redirect from `/services` to `/advisory#capabilities` so any old links or bookmarks still resolve correctly.
- The content-overlap risk flagged in the previous version of this note is now moot — there is only one page, so there is nothing left to de-duplicate against.

This also resolves the redundancy `GRILL_ME_CRITIQUE.md` found, by consolidating onto one surface instead of separating into two.

**Wiring fix — done:** the homepage's Advisory Capabilities preview link (`ADVISORY_LINK` in `src/content/homepage.ts`) points "Review all advisory capabilities →" at `/advisory#capabilities`, landing directly on the pillar accordion. `/advisory` is now referenced sitewide as the one destination for advisory-model and advisory-capability context alike (main nav, hero CTA, homepage preview).

**Insights:** recommend **omitting it from v1 navigation entirely**, not shipping a placeholder route. This is already the state of the current build (neither header nav nor footer link to it) and matches the standing decision in `HOMEPAGE_BLUEPRINT.md` §22 ("content-gated, not scheduled"). A placeholder route with categories but no real posts risks reading as unfinished rather than restrained — better to add the route the day real editorial content exists than to ship a stub now.

---

## Shared infrastructure (build once, reuse across pages)

Keeps this plan lean and avoids one-off components per page:

- **`PageHeader`** — serif page title + one-line description on a navy or off-white band. Subpages do not get a full video hero each; `DESIGN.md`'s imagery policy reserves cinematic treatment for hero/metrics/jurisdiction/scale moments, not every page header.
- **`ExpandableIndex`** — a list of items (name + one-line definition, detail revealed on hover/click), the same editorial-index pattern already built for the homepage's Advisory Capabilities preview and for `/advisory`'s pillar accordion. Reused for: Situations, Sectors.
- **`DisclaimerBlock`** — renders one of the three approved disclaimer strings already in `src/content/site.ts`. Reused wherever a hedge must travel with a claim (capital access on Advisory, jurisdictional on Jurisdictions, general on Legal).
- **`ClosingContactCTA`** — the homepage Contact section's visual pattern, reused at the foot of every subpage so "one clear path to contact" holds sitewide, not just on `/`.
- **Resolved: `/contact` uses categorized `mailto:` links for v1.** No backend, no third-party form service (Resend, Formspree, a serverless API route, etc.) — all deferred, not needed for launch. Each of the six inquiry categories is its own `mailto:intake@deimos-group.com?subject=...` link, pre-filling the category as context.

---

## Page plans

### `/firm` (built)
- **Purpose:** answer "who is Deimos" directly — the identity statement the homepage itself never quite makes explicit (flagged in `POST_BUILD_AUDIT.md`).
- **Resolved scope (v1 does not include leadership):** no leadership bios, founder biography, team profiles, or detailed pedigree claims. This supersedes the earlier "still-unresolved client decision" note — the decision is now: leave it out of v1 entirely, not merely deferred pending a client call.
- **Current state:** built and shipped as `src/app/firm/page.tsx` — `PageHeader` → `WhatDeimosIs` → `WhoDeimosServes` → `WhyClientsEngage` → `FirmExposure` → `FirmConfidentiality` → `SelectiveEngagementModel` → `JurisdictionRepresentationLine` (shared with `/jurisdictions`, lives in `components/layout/`) → `ClosingContactCTA`.
- **Exposure & Experience (added):** `/experience` was removed from v1 entirely and its content merged in here at a high level, per the updated decision below. `FirmExposure` (navy section, between Why Clients Engage and Confidentiality) carries the same three anonymized exposure themes the homepage used to show on its now-removed Experience section — never tombstones, named clients, or claimed completed mandates. The specific US$21.2bn figure is deliberately **not** repeated on this page: `/firm`'s register is identity/posture, not metrics, and the hero/homepage already carry that number with its required hedge, so omitting it here avoids a second, less-hedged repetition on a page built around restraint (a use of the task's explicit "soften or omit if it feels risky in context" allowance).
- **Copy blocks:** `MASTER_WEBSITE_BRIEF.md` §14 (Confidentiality, full), original-master-prompt.txt §10/§11/§15 (Who Deimos Serves list, Why Deimos reasons, Firm/About paragraph), §13/§14 (the three anonymized exposure themes, for `FirmExposure`) — pulled verbatim.
- **Legal/credibility constraints:** no invented team members, offices, size claims, or "regulated global bank" framing (original-master-prompt.txt §15's own explicit warning). No leadership/pedigree content, per the resolved scope above. `FirmExposure`'s themes are illustrative categories only, explicitly labeled as not a record of specific closed transactions.
- **Launch-critical — already satisfied.**

### `/advisory` (built)
- **Purpose:** the single public page for both the strategic advisory model and the practical advisory capabilities — how Deimos thinks about and works a mandate, and what it can actually be engaged to do.
- **Current state:** built and shipped as `src/app/advisory/page.tsx` — `PageHeader` → `WhatWeAdviseOn` → `AdvisoryPillars` (7-pillar accordion at `#capabilities`, heading "Advisory Capabilities," each pillar with a definition + typical situations) → `MandateProcess` (mandate orientation statement + process-step sequence) → `ClosingContactCTA`.
- **Note:** `/services` was built as a separate practical-capabilities page and then removed — it duplicated this page and read as generic-consultancy padding. `/advisory` now owns that content directly, kept deliberately concise (no long tactical activity inventory per pillar). `next.config.ts` redirects `/services` → `/advisory#capabilities` for any stale links.
- **Launch-critical — already satisfied.**

### `/situations`
- **Purpose:** skimmable answer to "is my situation the kind Deimos takes on."
- **Section order:** PageHeader → 12-item ExpandableIndex (or a plain skimmable list — these are situation descriptions, not disciplines, so may not need per-item expansion) → ClosingContactCTA.
- **Copy blocks:** `MASTER_WEBSITE_BRIEF.md` §11 / original-master-prompt.txt §6 — the 12 situations, verbatim, no new drafting needed.
- **Legal/credibility constraints:** none beyond the sitewide bans (no broker framing, no guaranteed-outcome language creeping into how situations are described).
- **Components:** PageHeader, ExpandableIndex or a plain index list, ClosingContactCTA.
- **Phase 2.5.** Real, useful depth, but the homepage's capability preview and Experience themes already carry enough "what kind of situations" signal that a temporarily-missing `/situations` page is a depth gap, not a trust or functionality failure.

### `/sectors`
- **Purpose:** sector breadth, made concrete.
- **Section order:** PageHeader → 10-sector index (image-supported where real footage/curated stock exists, per the confirmed imagery policy) → ClosingContactCTA.
- **Copy blocks:** `MASTER_WEBSITE_BRIEF.md` §12 / original-master-prompt.txt §7 — the 10 sectors, verbatim.
- **Legal/credibility constraints:** imagery policy from the build phase applies as-is — real drone footage first, curated non-AI institutional-tone stock as the approved general fallback, never generic business stock, never AI-generated images.
- **Components:** PageHeader, ExpandableIndex or image-supported grid variant, ClosingContactCTA.
- **Phase 2.5.** Same reasoning as Situations, plus sourcing 10 sectors' worth of curated imagery is real prep work that shouldn't gate the rest of the site.

### `/jurisdictions` (built — premium interactive rebuild)
- **Purpose:** the full "Selected Jurisdictional Exposure" instrument the homepage only teases. Re-resolved from a static list-only build to a premium interactive experience — a weak static page was explicitly ruled out; the map is now the centerpiece, not an afterthought.
- **Current state:** built and shipped as `src/app/jurisdictions/page.tsx` — `PageHeader` (title/description reuse the homepage teaser's exact `JURISDICTION_HEADLINE`/`JURISDICTION_SUBTEXT` strings) → `JurisdictionsExposure` (heading "Coverage by Region" + the interactive `JurisdictionMap` on desktop / `RegionJurisdictionList` fallback below `md` + the jurisdictional disclaimer directly beneath) → `JurisdictionRepresentationLine` (shared with `/firm`, lives in `components/layout/`) → `ClosingContactCTA`.
- **Interactive map (`JurisdictionMap`):** a "custom institutional map grid with clickable region arcs and jurisdiction nodes" — one of the explicitly approved feasible approaches given this project has no real world-topology data/tooling. Each of the 6 regions anchors a cluster of nodes laid out on a fixed, deterministic grid (never randomized, so SSR/client output matches) in a loose west-to-east band (Americas → Europe/Africa → Middle East/Central Asia → Asia-Pacific) — an approximate, intentionally non-literal world impression, with an explicit on-page caption ("Illustrative regional coverage — not to geographic scale") so no geographic precision is claimed. A fine-line SVG graticule texture and decorative low-opacity network arcs between region clusters carry the "high-tech capital-markets" visual language; nodes themselves are real HTML `<button>`s overlaid on the decorative SVG (not interactive SVG elements) for robust keyboard/focus behavior.
- **Interaction:** clicking (or Enter/Space via native button semantics) a node selects it and updates `JurisdictionDetailPanel` — a fixed side panel (desktop) showing the jurisdiction name, region, and the safe `JURISDICTION_EXPOSURE_TYPE_LABEL` ("Market exposure / transaction review / partner coverage / structuring relevance"). Region filter buttons (shared `RegionFilterButton`) dim out-of-region nodes *and* remove them from tab order (`tabIndex={-1}`) so filtering meaningfully narrows the keyboard interaction surface, not just the visual one. Hover adds a lightweight tooltip/glow via CSS only — selection (not hover) is the primary, fully keyboard-operable interaction.
- **Mobile fallback:** below `md`, `JurisdictionMap` is hidden entirely and `RegionJurisdictionList` (the toggle-filter + grouped list built in the prior pass) takes over — a "clean region-filtered list," one of the task's explicitly sanctioned mobile patterns. The two don't share state; only one is ever visible.
- **Reduced motion:** all motion on the map (hover glow, scale, opacity transitions) is plain CSS transitions/transforms, so the sitewide global reduced-motion reset already in `globals.css` (which collapses every transition/animation duration under `prefers-reduced-motion`) makes the whole map fully non-animated for those users with no extra branching logic required.
- **Jurisdiction list (expanded):** the v1 public list now totals **50 jurisdictions** across the 6 regions — Cyprus and Georgia added to Europe; Oman added to Middle East/Central Asia; Malaysia added to Asia-Pacific; Argentina, Brazil, Peru, Colombia, Ecuador and Paraguay added to Americas. **Flag for the client:** the request that produced this list also stated an expected total of "45 jurisdictions," but the itemized list it specified sums to 50 — the itemized list was treated as authoritative (per its own "do not add extra jurisdictions beyond this list" instruction) and used as-is; the homepage's jurisdiction-count metric was updated to match the real count (50), not the stated-but-inconsistent 45. Needs a client-side decision on which figure is correct.
- **Disclaimer handling:** `DISCLAIMERS.jurisdictional` (from `src/content/site.ts`, the sitewide canonical string) renders directly beneath the map/list inside `JurisdictionsExposure`, *and* continues to appear in the sitewide footer — both placements, per the "hedge travels with the claim" rule.
- **The fully interactive, geographically-accurate map graphic (real topology/precise borders) remains Phase 2.5** — this stylized node-grid instrument is the v1 premium substitute, not a placeholder for it; upgrading to real topology is a separate future data/asset task.
- **Launch-critical — already satisfied.**

### `/experience` (removed from v1 — merged into `/firm`)
- **Re-resolved:** `/experience` is no longer part of the v1 route set at all — its content (three anonymized exposure themes) now lives on `/firm` at a high level (`FirmExposure`, see the `/firm` section above). The homepage's standalone Experience section was removed along with it (its `EXPERIENCE_THEMES`/`EXPERIENCE_LINK` constants were deleted from `src/content/homepage.ts` as dead code). No nav, footer, or homepage links to `/experience` remain anywhere in the codebase.
- **Why:** the earlier plan for a `/experience` subpage assumed it was worth a dedicated route for "the fuller, more precise version of the homepage's hedged metrics." On reflection, `/firm` already covers this ground credibly at the level v1 needs, and a fourth thin subpage added more surface area than value.

### `/contact` (built)
- **Purpose:** convert. The entire site's stated objective.
- **Current state:** built and shipped as `src/app/contact/page.tsx` — `PageHeader` → `ContactStatement` (the exact approved contact statement, large single-line treatment) → `InquiryCategories` (navy section, the 6 categorized `mailto:` links) → `ContactConfidentiality` (slate, the same selective-engagement sentence reused sitewide) → `ContactDirectEmail` (light, plain `mailto:intake@deimos-group.com` restatement + the general disclaimer reminder).
- **Resolved approach — no ClosingContactCTA here:** every other page ends on `ClosingContactCTA`, which links to `/contact`; looping that same component back onto `/contact` itself would be circular, so this page closes on a direct, no-subject `mailto:` link instead (for anyone who doesn't want to pick a category) plus the general disclaimer.
- **Mailto behavior:** each of the 6 category links opens `mailto:intake@deimos-group.com?subject=<category-specific subject>` — real anchor tags, no JS, no backend, no third-party form service, no fake submission behavior. Subject lines: "Transaction advisory enquiry," "Capital formation enquiry," "Strategic partnership enquiry," "Jurisdictional representation enquiry," "Investor / sponsor dialogue," "General enquiry." An explanatory line above the list states the mailto behavior explicitly so the list is never mistaken for a working backend form.
- **Wiring fix — done:** `/contact` existing now means every pre-existing link that already pointed at it (`MAIN_NAV`, `FOOTER_NAV`, the homepage's `Contact` section, and every subpage's `ClosingContactCTA`) resolves instead of 404ing — verified live across `/`, `/advisory`, `/firm`, `/jurisdictions`.
- **Inquiry categories:** Transaction advisory · Capital formation · Strategic partnership · Jurisdictional representation · Investor / sponsor dialogue · General enquiries.
- **Copy blocks:** `MASTER_WEBSITE_BRIEF.md` §15 / original-master-prompt.txt §17 — contact copy and `intake@deimos-group.com`, verbatim, with the six categories above.
- **Legal/credibility constraints:** none beyond standard CTA vocabulary (no "Get Started"/"Join Us" language sitewide) — satisfied.
- **Launch-critical — already satisfied.**

### `/legal` (built)
- **Purpose:** the authoritative, complete legal/disclaimer reference — distinct from the footer's always-visible condensed version, and the actual destination the footer's "Legal / Disclaimer" link now resolves to instead of 404ing.
- **Current state:** built and shipped as `src/app/legal/page.tsx` — `PageHeader` (title "Legal / Disclaimer," matching the footer link label) → `LegalDisclaimers` (light section, three plain headed paragraphs, thin rule dividers, no accordion — full text always visible since this is a reference page meant to be read/scanned/printed in full, not a page with anything worth hiding behind a click). No `ClosingContactCTA` — a legal reference page doesn't need a conversion path.
- **Content mapping (all 7 required items, 3 approved source strings):** `DISCLAIMERS.general` (`src/content/site.ts`) is one approved sentence that already covers 5 of the 7 required points at once — general-information framing, no-offer/no-solicitation, no investment/legal/tax/regulated advice, and selective engagement subject to applicable laws/documentation/mandate terms/jurisdictional requirements. It is presented as a single paragraph under "General Disclaimer," not split apart, since restructuring an already-approved sentence would mean editing client-approved legal language without authorization. `DISCLAIMERS.capitalAccess` covers the capital access disclaimer; `DISCLAIMERS.jurisdictional` covers the jurisdictional exposure disclaimer.
- **Flag for the client/counsel:** the build request's own "must cover" list names jurisdictional exposure not implying "physical office presence, branches, licenses, local teams, or regulated operations" — the currently *approved* `DISCLAIMERS.jurisdictional` string only says "physical office presence or regulated operations," without the more specific "branches, licenses, local teams" wording. That more specific language was **not** added to the live disclaimer text, since it isn't part of the client's approved draft — adding it would mean fabricating legal wording. Flagging so the client/counsel can decide whether to broaden the approved sentence.
- **Copy blocks:** `MASTER_WEBSITE_BRIEF.md` §16, verbatim — the three disclaimers already live in `src/content/site.ts` and are reused directly, not restated.
- **Legal/credibility constraints:** this page is exactly where a real lawyer should review before public launch — the three disclaimers here are the client's own approved drafts, not independently verified legal advice. No terms-of-use/governing-law language was added beyond the three approved disclaimers, since none exists as approved source content.
- **Launch-critical — already satisfied** (pending the external counsel review noted above, which is a legal-review task, not a build gap).

### `/privacy` (built — placeholder)
- **Purpose:** exist, so the footer's "Privacy Policy" link resolves instead of 404ing. No source document anywhere in this project contains real, counsel-drafted privacy-policy content.
- **Current state:** built and shipped as `src/app/privacy/page.tsx` — `PageHeader` ("Privacy Policy") → `PrivacyPlaceholder` (light section: the placeholder/draft notice rendered first and largest — prominence via type scale, not a decorative border, after an initial draft's side-stripe accent was caught and removed as exactly the "side-stripe border" anti-pattern DESIGN.md bans — then "Information Deimos May Receive," "How It Is Used," and "Data-Related Enquiries" as three plain headed paragraphs, no accordion).
- **Copy blocks:** none approved as real policy content — deliberately conservative and minimal, per the task spec. No data-processing detail, no compliance-certification claims (GDPR/CCPA or otherwise), no claimed systems that don't exist. Only: (1) the placeholder/draft notice, (2) a general statement that Deimos may receive contact information via email or the site's contact links, (3) a statement that submitted information is used only to respond to the enquiry it relates to, (4) a `mailto:intake@deimos-group.com` contact line for data-related enquiries.
- **Legal/credibility constraints:** a fabricated privacy policy is arguably worse than an honest placeholder, since it would represent unreviewed legal commitments as real. The placeholder/draft status is stated explicitly and prominently in the page copy itself, not just tracked internally in this plan.
- **Launch-critical as a conservative, clearly-marked placeholder — already satisfied; real, counsel-drafted content remains a separate legal task, not a design/build one.**

---

## Launch-critical vs. Phase 2.5 summary

| Route | Classification | Status |
|---|---|---|
| `/` | — | Built |
| `/advisory` (strategic model + advisory capabilities, merged) | Launch-critical | Built |
| `/firm` (incl. Exposure & Experience, merged from `/experience`) | Launch-critical | Built |
| `/jurisdictions` (premium interactive map + mobile fallback + disclaimers) | Launch-critical | Built |
| `/services` | Removed for v1 — merged into `/advisory#capabilities`; redirected | N/A |
| `/experience` | Removed for v1 — merged into `/firm` | N/A |
| `/jurisdictions` (fully interactive, geographically-accurate map graphic — real topology) | Phase 2.5 | Missing |
| `/contact` (categorized `mailto:` links) | Launch-critical | Built |
| `/legal` | Launch-critical | Built |
| `/privacy` (conservative placeholder) | Launch-critical (as a clearly-marked stub) | Built |
| `/situations` | Phase 2.5 | Missing |
| `/sectors` | Phase 2.5 | Missing |
| Insights | Omit from v1 nav entirely | N/A |

All seven required v1 routes (`/`, `/advisory`, `/firm`, `/jurisdictions`, `/contact`, `/legal`, `/privacy`) are built — no launch-critical routes remain missing. `/situations` and `/sectors` remain optional Phase 2.5 depth, not trust or functionality gaps. `/services` and `/experience` are no longer part of the v1 route count at all — both were merged into other pages (`/advisory` and `/firm` respectively) rather than shipped as standalone routes. The fully interactive, geographically-accurate (real-topology) jurisdiction map graphic remains a separate Phase 2.5 item even though `/jurisdictions` itself is built with a premium stylized interactive map. `/privacy` ships as a conservative, clearly-marked placeholder — real, counsel-drafted content is a separate legal task tracked below, not a v1 build gap.

## Deferred production-readiness items (tracked, not v1 blockers)

These do not block the v1 route build-out above, but should not be lost:

- **Video re-encoding** — the active hero clips remain full-size (~266MB total across active slides, two individually 87MB/92MB); no transcoding tooling (`ffmpeg`/`ffprobe`) available in this environment. Confirmed a real performance risk during the launch-blocker audit (not just polish) — flagged again but not fixed here, since fixing it needs tooling this environment doesn't have, and swapping in one of the untested reserve clips would be a content decision (video-to-slide fit), not a code fix.
- **Video posters** — `public/images/video-posters/` is empty; the tier-2 poster fallback never engages until this is populated. Confirmed self-healing in practice: `HeroSlideLayer`'s Tier-3 navy gradient panel catches the poster's 404 via `onError` and renders correctly, so this is a wasted request + brief flash, not a broken/blank hero.
- **Final hero slide-to-clip sign-off** — the video-to-slide assignment in `HERO_COMPONENT_BLUEPRINT.md` §14 is deliberately neutral pending visual review, including an unresolved window-frame check on `hero-twilight-skyline-01.mp4`.
- **Full jurisdiction map data** — real world-topology data/tooling for a literal, geographically-accurate interactive map graphic (see `/jurisdictions` above). `/jurisdictions` itself is built and its launch-critical work is complete; the shipped `JurisdictionMap` (a stylized institutional node-grid instrument, not a placeholder) stands in for a real-topology map in v1.
- **Jurisdiction count discrepancy (client input needed)** — the request that expanded the v1 jurisdiction list stated "45 jurisdictions" but its own itemized list sums to 50; the itemized list was treated as authoritative and built as-is (see `/jurisdictions` above). Needs a client decision on which figure is correct before this is fully closed out.
- **Curated sector imagery** — sourcing real drone footage or approved curated stock for `/sectors`' 10 sectors.
- **Deferred hero transition smoothness** — logged in `DEFERRED_POLISH.md`, untouched.
- **Final legal/privacy review** — `/legal`'s disclaimers are the client's own approved drafts, not independently verified legal advice; `/privacy` is a placeholder pending real counsel-drafted content. Both need real legal review before public launch.
- **P2/P3 polish items from `POST_BUILD_AUDIT.md`** — jurisdiction teaser's dot/line visual, missing per-section scroll-reveal motion. (Resolved since this list was written: nav-link touch target height and CTA button height were fixed during the `/ui-ux-pro-max` passes; the homepage's missing explicit self-identification sentence was fixed via `HOMEPAGE_SELF_IDENTIFICATION` in `src/content/homepage.ts` — the first sentence of `/firm`'s `WHAT_DEIMOS_IS.statement`, reused verbatim in `Positioning.tsx`.)
