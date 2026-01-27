import { useGameStore } from '../store/gameStore';
import { useTitleHijack, useSanityWarnings } from '../hooks';

/**
 * Ghost systems component.
 * Manages atmospheric effects: title hijacking and console warnings.
 * Composition of multiple focused hooks (SRP).
 */
export function GhostSystems(): null {
  const sanity = useGameStore((state) => state.sanity);

  useTitleHijack(sanity);
  useSanityWarnings(sanity);

  return null;
}
