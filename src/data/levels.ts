import type { Level, LevelLookupResult } from '../types';

/**
 * MD5 Hashes (pre-computed for security):
 * open: 7cef8a734855777c2a9d0caf42666e69
 * patience: 4c8476db197a1039153ca724674f7e13
 * silver-glass: 27476dfcdb0eabd2b7c87d232b122e25
 * star: 8ff953dd97c4405234a04291dee39e0b
 * doormatshadowmirror: 18c1af67061113a1cb96a64b1cf441a4
 * click: a8affc088cbca89fa20dbd98c91362e4
 * blbrdpnsltch: 73fb71b2340c6b9ea6187bd2771fe4c3
 * 5,2: 25b0274562a45bf158768de9ea34a7c8
 * 13: c51ce410c124a10e0db5e4b97fc2af39
 */

export const LEVELS: readonly Level[] = [
  // L00: The Rules That Smile (Root path)
  {
    id: 'L00',
    slug: '',
    sanity: 1.0,
    content: {
      title: 'The Gentle Labyrinth',
      story: `
<p class="text-lg text-amber-900 leading-relaxed mb-4">
Welcome. This is not a game that pushes you forward.
It is a book that notices when you lean closer.
</p>

<p class="text-lg text-amber-900 leading-relaxed mb-2">
In this labyrinth, you may be asked to:
</p>

<ul class="list-disc ml-6 text-lg text-amber-900 mb-6 space-y-1">
  <li>Click words</li>
  <li>Click images</li>
  <li>Type answers</li>
  <li>Change the address bar</li>
</ul>

<p class="text-lg text-amber-900 leading-relaxed mb-4">
Look up. See the bar where paths are written?
That is not just a label. It is a door.
</p>

<p class="text-lg text-amber-900 leading-relaxed mb-4">
Every path in this labyrinth begins with <code class="px-1 py-0.5 bg-amber-100 rounded">/#/</code>
</p>

<p class="text-lg text-amber-900 leading-relaxed mb-6">
Here is your first key. Change the address to:
<code class="px-1 py-0.5 bg-amber-100 rounded">/#/morning-porch</code>
</p>

<p class="text-sm text-gray-400 italic">Hint: Edit the URL in your browser's address bar.</p>
      `,
      image: 'assets/level00_title.jpg',
    },
    meta: {
      consoleClue: 'Welcome, curious one. The first chapter awaits at /#/morning-porch',
    },
    puzzle: {
      type: 'url_hack',
      nextSlug: 'morning-porch',
    },
  },

  // L01: The Doormat (Click puzzle)
  {
    id: 'L01',
    slug: 'morning-porch',
    sanity: 1.0,
    content: {
      title: 'Chapter I — You and the Ordinary Things',
      story: `
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
<strong class="underline cursor-pointer text-amber-700 hover:text-amber-900" data-click="doormat">doormat</strong>.
</p>

<p class="mt-10 text-sm text-gray-400 italic">
Hint: Look beneath what feels too familiar to matter.
</p>
      `,
      image: 'assets/level01_porch.jpg',
    },
    meta: {
      consoleClue: 'The doormat holds secrets. Click to look closer.',
    },
    puzzle: {
      type: 'click',
      clickTarget: 'doormat',
      nextSlug: 'morning-porch/beneath',
    },
  },

  // L01b: The Doormat Subpage (Input puzzle)
  {
    id: 'L01b',
    slug: 'morning-porch/beneath',
    sanity: 1.0,
    content: {
      title: 'Beneath the Doormat',
      story: `
<p class="text-lg text-amber-900 mb-4">
You lift the doormat. Dust rises like a relieved sigh.
</p>

<p class="text-lg text-amber-900 mb-6">
A key lies there. Stamped into it:
</p>

<h2 class="text-3xl font-serif tracking-widest text-center text-amber-800 mb-8">OPEN</h2>

<p class="mt-3 text-sm text-gray-400 italic">Hint: Keys are literal here.</p>
      `,
      image: 'assets/level01_porch.jpg',
    },
    meta: {
      consoleClue: 'The answer is simple. What do you do with a door?',
    },
    puzzle: {
      type: 'input',
      answerHash: '7cef8a734855777c2a9d0caf42666e69', // open
      nextSlug: 'endless-hall',
      hint: 'The key doesn\'t turn. Perhaps the word matters.',
    },
  },

  // L02: The Hidden Warmth
  {
    id: 'L02',
    slug: 'endless-hall',
    sanity: 0.95,
    content: {
      title: 'Chapter II — The Hallway That Should Not Fit',
      story: `
<p class="text-lg text-amber-900 mb-4">
You open the mailbox, and behind it is a door.
Behind the door is a hallway.
</p>

<p class="text-lg text-amber-900 mb-4">
It is longer than your home could possibly contain.
Still, the lighting is warm. Still, it welcomes you.
</p>

<p class="text-lg text-amber-900 mb-6">
The paintings show familiar places.
Not one of them shows you.
</p>

<p class="text-lg text-amber-900 mb-6">
You feel a sentence hiding in plain sight.
</p>

<p class="text-lg leading-relaxed mb-10 hidden-text">
NEXT: /handless-clock
</p>

<p class="text-sm text-gray-400 italic">
Hint: Sometimes the page whispers the same color as the paper.
</p>
      `,
      image: 'assets/level02_hallway.jpg',
    },
    meta: {
      consoleClue: 'The walls have hidden messages. Select all text with Ctrl+A.',
    },
    puzzle: {
      type: 'url_hack',
      nextSlug: 'handless-clock',
    },
  },

  // L03: The Handless Clock (Inspector/Source puzzle)
  {
    id: 'L03',
    slug: 'handless-clock',
    sanity: 0.90,
    content: {
      title: 'Chapter III — What the Clock Refuses to Tell You',
      story: `
<p class="text-lg text-amber-900 mb-4">
A clock sits on the mantel.
It ticks with the confidence of something that knows you will obey it.
</p>

<p class="text-lg text-amber-900 mb-6">
It has no hands.
Still, you feel judged for being late.
</p>

<!-- The clock whispers to those who look beneath the surface: PATIENCE -->

<p class="text-lg text-amber-900 mb-6">
Perhaps the answer is not on the face,
but in the bones of the page itself.
</p>

<p class="text-sm text-gray-400 italic">
Hint: Press F12. Inspect what you cannot see.
</p>
      `,
      image: 'assets/level03_clock.jpg',
    },
    meta: {
      consoleClue: 'The answer hides in an HTML comment. Open DevTools (F12) and inspect the page source.',
    },
    puzzle: {
      type: 'input',
      answerHash: '4c8476db197a1039153ca724674f7e13', // patience
      nextSlug: 'quiet-visitor',
      hint: 'The clock has no hands, so it teaches patience. Look in the HTML source.',
    },
  },

  // L04: The Filename of the Bird (Input - inspect image name)
  {
    id: 'L04',
    slug: 'quiet-visitor',
    sanity: 0.85,
    content: {
      title: 'Chapter IV — The Bird That Arrived Quietly',
      story: `
<p class="text-lg text-amber-900 mb-4">
A Blue Bird appears where you do not remember leaving space.
On your desk, as if it has always belonged there.
</p>

<p class="text-lg text-amber-900 mb-6">
It does not speak.
It offers you an image instead.
</p>

<p class="mt-8 text-sm text-gray-400 italic">
Hint: Sometimes the answer is the name you give a thing. Right-click the image.
</p>
      `,
      image: 'assets/solution_is_silver-glass.jpg',
    },
    meta: {
      consoleClue: 'The bird whispers through the image filename. Right-click → "Open image in new tab" or inspect the source.',
    },
    puzzle: {
      type: 'input',
      answerHash: '27476dfcdb0eabd2b7c87d232b122e25', // silver-glass
      nextSlug: 'silver-glass',
      hint: 'The image file has a name. What does it tell you?',
    },
  },

  // L05: The Mirror Courtesy
  {
    id: 'L05',
    slug: 'silver-glass',
    sanity: 0.80,
    content: {
      title: 'Chapter V — The Mirror That Does Not Lie',
      story: `
<p class="text-lg text-amber-900 mb-4">
A mirror stands in the hallway as if it has been waiting politely.
</p>

<p class="text-lg text-amber-900 mb-6">
In its surface, a word appears—backwards—
the way secrets prefer to be introduced.
</p>

<p class="mt-8 text-sm text-gray-400 italic">
Hint: The word is shown in the "mirror".
</p>
      `,
      image: 'assets/level05_mirror.png',
    },
    meta: {
      consoleClue: 'The mirror shows HCTAL backwards. Read it right to left: LATCH. Go to /latch',
    },
    puzzle: {
      type: 'url_hack',
      nextSlug: 'latch',
    },
  },

  // L06: The Comparison Game (Input - STAR)
  {
    id: 'L06',
    slug: 'latch',
    aliases: ['silver-glass/latch', 'silver-glass/LATCH'],
    sanity: 0.75,
    content: {
      title: 'Chapter VI — Spot the Kindest Difference',
      story: `
<p class="text-lg text-amber-900 mb-4">
Two postcards rest on the table.
They depict the same room, the same light, the same quiet.
</p>

<p class="text-lg text-amber-900 mb-6">
But one of them is missing something.
And the missing thing is the entire point.
</p>

<p class="mt-8 text-sm text-gray-400 italic">
Hint: Name what disappeared.
</p>
      `,
      image: 'assets/level06_postcards.png',
    },
    meta: {
      consoleClue: 'Compare the postcards carefully. What is missing? A STAR.',
    },
    puzzle: {
      type: 'input',
      answerHash: '8ff953dd97c4405234a04291dee39e0b', // star
      nextSlug: 'carved-wood',
      hint: 'Look closely at both images. What is in one but not the other?',
    },
  },

  // L07: The Door That Acts Innocent (Hotspot Puzzle)
  {
    id: 'L07',
    slug: 'carved-wood',
    sanity: 0.70,
    content: {
      title: 'Chapter VII — The Door That Acts Innocent',
      story: `
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

<p class="mt-8 text-sm text-gray-400 italic">
Hint: Click what feels warmer.
</p>
      `,
      image: 'assets/level07_door.jpg',
    },
    meta: {
      consoleClue: 'The warm carving awaits your touch. Look near the center.',
    },
    puzzle: {
      type: 'hotspot',
      hotspot: {
        x: 35,
        y: 8,
        width: 10,
        height: 12,
      },
      nextSlug: 'patient-sequence',
    },
  },

  // L08: The Margin Where Truth Hides (Fibonacci)
  {
    id: 'L08',
    slug: 'patient-sequence',
    sanity: 0.65,
    content: {
      title: 'Chapter VIII — The Margin Where Truth Hides',
      story: `
<p class="text-lg text-amber-900 mb-4">
You find a notebook in the margin of the room.
Its pages are filled with a single, patient sequence.
</p>

<p class="text-lg text-amber-900 mb-4">
The book counts its own heartbeats:
</p>

<p class="text-2xl text-amber-800 font-serif text-center my-6 tracking-widest">
1, 1, 2, 3, 5, 8, ...
</p>

<p class="text-lg text-amber-900 mb-6">
Each number is the sum of the two before it,
like memories stacking into meaning.
</p>

<p class="text-lg text-amber-900 mb-6">
The labyrinth asks: <em>What gentle number follows?</em>
</p>

<p class="mt-8 text-sm text-gray-400 italic">
Hint: Add the last two numbers together.
</p>
      `,
      image: 'assets/level08_margin.jpg',
    },
    meta: {
      consoleClue: 'The Fibonacci sequence: 1, 1, 2, 3, 5, 8... Next is 5+8=13.',
    },
    puzzle: {
      type: 'input',
      answerHash: 'c51ce410c124a10e0db5e4b97fc2af39', // 13
      nextSlug: 'braided-words',
      hint: 'Each number is born from the two before it.',
    },
  },

  // L09: The Game That Remembers You
  {
    id: 'L09',
    slug: 'braided-words',
    sanity: 0.60,
    content: {
      title: 'Chapter IX — The Game That Remembers You',
      story: `
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

<p class="mt-8 text-sm text-gray-400 italic">
Hint: Order matters. Use the order you encountered them.
</p>
      `,
      image: 'assets/level09_letter.jpg',
    },
    meta: {
      consoleClue: 'doormat + shadow + mirror = doormatshadowmirror',
    },
    puzzle: {
      type: 'input',
      answerHash: '18c1af67061113a1cb96a64b1cf441a4', // doormatshadowmirror
      nextSlug: 'standing-spine',
      hint: 'Combine the three words in order, no spaces.',
    },
  },

  // L10: The Spine Where Words Stand Up (Acrostic)
  {
    id: 'L10',
    slug: 'standing-spine',
    sanity: 0.55,
    content: {
      title: 'Chapter X — The Spine Where Words Stand Up',
      story: `
<p class="text-lg text-amber-900 mb-4">
Some stories are meant to be read forward.
This one is meant to be read like a secret held upright.
</p>

<p class="text-lg text-amber-900 mb-2"><strong class="text-amber-700">C</strong>andles burn without asking permission.</p>
<p class="text-lg text-amber-900 mb-2"><strong class="text-amber-700">L</strong>ight makes a promise it cannot keep.</p>
<p class="text-lg text-amber-900 mb-2"><strong class="text-amber-700">I</strong>n every warm room, a cold corner waits.</p>
<p class="text-lg text-amber-900 mb-2"><strong class="text-amber-700">C</strong>ertain doors appear only when noticed.</p>
<p class="text-lg text-amber-900 mb-6"><strong class="text-amber-700">K</strong>indness is sometimes a disguise.</p>

<p class="mt-8 text-sm text-gray-400 italic">
Hint: Read the first letters.
</p>
      `,
      image: 'assets/level10_spine.jpg',
    },
    meta: {
      consoleClue: 'C-L-I-C-K. What you must do.',
    },
    puzzle: {
      type: 'input',
      answerHash: 'a8affc088cbca89fa20dbd98c91362e4', // click
      nextSlug: 'breathless',
      hint: 'Read the bold first letters from top to bottom.',
    },
  },

  // L11: What Remains After Softness (Delete Vowels)
  {
    id: 'L11',
    slug: 'breathless',
    sanity: 0.50,
    content: {
      title: 'Chapter XI — What Remains After Softness',
      story: `
<p class="text-lg text-amber-900 mb-4">
The page offers you a phrase, written in letters that still believe in kindness:
</p>

<p class="text-2xl text-amber-800 font-serif text-center my-6 tracking-wide">
BLUEBIRDOPENSALATCH
</p>

<p class="text-lg text-amber-900 mb-4">
But the labyrinth has grown tired of vowels—
those soft, breathing things that give words their voice.
</p>

<p class="text-lg text-amber-900 mb-6">
<em>Strip away the breath,</em> it whispers.
<em>Show me only what remains.</em>
</p>

<p class="mt-8 text-sm text-gray-400 italic">
Hint: Vowels are A, E, I, O, U. What's left without them?
</p>
      `,
      image: 'assets/level11_sentence.jpg',
    },
    meta: {
      consoleClue: 'BLUEBIRDOPENSALATCH minus vowels = BLBRDPNSLTCH',
    },
    puzzle: {
      type: 'input',
      answerHash: '73fb71b2340c6b9ea6187bd2771fe4c3', // blbrdpnsltch
      nextSlug: 'binary-lullaby',
      hint: 'Remove all vowels (A, E, I, O, U) from the phrase.',
    },
  },

  // L12: Where Numbers Point (Coordinates)
  {
    id: 'L12',
    slug: 'binary-lullaby',
    sanity: 0.45,
    content: {
      title: 'Chapter XII — Where Numbers Point',
      story: `
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

<p class="mt-8 text-sm text-gray-400 italic">
Hint: If you enter the correct coordinates, the map will 'accept' them.
</p>
      `,
      image: 'assets/level12_map.jpg',
    },
    meta: {
      consoleClue: '42 in binary = 101010. X=101=5, Y=010=2. Answer: 5,2',
    },
    puzzle: {
      type: 'input',
      answerHash: '25b0274562a45bf158768de9ea34a7c8', // 5,2
      nextSlug: 'gratitude',
      hint: 'Convert 42 to binary, split in half, convert each half back to decimal.',
    },
  },

  // Epilogue
  {
    id: 'epilogue',
    slug: 'gratitude',
    sanity: 0.45,
    content: {
      title: 'The End',
      story: `
<p class="text-lg text-amber-900 leading-relaxed mb-6">
Thank you.
</p>

<p class="text-xl text-amber-800 font-serif text-center my-8 italic">
The labyrinth was never hiding from you.<br>
It was hiding <em>for</em> you.
</p>
      `,
      image: 'assets/level00_title.jpg',
    },
    meta: {
      consoleClue: 'You have completed the labyrinth. Thank you for playing.',
    },
    puzzle: {
      type: 'url_hack',
      nextSlug: '',
    },
  },
] as const;

/**
 * Lookup a level by its slug or alias.
 * Returns undefined if the level is not found.
 */
export function getLevelBySlug(slug: string): LevelLookupResult {
  return LEVELS.find(
    (level) => level.slug === slug || level.aliases?.includes(slug)
  );
}
