import type { Level } from '../types';
import { hashAnswer } from '../utils';

/**
 * Game levels configuration.
 * Add new levels here without modifying the LevelRenderer (OCP).
 */
export const levels: readonly Level[] = [
  {
    id: '1',
    slug: 'start',
    sanity: 1.0,
    content: {
      title: "The Bear's Morning",
      story: `
        <p>Good morning, little archivist.</p>
        <p>The forest is waking up, and so is our friend the Bear.
        He stretches his fuzzy arms and yawns.</p>
        <p><em>"What does the Bear eat for breakfast?"</em></p>
      `,
      image: 'https://placehold.co/600x400/FDFBF7/8B7355?text=Sleepy+Bear',
    },
    meta: {
      consoleClue: 'The bear loves sweet things from bees...',
    },
    puzzle: {
      type: 'input',
      answerHash: hashAnswer('honey'),
      hint: 'Something sweet that bees make...',
      nextSlug: 'forest-path',
    },
  },
  {
    id: '2',
    slug: 'forest-path',
    sanity: 0.9,
    content: {
      title: 'The Forest Path',
      story: `
        <p>The Bear waddles down the forest path, belly full of honey.</p>
        <p>He sees a sign, but the letters are faded...</p>
        <p>The sign points to a place that rhymes with "river".</p>
      `,
      image: 'https://placehold.co/600x400/E8E4DC/8B7355?text=Forest+Path',
    },
    meta: {
      consoleClue: 'Where the water flows... check your address bar.',
    },
    puzzle: {
      type: 'url_hack',
      nextSlug: 'river',
    },
  },
  {
    id: '3',
    slug: 'river',
    sanity: 0.75,
    content: {
      title: 'The Dark River',
      story: `
        <p>The water is... darker than you remember.</p>
        <p>There's something written on the rocks, but you can barely see it.</p>
        <p>Perhaps if you had a way to see in the dark...</p>
      `,
      image: 'https://placehold.co/600x400/1a1a1a/1f1f1f?text=???',
    },
    meta: {
      consoleClue: 'Use the lens. Increase brightness.',
    },
    puzzle: {
      type: 'inspector',
      answerHash: hashAnswer('drown'),
      hint: 'Look closer at the image...',
      nextSlug: 'depths',
    },
  },
  {
    id: '4',
    slug: 'depths',
    sanity: 0.5,
    content: {
      title: 'The Depths',
      story: `
        <p>You shouldn't have come here.</p>
        <p>The Bear is gone. Was there ever a Bear?</p>
        <p>The water whispers a name. Your name?</p>
        <p><em>What is the opposite of remember?</em></p>
      `,
      image: 'https://placehold.co/600x400/0a0a0a/333333?text=...',
    },
    meta: {
      consoleClue: 'SYSTEM INTEGRITY: 47%',
    },
    puzzle: {
      type: 'input',
      answerHash: hashAnswer('forget'),
      hint: 'The opposite of holding onto memories...',
      nextSlug: 'end',
    },
  },
  {
    id: '5',
    slug: 'end',
    sanity: 0.0,
    content: {
      title: '???',
      story: `
        <p>Y̷o̵u̸ ̷f̶o̵u̸n̷d̵ ̶i̸t̷.</p>
        <p>The truth was always here.</p>
        <p>Thank you for playing.</p>
      `,
    },
    meta: {
      consoleClue: 'GAME OVER. OR IS IT?',
    },
    puzzle: {
      type: 'input',
      answerHash: hashAnswer('restart'),
      nextSlug: 'start',
    },
  },
] as const;

/**
 * Lookup a level by its URL slug.
 */
export function getLevelBySlug(slug: string): Level | undefined {
  return levels.find((level) => level.slug === slug);
}

/**
 * Get the starting level.
 */
export function getStartingLevel(): Level {
  return levels[0];
}
