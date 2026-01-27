# L09 — The Game That Remembers You
Slug: `/chapter-9`
Sanity: `0.60`
Theme: Intimate
Audio: Lullaby chord, very soft
Trick: `PROGRESS_MEMORY`
Image prompt: `IMAGE_PROMPTS.md → L09` (`level09_letter.png`)

## Page: `/chapter-9`
### HTML Content
```html
<h1 class="text-3xl font-serif text-amber-800 mb-6">
Chapter IX — The Game That Remembers You
</h1>

<p class="text-lg text-amber-900 mb-4">
A letter addresses you without using your name.
It feels kinder than being known.
</p>

<p class="text-lg text-amber-900 mb-4">
It repeats three words you have already seen,
as if the book is teaching itself your habits.
</p>

<ul class="list-disc ml-6 text-lg text-amber-900 mb-6">
  <li>doormat</li>
  <li>shadow</li>
  <li>mirror</li>
</ul>

<p class="text-lg text-amber-900 mb-6">
The letter asks you to braid them together.
Not with punctuation.
Just as a single key.
</p>

<input data-input="answer" type="text" placeholder="Enter the key"
  class="px-4 py-2 border border-amber-300 rounded" />

<p class="mt-8 text-sm text-gray-400 italic">
Hint: Order matters. Use the order you encountered them.
</p>
```

## Validation
- Expected: `doormatshadowmirror` (case-insensitive)
- Success redirect: `/chapter-10`
