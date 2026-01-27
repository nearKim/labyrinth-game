# L07 — The Door That Acts Innocent
Slug: `/chapter-7`
Sanity: `0.70`
Theme: Warm, but directed
Audio: Soft wind closer
Trick: `HOTSPOT_CLICK`
Image prompt: `IMAGE_PROMPTS.md → L07` (`level07_door.png`)

## Page: `/chapter-7`
### HTML Content
```html
<h1 class="text-3xl font-serif text-amber-800 mb-6">
Chapter VII — The Door That Acts Innocent
</h1>

<p class="text-lg text-amber-900 mb-6">
A door appears.
It does not announce itself.
It simply waits, like a well-trained thought.
</p>

<p class="text-lg text-amber-900 mb-6">
Carvings cover the wood—leaves, moons, waves.
One carving seems warmer than the others,
as if it remembers your hand.
</p>

<div class="relative inline-block">
  <img src="/assets/carved_door.png" class="rounded shadow-md" alt="Carved door" />
  <button aria-label="warm carving"
    class="absolute left-[62%] top-[54%] w-[10%] h-[12%] opacity-0"
    onclick="location.href='/chapter-8'">
  </button>
</div>

<p class="mt-8 text-sm text-gray-400 italic">
Hint: Click what feels warmer.
</p>
```

## Mechanics
- Only the hotspot navigates to `/chapter-8`.
