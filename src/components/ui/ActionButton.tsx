import type { ButtonHTMLAttributes, ReactNode, ReactElement } from 'react';
import clsx from 'clsx';

export interface ActionButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  readonly children: ReactNode;
  readonly variant?: 'primary' | 'secondary';
}

/**
 * Reusable action button with consistent styling.
 */
export function ActionButton({
  children,
  variant = 'primary',
  ...props
}: ActionButtonProps): ReactElement {
  return (
    <button
      className={clsx(
        'px-6 py-2 rounded-lg transition-colors',
        variant === 'primary' && 'bg-warm-brown text-cream hover:bg-warm-brown/80',
        variant === 'secondary' && 'bg-warm-brown/20 text-warm-brown hover:bg-warm-brown/30'
      )}
      {...props}
    >
      {children}
    </button>
  );
}
