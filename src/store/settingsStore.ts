import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * Font size options.
 */
export type FontSize = 'small' | 'medium' | 'large';

/**
 * Settings state interface.
 * Focused on user preferences only (ISP).
 */
interface SettingsState {
  readonly fontSize: FontSize;
  readonly darkMode: boolean;
  readonly audioVolume: number; // 0-1
}

/**
 * Settings actions interface.
 * Separated from state for clarity.
 */
interface SettingsActions {
  setFontSize: (size: FontSize) => void;
  toggleDarkMode: () => void;
  setDarkMode: (enabled: boolean) => void;
  setAudioVolume: (volume: number) => void;
}

type SettingsStore = SettingsState & SettingsActions;

const initialState: SettingsState = {
  fontSize: 'medium',
  darkMode: false,
  audioVolume: 0.5,
};

/**
 * Clamp a value between min and max.
 */
function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

/**
 * Settings store using Zustand with localStorage persistence.
 * Implements Observer pattern for reactive state updates.
 */
export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      ...initialState,

      setFontSize: (fontSize) => set({ fontSize }),

      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),

      setDarkMode: (darkMode) => set({ darkMode }),

      setAudioVolume: (volume) => set({ audioVolume: clamp(volume, 0, 1) }),
    }),
    {
      name: 'labyrinth-settings',
      partialize: (state) => ({
        fontSize: state.fontSize,
        darkMode: state.darkMode,
        audioVolume: state.audioVolume,
      }),
    }
  )
);
