/**
 * Discriminated union for puzzle types.
 * Each puzzle type has its own specific properties.
 */

export interface BasePuzzle {
  readonly nextSlug: string;
}

export interface InputPuzzle extends BasePuzzle {
  readonly type: 'input';
  readonly answerHash: string;
  readonly hint?: string;
}

export interface UrlHackPuzzle extends BasePuzzle {
  readonly type: 'url_hack';
}

export interface InspectorPuzzle extends BasePuzzle {
  readonly type: 'inspector';
  readonly answerHash: string;
  readonly hint?: string;
}

export interface ClickPuzzle extends BasePuzzle {
  readonly type: 'click';
  readonly clickTarget: string;
}

export interface HotspotPuzzle extends BasePuzzle {
  readonly type: 'hotspot';
  readonly hotspot: {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
  };
}

export type Puzzle = InputPuzzle | UrlHackPuzzle | InspectorPuzzle | ClickPuzzle | HotspotPuzzle;

export type PuzzleType = Puzzle['type'];

/**
 * Props interface for puzzle components.
 * All puzzle components must implement this interface (LSP).
 */
export interface PuzzleComponentProps {
  readonly puzzle: Puzzle;
  readonly onSuccess: () => void;
  readonly imageSrc?: string;
}

/**
 * Type guard functions for puzzle types.
 */
export const isInputPuzzle = (puzzle: Puzzle): puzzle is InputPuzzle => {
  return puzzle.type === 'input';
};

export const isUrlHackPuzzle = (puzzle: Puzzle): puzzle is UrlHackPuzzle => {
  return puzzle.type === 'url_hack';
};

export const isInspectorPuzzle = (puzzle: Puzzle): puzzle is InspectorPuzzle => {
  return puzzle.type === 'inspector';
};

export const isClickPuzzle = (puzzle: Puzzle): puzzle is ClickPuzzle => {
  return puzzle.type === 'click';
};

export const isHotspotPuzzle = (puzzle: Puzzle): puzzle is HotspotPuzzle => {
  return puzzle.type === 'hotspot';
};
