# SCENARIO.md — Level Content

## Instructions for AI

1. Convert this data into a TypeScript array (`src/data/levels.ts`).
2. Use the **Image Prompt** to generate assets (or placeholders).
3. The `content` field contains raw HTML to display.

---

## Level 1: The Morning

- **Slug:** `/chapter-1`
- **Theme:** Warm (Sanity 1.0)
- **Audio Speed:** 1.0x (Cheerful Acoustic Guitar)
- **Visual Style:** Cream background, serif font, storybook aesthetic

### HTML Content

---
<h1 class="text-3xl font-serif text-amber-800 mb-4">Chapter 1: The Bear</h1>
<p class="text-lg text-amber-900">Once upon a time, in a forest made of whispers, lived a gentle Bear.</p>
<p class="text-lg text-amber-900">Every morning, he checked his mailbox for a letter from the Blue Bird.</p>
<p class="text-lg text-amber-900 mt-4">But the mailbox was locked. The key was hidden under the <strong>doormat</strong>.</p>
<p class="mt-8 text-sm text-gray-400 italic">Hint: What is the key?</p>
---

### Image Prompt

> A cute watercolor illustration of a brown bear standing in front of a cozy treehouse. A welcome mat says “WELCOME”. Golden sunlight.

### Puzzle Logic

- **Type:** Input
- **Answer:** `doormat`
- **Next Level:** `/chapter-2`

---

## Level 2: The Sky

- **Slug:** `/chapter-2`
- **Theme:** Warm (Sanity 1.0)
- **Audio Speed:** 1.0x

### HTML Content

---
<p class="text-lg text-amber-900">The Bear opened the box. It was empty.</p>
<p class="text-lg text-amber-900">"Blue Bird?" he called out.</p>
<p class="text-lg text-amber-900 mt-4">He looked up. The sky was empty, but the clouds formed a number.</p>
<p class="text-sm mt-4 font-bold text-amber-800">How many clouds are in the sky?</p>
---

### Image Prompt

> A bright blue sky with fluffy white clouds. The clouds subtly form the number “SEVEN”. Watercolor style.

### Puzzle Logic

- **Type:** Input
- **Answer:** `seven` or `7`
- **Next Level:** `/chapter-3`

---

## Level 3: The Torn Page (The Tutorial)

- **Slug:** `/chapter-3`
- **Theme:** Warm (Sanity 0.95)
- **Audio Speed:** 1.0x

### HTML Content

---
<p class="text-lg text-amber-900">The Bear wanted to turn the page.</p>
<p class="text-lg text-amber-900">But this page is torn. The "Next" button is missing.</p>
<div class="mt-8 p-4 bg-amber-100 border-l-4 border-amber-500 text-amber-700">
  <p class="font-bold">System Note:</p>
  <p>Reader, you must write the story yourself. Look at the address bar above. We are in <strong>chapter-3</strong>. Take us to <strong>chapter-4</strong>.</p>
</div>
---

### Image Prompt

> A close-up of an open book. The right-hand page is torn out. The edges are rough.

### Puzzle Logic

- **Type:** URL Hack (No Input Box)
- **Action:** User manually changes URL hash to `#/chapter-4`
- **Next Level:** `/chapter-4`

---

## Level 4: The Glitch

- **Slug:** `/chapter-4`
- **Theme:** Glitch (Sanity 0.8)
- **Audio Speed:** 0.9x (slightly slower, minor distortion)
- **Visual Style:** Warm colors appear washed out

### HTML Content

---
<p class="text-lg text-stone-600">The river usually flowed with clear water.</p>
<p class="text-lg text-stone-600">Today, the water looked... static. Like a broken TV.</p>
<p class="text-lg text-stone-600 mt-4">Something red was floating in the water. It wasn't a fish.</p>
<p style="color: transparent; user-select: text;" class="selection:bg-red-500 selection:text-white mt-8 cursor-text">
  It was a child's shoe.
</p>
<p class="text-xs mt-4 text-stone-400">(Highlight the empty space above to see what the Bear saw.)</p>
---

### Image Prompt

> A serene river scene, but the water texture is replaced by digital television static (black and white noise). Unsettling contrast.

### Puzzle Logic

- **Type:** Input
- **Answer:** `shoe` or `child's shoe`
- **Next Level:** `/chapter-5`

---

## Level 5: The Filename

