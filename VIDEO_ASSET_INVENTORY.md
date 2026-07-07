# Deimos Group — Video Asset Inventory & Rename Plan

**Status:** Renaming approved and completed. All 8 files in `public/videos/` now use the clean filenames from §6. `public/images/video-posters/` remains untouched and empty (§5/§7 posters are still proposed-only, not generated). This document, `HERO_COMPONENT_BLUEPRINT.md`, and `HOMEPAGE_BLUEPRINT.md` have all been updated to reference the final filenames — no code referenced the old filenames at the time of renaming, so no code changes were needed.

---

## Method note — what was actually inspected, and how

Previous planning documents (`HERO_COMPONENT_BLUEPRINT.md`) stated plainly that this session had no ffmpeg, no Python video libraries, and no frame-extraction tool, and that video *content* was therefore unconfirmed. That's been partially superseded — new inspection was attempted for this task and part of it worked:

- **ffmpeg, ffprobe, mediainfo, vlc:** still not present anywhere on this system (`where` returns nothing for all four).
- **Windows Shell extended file properties:** as before, populated **duration** for 4 of 8 files but not resolution/fps.
- **Windows `Windows.Media.Editing.MediaClip` (WinRT):** re-attempted and got a cleaner duration read for the same 4 files (see §1) — the other 4 fail decode through this API for reasons unrelated to codec (see codec note below), so their duration is still genuinely undetermined.
- **Windows `StorageFile.GetThumbnailAsync` (WinRT):** **this worked for all 8 files** — a real ~640×438 frame grab per clip, not a generic icon. Each was viewed directly. This means **video content is now genuinely inspected for all 8 clips**, not guessed — see §3.
- **Binary fourcc scan** (`grep` for known codec tags inside the raw file bytes): worked for all 8 — see §1's codec column.

Nothing here used an external tool, an external stock library, or invented data. Where something couldn't be determined, it's marked **undetermined**, not filled in with a plausible-sounding guess.

---

## 1. Full technical inventory

| Final filename (current) | Original filename | Size (bytes) | Size (MiB) | Resolution (filename) | FPS (filename) | Duration | Codec (video) | Bitrate proxy |
|---|---|---|---|---|---|---|---|---|
| `hero-historic-riverfront-01.mp4` | `3717997-uhd_3840_2160_30fps (1).mp4` | 96,119,129 | 91.67 | 3840×2160 | 30 | **40.04s** (confirmed) | H.264/AVC (`avc1`) | ~2.29 MiB/s |
| `hero-dense-skyline-01.mp4` | `14370404_3840_2160_24fps.mp4` | 90,390,576 | 86.20 | 3840×2160 | 24 | undetermined | H.264/AVC (`avc1`) | — |
| `hero-coastline-city-01.mp4` | `11957604-uhd_3840_2160_30fps.mp4` | 45,787,051 | 43.67 | 3840×2160 | 30 | **16.85s** (confirmed) | H.264/AVC (`avc1`) | ~2.59 MiB/s |
| `hero-waterfront-skyline-01.mp4` | `14372139-uhd_3840_2160_25fps.mp4` | 39,666,346 | 37.83 | 3840×2160 | 25 | **15.00s** (confirmed) | H.264/AVC (`avc1`) | ~2.52 MiB/s |
| `hero-harbor-night-01.mp4` | `16016734_3840_2160_25fps.mp4` | 24,163,425 | 23.04 | 3840×2160 | 25 | undetermined | H.264/AVC (`avc1`) | — |
| `hero-cable-bridge-skyline-01.mp4` | `13279033_1920_1080_60fps.mp4` | 21,919,602 | 20.90 | 1920×1080 | 60 | undetermined | H.264/AVC (`avc1`); an additional `hev1` (HEVC) tag was also found in this file's bytes — **needs verification**, may be a secondary stream, not necessarily the primary video track | — |
| `hero-twilight-skyline-01.mp4` | `8397996-uhd_2560_1440_25fps.mp4` | 16,530,636 | 15.76 | 2560×1440 | 25 | **12.64s** (confirmed) | H.264/AVC (`avc1`) | ~1.25 MiB/s |
| `hero-harbor-night-02.mp4` | `267743_medium.mp4` | 10,836,448 | 10.33 | unspecified in filename | unspecified | undetermined | H.264/AVC (`avc1`) | — |

