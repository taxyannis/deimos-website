# Deimos Group — Homepage Blueprint

**Status:** Design brief. Planning only — no code in this document. Built on top of `PRODUCT.md`, `DESIGN.md`, `MASTER_WEBSITE_BRIEF.md`, and `GRILL_ME_CRITIQUE.md`'s required changes (the critique's revisions are treated as the current state of truth, not the pre-critique brief). `original-master-prompt.txt` and `kimi-extraction-report.md` inform specific copy/asset choices where cited.

**Visual Direction Probe:** skipped — this session has no native image-generation tool available. Noting the skip explicitly per process rather than letting it evaporate silently. Visual exploration should happen in the `craft` pass once this blueprint is confirmed.

**Discovery note:** this blueprint does not open a fresh discovery interview. `MASTER_WEBSITE_BRIEF.md` plus the live grilling session captured in `GRILL_ME_CRITIQUE.md` already answer purpose, audience, content scope, and visual direction in more depth than a cold interview would surface. Where a genuine decision is still open (which capability pillars lead, exact video-to-slide assignment, final type pairing), it's flagged as such below rather than silently assumed — see **Open Questions** at the end.

---

## Design language foundations

**Color strategy:** Committed (per DESIGN.md — navy carries 30–60% of surface, not a token accent). Named anchors: Lazard's navy-on-white institutional restraint, Houlihan Lokey's high-contrast editorial hierarchy, Rothschild & Co's disciplined off-white/ink pairing. Not luxury-black-and-gold (Post Oak-style concierge palettes), not Linear-style dark-gradient SaaS navy — the difference is surface *weight* (navy as substrate, not as a dark-mode skin) and the complete absence of glow/gradient treatment on top of it.

**Typography — approved direction, pick still pending at craft time.** Three brand-voice words for Deimos, as physical objects rather than adjectives, now confirmed as the selection filter: **load-bearing** (like a beam, not a flourish), **unhurried** (a document that doesn't need to convince you fast), **withheld** (says less than it knows). Display serif should read like a sovereign-wealth annual report or a private-bank offering memorandum, not a magazine masthead; body sans should read institutional and disciplined, not geometric-startup or SaaS-like. **Explicit reflex-reject flag, confirmed:** do not use Cormorant Garamond (the Kimi build's choice — a training-data default that's saturated the "editorial serif" lane); do not default to Inter, DM Sans, or Space Grotesk for body sans (the "reads as SaaS" tell PRODUCT.md is trying to avoid). At `craft` time, run the actual font-selection procedure against the three-word filter (browse a real catalog with those words in mind → reject anything that "looks designy" → cross-check that the pick doesn't match the original reflex) and **document the rationale** for whatever is chosen — this is now a requirement, not a suggestion, so the choice survives scrutiny later rather than reading as an unexamined default.

**Imagery policy — approved.** Real drone/aerial footage is the primary asset class and is now a confirmed local inventory (see §21) rather than a placeholder count. Use imagery where the brief calls for it — hero, metrics, jurisdictional context, selected capability texture, and other scale-building sections — zero imagery anywhere the brief implies it is a bug, not restraint. Confidentiality, Mandate-Orientation, footer, and Contact can remain typographic-only; that's a deliberate register choice for those specific sections, not a default carried elsewhere. Curated, non-AI-generated, institutional-tone stock photography is approved **only as a secondary fallback** where real footage doesn't cover a section — never generic business stock, never AI-generated imagery, and **never for the hero specifically** (see §7 and §21 — the hero draws only from the local real-footage inventory or the navy-led cinematic fallback panel, never from stock, external or otherwise).

**Motion posture:** DESIGN.md's "motion as evidence of scale" — earned, choreographed motion at the hero and jurisdiction moments; restrained, functional motion everywhere else (fades, reveals, no bounce). One well-orchestrated first-load sequence at the hero beats scattered per-section micro-interactions. `prefers-reduced-motion` alternative required everywhere motion appears.

---

## 1. Final homepage narrative arc

**Identity** (an independent advisory platform, stated once, plainly — not a broker) → **purpose** (value exists, but the transaction is not yet institutional) → **a sharp, specific edge** (a handful of flagship capabilities, not an inventory) → **how it actually works** (mandate-oriented, confidential, process-driven — this is the section doing the most work against a broker misread) → **proof of scale, stated with confidence rather than legal caution** (one tightened metric moment + a few concrete-feeling exposure themes + a jurisdiction teaser) → **one clear, unhurried path to contact**.

