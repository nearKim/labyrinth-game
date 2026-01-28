import { create } from 'zustand';
import { clampSanity } from '../utils';

/**
 * Game state interface.
 * Focused on game-specific state only (ISP).
 */
interface GameState {
  readonly currentLevel: string;
  readonly sanity: number;
  readonly inventory: readonly string[];
}

/**
 * Game actions interface.
 * Separated from state for clarity.
 */
interface GameActions {
  setCurrentLevel: (level: string) => void;
  setSanity: (sanity: number) => void;
  decreaseSanity: (amount: number) => void;
  addToInventory: (item: string) => void;
  hasItem: (item: string) => boolean;
  reset: () => void;
}

type GameStore = GameState & GameActions;

const initialState: GameState = {
  currentLevel: '',
  sanity: 1.0,
  inventory: [],
};

/**
 * Main game store using Zustand.
 * Implements Observer pattern for reactive state updates.
 */
export const useGameStore = create<GameStore>((set, get) => ({
  ...initialState,

  setCurrentLevel: (level) => set({ currentLevel: level }),

  setSanity: (sanity) => set({ sanity: clampSanity(sanity) }),

  decreaseSanity: (amount) => set((state) => ({
    sanity: clampSanity(state.sanity - amount),
  })),

  addToInventory: (item) => set((state) => ({
    inventory: state.inventory.includes(item)
      ? state.inventory
      : [...state.inventory, item],
  })),

  hasItem: (item) => get().inventory.includes(item),

  reset: () => set(initialState),
}));
