# SCENARIO.md — The Gentle Labyrinth

## Read these first
- Style: ./STYLE_GUIDE.md
- Trick types (mechanics contract): ./TRICKS.md
- Image prompts (single place): ./IMAGE_PROMPTS.md

## Level index (0–12)
| Lvl | Slug | Title | Sanity | Trick ID(s) | Level Doc |
|---:|------|-------|:------:|-------------|----------|
| 0 | / | The Rules That Smile | 1.00 | STARTPAGE_URL_EXAMPLE | ./levels/00-intro.md |
| 1 | /chapter-1 | The Doormat | 1.00 | CLICK_TEXT_NAV, INPUT_EXACT | ./levels/01-doormat.md |
| 2 | /chapter-2 | The Hidden Warmth | 0.95 | BG_COLOR_HIDDEN_TEXT | ./levels/02-hallway.md |
| 3 | /chapter-3 | The Polite Tab | 0.90 | TITLE_OR_SOURCE_CLUE | ./levels/03-clock.md |
| 4 | /chapter-4 | The Filename of the Bird | 0.85 | ASSET_FILENAME | ./levels/04-bird.md |
| 5 | /chapter-5 | The Mirror Courtesy | 0.80 | IMAGE_MIRROR_FLIP | ./levels/05-mirror.md |
| 6 | /chapter-6/LATCH | The Comparison Game | 0.75 | COMPARE_DIFFERENCES | ./levels/06-compare.md |
| 7 | /chapter-7 | The Door That Acts Innocent | 0.70 | HOTSPOT_CLICK | ./levels/07-hotspot.md |
| 8 | /chapter-8 | The Smallest Sentence | 0.65 | TINY_TEXT | ./levels/08-tiny.md |
| 9 | /chapter-9 | The Game That Remembers You | 0.60 | PROGRESS_MEMORY | ./levels/09-memory.md |
| 10 | /chapter-10 | The Spine Where Words Stand Up | 0.55 | ACROSTIC_VERTICAL | ./levels/10-acrostic.md |
| 11 | /chapter-11 | What Remains After Softness | 0.50 | DELETE_LETTERS | ./levels/11-delete.md |
| 12 | /chapter-12 | Where Numbers Point | 0.45 | BASE_TO_COORDINATES | ./levels/12-coords.md |

## Global invariants
- Second person POV.
- Warm fairytale surface; uncanny structure beneath.
- Images contain no readable text.
- Clues are fair and discoverable via ordinary browser behaviors.

## Asset plan
Recommended filenames are listed in IMAGE_PROMPTS.md. Put them under:
- `/public/assets/` (Next.js)
  or equivalent static assets directory.

## Conversion target
This repo’s next step is to convert each level doc into a single TypeScript array:
- `src/data/levels.ts`
  Each entry should include:
- slug, sanity, theme, audio
- imagePromptRef (e.g., "IMAGE_PROMPTS.md#L03")
- asset filenames used by the HTML
- contentHtml
- solution object (type + validation + nextSlug)
