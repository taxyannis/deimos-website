# Fable Content Tone & Positioning Audit — Deimos Group

Final content tone and positioning pass. Goal: read as elite private-market /
strategic transaction advisory — never SaaS, startup, generic consultancy,
broker, capital-introduction / investor-matching platform, or AI-generated
landing page. No redesign, no new sections/pages, no route/nav/footer/
Legal-Privacy-meaning/contact/coverage-data changes. Homepage headline
preserved exactly: *"Reducing Capital Risk Through Structure, Process, and
Execution."*

**Overall:** the copy is already strong and institutional. A term scan found
**none** of the usual AI/consulting tells — no *leverage, seamless, robust,
holistic, synergy, end-to-end, world-class, bespoke solutions, unlock, empower,
turnkey*. The capital-risk narrative is precise ("reduce capital risk to a
level serious counterparties can underwrite"), the anti-positioning is
explicit, hedges travel with claims, and Contact is properly selective
("Deimos reviews a limited number of private-market situations"). The genuine
issues are narrow: same-page repetition of the narrative triad, two long
laundry-lists, and one mildly consulting-flavored label. Most heavy copy is
client-sourced verbatim and/or shared identically across surfaces by design, so
only the clearly-safe edits were applied; list/positioning changes that touch
client-approved audience or positioning data are proposed but **deferred for
sign-off**.

---

## Applied edits (concise, safe)

### 1. Homepage advisory preview — removed a third same-page triad repetition
**Where.** `ADVISORY_INTRO` (`content/homepage.ts`), rendered as the Advisory
preview heading.
**Issue (criteria 3, 5, 6).** The exact phrase *"structure, process discipline
and execution control"* appeared three times on the homepage in adjacent
sections (Positioning lead, this preview, Mandate Discipline). The third
restatement added repetition without adding meaning.
**Edit.**
- *Before:* "The firm works across non-standard transactions, strategic assets
  and cross-border opportunities where transaction structure, process
  discipline and execution control determine whether capital can be engaged
  credibly."
- *After:* "The firm works across non-standard transactions, strategic assets
  and cross-border opportunities — situations where the quality of
  preparation, not access to capital, determines whether capital can be engaged
  credibly."
**Why it's safe & better.** Homepage-only (not one of the shared-verbatim
statements), no new claim (preparation is already the described role), removes
the redundant triad, and sharpens the anti-broker / anti-capital-introduction
posture ("not access to capital") the pass explicitly wants.

### 2. Advisory metadata — removed a capability laundry-list
**Where.** `DESCRIPTION` in `app/advisory/page.tsx` (meta/share text only).
**Issue (criterion 4).** The description ended in a five-item menu — "capital
formation, transaction architecture, special situations, infrastructure and
execution control" — reading like a services list.
**Edit.**
- *Before:* "How Deimos reduces capital risk in non-standard private-market
  transactions — capital formation, transaction architecture, special
  situations, infrastructure and execution control."
- *After:* "How Deimos reduces capital risk in non-standard private-market
  transactions that conventional capital processes do not resolve on their
  own."
**Why it's safe & better.** Metadata only (no visible page copy, no legal
meaning); replaces a menu with a single commercially sharp clause; distinct
from the other pages' descriptions.

---

## Deferred (proposed, but touch client-sourced / shared-verbatim copy — need sign-off)

These are real positioning improvements, but they edit client-approved audience
data, shared-verbatim statements, or named labels, so they are proposed rather
than applied unilaterally.

### D1. "Who Deimos Serves" is a 16-item laundry-list (criterion 4, positioning)
`WHO_DEIMOS_SERVES.counterparties` (`content/firm.ts`) lists sixteen client
types. A list that long reads like a wide-net broker and undercuts the
"selective" posture. **Proposed:** consolidate overlaps and drop the
retail/startup-flavored entries **without removing any real audience** — e.g.
merge "Developers / Real asset developers / Infrastructure sponsors," fold
"HNWIs / Private investors / Capital partners," and drop "Entrepreneurs" — to
roughly nine crisp categories. Requires client confirmation that no intended
audience is lost.

### D2. "Deimos is explicitly not…" is an 11-item negation (criteria 2, 7)
`WHAT_DEIMOS_IS.notPositioning` denies eleven categories, several from startup
vocabulary ("venture studio, accelerator, AI company, real estate agency").
Elite firms state what they are and disclaim only the confusions that matter.
**Proposed:** keep the transaction-relevant negations (broker, finder, passive
introducer, listing platform, fund, generic consultancy, investor-matching
platform) and drop the startup-ecosystem ones. Deferred because the client
deliberately included some of these (e.g. "AI company").

### D3. "Defined Advisory Workstreams" label (criterion 5)
Appears in `CONFIDENTIALITY_PRINCIPLES` (homepage) and
`FIRM_CONFIDENTIALITY.principles` (firm). "Workstreams" is the one mildly
consulting-flavored term, and it sits oddly among posture labels
(Confidentiality, Selective Engagement, Mandate Discipline). **Proposed:**
rename to "Defined Advisory Mandates" in both files (keeps them in sync,
reinforces mandate orientation). Deferred as it's a client-approved label.

### D4. Narrative-triad repetition across shared statements (criteria 3, 5)
"structure, process discipline and execution control" recurs across the
self-identification and Mandate Discipline statements that are intentionally
identical on homepage / Firm / Advisory / Contact. Reducing it means editing
shared-verbatim client language on multiple surfaces at once — a deliberate
client-sign-off decision, not a safe unilateral edit.

### D5. "complex" vs "non-standard" (criterion 5, minor)
Both describe the same difficulty and sometimes sit in adjacent sentences
(e.g. `WHAT_DEIMOS_IS`). Minor; could standardize on one. Low priority.

---

## Positioning checks (pass)

- **Not SaaS / startup / consultancy / broker / capital-intro / investor-match
  / AI-generated:** PASS — no buzzwords; explicit anti-positioning present;
  narrative is specific and transaction-grade.
- **Capital-risk narrative precise & commercially sharp (criterion 6):** PASS,
  sharpened further by edit 1.
- **Contact selective & mandate-oriented (criterion 8):** PASS — "reviews a
  limited number," "engages selectively, through defined advisory mandates,"
  categorized mailto only.
- **Coverage implies no offices / local teams / regulated ops / active mandates
  (criterion 9):** PASS — coverage copy and disclaimers explicitly negate
  physical presence and regulated operations; classification labels are
  exposure-only. No change made.

## Preserved (unchanged)

- Homepage headline verbatim: *"Reducing Capital Risk Through Structure,
  Process, and Execution."*
- Legal / Privacy wording and conservative meaning — untouched.
- No guarantee of financing; no regulated investment-banking claim; no fake
  proof, logos, offices, teams, tombstones, or client names.
- Routes, nav, footer, contact behavior, coverage data, classifications, hero
  videos, and map implementation — untouched.
