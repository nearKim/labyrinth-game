# L01 — The Doormat
Slug: `/chapter-1`
Sanity: `1.00`
Theme: Warm / Safe
Audio: Guitar + birds (1.0x)
Trick: `CLICK_TEXT_NAV`, `INPUT_EXACT` (subpage)
Image prompt: `IMAGE_PROMPTS.md → L01` (`level01_porch.png`)

## Page: `/chapter-1`
### HTML Content
```html
<h1 class="text-4xl font-serif text-amber-800 mb-6">Chapter I — You and the Ordinary Things</h1>

<p class="text-lg text-amber-900 leading-relaxed mb-4">
You step outside into a morning so kind it feels rehearsed.
The air smells like paper and pine needles.
</p>

<p class="text-lg text-amber-900 leading-relaxed mb-4">
A mailbox waits by your door, the way a promise waits:
quietly, without proof.
</p>

<p class="text-lg text-amber-900 leading-relaxed mb-6">
But the mailbox is locked.
It doesn't fight you.
It simply refuses.
</p>

<p class="text-lg text-amber-900 leading-relaxed mb-6">
Your gaze falls on something you have ignored a thousand times—
the
<strong class="underline cursor-pointer text-amber-700 hover:text-amber-900" data-click="doormat">
doormat
</strong>.
</p>

<p class="mt-10 text-sm text-gray-400 italic">
Hint: Look beneath what feels too familiar to matter.
</p>
```

## Mechanics
- Clicking token `data-click="doormat"` navigates to `/chapter-1/doormat`.

---

## Subpage: `/chapter-1/doormat`
### HTML Content
```html
<p class="text-lg text-amber-900 mb-4">
You lift the doormat. Dust rises like a relieved sigh.
</p>

<p class="text-lg text-amber-900 mb-6">
A key lies there. Stamped into it:
</p>

<h2 class="text-3xl font-serif tracking-widest text-center text-amber-800 mb-8">OPEN</h2>

<input data-input="answer" type="text" placeholder="Enter the word"
  class="mx-auto block px-4 py-2 border border-amber-300 rounded" />

<p class="mt-3 text-sm text-gray-400 italic">Hint: Keys are literal here.</p>
```

## Validation
- Input accepts: `OPEN` (case-insensitive, trim)
- On success redirect: `/chapter-2`
- Failure message (in-tone): "The key doesn't turn. Perhaps the word matters."
