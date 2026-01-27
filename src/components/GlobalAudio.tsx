import { useGameStore } from '../store/gameStore';
import { useAudioEngine } from '../hooks';

/**
 * Global audio component.
 * Manages background music with sanity-based playback rate.
 * Single Responsibility: audio management only.
 */
export function GlobalAudio(): null {
  const sanity = useGameStore((state) => state.sanity);

  useAudioEngine(sanity);

  return null;
}
