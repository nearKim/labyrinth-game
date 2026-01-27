import { useEffect, useRef } from 'react';
import { Howl } from 'howler';
import { AUDIO } from '../constants';
import { calculatePlaybackRate } from '../utils';

/**
 * Audio player interface for dependency inversion.
 * Allows swapping audio implementations.
 */
export interface AudioPlayer {
  play(): void;
  stop(): void;
  rate(rate: number): void;
  playing(): boolean;
  unload(): void;
}

/**
 * Creates a Howler-based audio player.
 */
function createHowlerPlayer(src: string): AudioPlayer {
  const howl = new Howl({
    src: [src],
    loop: true,
    volume: AUDIO.DEFAULT_VOLUME,
    rate: AUDIO.RATE_MAX,
  });

  return {
    play: () => howl.play(),
    stop: () => howl.stop(),
    rate: (rate: number) => howl.rate(rate),
    playing: () => howl.playing(),
    unload: () => howl.unload(),
  };
}

/**
 * Hook to manage background audio with dynamic playback rate.
 */
export function useAudioEngine(sanity: number, audioSrc: string = '/bgm.mp3'): void {
  const playerRef = useRef<AudioPlayer | null>(null);

  // Initialize audio player
  useEffect(() => {
    playerRef.current = createHowlerPlayer(audioSrc);

    const startPlayback = () => {
      if (playerRef.current && !playerRef.current.playing()) {
        playerRef.current.play();
      }
    };

    // Attempt autoplay on user interaction
    document.addEventListener('click', startPlayback, { once: true });
    document.addEventListener('keydown', startPlayback, { once: true });

    return () => {
      document.removeEventListener('click', startPlayback);
      document.removeEventListener('keydown', startPlayback);
      playerRef.current?.unload();
    };
  }, [audioSrc]);

  // Update playback rate based on sanity
  useEffect(() => {
    if (playerRef.current) {
      const rate = calculatePlaybackRate(sanity);
      playerRef.current.rate(rate);
    }
  }, [sanity]);
}