The arc is deliberately short. Every section earns a click-through to a subpage rather than trying to say everything on the homepage itself — the homepage's job is to establish standing in under a minute, not to be the capabilities inventory.

---

## 2. Final section order

1. Navigation (sticky, minimal)
2. Hero — metric/video slider
3. Institutional positioning (single paragraph)
4. Advisory Capabilities preview (3–4 flagship pillars)
5. Confidentiality / Mandate-Orientation (with nested process strip)
6. Selected Jurisdictional Exposure (map teaser)
7. Experience (anonymized exposure themes, not a metrics repeat)
8. Contact
9. Footer

Nine functional units, five of which are genuinely "sections" a visitor scrolls through (3–7), bookended by nav/footer and closed by a single contact ask. Seven Disciplines, Selected Situations, and Sector Coverage are **not** homepage sections — see §9–§11 and §22.

---

## 3. Section-by-section purpose

| Section | Job it has to do |
|---|---|
| Hero | Establish scale and register in the first five seconds; make clear this is a serious, physical-world advisory practice, not a pitch deck |
| Institutional positioning | Answer "what is this, exactly" in one paragraph before any capability detail |
| Advisory Capabilities preview | Give a sharp, specific commercial edge — not an inventory — so the firm reads as expert rather than generalist |
| Confidentiality / Mandate-Orientation | Pre-empt the broker/finder read directly, with process as evidence, not just a disclaimer sentence |
| Jurisdiction teaser | Signal genuine cross-border reach without overclaiming office presence |
| Experience | Make the scale claims feel concrete via anonymized themes, not just numbers already shown in the hero |
| Contact | Convert — one ask, clearly stated, low friction |

---

## 4. Draft copy direction per section

**Hero:** headline + subline + rotating metric/label/support line (see §7).

**Institutional positioning (single paragraph, not two):**
> "Deimos advises on complex private-market transactions where value exists, but the transaction is not yet institutional. The firm supports sponsors, owners, operators, investors and public-sector stakeholders in defining structure, clarifying the capital requirement, and advancing the process toward execution."

*(Trimmed from the master brief's two backbone paragraphs to one — the second paragraph's content, capital formation/M&A/JV/real assets/infrastructure/special situations/sovereign-linked, is exactly what the capabilities preview says next; keeping both is the section repeating itself.)*

**Advisory Capabilities preview intro line:**
> "Deimos structures complex private-market situations across a defined set of advisory disciplines."

Then 3–4 pillar names with a one-line definition each (see §8), and a single link-through: "Review all advisory capabilities →"

**Confidentiality / Mandate-Orientation:**
> "Deimos engages on a selective, mandate-oriented basis. The firm prioritizes situations where transaction complexity, capital requirements, stakeholder alignment or cross-border execution require structured advisory work rather than passive introduction."

Directly beneath: the six-step process strip as labels only (no paragraph descriptions on the homepage — see §14).

**Jurisdiction teaser:**
> "Selected Jurisdictional Exposure" / "Deimos operates across a selective set of cross-border markets where the firm is evaluating, structuring, advising on, or advancing transaction situations through direct activity or aligned counterparty coverage." Link: "View jurisdictional exposure →"

**Experience:**
> "Deimos has been engaged across infrastructure and logistics opportunities, energy and natural resource situations, and sovereign-linked and concession-linked processes — advisory and structuring work in situations that are valuable, but not yet institutional." Link: "Review experience →"

**Contact:**
> "For confidential transaction, capital formation or strategic advisory enquiries, contact Deimos Group." Single button: "Contact Deimos" / "Discuss a Transaction."

---

## 5. Hero headline recommendation and alternatives

**Recommended:** *"Where Structure Precedes Capital"* — carries the DESIGN.md "Mandate Room" north star directly, doubles as a recurring institutional refrain usable elsewhere on the site, and is the sharpest of the backbone's four options.