Byte sizes verified identical post-rename — a straight filesystem rename, no re-encode, no data loss.

**Correction to an earlier document:** `HERO_COMPONENT_BLUEPRINT.md`'s §4 table listed slightly different MB figures (decimal-MB rounding) and speculated that the 4 undetermined-duration files might use a different, less-supported codec. The binary scan above shows **all 8 files use H.264/AVC** — the duration-extraction failures are not a codec mismatch; the real cause is unconfirmed (possibly a missing/atypical moov atom placement, variable frame rate, or another WinRT-API-specific limitation). That earlier speculation should be treated as superseded by this document.

---

## 2. Filenames that were unsafe or awkward for public asset paths

**Resolved by the rename in §6 — kept below as the historical record of why.**

- **`3717997-uhd_3840_2160_30fps (1).mp4`** — contains a literal space and parentheses. This is the one genuinely **unsafe** filename in the set: spaces and parens require URL-encoding, break naive shell/build scripting, and are exactly the kind of filename that silently fails in a data-driven manifest if someone forgets to encode it. Highest-priority rename.
- **All 8 filenames are raw stock-site numeric IDs** (`11957604`, `13279033`, `14370404`, `14372139`, `16016734`, `267743`, `3717997`, `8397996`) with no inherent meaning — not unsafe, but awkward: nobody can tell what a slide shows from its filename, and the manifest becomes the only source of truth for what's in each file.
- **Inconsistent separator style** within the set: some use a hyphen after the ID then underscores (`11957604-uhd_3840_2160_30fps`), others use underscores throughout with no `-uhd` infix (`13279033_1920_1080_60fps`). Neither is wrong on its own, but the set isn't internally consistent, and neither style is the clean, hyphenated, all-lowercase convention a public asset path should use.
- **`267743_medium.mp4`** is the outlier — a vague quality-tier label ("medium") instead of resolution/fps data, inconsistent with the other 7 files' naming pattern, and (per §1) the smallest file in the set.
- **Uppercase inconsistency:** checked and **not actually present** — all 8 filenames are already fully lowercase. Noting this so it isn't assumed to be a problem it isn't.

---

## 3. Content actually observed (from extracted thumbnails)

Objective description of what's visible in each frame grab — no location claims in this section's headline descriptions, per the instruction not to invent city/location labels. Keyed by final filename (original filename shown alongside for traceability):

| Final filename | Original filename | What's visible |
|---|---|---|
| `hero-coastline-city-01.mp4` | `11957604-uhd_3840_2160_30fps.mp4` | Aerial view of a dense, high-rise city built up a steep coastal hillside, with one large, ornate stone building standing alone on a cliff edge directly above the water in the foreground. |
| `hero-cable-bridge-skyline-01.mp4` | `13279033_1920_1080_60fps.mp4` | Aerial view of a large cable-stayed bridge with a distinctive twin-pylon, fan/harp-shaped cable arrangement, set against a dense mid-rise/high-rise city skyline, highway, and green parkland. |
| `hero-dense-skyline-01.mp4` | `14370404_3840_2160_24fps.mp4` | Dense, tightly packed skyscraper skyline under overcast sky, including one distinctive spiral/twisted-profile tower and legible signage reading "PANDORA" on a building facade. |
| `hero-waterfront-skyline-01.mp4` | `14372139-uhd_3840_2160_25fps.mp4` | Waterfront skyline of modern glass towers behind a lower colonial-era domed/columned building directly on the water, with a bridge crossing a river or bay and green space nearby. |
| `hero-harbor-night-01.mp4` | `16016734_3840_2160_25fps.mp4` | Night aerial view over a dense harbor-front high-rise skyline, water in the middle distance, hills in the background, and rows of illuminated residential towers in the foreground. |
| `hero-harbor-night-02.mp4` | `267743_medium.mp4` | Night aerial view centered on one very tall illuminated skyscraper with a distinctive lit crown, above a dense waterfront highway system with visible light-trails, harbor development in the foreground. |
| `hero-historic-riverfront-01.mp4` | `3717997-uhd_3840_2160_30fps (1).mp4` | Aerial view of a European-feeling historic old town on a river, centered on a stone church with twin towers directly on the waterfront, adjacent to a small boat marina. |
| `hero-twilight-skyline-01.mp4` | `8397996-uhd_2560_1440_25fps.mp4` | Dusk/twilight skyline shot framed by a dark window or balcony edge, showing a distant skyline including one very tall, distinctively spired tower, flat terrain, highways with light trails, and a domed structure in the near foreground. |

