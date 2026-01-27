import { forwardRef, type InputHTMLAttributes } from 'react';
import clsx from 'clsx';

export interface StyledInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  readonly isShaking?: boolean;
}

/**
 * Reusable styled input component with consistent styling.
 */
export const StyledInput = forwardRef<HTMLInputElement, StyledInputProps>(
  function StyledInput({ isShaking = false, ...props }, ref) {
    return (
      <input
        ref={ref}
        className={clsx(
          'flex-1 px-4 py-2 border-2 border-warm-brown/30 rounded-lg',
          'bg-cream text-warm-brown placeholder:text-warm-brown/40',
          'focus:outline-none focus:border-warm-brown transition-colors',
          isShaking && 'animate-shake'
        )}
        autoComplete="off"
        {...props}
      />
    );
  }
);
