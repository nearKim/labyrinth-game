import type { ReactElement } from 'react';
import { Settings } from 'lucide-react';

export interface SettingsButtonProps {
  readonly onClick: () => void;
  readonly isOpen: boolean;
}

/**
 * Settings button component.
 * Fixed position in top-right corner with semi-transparent warm theme.
 */
export function SettingsButton({ onClick, isOpen }: SettingsButtonProps): ReactElement {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? 'Close settings' : 'Open settings'}
      aria-expanded={isOpen}
      className="fixed top-4 right-4 z-40 w-10 h-10 flex items-center justify-center rounded-lg bg-warm-brown/20 hover:bg-warm-brown/30 text-warm-brown transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-warm-brown/50"
    >
      <Settings
        size={20}
        className={`transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
      />
    </button>
  );
}
