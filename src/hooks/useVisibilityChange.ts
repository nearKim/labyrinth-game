import { useEffect } from 'react';

/**
 * Hook to detect tab visibility changes.
 * Calls onHidden when tab becomes hidden, onVisible when it returns.
 */
export function useVisibilityChange(
  onHidden?: () => void,
  onVisible?: () => void
): void {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        onHidden?.();
      } else {
        onVisible?.();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [onHidden, onVisible]);
}