**Supplementary visual observations — unverified, not used in any filename or public copy, for your confirmation only:** several of these frames contain landmark architecture distinctive enough to suggest (not confirm) a specific city: the cliffside building in clip 1 strongly resembles Monaco's harborside district; the bridge in clip 2 strongly resembles a well-known cable-stayed bridge design used in São Paulo; the spiral tower and signage in clip 3 are consistent with Panama City; the colonial waterfront building in clip 4 is consistent with Singapore's Marina Bay area; clips 5 and 6 both appear to be the **same harbor city at night** (possibly Hong Kong, based on the density and tower profile) shot from two different vantage points — meaning if slide variety matters, using both in the same five-slide rotation would show the same skyline twice; clip 7's twin-towered riverside church is consistent with a Swiss or Central European old town (plausibly Zurich); clip 8's spired tower silhouette is consistent with Dubai. **None of this is confirmed** — it's pattern-matching against recognizable architecture in a still frame, not geodata, EXIF, or source documentation. Treat it as a lead for a two-minute human confirmation, not as fact, and feel free to disregard it entirely if you'd rather this document carry zero location speculation.

---

## 4. Clean filenames — applied

Since content was actually inspected (§3), these are **descriptive**, not the neutral `hero-clip-01.mp4` fallback — but descriptive by *content type*, not by the unverified city hypotheses in §3, per the instruction against inventing location labels in the deliverable itself. **These are now the live filenames in `public/videos/`, not a proposal:**

- `hero-coastline-city-01.mp4`
- `hero-cable-bridge-skyline-01.mp4`
- `hero-dense-skyline-01.mp4`
- `hero-waterfront-skyline-01.mp4`
- `hero-harbor-night-01.mp4`
- `hero-harbor-night-02.mp4`
- `hero-historic-riverfront-01.mp4`
- `hero-twilight-skyline-01.mp4`

The `-01` / `-02` suffixes on the two harbor-night clips are deliberate — flagging in the name itself that these two are visually related (§3), so nobody picks both for the five-slide rotation without realizing they'd be showing near-duplicate footage.

---

## 5. Poster directory check

`public/images/video-posters/` exists and is still empty — confirmed directly, unchanged since it was first scaffolded. No posters have been generated yet for any clip.

---

## 6. Rename mapping table — executed

| Original filename | Final filename | Reason | Confidence | Status |
|---|---|---|---|---|
| `3717997-uhd_3840_2160_30fps (1).mp4` | `hero-historic-riverfront-01.mp4` | Removes the unsafe space+parentheses; content-type name matches the observed historic riverside/church scene (§3) | High | ✅ Renamed |
| `14370404_3840_2160_24fps.mp4` | `hero-dense-skyline-01.mp4` | Removes non-descriptive numeric ID; matches the dense-tower skyline observed | High | ✅ Renamed |
| `11957604-uhd_3840_2160_30fps.mp4` | `hero-coastline-city-01.mp4` | Removes numeric ID and inconsistent separator style; matches the cliffside coastal city observed | High | ✅ Renamed |
| `14372139-uhd_3840_2160_25fps.mp4` | `hero-waterfront-skyline-01.mp4` | Removes numeric ID; matches the waterfront/colonial-building scene observed | High | ✅ Renamed |
| `16016734_3840_2160_25fps.mp4` | `hero-harbor-night-01.mp4` | Removes numeric ID; matches the wide night harbor view observed | High | ✅ Renamed |
| `13279033_1920_1080_60fps.mp4` | `hero-cable-bridge-skyline-01.mp4` | Removes numeric ID; matches the distinctive cable-stayed bridge observed | High | ✅ Renamed |
| `8397996-uhd_2560_1440_25fps.mp4` | `hero-twilight-skyline-01.mp4` | Removes numeric ID; matches the dusk/twilight framed skyline observed | High | ✅ Renamed |
| `267743_medium.mp4` | `hero-harbor-night-02.mp4` | Removes vague "_medium" label and non-descriptive ID; matches the second, related night-harbor scene observed (§3) — numbered `-02` to flag its visual similarity to `hero-harbor-night-01.mp4` | High | ✅ Renamed |

