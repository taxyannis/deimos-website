# Deimos Group — Hero Component Blueprint

**Status:** Design brief for one component. Planning only — no code in this document. Deepens `HOMEPAGE_BLUEPRINT.md` §5–§7, §18–§20 specifically for the hero, per its own recommendation (§23: hero is highest technical risk, shape it on its own before writing homepage code). Built on `PRODUCT.md`, `DESIGN.md`, `MASTER_WEBSITE_BRIEF.md`, `GRILL_ME_CRITIQUE.md`, `HOMEPAGE_BLUEPRINT.md`, `original-master-prompt.txt`, `kimi-extraction-report.md`.

**Video inspection method and limits — updated.** This session originally had no ffmpeg, no Python video libraries, and no frame-extraction tool, so §4 below was first written on technical metadata alone (filename-derived resolution/fps, partial Shell-property duration) with scene content explicitly unconfirmed. A later pass (`VIDEO_ASSET_INVENTORY.md`) found a working method — Windows' native thumbnail-extraction API — that pulled a real frame from all 8 clips, which were then visually reviewed. §4 has been updated accordingly: content is now genuinely known, filenames have been renamed to reflect it, and this document uses the final filenames throughout. Where the original Kimi transcript asserted specific cities (Zurich, Panama City, Singapore, Monaco, Hong Kong) for these same files, that assignment was deliberately not reused anywhere in this project — it was Kimi's own unverified invention. `VIDEO_ASSET_INVENTORY.md` §3 records what was actually observed, plus a separately hedged, clearly-labeled set of landmark hypotheses that remain unconfirmed and are not used in any filename or public copy.

---

## 1. Hero narrative purpose

The hero has exactly one job in the first five seconds: make a skeptical, credential-literate visitor believe this is a serious, physical-world advisory practice — not a pitch deck, not a SaaS product, not a broker page. Per `PRODUCT.md`'s "metric-led hero" and DESIGN.md's "Mandate Room" north star, it does this through **real footage + one credible, tightly-hedged metric at a time**, never through a floating stat card or an inventory of claims.

`GRILL_ME_CRITIQUE.md`'s five-second-test finding governs the tone specifically: the hero must read as *confident*, not *lawyered*. A big number immediately trailed by a three-way legal hedge reads as defensive — the opposite of what Rothschild, Lazard, and PJT actually do at their own hero moments (understatement, not a number wrapped in caveats). The homepage-level hedge stays tight (`MASTER_WEBSITE_BRIEF.md`/critique-approved wording); the fuller hedge lives on the Experience subpage, not here.

The hero is also where DESIGN.md's "motion as evidence of scale" gets spent — this is the one place on the homepage earning fully choreographed motion; everywhere else on the page stays restrained by comparison (see `HOMEPAGE_BLUEPRINT.md` §19).

---

## 2. Metric/video slider data model

Conceptual shape only (no code) — each slide is a manifest entry, not a hardcoded reference, so clips and copy can be swapped without touching layout logic:

