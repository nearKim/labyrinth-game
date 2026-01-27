# L12 — Where Numbers Point
Slug: `/chapter-12`
Sanity: `0.45`
Theme: Cozy shock
Audio: One clean bell, then silence
Trick: `BASE_TO_COORDINATES`
Image prompt: `IMAGE_PROMPTS.md → L12` (`level12_map.png`)

## Page: `/chapter-12`
### HTML Content
```html
<h1 class="text-3xl font-serif text-amber-800 mb-6">
Chapter XII — Where Numbers Point
</h1>

<p class="text-lg text-amber-900 mb-4">
The labyrinth offers you a number as if it were a lullaby:
</p>

<h2 class="text-4xl font-serif text-center text-amber-800 mb-6">
42
</h2>

<p class="text-lg text-amber-900 mb-4">
But you are not asked what it means.
You are asked what it becomes.
</p>

<p class="text-lg text-amber-900 mb-6">
Convert it to <strong>binary</strong>.
Then split the result into two parts:
the first half is X, the second half is Y.
</p>

<p class="text-sm text-gray-400 italic mb-6">
Hint: 42 in binary is 6 digits.
So X is first 3 digits, Y is last 3 digits.
</p>

<img src="/assets/parchment_grid_map.png" class="rounded shadow-md" alt="Grid map" />

<input data-input="answer" type="text" placeholder="Enter X,Y (e.g., 5,2)"
  class="px-4 py-2 border border-amber-300 rounded mt-4" />

<p class="mt-8 text-sm text-gray-400 italic">
Hint: If you enter the correct coordinates, the map will 'accept' them.
</p>
```

## Validation
- 42 → binary: `101010`
- X=101 (=5), Y=010 (=2)
- Expected: `5,2` (allow whitespace)
- Success redirect: `/epilogue` (recommended)

## Epilogue (suggested)
Keep it warm and short:
> "Thank you. The labyrinth was never hiding from you. It was hiding for you."
