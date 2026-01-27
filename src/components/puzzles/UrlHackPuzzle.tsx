import type { ReactElement } from 'react';
import type { PuzzleComponentProps } from '../../types';
import { UI_TEXT } from '../../constants';

/**
 * URL Hack puzzle component - no input, user must change the URL manually.
 */
export function UrlHackPuzzle(_props: PuzzleComponentProps): ReactElement {
  return (
    <div className="text-warm-brown/60 text-sm italic text-center py-4">
      {UI_TEXT.URL_HACK_HINT}
    </div>
  );
}
