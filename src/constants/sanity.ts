/**
 * Sanity system constants.
 * Controls the horror transition from cozy (1.0) to horror (0.0).
 */

export const SANITY = {
  MAX: 1.0,
  MIN: 0.0,

  // Thresholds for different horror phases
  THRESHOLD_WARNING: 0.7,
  THRESHOLD_DANGER: 0.5,
  THRESHOLD_CRITICAL: 0.2,
} as const;

export const AUDIO = {
  // Playback rate range (maps sanity 1.0->0.0 to rate 1.0->0.5)
  RATE_MAX: 1.0,
  RATE_MIN: 0.5,
  DEFAULT_VOLUME: 0.5,
} as const;

export const VISUAL_EFFECTS = {
  // CSS filter multipliers based on decay (1 - sanity)
  CONTRAST_MULTIPLIER: 1.0,
  SEPIA_MULTIPLIER: 0.5,
  INVERT_MULTIPLIER: 5.0,
  BLUR_MULTIPLIER: 2.0,
  BG_OPACITY_MULTIPLIER: 0.3,
} as const;