- **Slug:** `/chapter-5`
- **Theme:** Glitch (Sanity 0.7)
- **Audio Speed:** 0.85x

### HTML Content

---
<p class="text-lg text-stone-700">The Bear felt eyes on his back.</p>
<p class="text-lg text-stone-700">"Who is watching me?"</p>
<p class="text-lg text-stone-700 mt-4">He took a photo of the forest. He couldn't see anyone.</p>
<p class="text-lg text-stone-700">But maybe the <strong>file name</strong> knows who is hiding.</p>
<p class="text-xs text-stone-500 mt-2">(Right click the image &gt; Open in New Tab)</p>
---

### Image Prompt

> A dense forest line. Darker palette. Shadows resemble silhouettes.  
> **Asset filename:** `the_hunter_is_here.jpg` (must be used exactly)

### Puzzle Logic

- **Type:** Input
- **Answer:** `hunter`
- **Next Level:** `/chapter-6`

---

## Level 6: The Console

- **Slug:** `/chapter-6`
- **Theme:** Dark (Sanity 0.5)
- **Audio Speed:** 0.7x (deep, slow)

### HTML Content

---
<p class="text-xl font-mono text-red-800">The Bear started digging. He didn't know why.</p>
<p class="text-lg text-stone-800 mt-4">The ground whispered to him:</p>
<p class="italic text-stone-500 mt-2">"Check the Console. Press F12 to hear the earth speak."</p>
---

### Console Logic

---
console.warn("System Message: The Bear hit something hard.")
console.log("It is not a rock. Password: BONE")
---

### Image Prompt

> Bear paws digging into dirt. The dirt glitches into binary code.

### Puzzle Logic

- **Type:** Input
- **Answer:** `bone`
- **Next Level:** `/chapter-7`

---

## Level 7: The Lens (Horror Reveal)

- **Slug:** `/chapter-7`
- **Theme:** Horror (Sanity 0.3)
- **Audio Speed:** 0.6x (droning)
- **Visual Style:** Inverted colors (black background, white text)

### HTML Content

---
<h1 class="text-4xl font-bold text-red-600">I AM NOT A BEAR.</h1>
<p class="text-white mt-4">You are not reading a book.</p>
<p class="text-white">Use the <strong>Magic Lens</strong> slider below. Turn up the brightness.</p>
<p class="text-red-500 font-bold mt-2">Look at what you really are.</p>
---

### Image Prompt

> A completely black image. Hidden via hex contrast (#050505 on #000000) is a frightening human face staring at the viewer.

### Puzzle Logic

- **Type:** Magic Lens (Slider)
- **Action:** User sets brightness to 100%
- **Reveal Text:** `IAMYOU`
- **Answer:** `i am you` or `iamyou`
- **Next Level:** `/run`

---

## Level 8: The Disobedience

- **Slug:** `/run`
- **Theme:** Horror (Sanity 0.1)
- **Audio Speed:** 0.5x
- **Tab Title:** **HE IS COMING**

### HTML Content

---
<h1 class="text-6xl font-bold text-red-600 animate-pulse">RUN AWAY</h1>
<p class="text-white mt-8 text-2xl">He is coming back.</p>
<p class="text-gray-400 mt-4">Do not go to the <strong>basement</strong>.</p>
<p class="text-gray-400">Whatever you do, do NOT go to the <strong>basement</strong>.</p>
---

### Image Prompt

> A distorted hallway. A vibrating red door at the end.

### Puzzle Logic

- **Type:** URL Hack
- **Trick:** User must disobey instructions
- **Action:** Change URL hash to `#/basement`
- **Next Level:** `/basement`

---

## Level 9: The End

- **Slug:** `/basement`
- **Theme:** System (Sanity 0.0)
- **Audio Speed:** 0.0 (silence)

### HTML Content

---
<div class="font-mono text-left p-4 bg-white h-screen text-black w-full">
  <h1 class="text-4xl font-bold">404 Not Found</h1>
  <p>The requested memory could not be located.</p>
  <hr class="my-4 border-black"/>
  <p>nginx/1.14.0 (Ubuntu)</p>

  <p class="text-white mt-20 selection:bg-black selection:text-white">
    Thank you for playing.<br/>
    The Archive is closed.
  </p>
</div>
---

### Puzzle Logic

- **Type:** None
- **State:** Ending
