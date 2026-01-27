import { useEffect } from 'react';

/**
 * Hook to log atmospheric messages to the browser console.
 */
export function useConsoleWhisperer(message?: string): void {
  useEffect(() => {
    if (message) {
      console.log(`%c${message}`, 'color: #8B7355; font-style: italic;');
    }
  }, [message]);
}
