import { useGameStore } from '../store/gameStore';
import { useSettingsStore } from '../store/settingsStore';
import { useAudioEngine } from '../hooks';

/**
 * Global audio component.
 * Manages background music with sanity-based playback rate and user-controlled volume.
 * Single Responsibility: audio management only.
 */
export function GlobalAudio(): null {
  const sanity = useGameStore((state) => state.sanity);
  const audioVolume = useSettingsStore((state) => state.audioVolume);

  useAudioEngine(sanity, audioVolume);

  return null;
}
