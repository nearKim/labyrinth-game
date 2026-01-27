# TRICKS.md — Canonical Trick Types (AI-Implementable)

Each trick is defined with:
- ID (stable string)
- Player action
- Implementation notes
- Failure UX (in-tone)

---

## STARTPAGE_URL_EXAMPLE
**Player action:** Edit URL to the “example” token shown as “just an example”.  
**Implementation:** Include a literal route token (e.g., `chapter-1`) in tutorial prose. No button.  
**Failure UX:** None needed; player is not blocked by inputs.

---

## CLICK_TEXT_NAV
**Player action:** Click an underlined/bold word to navigate.  
**Implementation:** Wrap a single word with a clickable span/button; keep it visually fair.  
**Failure UX:** Hover affordance (underline/glow).

---

## INPUT_EXACT
**Player action:** Type the correct answer into an input; submit/enter triggers navigation.  
**Implementation:** Case-insensitive match by default; trim whitespace.  
**Failure UX:** Gentle message (“The key doesn’t turn.”), no “wrong!” tone.

---

## BG_COLOR_HIDDEN_TEXT
**Player action:** Highlight/select page text to reveal hidden line(s).  
**Implementation:** Render clue with CSS `color` equal to background. Selection highlight reveals.  
**Failure UX:** Add a literary hint about “same color as paper”.

---

## TITLE_OR_SOURCE_CLUE
**Player action:** Check browser title (tab text) and/or view-source for clue.  
**Implementation:** Set `document.title` to contain next slug; optionally add HTML comment.  
**Failure UX:** Hint about “where names live”.

---

## ASSET_FILENAME
**Player action:** Infer clue from attached asset filename by opening in new tab / copying URL.  
**Implementation:** Serve asset with meaningful filename containing token/next.  
**Failure UX:** Hint about “names you give a thing”.

---

## IMAGE_MIRROR_FLIP
**Player action:** Flip image horizontally to read clue, then navigate.  
**Implementation:** Image contains mirrored letters. Optionally provide in-game flip toggle.  
**Failure UX:** Hint about “turn the world around gently”.

---

## COMPARE_DIFFERENCES
**Player action:** Compare two near-identical images/pages; find what changed; type token.  
**Implementation:** Two assets differ by one object; input validates the object name.  
**Failure UX:** If wrong, suggest “look for what disappeared”.

---

## HOTSPOT_CLICK
**Player action:** Click a specific region in an image (invisible hotspot).  
**Implementation:** Overlay invisible button with absolute positioning.  
**Failure UX:** Cursor changes on correct region (optional); otherwise hint “click what feels warmer”.

---

## TINY_TEXT
**Player action:** Zoom / inspect to read extremely small text clue.  
**Implementation:** clue with `font-size: 2px` or similar; keep selectable.  
**Failure UX:** Hint “the margin / zoom”.

---

## PROGRESS_MEMORY
**Player action:** Recall earlier motif tokens and combine them in correct order.  
**Implementation:** Track visited motifs; validate concatenation.  
**Failure UX:** Hint “order matters”.

---

## ACROSTIC_VERTICAL
**Player action:** Read first letters vertically to get answer; type it.  
**Implementation:** Use `<strong>` initials at start of lines.  
**Failure UX:** Hint “read the spine”.

---

## DELETE_LETTERS
**Player action:** Remove specified letters (e.g., vowels) from a given string and type result.  
**Implementation:** Provide explicit rule.  
**Failure UX:** Hint “remove A E I O U”.

---

## BASE_TO_COORDINATES
**Player action:** Convert number to base, split bits into coordinates, then input/click.  
**Implementation:** Provide deterministic split rule and coordinate domain (0–7).  
**Failure UX:** Hint about digits count and splitting.