All 8 renames were verified before execution (source existed, target name was free) and after (byte size unchanged, no old filenames remain, file count still 8 — nothing deleted, nothing overwritten).

"Confidence" above reflects confidence in the **proposed name accurately describing the observed content and being a safe, clean filename** — not confidence in any city/location hypothesis (§3 has its own, separately hedged confidence framing).

---

## 7. Proposed matching poster filenames

Following the video's proposed slug, under `public/images/video-posters/`:

| Video (proposed) | Poster filename (proposed) |
|---|---|
| `hero-historic-riverfront-01.mp4` | `hero-historic-riverfront-01-poster.jpg` |
| `hero-dense-skyline-01.mp4` | `hero-dense-skyline-01-poster.jpg` |
| `hero-coastline-city-01.mp4` | `hero-coastline-city-01-poster.jpg` |
| `hero-waterfront-skyline-01.mp4` | `hero-waterfront-skyline-01-poster.jpg` |
| `hero-harbor-night-01.mp4` | `hero-harbor-night-01-poster.jpg` |
| `hero-cable-bridge-skyline-01.mp4` | `hero-cable-bridge-skyline-01-poster.jpg` |
| `hero-twilight-skyline-01.mp4` | `hero-twilight-skyline-01-poster.jpg` |
| `hero-harbor-night-02.mp4` | `hero-harbor-night-02-poster.jpg` |

These are proposed paths only — no poster images exist yet (§5), and generating them (real frame grabs, treated with the navy gradient overlay per `HERO_COMPONENT_BLUEPRINT.md` §9) is separate follow-up work, not part of this renaming task.

---

## 8. Constraints confirmed honored

- **Renaming was verified, approved, and executed** — source files were confirmed to exist and target names were confirmed free of conflicts immediately before renaming; final state was re-verified immediately after (§1, §6).
- **Only files under `public/videos/` were touched.** `public/images/video-posters/` was re-checked and remains untouched and empty.
- **No file was deleted.** File count before and after is identical (8), and every rename was a straight filesystem move, not a copy-and-delete.
- **No existing file was overwritten** — each target filename was confirmed free before its rename executed.
- **File extensions were preserved** — all 8 remain `.mp4`.
- **No external stock video used or considered anywhere in this process** — every clip inspected and renamed is one of the 8 local files already in `public/videos/`.
- **No city/location label was invented into any filename** — §4/§6/§7 use content-type descriptors only; §3's landmark hypotheses are kept separate, clearly hedged, and explicitly optional to disregard.
- **Nothing here is presented as fact beyond what was actually verified** — duration, codec, and content descriptions are labeled per how they were obtained, and marked "undetermined" wherever a method didn't produce a result, rather than backfilled with a plausible guess.

---

## Completed follow-up

`HERO_COMPONENT_BLUEPRINT.md` §4 and `HOMEPAGE_BLUEPRINT.md` §7/§21 have been updated to reference the final filenames above. No source code referenced the old filenames at the time of this rename (confirmed via a project-wide search before renaming), so no code changes were required. The homepage itself has still not been built.

## Recommended next step

Posters (§5/§7) are still proposed-only — `public/images/video-posters/` is empty. Generating real frame-grab posters for these 8 clips (or at minimum the ones selected for the five-slide hero rotation) is the next asset-prep task before the hero component can move past its tier-3 fallback-panel state for slides that should show real footage.