**Acceptable alternates:**
- *"Independent Advisory for Complex Private-Market Transactions"* — more literal, safer if the client wants zero interpretive risk in the primary headline.
- *"Structure First. Capital Follows."* — a new, tighter variant in the same aphoristic register as the recommended headline, offered for range; shorter, slightly more clipped/confident.

**Reject as a standalone headline:** *"Private Investment Banking for Complex Capital Situations"* — flagged in the grilling critique as too close to a literal identity claim in isolation; fine only as supporting register language deeper in body copy, never as the first thing a visitor reads.

---

## 6. Hero subline

**Recommended (tightened per the grilling critique):**
> "Deimos advises on complex private-market transactions where structure, capital, and execution must be aligned before institutional capital can move."

**Tighter alternate**, if the design wants fewer words at hero scale:
> "Structure, capital, and execution — aligned before institutional capital moves."

---

## 7. Metric/video slider design and content

**Concept:** not a number carousel — a coordinated media-and-metric sequence where the background video and the foreground metric change together on a slow, deliberate cadence. This is the one place on the homepage earning a fully cinematic, choreographed treatment.

**Content (five slides, per the master brief, with the critique's numeric/qualitative distinction applied):**

| # | Metric | Label | Supporting line (homepage-tightened) | Register |
|---|---|---|---|---|
| 1 | US$21.2bn | Historical transaction exposure | "Principal and advisory transaction exposure across complex private-market situations." | Numeric |
| 2 | 40 | Selected jurisdictional exposure | "Cross-border market activity, transaction review, and aligned counterparty coverage." | Numeric |
| 3 | 7 | Advisory disciplines | "Capital formation, structuring, M&A, special situations, infrastructure, investor coverage and execution management." | Numeric |
| 4 | Cross-Border | Private capital situations | "Advisory work across jurisdictions where capital, structure and stakeholder alignment must be sequenced." | Qualitative |
| 5 | Complex Assets | Real assets, infrastructure, energy, hospitality, sports and strategic sectors | "Focused on situations where conventional capital processes often require deeper structuring before execution." | Qualitative |

*(Full three-way hedge — "principal, affiliated advisory and transaction exposure" — moves to the Experience subpage per the critique; the homepage version above is the confident, tightened form.)*

**Visual design — explicitly avoiding the banned "hero-metric-card" pattern:** the metric is not a floating card with a stat and a gradient icon. It sits directly in the video frame — large serif numeral, small sans label beneath, both left- or lower-third-aligned over a dark gradient overlay (bottom 40% of frame darkened for legibility, not a flat scrim over the whole video). Numeric slides (1–3) get a slightly larger numeral treatment; qualitative slides (4–5) drop the numeral styling entirely and read as a short statement instead, so the sequence doesn't visually claim "five metrics" when only three are numbers — this is the critique's required distinction, made structural rather than just a copy note.

**Behavior:** auto-advance, ~6–7 seconds per slide (long enough to read the supporting line without feeling like a countdown), cross-dissolve between video and text together, no cuts. Slim progress indicator (five thin marks, not dots-with-bounce) bottom-right, doubling as manual controls. First slide preloads and appears instantly; subsequent videos lazy-load one ahead.

**Real asset inventory (confirmed local, `public/videos/` — final filenames; renaming completed, see `VIDEO_ASSET_INVENTORY.md`):**

| Filename | Size | Resolution (from filename) | FPS |
|---|---|---|---|
| `hero-historic-riverfront-01.mp4` | 91.67 MiB | 3840×2160 (UHD) | 30 |
| `hero-dense-skyline-01.mp4` | 86.20 MiB | 3840×2160 (UHD) | 24 |
| `hero-coastline-city-01.mp4` | 43.67 MiB | 3840×2160 (UHD) | 30 |
| `hero-waterfront-skyline-01.mp4` | 37.83 MiB | 3840×2160 (UHD) | 25 |
| `hero-harbor-night-01.mp4` | 23.04 MiB | 3840×2160 (UHD) | 25 |
| `hero-cable-bridge-skyline-01.mp4` | 20.90 MiB | 1920×1080 (FHD) | 60 |
| `hero-twilight-skyline-01.mp4` | 15.76 MiB | 2560×1440 (QHD) | 25 |
| `hero-harbor-night-02.mp4` | 10.33 MiB | unspecified — "medium" quality tier, likely the lowest-resolution clip of the eight | — |

**Content review is now complete** (`VIDEO_ASSET_INVENTORY.md` §3, via real extracted thumbnails, not guessed): a coastal cliffside city, a cable-stayed bridge over a dense skyline, a dense overcast skyscraper skyline, a waterfront skyline behind a colonial-era building, two related night-harbor shots from different angles, a historic old-town riverfront, and a dusk skyline shot with a window/balcony edge visible in frame. Filenames now reflect this content directly. The Kimi transcript's specific city labels (Zurich, Panama City, Singapore, Monaco, Hong Kong) were never reused anywhere in this project; a separately hedged, unconfirmed landmark hypothesis is recorded in `VIDEO_ASSET_INVENTORY.md` §3 for optional human confirmation only, not baked into any filename or public copy. The space-and-parentheses filename has been cleaned up as part of the same rename.

**Video assignment (register guidance, now informed by known content — see `HERO_COMPONENT_BLUEPRINT.md` §4 for the full reasoning):** `hero-coastline-city-01.mp4`, `hero-waterfront-skyline-01.mp4`, `hero-dense-skyline-01.mp4`, and `hero-cable-bridge-skyline-01.mp4` are the strongest candidates for the numeric slides (clean drone-aerial, institutional/infrastructure register); `hero-harbor-night-01.mp4` is a strong fifth choice for the most asset-heavy/moody-scale slide. `hero-harbor-night-02.mp4` (likely a duplicate angle of `hero-harbor-night-01.mp4`) and `hero-historic-riverfront-01.mp4` (heritage/tourism-adjacent register) are recommended to hold in reserve; `hero-twilight-skyline-01.mp4` needs a closer look before use, since its frame appears to include a window/balcony edge that may read as a handheld interior shot rather than true drone footage. Final slide-by-slide placement is still a judgment call pending sign-off, not locked by this document. **No external stock video is used for the hero under any circumstance** — only this local inventory, or the fallback panel described below.

**Hero media system — data-driven, so files can be swapped without touching layout code.** Each slide is a manifest entry, not a hardcoded reference:

- `id`, `order`
- `metric`, `metricRegister` (`numeric` | `qualitative` — drives the visual treatment split from §7 above)
- `label`, `supportingLine` (homepage-tightened form), `supportingLineFull` (optional, fuller hedge — reserved for reuse on the Experience subpage)
- `video`: `{ src: path under public/videos/, posterSrc: path under public/images/video-posters/ (nullable), altText }`

**Three-tier graceful fallback, resolved per slide at render time — a missing file degrades the slide, it never fails the build:**
1. **Video plays** — `video.src` resolves and motion is not reduced.
2. **Poster image** — if `video.src` is missing or motion is reduced/bandwidth is constrained, and `video.posterSrc` exists (a real frame grab from that same clip, treated with the same navy gradient overlay as the video), show the poster as a static image with the metric/label text in place.
3. **Navy-led cinematic fallback panel** — if neither the video nor a poster is available (e.g., posters haven't been generated yet — `public/images/video-posters/` is currently empty), render a designed static panel: a deep-navy-to-ink-blue gradient field (diagonal or radial, per DESIGN.md's tonal-surface language, never a flat color block) with the same metric/label typography overlaid exactly as it would sit on video. This tier is a **designed fallback, not a broken state** — it should look like a deliberate, on-brand slide, not an empty placeholder, since it's also the standing mobile/low-bandwidth/`prefers-reduced-motion` treatment described next.

**Mobile, low-bandwidth, and `prefers-reduced-motion`:** all three converge on the same navy-led cinematic fallback panel (tier 3 above) unless a poster exists (tier 2), rather than attempting a lighter-weight video encode as the reduced-motion answer — reduced motion means no motion, not smaller motion. This is a single, deliberately designed fallback state reused across all three triggers, not three separate treatments to build and maintain.

---

## 8. Advisory capabilities presentation

**Homepage:** 3–4 flagship pillars only, not the full six. **Confirmed leads:** Capital Access & Private Capital Formation, Strategic Advisory & Transaction Structuring, M&A/Joint Ventures & Strategic Partnerships, Infrastructure/Real Assets & Project Finance. This is the more conventional boutique-advisory lead — closer to what Rothschild, Lazard, and PJT themselves lead with — at the deliberate cost of reading slightly more generic than the specialist-edge alternative (Capital Access, Infrastructure, Special Situations, Sovereign-Linked) considered during shaping. Special Situations & Restructuring and Sovereign-Linked & Public-Private Opportunities are still fully present on the Advisory subpage; they're simply not among the four homepage-visible pillars.

**Treatment:** an editorial index, not cards — a vertical or horizontal list where each pillar name is a large label with a one-line definition revealed on hover/focus (desktop) or always-visible in a stacked list (mobile, since hover doesn't exist there). No icons, no bordered boxes, no uniform grid. Full six-pillar depth (with the accordion-hidden activity detail from `MASTER_WEBSITE_BRIEF.md` §9) lives on the dedicated Advisory subpage, reached via a single link-through line.

---

## 9. Seven Disciplines interaction model

**Not on the homepage, and restructured per the grilling critique.** Seven Disciplines and Advisory Capabilities were found to be five-of-six near-duplicate in wording — keeping both as separate homepage-adjacent frameworks would violate the site's own "no repeating capability language across sections" rule. Resolution: Seven Disciplines is **dropped as a standalone section**. Its two genuinely non-redundant items — *Investor, Sponsor & Operator Coverage* and *Bankability, Diligence & Execution Management* — are folded into the Advisory Approach process sequence on the Experience subpage, where they belong conceptually (they describe *how* Deimos works, not *what* it covers). No homepage or nav impact beyond what's already reflected in §2's section order.

---

## 10. Selected Situations treatment

**Not homepage-visible.** Deferred entirely to a dedicated Situations subpage (Phase 2 per the master brief). The homepage's Advisory Capabilities preview and Experience exposure themes already carry enough "what kind of situations" signal for a first-time visitor; the full 12-item index is depth for someone already engaged, not a first-screen concern.

---

## 11. Sector Coverage treatment

**Not homepage-visible**, same reasoning as Situations. Sector breadth is implied on the homepage through hero footage and capability framing rather than stated as a 10-item list. Full Sector Coverage index (editorial, not cards; curated stock photography permitted for footage gaps per the confirmed policy) lives on its own subpage.

---

## 12. Jurisdiction map treatment

**Homepage: a teaser, not the full interactive instrument.** A compact, restrained visual — a stylized navy/off-white world silhouette (dot-density or fine line-art, not a literal Google-Maps-style render) with a handful of regions subtly indicated, no pins, no country-by-country interactivity, no filter UI. Headline "Selected Jurisdictional Exposure" + one-line subtext + a single link-through to the full Jurisdictions page.

Because the homepage teaser doesn't attempt to show all 40 jurisdictions by default, it sidesteps the critique's concern about offshore jurisdictions (Cayman, Saint Vincent) illuminating alongside Switzerland in a default "all markets" view — that concern applies to the **full interactive map on the Jurisdictions subpage**, where the fix is: offshore jurisdictions stay full-weight *inside* their own International Structuring filter, not lit up by default in the all-regions view. This is a full-map-page requirement, not a homepage-teaser one, and should be re-confirmed as part of that subpage's own brief when it's shaped.

---

## 13. Experience / exposure section wording

Homepage version is intentionally **not** a repeat of the hero's numbers — its job is to make the scale claim feel concrete via texture, since the critique specifically flagged that "energy and natural resource situations" alone doesn't survive a skeptical follow-up ("name a specific situation"). Two to three anonymized exposure themes, stated plainly:

> "Infrastructure and logistics opportunities. Energy and natural resource situations. Sovereign-linked and concession-linked processes."

No fabricated tombstones, no invented deal names — themes only, exactly as `MASTER_WEBSITE_BRIEF.md` §14 specifies. Full six-theme list plus the Advisory Approach sequence detail lives on the Experience subpage.

---

## 14. Advisory approach / process section

**Not a standalone homepage section — nested inside Confidentiality/Mandate-Orientation as a compact label strip**, not a full description block. This is a deliberate compression: showing the six-step sequence as labels only (Situation Assessment → Structuring & Diligence → Capital Strategy → Counterparty Positioning → Process Management → Execution Support) gives visual evidence of "process, not passive introduction" without adding an eighth full section to an already-lean homepage. This is also the one legitimate place on the homepage where a numbered/sequential visual treatment is earned — it's a genuine ordered process, not decorative section-numbering. Full descriptive detail per step (the "Deimos begins by defining the transaction reality…" paragraph) lives on the Experience subpage.

---

## 15. Confidentiality / mandate-orientation section

Placement: directly after the Advisory Capabilities preview — right where a visitor's "wait, is this just a broker?" doubt would naturally surface after reading a capability list. Content: the mandate-orientation paragraph (§4) plus the compact process strip (§14). Visually quiet relative to the hero and capabilities sections — this section persuades through what it states plainly, not through additional motion or imagery. A good candidate for the homepage's one deliberately typography-only, imageless section.

---

## 16. Contact section and CTA structure

Homepage contact is **simple, not the full segmented form** — one short paragraph, one clear CTA button ("Contact Deimos" or "Discuss a Transaction"), linking to the dedicated Contact page where the six inquiry categories (Transaction advisory, Capital formation, Strategic partnership, Jurisdictional representation, Investor/sponsor dialogue, General enquiries) live. Putting a six-option selector on the homepage's closing section would dilute the single ask the design principles call for; save the segmentation for the page a visitor reaches specifically to act.

**CTA vocabulary (site-wide, unchanged from the master brief):** Explore Advisory Capabilities · Discuss a Transaction · Contact Deimos · View Jurisdictional Exposure · Review Services · Submit an Enquiry. Never "Get Started," "Join Us," "Let's Build Together," "Unlock Opportunity," "Start Your Journey," "Scale With Us."

---

## 17. Footer / disclaimer structure

**Footer navigation:** Firm · Advisory · Jurisdictions · Contact · Legal/Disclaimer · Privacy Policy. Insights omitted (content-gated, not scheduled).

**Three disclaimers, present sitewide via the footer** (general legal, jurisdictional, capital access — full text in `MASTER_WEBSITE_BRIEF.md` §16). On the homepage specifically: the jurisdictional disclaimer should also appear directly beneath the jurisdiction teaser (§12), not only in the footer, per the critique's "hedge travels with the claim" rule.

---

## 18. Visual treatment per section

- **Nav:** minimal, wordmark + 6–7 text links, no button-styled CTA in the nav itself (reserve visual weight for the hero's actual CTAs); transparent over hero video, solid navy/off-white on scroll.
- **Hero:** full-bleed video, bottom-40% dark gradient overlay, large serif metric + sans label lower-third, thin progress marks bottom-right. No card, no rounded container around the metric.
- **Institutional positioning:** generous whitespace, single centered or left-aligned column capped at 65–75ch, serif for the first sentence or a pull-quote treatment optional, sans for the rest — restraint is the point here, not typographic display.
- **Capabilities preview:** editorial index — large label typography, thin rule dividers between pillars (never side-stripe accents), one-line definitions in sans, no icons, no bordered cards.
- **Confidentiality:** the most quietly typographic section on the page — off-white or slate-navy surface shift (tonal, not shadow) to differentiate it from the sections above/below, process strip as small-caps-free sans labels connected by thin rule lines or arrows, not numbered circles.
- **Jurisdiction teaser:** dark navy surface, restrained line-art/dot-density world shape, single accent (muted steel blue or desaturated cobalt) for the handful of indicated regions — no bright pins, no drop shadows under the map shape.
- **Experience:** off-white surface, three short theme statements set with generous vertical rhythm, no bullet icons.
- **Contact:** navy surface (a deliberate bookend echoing the hero), single centered statement + button, most whitespace-heavy section on the page.
- **Footer:** slate navy, small sans throughout, disclaimers in a visibly smaller/quieter type step than nav links — legally present, not visually competing for attention.

Sitewide bans carried through every section: no gradient text, no side-stripe borders, no glassmorphism, no identical card grids, no tiny uppercase eyebrow above every section, no gold/bronze/silver, no drop-shadow card-lift (tonal surface shifts only).

---

## 19. Motion treatment per section

- **Hero:** the one ambitious, fully choreographed sequence on the page — cross-dissolve video + text together, ease-out-quart timing, ~6–7s per slide. This is where DESIGN.md's "motion as evidence of scale" gets spent.
- **Institutional positioning:** a single restrained fade/upward reveal on scroll-into-view, no stagger needed for one paragraph.
- **Capabilities preview:** each pillar's one-line definition reveals on hover (desktop) with a quick, subtle opacity/height transition — no bounce; on mobile, definitions are simply present (no hover to simulate), so no motion needed there beyond a standard scroll-reveal.
- **Confidentiality:** minimal — a single fade-in for the paragraph, then the process-strip labels can have a light staggered reveal (each label appearing in sequence) since it genuinely is a sequence; this is legitimate staggering, not the uniform-reflex tell, because the stagger *is* the process order.
- **Jurisdiction teaser:** a slow, subtle reveal of the highlighted regions (points fading in over ~1–2s) when scrolled into view — this is one of the two moments (with the hero) DESIGN.md explicitly reserves choreography for.
- **Experience:** simple fade/reveal, no stagger drama needed for three short lines.
- **Contact:** understated fade-in; this section should feel calm, not climactic — the persuading already happened.

`prefers-reduced-motion` alternative for every one of the above: crossfade or instant-appear substitutes for any transform/scroll-triggered motion. The video slider specifically falls back to the navy-led cinematic fallback panel (or a real poster image, if one exists for that slide) described in §7 — a designed static state, not a frozen video frame grabbed on the fly.

---

## 20. Mobile simplification rules

- Hero slider: on constrained mobile/bandwidth conditions, prefer the navy-led cinematic fallback panel (or poster image, if generated) over attempting a lighter video encode — this matches the `prefers-reduced-motion` treatment in §19 and avoids maintaining a second video-quality tier. Where video does play on mobile, keep the coordinated metric/video concept but decode only one active clip at a time (others fully unloaded, not backgrounded), and enlarge the metric/label text relative to viewport so it reads instantly without zooming.
- Capabilities preview: no hover state exists on touch — definitions are always visible under each pillar label in a stacked list, not gated behind a tap-to-reveal.
- Jurisdiction teaser: static image on mobile/low-bandwidth rather than an animated points-reveal, to protect load time.
- Confidentiality process strip: stacks vertically on narrow viewports; keep it a simple ordered list rather than trying to preserve a horizontal strip at a cramped scale.
- Contact: button remains full-width and thumb-reachable; no hover-dependent affordances anywhere in this section.
- Navigation: collapses to a simple menu; keep it to the same 6–7 items, no added mobile-only items.

---

## 21. What assets are required

- **Video — confirmed local, present, renamed, and content-reviewed.** All 8 clips listed in §7 exist under `public/videos/` with final, clean, content-descriptive filenames (see `VIDEO_ASSET_INVENTORY.md`). At minimum 5 of the 8 will be used for the hero slider; §7 gives a content-informed recommendation, pending final sign-off on exact slide-by-slide placement. No new video acquisition is needed; remaining work is optional trimming/re-encoding for web delivery (§11/§21 performance notes) and the manifest wiring described in §7 — not sourcing, not content review.
- **Video posters — directory exists, empty, needs generation.** `public/images/video-posters/` is already scaffolded but contains no files yet. Each hero clip selected for the slider needs a corresponding poster frame grabbed and treated with the same navy gradient overlay as the live video, to serve as the tier-2 fallback in §7's fallback system. Until these are generated, slides fall back straight to the tier-3 navy-led cinematic panel — which is a fully designed, acceptable state on its own, not a blocker to shaping or building the hero.
- **Jurisdiction teaser graphic:** a simple stylized world silhouette (SVG or canvas), not the full interactive dataset needed for the eventual Jurisdictions subpage — that's a separate, larger asset (world topology data + the confirmed 40-jurisdiction list with region tags).
- **Curated stock photography:** none required for the homepage itself under this blueprint, and never for the hero specifically (§7). If the client wants texture behind a scale-building section later, curated (non-AI, institutional-tone) stock is the approved secondary fallback per the confirmed policy — real footage and the local inventory come first.
- **Typography:** two licensed/webfont families (serif display + sans body) selected via the reflex-reject-aware procedure in the Design Language Foundations section above, with rationale documented at craft time — not yet finalized, flagged as an open question.
- **Copy sign-off:** the tightened hero hedge line, the single-paragraph positioning copy, and the three anonymized Experience themes above are drafts for approval, not final legal-reviewed copy.
- **Contact target:** confirmed email intake@deimos-group.com; no additional asset needed for the homepage's simple contact CTA (the full inquiry-category form is a Contact-subpage asset).

---

## 22. What should be deferred to later versions

- Seven Disciplines as any kind of standalone section (dropped; two items folded into Advisory Approach)
- Selected Situations index (own subpage, Phase 2)
- Sector Coverage index (own subpage, Phase 2)
- Full interactive Jurisdictions map with region filters (own subpage; homepage gets a teaser only)
- Full Experience page (exposure themes in full, Advisory Approach with full step descriptions)
- Firm page content (Who Deimos Serves, Why Deimos, full Confidentiality statement in long form)
- Insights — not scheduled at all; content-gated until real editorial material exists
- Any leadership/pedigree content — pending the client's decision from the grilling critique (§1 of that document); if approved, it would live on the Firm page, not the homepage, and wouldn't change this blueprint's homepage section order
- Full contact form with inquiry-category segmentation (Contact subpage)
- i18n/localization — not raised anywhere in the source material; out of scope until requested

---

## 23. First coded build sequence

1. **Foundations:** finalize color tokens (navy/ink/slate/off-white/steel-blue/cobalt per DESIGN.md) and typography pairing (via the reflex-reject-aware procedure); set up the base layout shell, spacing scale, and `prefers-reduced-motion` handling globally.
2. **Global chrome:** navigation (sticky, collapses on mobile) and footer (nav links + three disclaimers) — low-risk, validates the type system and disclaimer copy before the harder components.
3. **Hero:** the video/metric slider — highest technical risk (video performance, coordinated transitions, mobile behavior) and highest visual stakes; build and test this first among the body sections so problems surface early.
4. **Institutional positioning + Confidentiality/process-strip:** mostly typographic, good for validating rhythm and hierarchy once the hero is settled.
5. **Advisory Capabilities preview:** the editorial-index hover/stacked-list interaction pattern.
6. **Jurisdiction teaser:** static/lightly-animated version first; the full interactive map is explicitly out of scope for this build pass.
7. **Experience section + Contact section:** lowest-risk, mostly typographic sections; close out the homepage body.
8. **Responsive pass, reduced-motion pass, accessibility pass** (contrast, keyboard nav, focus states) across everything built above.
9. Only after the homepage passes its own polish/audit: branch into Phase 2 subpages (Advisory full, Jurisdictions full map, Situations, Sectors, Experience full, Firm, Contact) per `MASTER_WEBSITE_BRIEF.md` §23.

---

## Open questions

**Resolved during blueprint confirmation:** homepage lead pillars are Capital Access & Private Capital Formation, Strategic Advisory & Transaction Structuring, M&A/Joint Ventures & Strategic Partnerships, and Infrastructure/Real Assets & Project Finance (§8). Overall blueprint direction (lean 7-section homepage, Seven Disciplines dropped, deferred subpages) is approved as written.

Still genuinely open — the client's call, not a design judgment:

1. **Final type pairing** — not selected in this blueprint on purpose; belongs to the `craft` pass once a hero-specific shape/craft session runs, using the reflex-reject-aware procedure above (explicitly not Cormorant Garamond, not Inter/DM Sans/Space Grotesk), with rationale documented.
2. **Final slide-by-slide clip assignment** — content review is now complete (`VIDEO_ASSET_INVENTORY.md` §3, `HERO_COMPONENT_BLUEPRINT.md` §4) and filenames are renamed to match. What's still open is the final sign-off on exactly which clip sits at which slide number, and a closer look at `hero-twilight-skyline-01.mp4`'s apparent window/balcony frame edge before committing it to the rotation.
3. **Poster generation** — `public/images/video-posters/` is empty; generating posters for the selected clips is a nice-to-have before build, not a blocker, since the tier-3 navy-led fallback panel (§7) is itself an acceptable, fully designed state.
4. **Leadership/pedigree content** — still pending from the grilling critique; doesn't change this homepage blueprint either way, but affects the Firm page brief when that's shaped.

**Next step:** per §23, the recommended next move is a `craft`/shape pass on the hero component specifically (highest technical and visual risk), still gated on a separate explicit go-ahead before any code is written.
