# STYLE_GUIDE.md — The Gentle Labyrinth

## Narrative tone
- Second-person POV (“you”) throughout.
- Cozy storybook surface with a faint, structural wrongness underneath.
- No explicit horror, gore, or jump-scare language.
- Warm language persists even when the world becomes unsettling.
- The labyrinth never mocks the player. It is courteous, almost tender.

## Puzzle fairness (non-negotiable)
- Every puzzle is solvable using only what the page provides + normal browser behavior.
- Clues must be discoverable without external cultural knowledge.
- Hints are integrated as literary lines (in-tone), not “Press X to…”.
- If a puzzle involves browser features (title, view source, highlighting), the page must *suggest* where to look without naming the feature bluntly (unless Level 0).

## Visual Style Lock (append to every image prompt)
storybook illustration, warm cream paper texture, soft watercolor + colored pencil,
subtle film grain, muted amber/brown palette, gentle vignette,
cozy fairytale atmosphere with a faint uncanny undertone,
shallow depth of field, no modern objects, no text, no watermark, 4:3 aspect ratio

## Audio direction (optional)
- Start: gentle acoustic guitar + birds.
- As sanity decreases: add subtle metronome / detune / room tone.
- Avoid horror stingers. Use small “wrongness” (timing drift, missing note).

## Technical style notes (for implementation)
- All story content is shipped as raw HTML strings in data files.
- Prefer stable selectors:
    - clickable tokens: `data-click="..."` or a known CSS class
    - inputs: `data-input="answer"`
    - hotspot buttons: `data-hotspot="id"`
- Use localStorage for progress memory:
    - visited slugs
    - encountered motif tokens (doormat/shadow/mirror)
- Keep images textless. Any letters/symbols should be in UI text, except mirror puzzles (where the mirrored word is a *symbolic artifact*, not a label).
