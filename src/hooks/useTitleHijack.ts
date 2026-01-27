import { useCallback } from 'react';
import { useVisibilityChange } from './useVisibilityChange';
import { CREEPY_MESSAGES, DEFAULT_TITLE } from '../constants';

/**
 * Hook to change document title when user switches tabs.
 * Shows creepier messages as sanity decreases.
 */
export function useTitleHijack(sanity: number): void {
  const getCreepyMessage = useCallback((): string => {
    if (sanity >= 0.5) {
      return DEFAULT_TITLE;
    }
    const messageIndex = Math.floor((1 - sanity) * (CREEPY_MESSAGES.length - 1));
    return CREEPY_MESSAGES[Math.min(messageIndex, CREEPY_MESSAGES.length - 1)];
  }, [sanity]);

  const onHidden = useCallback(() => {
    document.title = getCreepyMessage();
  }, [getCreepyMessage]);

  const onVisible = useCallback(() => {
    document.title = DEFAULT_TITLE;
  }, []);

  useVisibilityChange(onHidden, onVisible);
}
