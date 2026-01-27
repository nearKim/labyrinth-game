import { useState, useCallback } from 'react';
import { TIMING } from '../constants';

/**
 * Hook to manage shake animation state.
 * Returns shake state and trigger function.
 */
export function useShakeAnimation(): {
  isShaking: boolean;
  triggerShake: () => void;
} {
  const [isShaking, setIsShaking] = useState(false);

  const triggerShake = useCallback(() => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), TIMING.SHAKE_DURATION_MS);
  }, []);

  return { isShaking, triggerShake };
}
