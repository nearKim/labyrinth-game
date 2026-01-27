import type { ReactElement } from 'react';
import type { Puzzle } from '../../types';
import { isInputPuzzle, isInspectorPuzzle } from '../../types';
import { InputPuzzle } from './InputPuzzle';
import { UrlHackPuzzle } from './UrlHackPuzzle';
import { InspectorPuzzle } from './InspectorPuzzle';

export interface PuzzleFactoryProps {
  readonly puzzle: Puzzle;
  readonly onSuccess: () => void;
  readonly imageSrc?: string;
}

/**
 * Factory component that renders the appropriate puzzle based on type.
 * Uses discriminated union type guards for exhaustive type checking.
 *
 * To add a new puzzle type:
 * 1. Add the type to the Puzzle discriminated union in types/puzzle.ts
 * 2. Create the component in this folder
 * 3. Add a type guard and case here
 */
export function PuzzleFactory({
  puzzle,
  onSuccess,
  imageSrc,
}: PuzzleFactoryProps): ReactElement {
  // Input puzzle - text answer validated via MD5
  if (isInputPuzzle(puzzle)) {
    return <InputPuzzle puzzle={puzzle} onSuccess={onSuccess} />;
  }

  // Inspector puzzle - requires image for brightness/contrast manipulation
  if (isInspectorPuzzle(puzzle)) {
    if (!imageSrc) {
      throw new Error('InspectorPuzzle requires an imageSrc');
    }
    return (
      <InspectorPuzzle
        puzzle={puzzle}
        onSuccess={onSuccess}
        imageSrc={imageSrc}
      />
    );
  }

  // URL hack puzzle - no input, user must change URL manually
  // This is the exhaustive fallback for url_hack type
  return <UrlHackPuzzle puzzle={puzzle} onSuccess={onSuccess} />;
}
