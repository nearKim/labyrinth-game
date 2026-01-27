import type { InputHTMLAttributes, ReactElement } from 'react';

export interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'className'> {
  readonly label: string;
  readonly displayValue: string;
}

/**
 * Reusable styled range slider component.
 */
export function Slider({
  label,
  displayValue,
  ...props
}: SliderProps): ReactElement {
  return (
    <label className="flex items-center gap-3 text-sm text-warm-brown">
      <span className="w-20">{label}</span>
      <input
        type="range"
        className="flex-1 accent-warm-brown"
        {...props}
      />
      <span className="w-12 text-right">{displayValue}</span>
    </label>
  );
}
