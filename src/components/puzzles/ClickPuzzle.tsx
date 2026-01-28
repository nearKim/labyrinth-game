import type { ReactElement } from 'react';
import type { ClickPuzzle as ClickPuzzleType } from '../../types';
import { UI_TEXT } from '../../constants';

export interface ClickPuzzleProps {
  readonly puzzle: ClickPuzzleType;
  readonly onSuccess: () => void;
}

/**
 * Click puzzle component.
 * The actual clickable element is in the story HTML with data-click attribute.
 * LevelRenderer handles the click event delegation.
 * This component just shows the hint text.
 */
export function ClickPuzzle({ puzzle: _puzzle, onSuccess: _onSuccess }: ClickPuzzleProps): ReactElement {
  return (
    <div className="text-center py-4">
      <p className="text-sm text-warm-brown/60 italic">
        {UI_TEXT.CLICK_HINT}
      </p>
    </div>
  );
}