- **`id`** — stable slide identifier, independent of array position
- **`order`** — display sequence (1–5)
- **`metricRegister`** — `"numeric"` | `"qualitative"` — drives the visual split in §8/§3: numeric slides get the large-numeral treatment, qualitative slides drop it and read as a short statement
- **`metric`** — the headline value (e.g., `"US$21.2bn"`, `"Cross-Border"`)
- **`label`** — one line beneath the metric (e.g., `"Historical transaction exposure"`)
- **`supportingLine`** — homepage-tightened hedge/context sentence (§3)
- **`supportingLineFull`** — optional, fuller hedge text reserved for reuse on the Experience subpage — not rendered here
- **`media`**:
  - **`videoSrc`** — path under `public/videos/`, or `null`
  - **`posterSrc`** — path under `public/images/video-posters/`, or `null`
  - **`altText`** — describes the footage for the one context it matters (see §12 — the video itself is `aria-hidden`, but `altText` is retained on the manifest for the poster `<img>` fallback's accessible name)

**Resolution order at render time, per slide, independent of the other slides:** video → poster → navy-led fallback panel (see §5). The model doesn't assume all five slides resolve to the same tier — a slide with no poster yet still renders correctly next to a slide that has full video.

---

## 3. Exact slide content

Unchanged from `HOMEPAGE_BLUEPRINT.md` §7 (already critique-approved) — repeated here as the hero component's authoritative copy source so this document is self-contained:

| # | Metric | Label | Supporting line (homepage) | Register |
|---|---|---|---|---|
| 1 | US$21.2bn | Historical transaction exposure | "Principal and advisory transaction exposure across complex private-market situations." | Numeric |
| 2 | 40 | Selected jurisdictional exposure | "Cross-border market activity, transaction review, and aligned counterparty coverage." | Numeric |
| 3 | 7 | Advisory disciplines | "Capital formation, structuring, M&A, special situations, infrastructure, investor coverage and execution management." | Numeric |
| 4 | Cross-Border | Private capital situations | "Advisory work across jurisdictions where capital, structure and stakeholder alignment must be sequenced." | Qualitative |
| 5 | Complex Assets | Real assets, infrastructure, energy, hospitality, sports and strategic sectors | "Focused on situations where conventional capital processes often require deeper structuring before execution." | Qualitative |

Headline above the slider: **"Where Structure Precedes Capital"** (serif). Subline: **"Deimos advises on complex private-market transactions where structure, capital, and execution must be aligned before institutional capital can move."** (sans). Both per `HOMEPAGE_BLUEPRINT.md` §5–§6; not re-litigated here.

---

## 4. Which videos are suitable for which slides

**Superseded and updated by `VIDEO_ASSET_INVENTORY.md`.** Filenames below are final (renaming completed) — see that document for the full technical inventory, the rename rationale, and the extracted-thumbnail content review that was not available when this section was first written.

**Confirmed local inventory** (`public/videos/`, final filenames):

| Filename | Size | Resolution (filename) | FPS (filename) | Duration | Bitrate proxy |
|---|---|---|---|---|---|
| `hero-historic-riverfront-01.mp4` | 91.67 MiB | 3840×2160 | 30 | **40.04s (confirmed)** | ~2.29 MiB/s |
| `hero-dense-skyline-01.mp4` | 86.20 MiB | 3840×2160 | 24 | unconfirmed | — |
| `hero-coastline-city-01.mp4` | 43.67 MiB | 3840×2160 | 30 | **16.85s (confirmed)** | ~2.59 MiB/s |
| `hero-waterfront-skyline-01.mp4` | 37.83 MiB | 3840×2160 | 25 | **15.00s (confirmed)** | ~2.52 MiB/s |
| `hero-harbor-night-01.mp4` | 23.04 MiB | 3840×2160 | 25 | unconfirmed | — |
| `hero-cable-bridge-skyline-01.mp4` | 20.90 MiB | 1920×1080 | 60 | unconfirmed | — |
| `hero-twilight-skyline-01.mp4` | 15.76 MiB | 2560×1440 | 25 | **12.64s (confirmed)** | ~1.25 MiB/s |
| `hero-harbor-night-02.mp4` | 10.33 MiB | unspecified ("medium" tier naming) | — | unconfirmed | — |

Durations came from Windows APIs that populated for 4 of the 8 files and not the other 4 — treated as confirmed only where they actually returned a value, not extrapolated to the rest. All 8 confirmed H.264/AVC via a binary codec scan (`VIDEO_ASSET_INVENTORY.md` §1) — the earlier speculation in this document that the 4 undetermined-duration clips might use a different codec was wrong and is superseded.

**Content is now actually known** (`VIDEO_ASSET_INVENTORY.md` §3, via real extracted thumbnails — not guessed): a coastal cliffside city, a cable-stayed bridge over a dense skyline, a dense overcast skyscraper skyline with a spiral tower, a waterfront skyline behind a colonial-era building, two related night-harbor shots from different angles, a historic old-town riverfront with a twin-towered church, and a dusk skyline shot framed by a dark window or balcony edge.

**Two content-based flags worth carrying forward, now that scene content is known:**
- **`hero-harbor-night-01.mp4` and `hero-harbor-night-02.mp4` appear to be the same city at night from two different vantage points** (their names were deliberately numbered `-01`/`-02` for this reason). Using both in the same five-slide rotation would show near-duplicate footage — pick one, hold the other in reserve.
- **`hero-twilight-skyline-01.mp4`'s frame includes a dark window/balcony edge along part of the border** — worth a closer look before committing it to the hero rotation as-is, since it may read as a handheld interior shot rather than true drone aerial footage, which would sit oddly next to the other seven clips' clean aerial compositions. May need a crop, or may be fine once seen at full resolution rather than in a 640px thumbnail — flagged for verification, not excluded outright.

**Technical-fitness tiers (resolution + bitrate proxy + loopability):**

- **Tier A — primary candidates, true UHD masters with strong bitrate:** `hero-coastline-city-01.mp4` (2.59 MiB/s, richest per-second detail among confirmed clips), `hero-waterfront-skyline-01.mp4` (2.52 MiB/s), `hero-dense-skyline-01.mp4` (largest file, UHD, duration unconfirmed but consistent with either a long clip or strong bitrate), `hero-historic-riverfront-01.mp4` (40s — the longest clip by far, giving the most flexibility to trim a clean 6–7s window without a visible loop seam, though see its content register note below).
- **Tier B — solid secondary candidates:** `hero-harbor-night-01.mp4` (UHD but leaner file size, still usable), `hero-cable-bridge-skyline-01.mp4` (1920×1080 at 60fps — lower resolution but a high frame rate that can read as distinctly smooth, premium motion for a slow aerial pan; also the strongest technical match for an "infrastructure/transport corridor" register given its subject).
- **Tier C — reserve, needs the most scrutiny:** `hero-twilight-skyline-01.mp4` (lowest bitrate proxy among confirmed clips at 1.25 MiB/s, noticeably softer than the others, plus the window-frame concern above), `hero-harbor-night-02.mp4` (smallest file by a wide margin, and the likely-duplicate of `hero-harbor-night-01.mp4` — recommend excluding from the primary five-slide rotation and never upscaling to compensate for its lower quality).

**On using this content-register reasoning to actually assign clips to slides:** the observations above (which clip "feels" institutional vs. heritage vs. asset-heavy) come from a single ~640×438 thumbnail per clip, reviewed once, by the assistant, not confirmed by a human watching the actual footage play back. That's a real content review, not a guess — but it's not the same thing as sign-off. **§14 defines the concrete, buildable manifest, and it deliberately does not use this register-based reasoning to pick which clip goes to which slide** — it uses a plain, neutral, arbitrary ordering instead, explicitly flagged as a placeholder. The observations above remain useful context for whoever does final sign-off; they are not treated as a finished creative decision here.

---

## 5. Fallback behavior if videos/posters are missing

Three tiers, resolved independently per slide, matching `HOMEPAGE_BLUEPRINT.md` §7:

1. **Video** — plays if `media.videoSrc` resolves and the browser can decode/autoplay it, and motion is not reduced.
2. **Poster** — if the video fails to load (network error, missing file, decode failure) or motion is reduced/bandwidth is constrained, and `media.posterSrc` exists, show the poster: a real frame grab from that same clip, treated with the same navy gradient overlay as the video would have, with the metric/label text in place exactly as it would sit over video.
3. **Navy-led cinematic fallback panel** — if neither resolves (this is the current state for all eight clips today, since `public/images/video-posters/` is empty), render a designed static panel: a deep-navy-to-ink-blue gradient field (diagonal or radial, tonal per DESIGN.md, never a flat color block) with the same metric/label typography overlaid exactly as on video. This is a **deliberately designed state, not an error state** — nothing about it should look broken, missing, or unfinished.

**Never fails the build, and never fails at runtime either:** since these are static assets served from `public/`, a missing video file is just a failed `<video>` load at the browser level, not a build-time error — Next.js doesn't validate that referenced public assets exist at build time. The component's job is to **catch that failure gracefully at runtime** (an `onError`-equivalent handler on the video element triggering the tier-2/tier-3 fallback) rather than leaving a broken-video icon on screen. This should be treated as an explicit, tested code path — not an assumption that "it'll just work" — precisely because it's silent until a file goes missing or a filename typo slips in.

---

## 6. Mobile behavior

Per `HOMEPAGE_BLUEPRINT.md` §20, sharpened for the hero specifically:

- On mobile/constrained bandwidth, **prefer the navy-led fallback panel (or a poster, once generated) over attempting a lighter mobile-specific video encode.** Maintaining two video-quality tiers is real ongoing cost for a benefit (autoplay hero video on mobile data) that's marginal at best and actively resented by some users on metered connections.
- Where video does play on mobile (e.g., on Wi-Fi, user hasn't set reduced-motion), decode only the active slide's clip — others fully unloaded (`preload="none"`), never left decoding in the background.
- Metric and label text scale up relative to viewport so the headline number reads instantly without pinch-zoom; the supporting line can drop to a shorter line-length wrap but not shrink below body-text minimums.
- Progress indicator and any manual controls remain thumb-reachable and sized for touch targets (see §10) — no hover-dependent affordance anywhere in this component, since none of it exists on touch.

---

## 7. Reduced-motion behavior

`prefers-reduced-motion: reduce` **stops video entirely** — it does not substitute a "lighter" motion or a slowed transition. The slider resolves straight to tier 2 (poster) or tier 3 (fallback panel) exactly as described in §5, with the metric/label text present and fully readable, no autoplay, no cross-dissolve.

Manual navigation still works under reduced motion — a user can still click/tap the progress marks to move between slides — but the transition between static states is an instant swap or a simple opacity crossfade, not the choreographed video-and-text dissolve used in the full-motion version. This is not "no experience," it's a different, equally deliberate one: the same five slides, same copy, same navy-led register, no motion.

---

## 8. Typography treatment

Per the confirmed filter from `HOMEPAGE_BLUEPRINT.md`'s Design Language Foundations — **load-bearing, unhurried, withheld** — and the explicit bans: no Cormorant Garamond, no Inter, no DM Sans, no Space Grotesk, anywhere in this component.

- **Headline** ("Where Structure Precedes Capital"): serif, display role only (DESIGN.md's One-Serif Rule), large scale, tight but not cramped — respect the ≥ -0.04em letter-spacing floor and the ≤6rem clamp ceiling from the shared design rules; `text-wrap: balance` so the line doesn't break awkwardly at odd viewport widths.
- **Metric numeral** (e.g., "US$21.2bn", "40", "7"): serif, the largest single element in the slide, sitting directly in the video frame — not inside a card. Numeric-register slides (1–3) get this full numeral treatment; qualitative-register slides (4–5) drop the numeral scale entirely and render their metric text (e.g., "Cross-Border") as a shorter statement at a visibly smaller size than the numeric slides' numerals, so the sequence doesn't visually claim "five metrics" when only three are numbers (per the critique's required distinction).
- **Label and supporting line**: sans, disciplined, precision-forward per DESIGN.md's "Label" tier — small scale, restrained tracking, never competing with the metric for attention.
- **Subline** (below headline): sans, body-adjacent scale, capped at a readable line length even at hero width.
- **Font selection itself is still an open craft-time decision** (per `HOMEPAGE_BLUEPRINT.md`'s Open Questions) — run the three-word filter against a real catalog, reject anything that "looks designy," and document the rationale for whatever is chosen, before this component is actually built.

---

## 9. Overlay treatment

Bottom-weighted dark gradient, not a flat scrim across the whole frame — the upper two-thirds of the video should stay legible as footage; only the bottom third to bottom-40% darkens enough to carry text. Approximate target: transparent at the top of the frame, ramping to roughly 70–85% navy-black at the very bottom edge, tuned per clip (see below).

**Contrast targets:** supporting-line and label text (body/label scale) needs ≥4.5:1 against whatever sits directly behind it at that point in the gradient; the large metric numeral, being large text, needs ≥3:1 but should be designed toward the same 4.5:1 bar anyway since it's sitting over moving footage, not a flat background — moving content behind text is inherently harder to read than the static contexts WCAG's ratios were written for, so treat the stated minimums as a floor, not a target.

**Per-clip calibration is a craft-time task, not a one-size-fits-all constant:** the eight clips will have different natural brightness/contrast (sky vs. water vs. dense infrastructure), so the overlay gradient's exact stops may need slight per-slide tuning once real footage is in place, rather than assuming one gradient value works identically across all five slides.

---

## 10. Progress indicator / manual controls

Five thin marks (not dots-with-bounce), bottom-right of the hero frame, serving double duty as both a progress indicator and manual navigation:

- Current slide reads via a weight/fill change on its mark, not a color change alone (so it doesn't depend on color perception).
- Each mark is independently clickable/tappable to jump to that slide, and keyboard-reachable via Tab, activatable via Enter/Space.
- **A persistent pause/play control sits alongside the marks** — this wasn't explicit in `HOMEPAGE_BLUEPRINT.md`'s hero section and is a real gap worth closing here: WCAG 2.2.2 (Pause, Stop, Hide) requires a way to pause any auto-updating content that moves for more than five seconds. Auto-advancing every 6–7 seconds qualifies. Hover/focus-pausing alone is a reasonable supplement but shouldn't be the *only* mechanism — an explicit, small, unobtrusive pause/play affordance is required, not optional.
- Autoplay also pauses on hover or keyboard focus within the hero region, resuming when focus/hover leaves, as a supplementary courtesy on top of the explicit control above.

---

## 11. Performance rules

**The current master files are far too large to ship as-is.** At 3840×2160, the eight source clips range from 10.8 MB to 96.1 MB — several times heavier than what a hero background needs, since almost no viewer's display renders true 4K detail at typical hero-section scale, and the visual payoff doesn't justify the download cost regardless of connection speed.

- **Re-encode before shipping.** Target roughly 1080p–1440p delivery resolution (not full 4K) at a web-appropriate bitrate, H.264/AVC for broad compatibility (HEVC as a progressive enhancement only if the delivery pipeline supports negotiating it, never as the sole format). This is asset-prep work, separate from the manifest/fallback logic itself, and should happen before the hero is considered performance-complete — not deferred indefinitely.
- **Load only what's needed, when it's needed.** Slide 1's video preloads and plays immediately on page load; each subsequent slide's video lazy-loads shortly before its turn in the rotation, not all five upfront.
- **One active decode at a time.** Every other slide's video is fully unloaded (`preload="none"`), not paused-in-background — video decode is expensive, and five simultaneous decoders is not a real requirement anywhere in this design.
- **Autoplay constraints:** muted and `playsinline` are mandatory for any autoplay video across browsers — this isn't a style choice, it's the only way autoplay is permitted at all on mobile Safari and Chrome.
- **Posters, once generated, should load as standard optimized images** (e.g., via `next/image`) with the first slide's poster marked high-priority, since it's part of the initial paint whenever video hasn't started yet.

---

## 12. Accessibility rules

Builds on `PRODUCT.md`'s WCAG AA baseline, applied specifically to this component:

- The `<video>` element itself is `aria-hidden="true"` — it is purely atmospheric background. **No information is ever conveyed only through the video** — metric, label, and supporting line are always real, accessible DOM text, never baked into the footage or a canvas.
- Poster `<img>` fallbacks (tier 2) carry the manifest's `altText` as their accessible name; the tier-3 navy panel needs no alt text since it's a pure CSS/gradient background with the same real text content on top.
- Keyboard: every manual control (progress marks, pause/play) is reachable via Tab in a sensible order, operable via Enter/Space, with a visible focus state that meets the same contrast bar as body text — never relying on a browser default outline alone against a dark, video-backed surface where it may not show up reliably.
- Auto-advancing content gets the explicit pause control from §10 — this is the component's single most important accessibility requirement, not a nice-to-have.
- Contrast (§9) and reduced-motion (§7) requirements repeated here because they're accessibility requirements first and visual-design requirements second, not two separate concerns.

---

## 13. What to build first

Within this component specifically, sequenced to surface risk early and keep every intermediate state shippable on its own:

1. **Static layout + typography, tier-3 fallback panel only.** No video, no manifest, no motion — just the headline, subline, one slide's metric/label/supporting-line typography sitting on the navy-led gradient panel. This validates the type system and overlay-independent contrast entirely before any video risk enters the picture.
2. **Wire in the manifest and all five slides' static (fallback-panel) states**, with the progress marks and pause control fully functional as manual navigation between static panels. This validates the data model and the accessibility/keyboard baseline before motion exists at all.
3. **Introduce real video** using the neutral manifest in §14 — one slide at a time, each tested against the tier-1→2→3 fallback chain (deliberately break a filename to confirm the fallback actually triggers, not just assume it will).
4. **Add the choreographed cross-dissolve** (video + text together) and the auto-advance timing, gated correctly behind `prefers-reduced-motion` from the start rather than retrofitted after.
5. **Mobile and reduced-motion passes**, explicitly testing on a throttled/mobile viewport and with the OS-level reduced-motion setting on, not just assumed correct from the code.
6. **Performance pass** — confirm actual re-encoded file sizes, lazy-load behavior, and single-decode-at-a-time behavior with real network throttling, not just local fast-network testing.

Steps 1–2 are useful and demoable even before final clip sign-off (§14) — they don't block on it. Steps 3 onward do.

---

## 14. Final hero video manifest — neutral assignment, pending content sign-off

**Read this before using the table below.** Video content has been visually reviewed (§4, `VIDEO_ASSET_INVENTORY.md` §3) via a single low-resolution (~640×438) thumbnail per clip, examined once, by the assistant. **That is not the same as verified sign-off** — nobody has watched these clips play back at full resolution, confirmed the thumbnail's read of each scene holds up in motion, or resolved the `hero-twilight-skyline-01.mp4` window-frame question (§4). Given that, the clip-to-slide assignment below is **deliberately neutral, not a creative decision**: clips are assigned to slides in plain alphabetical order (excluding the one clip flagged as a likely duplicate — §4), not by matching "which clip feels most institutional" to which slide. This keeps the manifest concrete and buildable today without pretending a content judgment has been made that hasn't.

**The five approved slides' metric/label/supporting-line content is settled** (`MASTER_WEBSITE_BRIEF.md`, `HOMEPAGE_BLUEPRINT.md` §7–§8, critique-approved) — only the video-filename column below is neutral/placeholder.

| Slide ID | Order | Metric | Metric Register | Label | Supporting Line | Selected Video (neutral placeholder) | Poster Filename (placeholder — not yet generated) |
|---|---|---|---|---|---|---|---|
| `slide-1` | 1 | US$21.2bn | numeric | Historical transaction exposure | "Principal and advisory transaction exposure across complex private-market situations." | `hero-cable-bridge-skyline-01.mp4` | `hero-cable-bridge-skyline-01-poster.jpg` |
| `slide-2` | 2 | 40 | numeric | Selected jurisdictional exposure | "Cross-border market activity, transaction review, and aligned counterparty coverage." | `hero-coastline-city-01.mp4` | `hero-coastline-city-01-poster.jpg` |
| `slide-3` | 3 | 7 | numeric | Advisory disciplines | "Capital formation, structuring, M&A, special situations, infrastructure, investor coverage and execution management." | `hero-dense-skyline-01.mp4` | `hero-dense-skyline-01-poster.jpg` |
| `slide-4` | 4 | Cross-Border | qualitative | Private capital situations | "Advisory work across jurisdictions where capital, structure and stakeholder alignment must be sequenced." | `hero-harbor-night-01.mp4` | `hero-harbor-night-01-poster.jpg` |
| `slide-5` | 5 | Complex Assets | qualitative | Real assets, infrastructure, energy, hospitality, sports and strategic sectors | "Focused on situations where conventional capital processes often require deeper structuring before execution." | `hero-historic-riverfront-01.mp4` | `hero-historic-riverfront-01-poster.jpg` |

**Not in the active manifest — held in reserve, available for swap once sign-off happens:** `hero-waterfront-skyline-01.mp4`, `hero-twilight-skyline-01.mp4` (pending the window-frame check), `hero-harbor-night-02.mp4` (excluded as the likely duplicate of `hero-harbor-night-01.mp4`, per §4).

**How this table is meant to be used:** the `Selected Video` column is the one thing in this manifest that should be treated as freely swappable — change the filename, leave everything else (slide ID, order, metric, label, supporting line) untouched. That's the entire point of the data-driven manifest model in §2: swapping which clip plays on which slide should never require touching layout code.

**Shared behavior — applies identically to every slide above, not repeated per-row:**

- **Fallback behavior (§5):** video → poster (if `hero-*-poster.jpg` exists — none do yet, since `public/images/video-posters/` is still empty) → navy-led cinematic fallback panel. Every slide above currently resolves to tier 3 (the fallback panel) until posters are generated, and that's a fully designed, acceptable state, not a broken one.
- **Mobile behavior (§6):** prefer the navy-led fallback panel over a lighter mobile video encode; where video does play, decode only the active slide's clip, one at a time.
- **Reduced-motion behavior (§7):** `prefers-reduced-motion` stops video entirely for all five slides — straight to poster or fallback panel, manual navigation still available, no cross-dissolve.

**Before this manifest's video assignment can be treated as final:** someone watches the 5 (or all 8) clips at full resolution, confirms the §4 content descriptions hold up in motion, resolves the `hero-twilight-skyline-01.mp4` window-frame question, and either approves this neutral ordering or reassigns it deliberately. Nothing about the component's data model, fallback system, or build sequence (§13) depends on that happening first — only the specific filenames in the table above do.
