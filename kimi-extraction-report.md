# Kimi Transcript — Strategic Extraction Report

**Source:** `kimi-chat-transcript.txt` (full chat log of the Deimos Group website build on Kimi, including two build iterations, one refused meta-prompt, and one failed self-audit)
**Controlling authority:** `PRODUCT.md`, `DESIGN.md` — where anything in the Kimi transcript conflicts with these two files, the files win. This report treats Kimi's output as raw material to mine, not as a decision that was already made.

**Framing note before the extraction:** this transcript is not a finished asset. It is a build log. The only place genuine, fully-formed copy exists is the user's original mega-prompt (transcript lines ~1–1119) and the two post-build summaries Kimi wrote for itself. Kimi never produced the self-critique the user asked for twice — once refused outright ("I'm sorry, but I can't comply with that"), once it attempted the audit, hit save/output errors, and the session ended with "Kimi didn't complete your task. Agent credits have been refunded." **There is no prior "Kimi verdict" to weigh against — this report is the first real analysis of this material.**

---

## 1. Hard user inputs

Facts, constraints, assets, and literal copy that came from the user, not from Kimi:

- **Reference calibration set (tone only, not to be copied):** Rothschild & Co, PJT Partners, Lazard, Post Oak Group, Houlihan Lokey.
- **Core positioning statement** (verbatim, user-authored): Deimos works across capital access, private capital formation, transaction structuring, M&A/JV advisory, special situations, recapitalizations, restructuring, real assets, infrastructure, energy, natural resources, hospitality, sports, media, lifestyle assets, sovereign-linked development, public-private/concession opportunities, cross-border private capital situations.
- **Explicit negative positioning list:** not a broker, finder, passive introducer, listing platform, venture studio, fund, accelerator, AI company, real estate agency, generic consultancy, or investor-matching platform. This is the single most load-bearing instruction in the whole transcript and matches `PRODUCT.md`.
- **Suggested headline options** (4 variants) and **hero subline** — real drafted copy, usable as raw material.
- **Assets provided:** 8 drone aerial videos (city skyline/financial district, port, coastline, infrastructure corridor, etc.) — real, provided visual assets, high value.
- **Navigation proposal:** Firm / Advisory / Services / Situations / Sectors / Jurisdictions / Experience / Insights / Contact (9 items).
- **Full service taxonomy A–J** with exhaustive sub-lists — genuine user-authored content, later self-flagged by the same user as too "laundry-list" (see §4/§9).
- **Seven Disciplines list**, **Selected Situations list**, **Sector Coverage list** — user-authored, reusable as structural inputs.
- **Full jurisdiction list by region** (Europe, Asia-Pacific, Middle East/Central Asia, Africa, North America, Latin America/Caribbean, International Structuring/Offshore) — hard input, unverified (see §10).
- **Explicit metric set:** US$21.2bn historical transaction exposure, 40 jurisdictions, 7 disciplines, "Cross-Border," "Complex Assets" — user-specified for the hero slider.
- **Explicit hedging instruction** for the $21.2bn figure: must not imply Deimos closed/advised/managed as a regulated bank; approved phrasings given: "historical transaction exposure," "associated transaction volume," "principal / affiliated advisory exposure."
- **CTA language rules:** preferred list (Explore Advisory Capabilities, Discuss a Transaction, Contact Deimos, View Jurisdictional Exposure, Review Services, Submit an Enquiry) vs. banned genericisms (Get Started, Join Us, Let's Build Together, Unlock Opportunity, Start Your Journey, Scale With Us).
- **Three disclaimers, drafted in full** by the user: general legal disclaimer, jurisdictional disclaimer, capital access disclaimer. These are ready-to-use.
- **Contact details:** `intake@deimos-group.com`; 6 inquiry categories.
- **Explicit "content discipline" instruction** with a bad-example vs. good-example pair (transcript lines ~520–546) — this is the clearest, most reusable style rule in the entire document (see §3).
- **Visual don't-list:** bulky boxes, endless cards, SaaS KPI blocks, gradient backgrounds, neon, crypto aesthetics, AI-visual clichés, fake logos, excessive scroll/parallax, cartoonish maps, generic stock photography, exaggerated claims.
- **Copy don't-list:** "unlocking potential," "transformative solutions," "seamless innovation," "empowering growth," "game-changing," "next-generation platform," "visionary impact," "redefining the future," etc.
- **Post-v1 user feedback (verbatim, critical):** *"Everything is cramped into the homepage instead of separate sites, 01 in the sliders doesn't have a video. The entire pages feel empty with just a lot of written text rather than outlining crucial. We are also defining Deimos too much as strictly structuring and not a normal investment bank too."*
  - The first two-thirds of this feedback (multi-page, fix broken slide, more visual density) are clean, usable direction.
  - **The last sentence is a live tension, not a settled fact.** It pushes toward "normal investment bank" framing, which sits in direct friction with the user's own earlier credibility rules ("do not overstate Deimos as a large bank," "do not claim regulatory permissions") and with `PRODUCT.md`, which defines Deimos as a *"boutique advisory firm"* — never as a bank. This report treats `PRODUCT.md` as the tie-breaker (see §6, §13).
- **Two later prompts attempting to get Kimi to run this exact extraction task on itself** (near-identical headings to the ones in this report) were entered into the transcript, and Kimi refused both — once flatly, once after starting and failing. Nothing usable came out of either attempt; there is no Kimi self-assessment to inherit.

---

## 2. Kimi-generated assumptions

Things Kimi invented, inferred, or overstated without clear user support, classified by usability:

| Assumption | Classification | Why |
|---|---|---|
| Cormorant Garamond (display) + Inter (body) | **Safe to use as a direction** | Structurally matches DESIGN.md's serif-display/sans-body rule; specific faces are still open per DESIGN.md ("to be chosen at implementation") — treat as a candidate, not a decision. |
| Color values: Deep Navy `#0A1628`, Off-White `#F5F3EF`, muted gold accent `#B8945A`, steel grey | **Discard the gold; navy/off-white direction is safe to revisit** | DESIGN.md's "No-Gold Rule" is explicit and absolute. The user's original Kimi prompt did float "possibly a muted gold, bronze or silver accent," but DESIGN.md supersedes that — gold is out regardless of what the Kimi prompt said. |
| Video-to-jurisdiction slide assignment (Zurich, Panama City, Singapore, Monaco, Hong Kong) | **Use with revision** | Reasonable creative pairing of supplied footage to metrics, but Monaco in particular risks reading as luxury-coastal/tax-haven imagery, which cuts against DESIGN.md's anti-luxury-concierge stance. Re-pick footage on institutional/infrastructure register, not resort-coastline register. |
| 10 AI-generated "sector" images (container port, oil rig, luxury hotel, stadium, farm, data center, government palace, etc.) | **Discard** | This directly violates the user's own explicit instruction ("avoid generic business stock photos," "AI-generated visual clichés") and DESIGN.md's imagery register. Kimi's fallback to AI stock photography once the real drone footage ran out is exactly the failure mode both governing docs warn against. |
| "Independent Private Investment Banking" hero label / "An Independent Investment Bank for Complex Private-Market Transactions" | **Risky — verify/rewrite before use** | Kimi's overcorrection to the user's "not a normal investment bank" feedback. `PRODUCT.md` calls Deimos a "boutique advisory firm," never an investment bank. Declaring bank status risks implying regulated status Deimos does not hold. See §6. |
| Icon-based "4 capability cards" on the v2 homepage | **Discard** | Reads as a SaaS feature-grid; DESIGN.md explicitly forbids "uniform icon-grid feature sections" and playful icons. |
| "What Deimos Is / Is Not" list (exact wording) | **Use with revision** | The contrastive structure (is/is not) is a good device for pre-empting broker/bank/fund confusion; the specific wording Kimi produced isn't visible in the transcript beyond the section label, so it needs to be drafted fresh against `PRODUCT.md`. |
| Repeated build/deploy failures (ffmpeg errors, broken HashRouter routing, corrupted video copies, timed-out page loads, empty Sectors page) | **Discard as engineering signal** | Not strategic content, but a signal that the underlying Kimi codebase was never in a verified-working state at hand-off — reason enough on its own not to inherit code, only ideas. |

---

## 3. Strong strategic ideas

Worth preserving, subject to DESIGN.md/PRODUCT.md filtering:

1. **Coordinated metric+video hero slider** — one metric, one label, one supporting line, one video, per slide, with a slow crossfade. This is a direct, well-formed match for DESIGN.md's "motion as evidence of scale" principle and PRODUCT.md's "metric-led hero." Keep the mechanism; drop the specific videos/images that violate imagery rules.
2. **Two-altitude service structure**: a small, elegant "Seven Disciplines" framework (strategic altitude) sitting apart from a deeper, only-as-needed "Services / Capabilities" inventory (practical altitude), accessed via tabs/accordion rather than repeated in prose. This solves the laundry-list problem structurally rather than through copy editing alone.
3. **The user's own "content discipline" instruction** (bad-example vs. good-example, transcript ~520–546) is the strongest single piece of guidance in the transcript and should become a standing house rule: one clear point per section, supported by one short explanation; depth lives in interaction (tabs/accordions), never in a comma-separated list in body copy.
4. **Jurisdiction map framed explicitly as exposure, not offices** — "Selected Jurisdictional Exposure," with region filters and a disclaimer directly beneath the map. This is exactly the treatment PRODUCT.md/DESIGN.md need to avoid implying regulated presence.
5. **A standalone Confidentiality / Mandate-Orientation section** — a dedicated section whose entire job is to pre-empt the "so you're a broker?" read. Directly serves the "not positioning as broker" requirement; keep as a distinct section, not folded into "Firm."
6. **Three drafted disclaimers** (general legal, jurisdictional, capital access) — ready to use close to verbatim; this is the load-bearing legal safety net for the whole site.
7. **CTA hierarchy with an explicit avoid-list** — gives a clear, enforceable vocabulary rather than "sound institutional" as a vague aspiration.
8. **Advisory Approach as a plain six-step horizontal sequence** — process-forward, no cards, matches "process-driven" positioning.
9. **Multi-page architecture over single long-scroll** — the user's own post-v1 feedback confirms the single-page version felt simultaneously cramped and thin. A homepage that distills the narrative, backed by dedicated subpages for Advisory, Sectors, Jurisdictions, Experience/Transactions, Firm, Insights, Contact, is the better-tested direction from this transcript, not the original one-pager.

---

## 4. Weak strategic ideas

Anything that would pull Deimos toward a register PRODUCT.md/DESIGN.md explicitly reject:

- **"Investment bank" self-identification** (post-feedback overcorrection) — risks implying regulated banking status. Weak/risky as currently phrased; needs reframing as *register*, not *identity* (see §6, §13).
- **AI-generated generic sector stock photography** — weak, contradicts the user's own explicit anti-cliché instruction and DESIGN.md's cinematic-but-real imagery register.
- **Icon-grid capability cards** — weak, reads as SaaS.
- **Muted gold/bronze/silver accent** — weak, forbidden outright by DESIGN.md regardless of the original Kimi prompt floating it.
- **Cramming all ~15 sections onto one homepage scroll** — weak; already falsified by the user's own v1 feedback (felt cramped and empty at the same time — a sign the content per section was too thin to justify homepage real estate, and needed dedicated pages instead).
- **Flat, exhaustive multi-column list dumps** (16 counterparties, long inquiry-category walls) — risks recreating the laundry-list problem the user explicitly flagged elsewhere; needs grouped, editorial treatment, not enumeration for enumeration's sake.
- **Insights section with placeholder categories but no real content** — acceptable only if it's deliberately restrained (a short "forthcoming" framing); should not be dressed up to look like an active publication with 6 populated categories when nothing exists yet — that itself is a small form of overclaiming.

---

## 5. Strong copy fragments

Best candidates, labeled and rewritten:

| Fragment | Label | Rewrite |
|---|---|---|
| "Where Structure Precedes Capital" | **Use as-is** | — (strong headline, matches Mandate Room register) |
| "Independent Advisory for Complex Private-Market Transactions" | **Use as-is** | — |
| "Private Investment Banking for Complex Capital Situations" | **Discard** | Replace with: "Independent Advisory for Complex Capital Situations" (removes bank-identity risk) |
| "Structured Advisory for Transactions Requiring Capital, Discipline and Execution" | **Rewrite** | "Advisory for Transactions Where Capital, Discipline and Execution Must Align" |
| Hero subline ("Deimos Group advises owners, sponsors, investors, operators and public-sector stakeholders...") | **Rewrite (trim)** | "Deimos advises on complex private-market transactions where structure, capital and execution must be aligned before institutional capital can move." |
| "Deimos Group advises on complex private-market transactions where value exists, but the transaction is not yet institutional." | **Use as-is** | — (core thesis sentence) |
| "...where standard introductions are insufficient and where disciplined transaction architecture is required before capital can move." | **Use as-is** | — |
| "Deimos prepares complex private-market situations for serious capital review by aligning structure, stakeholders, documentation and execution path." | **Use as-is** | — (exemplar of the concise house style) |
| "Where required, Deimos supports defined workstreams across capital formation, transaction structuring, diligence and execution management." | **Use as-is** | — |
| "Deimos engages on a selective, mandate-oriented basis. The firm prioritizes situations where transaction complexity, capital requirements, stakeholder alignment or cross-border execution require structured advisory work rather than passive introduction." | **Use as-is** | — (directly defeats the broker read) |
| "Deimos selectively welcomes dialogue with qualified counterparties, local representatives and operating partners in jurisdictions not presently covered." | **Use as-is** | — |
| Jurisdictional disclaimer (full text) | **Use as-is** | — |
| Capital access disclaimer (full text) | **Use as-is** | — |
| General legal disclaimer (full text) | **Use as-is** | — |
| "For confidential transaction, capital formation or strategic advisory enquiries, contact Deimos Group." | **Use as-is** | — |
| CTA set (Explore Advisory Capabilities / Discuss a Transaction / Contact Deimos / View Jurisdictional Exposure / Review Services / Submit an Enquiry) | **Use as-is** | — |
| Slide supporting line: "Principal, affiliated advisory and transaction exposure across complex private-market situations." | **Use with revision** | Good hedging model — reuse the *pattern* (principal / affiliated / advisory exposure) wherever the $21.2bn figure appears. |
| "An Independent Investment Bank for Complex Private-Market Transactions" | **Discard** | "An Independent Advisory Platform for Complex Private-Market Transactions" |
| "What Deimos Is / Is Not" (structure only, not the wording) | **Rewrite** | Draft fresh against PRODUCT.md's negative list; keep the contrastive device. |

---

## 6. Risky copy fragments

Phrasing in the transcript that creates legal/positioning exposure, with corrected wording:

1. **"An Independent Investment Bank for Complex Private-Market Transactions" / hero label "Independent Private Investment Banking"**
   Risk: implies regulated investment-banking status/licensure Deimos does not hold; contradicts PRODUCT.md's own "boutique advisory firm" framing.
   Rewrite: *"An independent advisory platform operating in the register of private investment banking — structuring, capital formation and execution support for complex private-market transactions."* (register/tone claim, not an identity/licensing claim)

2. **"US$21.2bn historical transaction exposure" used without its hedge**
   Risk: reads as "we closed $21.2bn of deals."
   Rewrite (always paired): *"US$21.2bn historical transaction exposure — principal, affiliated advisory and transaction-related activity across complex private-market situations."*

3. **Gold/bronze/silver accent color**
   Risk: not a legal risk, but a positioning risk — collides with DESIGN.md's absolute "No-Gold Rule" and reads as luxury-concierge rather than institutional.
   Correction: navy/ink/slate/off-white/steel-blue/cobalt only, per DESIGN.md.

4. **"40 jurisdictions" / interactive map presented without the disclaimer directly adjacent**
   Risk: implied office presence or regulated operations in 40 countries.
   Correction: disclaimer must appear directly beneath the map itself, not only in the footer: *"...do not imply physical office presence or regulated operations in each market."*

5. **AI-generated "government palace / sovereign-linked" and "executive boardroom, leather chairs, gold tones" imagery**
   Risk: doubly wrong — generic AI-cliché imagery (explicitly banned) *and* gold/luxury visual register (explicitly banned).
   Correction: discard; use real aerial/infrastructure footage only, or restrained abstract/editorial treatments with no interior "prestige bank" staging.

6. **Capital access language without the disclaimer nearby**
   Risk: any standalone sentence like "Deimos provides access to capital" reads as a financing guarantee.
   Correction: always pair with — *"References to capital access or capital formation refer to advisory, structuring, positioning and counterparty engagement support, and do not constitute a guarantee of financing or investment."*

7. **Offshore/International Structuring jurisdictions (Cayman Islands, Saint Vincent and the Grenadines) given visual emphasis on the map**
   Risk: over-emphasizing offshore jurisdictions on a public map invites an unwanted "tax haven" or AML-adjacent read.
   Correction: list factually within the existing regional grouping; do not visually highlight or headline these over the other regions.

---

## 7. Design signal

**Retain (consistent with DESIGN.md):**
- Navy-led palette as the dominant surface/ink color — the transcript's instinct toward navy/off-white/charcoal/steel is directionally right; only the gold accent must be dropped.
- Serif-display + sans-body typographic split (specific faces still open at implementation, per DESIGN.md).
- Full-bleed video hero with dark overlay for legibility, slow crossfade transitions, restrained motion timing, reduced-motion fallback, static-image fallback for low-bandwidth/mobile.
- Tabbed / accordion / hover-index treatment for Services, Disciplines, Situations, Sectors — matches DESIGN.md's anti-card-grid stance directly.
- Dark-toned, restrained interactive map with hover states and region filters, not oversized pins.
- Choreographed motion reserved for moments that communicate scale/jurisdiction/complexity — everything else stays functional and restrained, per DESIGN.md.

**Reject:**
- Muted gold/bronze/silver accent color (No-Gold Rule).
- AI-generated generic "cinematic stock photo" sector imagery.
- Icon-grid capability cards.
- Monaco-style resort/coastline footage as a stand-in for "complex assets" — reads luxury-coastal rather than institutional-infrastructure.
- Card-lift/shadow-based depth if it appears anywhere in the Kimi CSS (DESIGN.md mandates tonal-surface depth instead) — not confirmed present, but flag for review if inheriting any Kimi CSS.
- Any dashboard-style metrics strip presented as flat SaaS KPI tiles rather than the choreographed slider concept.

---

## 8. Site architecture signal

**Kimi v1 (single-page, 15 sections):** Hero → Firm/Positioning → Advisory Capabilities (Services A–J) → Seven Disciplines → Selected Situations → Sector Coverage → Jurisdictional Exposure → Experience → Advisory Approach → Who Deimos Serves → Why Deimos → Mandate-Oriented Engagement → Insights → Contact → Footer.
User's own verdict on this: felt cramped and empty simultaneously. **Reject as final architecture.**

**Kimi v2 (multi-page):** Home (hero + 4 capability cards + metrics strip + 4-sector preview + contact CTA), Firm, Advisory (services + disciplines), Transactions (Experience + Approach + Situations + counterparties), Sectors, Jurisdictions, Insights, Contact.
Better-tested direction (built in direct response to the user's own feedback), but inherits the gold/AI-imagery/icon-card problems in execution.

**Recommended final structure:**
- **Keep:** Home, Firm, Advisory, Sectors, Jurisdictions, Experience (rename "Transactions" back to something less transaction-count-y — "Experience" reads better against PRODUCT.md's register), Insights, Contact.
- **Merge:** fold "Situations" into Advisory as a secondary tab/index rather than a standalone nav item — it's a lens on the same service content, not a separate audience path. Fold "Who Deimos Serves" and "Why Deimos" into the Firm page as two short sections rather than top-nav items.
- **Remove:** a 9-item top nav (the user's original proposal) is too wide for an institutional register; Rothschild/Lazard/HL all run 5–7 top items. Collapse to: **Firm · Advisory · Sectors · Jurisdictions · Insights · Contact** (6 items), with Experience/Transactions folded as a section within Firm or Advisory rather than a 7th nav item — decide based on how much real (non-invented) experience content exists once verified.
- **Add:** the Confidentiality/Mandate-Orientation section (currently buried mid-page in v1) deserves to live prominently on the Firm page, immediately after positioning copy — it's doing the most important credibility work on the site.
- **Homepage-only:** hero slider, one compressed positioning statement, a distilled 3–4 pillar service preview (text-led, not icon cards), one jurisdiction-map teaser, one clear contact CTA. Homepage should feel like a distilled table of contents, not a container for all 15 sections' worth of copy.
- **Subpages:** full Services/Seven Disciplines detail, full Sectors index, full Jurisdictions map + disclaimer, full Experience/metrics detail, Insights, Contact form with inquiry segmentation.

---

## 9. Services/capabilities cleanup

Kimi's A–J taxonomy (10 pillars, each with 7–14 sub-bullets) is real content but is exactly the laundry-list problem the user flagged. Compress to:

**Public-facing pillars (5–7):**
1. Capital Access & Private Capital Formation
2. Strategic Advisory & Transaction Structuring
3. M&A, Joint Ventures & Strategic Partnerships
4. Special Situations, Restructuring & Recapitalization
5. Infrastructure, Real Assets & Project Finance
6. Sovereign-Linked & Public-Private Opportunities
7. Investor Readiness, Diligence & Execution Management *(merges Kimi's G, H, I, J — bankability review, process management, and strategic/industrial-partner processes are all facets of the same "get this transaction executable" workstream and don't warrant four separate public pillars)*

**Deeper capability inventory (internal/expandable only):** the full sub-bullet lists from Kimi's A–J sit here, exposed only through an accordion/tab expansion within each pillar — never as a paragraph. This is precisely the "show depth without clutter" mechanism the user already asked for.

**Depth-without-clutter recommendation:** each pillar gets one sentence of definition + one line of "typical situations" on the surface; the full activity list appears only on click/tap, inside a tab or accordion panel, exactly matching the user's own bad-example/good-example instruction in transcript ~520–546.

---

## 10. Jurisdiction and map cleanup

All jurisdictions named in the transcript, unverified user assertions — no evidence of actual activity was provided anywhere in this transcript, so **all of the below should be treated as requiring verification before publication**, not as confirmed fact:

- **Europe:** Greece, Estonia, Lithuania, France, Spain, Portugal, United Kingdom, Switzerland
- **Asia-Pacific:** Cambodia, China, Philippines, Indonesia, India, Hong Kong SAR, Singapore, Australia
- **Middle East / Central Asia:** Saudi Arabia, UAE, Qatar, Kazakhstan, Uzbekistan
- **Africa:** Uganda, Kenya, Namibia, Ghana, DRC, Malawi, Morocco, South Africa, Rwanda
- **North America:** United States, Canada, Mexico
- **Latin America / Caribbean:** Nicaragua, Panama, Chile, Dominican Republic, Antigua and Barbuda
- **International Structuring / Offshore:** Cayman Islands, Saint Vincent and the Grenadines

**Recommended split:**
- **Confirmed priority jurisdictions:** none can be confirmed from this transcript alone — this list came entirely from the user's brief to Kimi with no supporting evidence attached. Before build, get an internal-only confirmed list from the client.
- **Broader exposure jurisdictions:** the full list above, pending confirmation, may be shown collectively as "Selected Jurisdictional Exposure" once verified.
- **Requiring extra care:** the Offshore/International Structuring group (Cayman, St. Vincent) — factually list them if confirmed, but do not visually emphasize them; pair with the disclaimer immediately, not just in the footer.

**Map language (ready to use, matches PRODUCT.md's non-broker/non-office stance):**
- Headline: "Selected Jurisdictional Exposure"
- Subtext: "Deimos operates across a selective set of cross-border markets where the firm is evaluating, structuring, advising on, or advancing transaction situations through direct activity or aligned counterparty coverage."
- Disclaimer (place directly under the map, not only in footer): "Selected jurisdictions reflect current or recent market exposure, transaction review, advisory activity, partner coverage or structuring relevance, and do not imply physical office presence or regulated operations in each market."

---

## 11. Metrics cleanup

| Metric | Exact wording used | Credibility risk | Safer wording | Where it should appear |
|---|---|---|---|---|
| US$21.2bn | "Historical transaction exposure" | High if unhedged — implies closed deals as a regulated bank | "US$21.2bn historical transaction exposure — principal, affiliated advisory and transaction-related activity" | Hero slide, with disclaimer link nearby; repeat hedge in Experience section |
| 40 | "Selected jurisdictional exposure" / "jurisdictions" | Medium — implies office/regulated footprint if map isn't disclaimed | "Selected jurisdictional exposure across ~40 markets" | Hero slide + Jurisdictions section, always paired with the map disclaimer |
| 7 | "Advisory disciplines" | Low — describes the firm's own framework, not a claim about deals | Fine as-is | Hero slide or Advisory section |
| "Cross-Border" | "Private capital situations" | Low, but structurally odd — it's a category label dressed as a metric in a "metric-led hero" | Keep as a qualitative statement, but style it visually distinct from the numeric slides so it doesn't dilute the credibility of the real numbers | Hero slide, styled as text-only, not numeric |
| "Complex Assets" | "Real assets, infrastructure, energy, hospitality, sports and strategic sectors" | Low, same issue as above | Same treatment — qualitative, not numeric | Hero slide, styled as text-only |

**Recommendation:** either source two more genuine quantitative metrics to fill out a fully-numeric slider, or restyle the hero slider so numeric slides (21.2bn, 40, 7) and qualitative slides (Cross-Border, Complex Assets) are visually differentiated — mixing them as if all five are "metrics" slightly undercuts the "metric-led hero" credibility PRODUCT.md is going for.

---

## 12. Kimi output quality verdict

**Verdict: use as source material only. Do not use as foundation.**

Reasoning:
- The user's original mega-prompt to Kimi (transcript lines ~1–1119) is genuinely strong raw material — jurisdiction lists, service taxonomy, disclaimer language, CTA vocabulary, and above all the "content discipline" instruction are all reusable near-verbatim.
- Everything Kimi itself produced on top of that brief — the gold accent, the AI-generated stock photography, the icon-card capability grid, the "independent investment bank" self-identification — either directly violates DESIGN.md/PRODUCT.md or reintroduces the exact failure modes the user's own brief warned against. None of it should be inherited as-is.
- The underlying codebase was never in a stable, verified state at hand-off: repeated ffmpeg/build/deploy failures, broken HashRouter navigation, a Sectors page that failed to load, and video slides that silently had no video. There is no working reference implementation to build from — only ideas to filter.
- Kimi was asked twice, by the user, to audit its own output against these same PRODUCT.md/DESIGN.md-style constraints, and produced nothing usable both times (one flat refusal, one failed run). There is no prior "Kimi verdict" this report needs to reconcile with — this is the first real analysis.

**Three biggest risks if Kimi is followed too closely:**
1. **Visual drift toward luxury-concierge / SaaS registers** via the gold accent, AI stock photography, and icon-grid cards — each individually forbidden by DESIGN.md, and together they would visibly contradict the "Mandate Room" creative north star.
2. **Positioning drift toward "investment bank" self-identification**, which risks implying regulated banking status Deimos does not hold — a direct contradiction of PRODUCT.md's own "boutique advisory firm" framing and of the user's own credibility rules stated earlier in the same brief.
3. **Unhedged or under-hedged quantitative claims** ($21.2bn, 40 jurisdictions, offshore jurisdictions) — the correct hedge language exists in the transcript, but nothing guarantees it travels with the number every time it's reused; each instance needs the disclaimer built in at the component level, not left to editorial discipline.

---

## 13. Final corrected build brief

**Positioning:** Deimos Group is an independent, boutique advisory platform for complex private-market transactions — capital formation, transaction structuring, M&A/JV advisory, special situations, and execution support across real assets, infrastructure, energy, sports, hospitality, and PPP/concession situations. It operates in the *register* of private investment banking (tone, rigor, seriousness) without claiming to *be* a regulated investment bank, broker, fund, or listing platform.

**Audience:** sophisticated, credential-literate institutional counterparties — fund principals, deal sponsors, family offices, institutional investors — judging institutional seriousness within seconds and arriving skeptical of generic advisory marketing.

**Homepage narrative:** one distilled arc — what Deimos is (advisory platform, not broker) → what it's built for (value that exists but isn't yet institutional) → how it works (structure before capital, mandate-oriented, confidential) → proof of scale (hedged metrics + jurisdiction teaser) → one clear path to contact. No laundry lists, no icon grids, no more than one CTA family per section.

**Core sections (site-wide):** Home (distilled), Firm (positioning + Confidentiality/Mandate-Orientation + Who We Serve + Why Deimos, consolidated), Advisory (Seven Disciplines as the elegant frame + Services as the expandable deep inventory + Situations folded in as a tab), Sectors, Jurisdictions (map + disclaimer), Experience (hedged metrics + exposure themes + Advisory Approach), Insights (restrained placeholder), Contact (segmented inquiry categories).

**Design direction:** navy-led (30–60% surface weight per DESIGN.md), off-white/slate/steel-blue/cobalt only — **no gold, bronze, or silver, regardless of what any earlier brief suggested.** Serif display + disciplined sans body, one-serif rule. Real drone/aerial imagery only — no AI-generated generic stock photography, no icon grids, no card-lift shadows.

**Motion direction:** choreographed motion reserved for scale/jurisdiction/complexity moments (hero slider, map reveals); everywhere else, restrained fades and reveals only. Reduced-motion alternative everywhere. No bounce, no scroll-jacking, no particle/gaming-style transitions.

**Map direction:** dark/neutral-toned interactive map, subtle country highlighting, region filters, hover states — never pins, never styled as offices. Headline "Selected Jurisdictional Exposure," disclaimer placed directly beneath the map itself. Treat the full jurisdiction list as unverified until confirmed by the client; do not visually emphasize offshore/International Structuring jurisdictions.

**Service architecture:** 5–7 public pillars (Capital Access & Formation; Strategic Advisory & Transaction Structuring; M&A, JV & Strategic Partnerships; Special Situations & Restructuring; Infrastructure, Real Assets & Project Finance; Sovereign-Linked & Public-Private Opportunities; Investor Readiness, Diligence & Execution Management), each with one definition sentence + one situations line on the surface, full activity detail behind a tab/accordion only.

**CTA language:** Explore Advisory Capabilities · Discuss a Transaction · Contact Deimos · View Jurisdictional Exposure · Review Services · Submit an Enquiry. Never "Get Started," "Join Us," "Unlock," "Scale With Us," or similar.

**Legal/credibility constraints:**
- Every use of the $21.2bn figure must carry its hedge ("principal, affiliated advisory and transaction-related activity") in the same breath, not just in a footnote.
- Every appearance of the jurisdiction map or count must sit next to (not just link to) the no-office/no-regulated-operations disclaimer.
- Every mention of "capital access" must be paired with the no-guarantee-of-financing disclaimer.
- No invented client names, logos, tombstones, awards, rankings, licenses, offices, or personnel.
- No "investment bank" self-identification as an identity claim — register/tone language only.

**What not to build:**
- No gold/bronze/silver accents.
- No AI-generated generic stock photography standing in for real assets/sectors.
- No icon-grid capability cards.
- No single long-scroll homepage carrying all site content.
- No exhaustive service/counterparty lists rendered as flat prose or uncapped multi-column dumps.
- No metrics presented without their hedge language attached at the component level.
- No claim to be a regulated bank, fund manager, or licensed operator in any jurisdiction.
