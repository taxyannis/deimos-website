# Post-Build Audit — Deimos Group Homepage

**Scope:** the homepage as it exists today — Nav, Hero (5-slide slider), Institutional Positioning, Advisory Capabilities preview, Confidentiality/Mandate-Orientation, Selected Jurisdictional Exposure teaser, Experience, Contact, Footer. Cross-checked against `PRODUCT.md`, `DESIGN.md`, `MASTER_WEBSITE_BRIEF.md`, `GRILL_ME_CRITIQUE.md`, `HOMEPAGE_BLUEPRINT.md`, `HERO_COMPONENT_BLUEPRINT.md`, `VIDEO_ASSET_INVENTORY.md`, `DEFERRED_POLISH.md`.

**Method:** fresh re-read of every current source file (not memory from building it), plus a live headless-browser pass — canvas-normalized contrast audit (53 text nodes, zero assumptions about rendered color), heading-hierarchy query, touch-target measurement at desktop/tablet/mobile, horizontal-scroll check at all three breakpoints, and a direct pixel-crop verification of one visual anomaly that turned out to be a false alarm (documented below so it isn't silently dropped).

**Per your instruction:** the deferred hero video transition smoothness (`DEFERRED_POLISH.md`) is not re-litigated here. It does not currently break auto-advance, readability, reduced-motion, or mobile performance — confirmed below — so it stays deferred, not escalated.

---

## Audit Health Score

| # | Dimension | Score | Key Finding |
|---|-----------|-------|-------------|
| 1 | Accessibility | 3/4 | Contrast is fully solved (0 failures / 53 nodes); heading-hierarchy gaps and undersized progress-mark hit targets remain |
| 2 | Performance | 2/4 | ~266MB of video across the 5 active hero slides, with two full clips downloading concurrently during every transition |
| 3 | Theming | 4/4 | Token system is clean, section/text pairings are structurally enforced after two real bugs were found and fixed |
| 4 | Responsive Design | 3/4 | No horizontal scroll at any breakpoint; touch-target sizing is the main mobile-ergonomics gap |
| 5 | Anti-Patterns | 3/4 | Clean against the ban list; one visual (jurisdiction dot/line graphic) has a mild crypto-network-diagram resemblance worth a second look |
| **Total** | | **15/20** | **Good — address weak dimensions** |

---

## Anti-Patterns Verdict

**Pass.** This does not read as AI-generated on a first look. No gradient text, no glassmorphism, no hero-metric-card, no identical card grids, no gold, no tiny uppercase eyebrows, no numbered-circle process steps. The one soft tell: the jurisdiction teaser's scattered-dots-connected-by-thin-lines visual is a motif also strongly associated with blockchain/crypto "network" marketing graphics — mine is static, muted, and unglowing, which meaningfully distances it from that trope, but it's the one element on the page I'd point to if asked "what looks closest to a template."

---

## Executive Summary

- **Audit Health Score: 15/20 (Good)**
- **Issues found:** 0 P0, 3 P1, 3 P2, 2 P3
- **Top issues:** unaddressed hero video payload weight; four sections with zero semantic heading elements (Advisory Capabilities chief among them); progress-mark controls with a 3px-tall hit area
- **Recommended next steps:** `/impeccable optimize` for the video weight, `/impeccable polish` for the heading/touch-target/nav-sizing cluster, `/impeccable clarify` for one copy gap, `/impeccable animate` for the still-missing per-section scroll reveals

---

## Strategic & Credibility Review

*(Items 1–7 from the request — not part of the standard technical audit template, added because this project's governing docs make them load-bearing.)*

### 1. Strategic positioning

Mostly solid. The headline, positioning paragraph, and all four Advisory Capabilities one-liners consistently use "Deimos advises on…" framing — never "Deimos connects you with…" or "Deimos raises capital for…". No self-contradiction against `MASTER_WEBSITE_BRIEF.md`'s "boutique advisory firm" framing was found anywhere in the live copy.

**Gap:** nowhere on the homepage does the copy explicitly state *what kind of entity* Deimos is. `MASTER_WEBSITE_BRIEF.md` §1's own opening line — "Deimos Group is a boutique, independent advisory platform…" — never made it into the live Positioning paragraph, which jumps straight into describing transaction activity. The Confidentiality section's "rather than passive introduction" line does some of this work indirectly, but there's no direct, plain self-identification sentence anywhere. See P2 finding below.

### 2. Credibility risk

No new risk introduced by this build. The standing risk already identified in `GRILL_ME_CRITIQUE.md` §1 — the site's credibility rests on one hedged metric and a jurisdiction map, with no team/pedigree signal — is unchanged, because leadership content is explicitly out of scope pending the client's decision (correctly not built). Flagging this here only so it isn't lost between documents, not as a new finding.

### 3. Copy quality

No AI-generic phrases found ("unlock potential," "transformative," etc. — none present). No laundry-list copy — every section keeps to the "one point, one explanation" discipline the brief calls for. Copy quality is high and consistent across all six new sections.

### 4. Advisory platform, not broker/finder

Holds up well. The Confidentiality section is doing real work here ("prioritizes situations… rather than passive introduction"), and no section anywhere frames Deimos as introducing, matching, or connecting parties. Pass.

### 5. Capital access framing

Correctly caveated. The capital-access disclaimer ("advisory, structuring, positioning and counterparty engagement support, and do not constitute a guarantee of financing or investment") sits directly beneath the Advisory Capabilities preview — which is exactly where it's needed, since Capital Access & Private Capital Formation is one of the four listed pillars. Confirmed present at that location, not just in the footer.

### 6. Exposure language and caveats

Correctly hedged. The hero's "$21.2bn" uses the approved tightened form ("Principal and advisory transaction exposure…"), not the fuller three-way hedge — consistent with the deliberate plan to reserve the fuller hedge for the not-yet-built Experience subpage. The "40" jurisdictions metric is framed as "market activity, transaction review, and aligned counterparty coverage," never as closed deals or presence.

### 7. Jurisdictional exposure vs. office/licensing implications

Correctly guarded, and reinforced twice. The jurisdiction teaser is headlined "Selected Jurisdictional Exposure" with its disclaimer ("do not imply physical office presence or regulated operations") placed directly beneath it, and the same disclaimer repeats in the footer — the "hedge travels with the claim" rule from `GRILL_ME_CRITIQUE.md` is correctly implemented in two places, not one. The teaser also only shows region *categories* (Europe, Asia-Pacific, etc.), never specific country names or pins, which sidesteps the offshore-jurisdiction-emphasis concern entirely — that concern was scoped to the future full interactive map, not this teaser.

---

## Detailed Findings by Severity

### P1 — Major

**[P1] Hero video payload is unaddressed and substantial**
- **Location:** `public/videos/` (5 active clips referenced in `src/content/hero.ts`)
- **Category:** Performance
- **Impact:** The 5 slides in active rotation total ~266MB (21–92MB per clip, uncompressed UHD masters). Because `Hero.tsx` pre-loads the *next* slide's video for a smooth crossfade, two full clips download concurrently during every transition — worst case ~110–130MB in a single ~7–14 second window, repeating through the first full rotation (~35s) until the browser has cached all 5. This is a real cost for anyone not on a fast, uncapped connection. Mobile is unaffected (video is gated off entirely below 640px width), so this is specifically a desktop/tablet bandwidth concern.
- **Note:** this is distinct from the deferred crossfade-*smoothness* issue in `DEFERRED_POLISH.md` — that's about animation quality; this is about raw file weight, and was flagged (but not fixed) as far back as the first hero build.
- **Recommendation:** re-encode all 8 source clips to a web-appropriate delivery resolution (~1080p–1440p, not full 4K) and bitrate before this goes live, per `HERO_COMPONENT_BLUEPRINT.md` §11's own performance requirement.
- **Suggested command:** `/impeccable optimize`

**[P1] Four sections have zero semantic heading elements**
- **Location:** `Positioning.tsx`, `AdvisoryPreview.tsx` (intro line is a styled `<p>`, pillar names are `<Link>`s, not headings), `Confidentiality.tsx`, `Contact.tsx`
- **Category:** Accessibility
- **Impact:** The page has exactly 3 heading elements total (`h1` in Hero, `h2` in Jurisdiction Teaser, `h2` in Experience) for 7 major sections. A screen-reader user navigating by heading — a very common assistive-technology browsing pattern — would completely skip the Advisory Capabilities section, which is the single most commercially important section on the homepage (it's the entire "what does Deimos do" answer). Positioning, Confidentiality, and Contact being headless is a smaller concern (they're each one short statement), but Advisory Capabilities genuinely needs a heading.
- **WCAG/Standard:** WCAG 2.4.6 (Headings and Labels), best-practice heading-navigation support
- **Recommendation:** at minimum, give the Advisory Capabilities preview a real `<h2>` (the current intro line is already styled correctly — this is a tag change, not a redesign, e.g. `<h2>` instead of `<p>` for `ADVISORY_INTRO`).
- **Suggested command:** `/impeccable polish`

**[P1] Progress-mark (slide selector) touch targets are 24×3px**
- **Location:** `HeroControls.tsx` lines 54–60
- **Category:** Accessibility / Responsive
- **Impact:** The five slide-selector buttons are visually a thin 3px line by design (matches the "slim progress marks" spec), but the *clickable/tappable area* is exactly that same 3px height — there's no invisible padding extending the hit area beyond the visible mark. These are functional manual-navigation controls, not decoration, and a 3px-tall target is difficult to hit reliably with a mouse and especially with touch, on any device.
- **WCAG/Standard:** WCAG 2.2 SC 2.5.8 (Target Size Minimum, AA — 24×24px effective target)
- **Recommendation:** keep the visible 3px bar exactly as designed, but wrap each button in additional vertical padding (e.g., `py-2` on the button, with the visible bar as an inner element) so the actual hit area is ≥24px tall without changing what's visually drawn.
- **Suggested command:** `/impeccable polish`

### P2 — Minor

**[P2] Header and footer nav links have ~16px-tall hit targets**
- **Location:** `Nav.tsx` (desktop link list), `Footer.tsx` (`FOOTER_NAV` list)
- **Category:** Accessibility
- **Impact:** Text-only links with no vertical padding of their own; the raw clickable height is the text's line-height (~16px), below WCAG 2.2's 24×24 AA minimum. Generous `gap` spacing between items (2rem in the main nav) reduces mis-click risk against *neighbors*, but doesn't enlarge the actual target itself.
- **WCAG/Standard:** WCAG 2.2 SC 2.5.8 (AA)
- **Recommendation:** add `py-2` (or similar) to each nav link so the hit area grows without changing the visible text size or the nav's overall height perception.
- **Suggested command:** `/impeccable polish`

**[P2] No explicit self-identification sentence on the homepage**
- **Location:** `src/content/homepage.ts` → `POSITIONING_COPY`
- **Category:** Strategic copy
- **Impact:** See Strategic Review item 1 above — `MASTER_WEBSITE_BRIEF.md`'s own "Deimos Group is a boutique, independent advisory platform" framing never appears anywhere on the page in that direct a form.
- **Recommendation:** consider whether a short, plain identity clause belongs in the Positioning paragraph or elsewhere — this is a content decision, not a code fix, and may already be intentional (the approved copy was pulled verbatim from `HOMEPAGE_BLUEPRINT.md` §4, which itself doesn't include this sentence). Flagging for a decision, not asserting it's wrong.
- **Suggested command:** `/impeccable clarify`

**[P2] Jurisdiction teaser visual reads slightly crypto/network-diagram-adjacent**
- **Location:** `JurisdictionTeaser.tsx` (`BACKGROUND_DOTS`/`HIGHLIGHTED_DOTS`/`HIGHLIGHT_LINKS` SVG)
- **Category:** Anti-Pattern
- **Impact:** Low but real — dots connected by thin lines is also a common blockchain/crypto "distributed network" marketing visual. This implementation is static, muted, and unglowing, which meaningfully differs from that trope, but it's the one element on the page most likely to draw a "does this look like a crypto site?" question.
- **Recommendation:** either remove the connecting lines entirely (pure dot-density, no network reading) or accept as-is — genuinely a judgment call, not a clear defect.
- **Suggested command:** `/impeccable quieter`

### P3 — Polish

**[P3] No scroll-reveal motion implemented on the six new sections**
- **Location:** `Positioning.tsx`, `AdvisoryPreview.tsx`, `Confidentiality.tsx`, `JurisdictionTeaser.tsx`, `Experience.tsx`, `Contact.tsx`
- **Category:** Motion / Anti-Pattern (under-delivery, not over-delivery)
- **Impact:** `HOMEPAGE_BLUEPRINT.md` §19 specifies restrained fade/reveal motion per section (varying by section — a simple fade here, a staggered process-strip reveal there). None of that was implemented; everything renders statically present on load. Safe, but a specified part of the design system is missing.
- **Recommendation:** add the per-section motion exactly as specified in §19 — each section's reveal should fit what it reveals, not one uniform fade applied everywhere.
- **Suggested command:** `/impeccable animate`

**[P3] CTA/link-through buttons sit at 40–41px height**
- **Location:** All bordered-button CTAs sitewide
- **Category:** Responsive
- **Impact:** Comfortably clears the project's stated WCAG AA baseline (24×24) but sits just under the stricter AAA 44×44 target-size guideline.
- **Recommendation:** no action needed unless the team wants AAA-level touch ergonomics specifically.
- **Suggested command:** `/impeccable polish` (bundle with the other touch-target fixes if addressed at all)

---

## Patterns & Systemic Issues

- **Touch-target sizing is a systemic gap, not a one-off.** Nav links, progress marks, and (marginally) the CTA buttons all sit at or below the 24×24 AA minimum somewhere on the page — worth a single pass across all interactive elements rather than three separate fixes.
- **Heading hierarchy was under-specified during the build.** None of the six new section components were given semantic headings unless the blueprint copy happened to include a literal title (Jurisdiction Teaser, Experience). Worth a rule going forward: every homepage section gets at least one heading element, even a visually unstyled one, sized via its own class rather than relying on the tag to carry size.
- **Performance cost of "smoothness" trade-offs isn't free.** The next-slide pre-loading strategy that fixed the crossfade-timing bug in an earlier pass has a real, unaddressed bandwidth cost that was flagged at build time but never circled back to.

---

## Positive Findings — what's working and should be maintained

- **Contrast system is genuinely solid**, not just claimed: 0 failures across a 53-node live audit, and the token system now has surface-specific muted variants (`muted-on-dark` vs `muted-on-slate`) precisely because a real bug was found and fixed rather than patched over.
- **The "hedge travels with the claim" discipline is followed correctly and consistently** — both the capital-access and jurisdictional disclaimers appear adjacent to their claims, not just buried in the footer.
- **CTA vocabulary is fully consistent** with `MASTER_WEBSITE_BRIEF.md` §15's approved list, sitewide, with no generic "Get Started"/"Join Us" language anywhere.
- **Reduced-motion and mobile video-gating both re-verified correct** in this pass — zero `<video>` elements render under `prefers-reduced-motion` or on narrow viewports.
- **No fabricated content anywhere** — no invented logos, tombstones, team bios, offices, or licenses. The scope discipline from `HOMEPAGE_BLUEPRINT.md` §22 was fully respected.
- **Font choices remain correct** — Libre Caslon Display + Public Sans confirmed rendering, no reflex-reject fonts (Cormorant Garamond, Inter, DM Sans, Space Grotesk) anywhere in the codebase.
- **One visual anomaly investigated and ruled out**, not just assumed away: a tablet screenshot appeared to show a reddish tint partway through the Advisory intro line. Direct element-level cropping and computed-style inspection confirmed uniform color and a single text node — a rendering/preview artifact at reduced scale, not a real bug. Noted here so the false alarm doesn't get re-investigated later.

---

## Recommended Actions

1. **[P1] `/impeccable optimize`** — re-encode the 5 active hero videos to web-appropriate resolution/bitrate; ~266MB active payload with concurrent double-buffering during transitions is the single biggest unaddressed issue on the page.
2. **[P1] `/impeccable polish`** — add a real heading to the Advisory Capabilities preview (and consider Positioning/Confidentiality/Contact), and enlarge the progress-mark hit areas to ≥24px without changing their visual size.
3. **[P2] `/impeccable polish`** — add vertical padding to header/footer nav links to clear the WCAG 2.2 AA 24×24 target-size minimum.
4. **[P2] `/impeccable clarify`** — decide whether the Positioning copy needs an explicit "independent, boutique advisory platform" self-identification clause.
5. **[P2] `/impeccable quieter`** — reconsider or simplify the jurisdiction teaser's dot-and-line visual.
6. **[P3] `/impeccable animate`** — implement the per-section scroll-reveal motion specified in `HOMEPAGE_BLUEPRINT.md` §19, which is currently entirely absent.

> You can ask me to run these one at a time, all at once, or in any order you prefer.
>
> Re-run `/impeccable audit` after fixes to see your score improve.
