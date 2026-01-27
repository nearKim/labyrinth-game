import type { Puzzle } from './puzzle';

/**
 * Level content - what the player sees.
 * Separated from puzzle logic (ISP).
 */
export interface LevelContent {
  readonly title: string;
  readonly story: string;
  readonly image?: string;
}

/**
 * Level metadata - console clues, atmospheric effects.
 */
export interface LevelMeta {
  readonly consoleClue?: string;
}

/**
 * Complete level definition.
 * Composed of focused sub-interfaces.
 */
export interface Level {
  readonly id: string;
  readonly slug: string;
  readonly sanity: number;
  readonly content: LevelContent;
  readonly meta: LevelMeta;
  readonly puzzle: Puzzle;
}

/**
 * Level lookup result - explicitly handles not found case.
 */
export type LevelLookupResult = Level | undefined;
