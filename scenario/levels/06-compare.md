# L06 — The Comparison Game
Slug: `/chapter-6/LATCH`
Sanity: `0.75`
Theme: Familiarity cracks
Audio: Page-turn with faint double
Trick: `COMPARE_DIFFERENCES`
Image prompt: `IMAGE_PROMPTS.md → L06` (`level06_postcards.png`)

## Page: `/chapter-6/LATCH`
### HTML Content
```html
<h1 class="text-3xl font-serif text-amber-800 mb-6">
Chapter VI — Spot the Kindest Difference
</h1>

<p class="text-lg text-amber-900 mb-4">
Two postcards rest on the table.
They depict the same room, the same light, the same quiet.
</p>

<p class="text-lg text-amber-900 mb-6">
But one of them is missing something.
And the missing thing is the entire point.
</p>

<div class="grid grid-cols-2 gap-4">
  <img src="/assets/postcard_A.png" class="rounded shadow-md" alt="Postcard A" />
  <img src="/assets/postcard_B.png" class="rounded shadow-md" alt="Postcard B" />
</div>

<p class="mt-8 text-sm text-gray-400 italic">
Hint: Name what disappeared.
</p>

<input data-input="answer" type="text" placeholder="What is missing?"
  class="mt-3 px-4 py-2 border border-amber-300 rounded" />
```

## Validation
- Expected token: `STAR` (case-insensitive)
- Success redirect: `/chapter-7`

## Note
Ensure exactly one obvious difference (e.g., star sticker missing).
