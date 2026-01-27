import { useEffect } from 'react';
import { CONSOLE_WARNINGS } from '../constants';
import { getHorrorPhase, type HorrorPhase } from '../utils';

/**
 * Hook to log console warnings based on sanity level.
 */
export function useSanityWarnings(sanity: number): void {
  useEffect(() => {
    const phase: HorrorPhase = getHorrorPhase(sanity);

    switch (phase) {
      case 'warning':
        console.warn(`%c${CONSOLE_WARNINGS.CORRUPTION}`, 'color: orange;');
        break;
      case 'danger':
        console.error(`%c${CONSOLE_WARNINGS.INTEGRITY}`, 'color: red; font-weight: bold;');
        break;
      case 'critical':
        console.error(`%c${CONSOLE_WARNINGS.WATCHING}`, 'color: red; font-size: 20px; font-weight: bold;');
        break;
    }
  }, [sanity]);
}
