import { SANITY, AUDIO, VISUAL_EFFECTS } from '../constants';

/**
 * Clamps sanity value to valid range [0, 1].
 */
export function clampSanity(value: number): number {
  return Math.max(SANITY.MIN, Math.min(SANITY.MAX, value));
}

/**
 * Calculates audio playback rate based on sanity.
 * Sanity 1.0 → Rate 1.0 (normal)
 * Sanity 0.0 → Rate 0.5 (slow, creepy)
 */
export function calculatePlaybackRate(sanity: number): number {
  return AUDIO.RATE_MIN + sanity * (AUDIO.RATE_MAX - AUDIO.RATE_MIN);
}

/**
 * Calculates CSS filter values based on sanity level.
 */
export interface SanityFilterValues {
  readonly contrast: number;
  readonly sepia: number;
  readonly invert: number;
  readonly blur: number;
  readonly bgOpacity: number;
}

export function calculateSanityFilters(sanity: number): SanityFilterValues {
  const decay = 1 - sanity;

  return {
    contrast: 1 + decay * VISUAL_EFFECTS.CONTRAST_MULTIPLIER,
    sepia: decay * VISUAL_EFFECTS.SEPIA_MULTIPLIER,
    invert: sanity < SANITY.THRESHOLD_CRITICAL
      ? (SANITY.THRESHOLD_CRITICAL - sanity) * VISUAL_EFFECTS.INVERT_MULTIPLIER
      : 0,
    blur: sanity < SANITY.THRESHOLD_DANGER
      ? (SANITY.THRESHOLD_DANGER - sanity) * VISUAL_EFFECTS.BLUR_MULTIPLIER
      : 0,
    bgOpacity: decay * VISUAL_EFFECTS.BG_OPACITY_MULTIPLIER,
  };
}

/**
 * Builds CSS filter string from sanity filter values.
 */
export function buildFilterString(filters: SanityFilterValues): string {
  return `contrast(${filters.contrast}) sepia(${filters.sepia}) invert(${filters.invert}) blur(${filters.blur}px)`;
}

/**
 * Determines the horror phase based on sanity level.
 */
export type HorrorPhase = 'cozy' | 'warning' | 'danger' | 'critical';

export function getHorrorPhase(sanity: number): HorrorPhase {
  if (sanity >= SANITY.THRESHOLD_WARNING) return 'cozy';
  if (sanity >= SANITY.THRESHOLD_DANGER) return 'warning';
  if (sanity >= SANITY.THRESHOLD_CRITICAL) return 'danger';
  return 'critical';
}
