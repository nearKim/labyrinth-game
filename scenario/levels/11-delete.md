# L11 — What Remains After Softness
Slug: `/chapter-11`
Sanity: `0.50`
Theme: Warm → sharper
Audio: Lullaby loses one note
Trick: `DELETE_LETTERS`
Image prompt: `IMAGE_PROMPTS.md → L11` (`level11_sentence.png`)

## Page: `/chapter-11`
### HTML Content
```html
<h1 class="text-3xl font-serif text-amber-800 mb-6">
Chapter XI — What Remains After Softness
</h1>

<p class="text-lg text-amber-900 mb-4">
The page offers you a sentence like a cup of tea:
warm, fragrant, almost too gentle.
</p>

<p class="text-lg text-amber-900 mb-6">
Then it asks you to remove what softens it.
</p>

<div class="p-4 bg-amber-50 rounded border border-amber-200 text-lg text-amber-900 mb-4">
REMOVE VOWELS FROM: BLUEBIRDOPENSALATCH
</div>

<input data-input="answer" type="text" placeholder="Type the result"
  class="px-4 py-2 border border-amber-300 rounded" />

<p class="mt-8 text-sm text-gray-400 italic">
Hint: Remove A, E, I, O, U.
</p>
```

## Validation
- Remove vowels from `BLUEBIRDOPENSALATCH` → `BLBRDNPSLTCH`
- Expected: `BLBRDNPSLTCH`
- Success redirect: `/chapter-12`
