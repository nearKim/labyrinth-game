# AGENTS.md - Project Blueprint: "The Labyrinth"

## 1. Project Mission
**Goal:** Build a browser-based "Migung" (Labyrinth) puzzle game.
**Vibe:** Starts as a cozy, warm fairytale ("The Bear's Morning") but slowly devolves into psychological horror via UI glitches and audio distortion.
**Core Mechanic:** The user solves riddles to advance. Solutions involve typing text, editing the URL, inspecting source code, or manipulating image brightness.

## 2. Tech Stack (Strict Constraints for AI)
*   **Framework:** React 18+ (Vite) + TypeScript.
*   **Styling:** Tailwind CSS.
*   **Routing:** `react-router-dom` using **HashRouter** (`/#/level-name`).
    *   *Critical Reason:* We need "URL Hacking" (user manually changing the URL) to work on static hosting (GitHub Pages) without server-side config.
*   **State:** `Zustand` for global game state.
*   **Audio:** `Howler.js` (Must support `rate` for pitch-shifting/slow-down effects).
*   **Security:** `crypto-js` (MD5) to hash answers on the client side so users can't just read the answer in the code.

## 3. Architecture & Components

### A. The Game Engine (`useGameStore`)
Track these states:
1.  `currentLevel`: The slug of the active level.
2.  `sanity`: A float from `1.0` (Cozy) to `0.0` (Horror).
    *   **Effect:** As sanity drops, the Global Audio `playbackRate` decreases (1.0 -> 0.5), and CSS filters (noise, invert) increase.
3.  `inventory`: Array of unlocked tools (e.g., "Lens").

### B. The Level Renderer
A component that renders content based on a `levels.ts` data file. It must support:
*   **Story Text:** HTML content rendered safely.
*   **Input Gate:** A text box that validates answers via MD5.
*   **URL Listener:** Some levels have *no* input box. The "Puzzle" is to change the URL hash manually. The renderer must detect route changes and load the correct level immediately.
*   **Tools:** A draggable "Magic Lens" (slider) that adjusts the brightness/contrast of the main image (used for Steganography puzzles).

### C. The "Ghost" Systems (Atmosphere)
1.  **Console Whisperer:** On every level mount, log a specific message to the Browser Console (F12).
2.  **Title Hijacker:** If the user switches tabs, change `document.title` to a creepy message (e.g., "DON'T LEAVE ME").
3.  **Audio Engine:** A persistent component (outside the Router) that loops the BGM. It dynamically changes speed based on `sanity`.

## 4. Implementation Steps
1.  **Scaffold:** Vite + React + Tailwind + Zustand.
2.  **Router:** Set up `HashRouter`.
3.  **Data:** Create `src/data/levels.ts` (Use content from SCENARIO.md).
4.  **Components:** Build `GameLayout`, `LevelRenderer`, `InputBox`, `MagicLens`.
5.  **Polish:** Implement the Sanity/Audio system.

## 5. Deployment
*   **Platform:** GitHub Pages.
*   **Assets:** Use `https://placehold.co` for placeholders initially, but implement the code so real assets can be swapped in easily.

## 6. Code Quality Standards

### A. SOLID Principles

1.  **Single Responsibility Principle (SRP)**
    *   Each component/hook/function should have ONE reason to change.
    *   Split components: `LevelRenderer` renders, `InputBox` handles input, `MagicLens` handles image manipulation.
    *   Extract business logic into custom hooks (e.g., `useAnswerValidation`, `useSanityEffects`).

2.  **Open/Closed Principle (OCP)**
    *   Level system must be extensible without modifying core code.
    *   New puzzle types should be added via the `levels.ts` config, not by editing `LevelRenderer`.
    *   Use a puzzle type registry pattern: `Record<PuzzleType, React.ComponentType<PuzzleProps>>`.

3.  **Liskov Substitution Principle (LSP)**
    *   All puzzle components must implement the same interface (`PuzzleProps`).
    *   Any puzzle component can be swapped without breaking the renderer.

4.  **Interface Segregation Principle (ISP)**
    *   Keep prop interfaces focused. Don't pass the entire `Level` object when only `answerHash` is needed.
    *   Split large interfaces: `LevelContent`, `LevelPuzzle`, `LevelMeta`.

5.  **Dependency Inversion Principle (DIP)**
    *   Components depend on abstractions (interfaces/types), not concrete implementations.
    *   Inject dependencies via props or context, not direct imports of singletons.
    *   Example: `AudioEngine` should accept an `AudioPlayer` interface, not directly use Howler.

### B. DRY (Don't Repeat Yourself)

*   Extract repeated UI patterns into reusable components (e.g., `<StyledInput>`, `<ActionButton>`).
*   Create utility functions for common operations (`hashAnswer`, `clampSanity`).
*   Use custom hooks for repeated stateful logic (`useShakeAnimation`, `useVisibilityChange`).
*   Centralize constants in `src/constants/` (colors, timings, messages).

### C. Design Patterns

1.  **Strategy Pattern** - For puzzle validation logic:
    ```typescript
    type ValidationStrategy = (input: string, level: Level) => boolean;
    const strategies: Record<PuzzleType, ValidationStrategy> = { ... };
    ```

2.  **Observer Pattern** - Zustand already implements this. Components subscribe to store slices.

3.  **Factory Pattern** - For creating puzzle components based on type:
    ```typescript
    const PuzzleFactory = ({ type, ...props }: PuzzleFactoryProps) => {
      const Component = puzzleRegistry[type];
      return <Component {...props} />;
    };
    ```

4.  **Composite Pattern** - For nested UI effects (sanity affects multiple visual layers).

5.  **Command Pattern** - For game actions that may need undo/history:
    ```typescript
    interface GameCommand { execute(): void; undo(): void; }
    ```

### D. React Best Practices

*   **Composition over Inheritance** - Use children and render props, not class inheritance.
*   **Controlled Components** - Form inputs should be controlled by React state.
*   **Lifting State Up** - Share state via the nearest common ancestor or Zustand.
*   **Custom Hooks** - Extract reusable logic (prefix with `use`).
*   **Memoization** - Use `useMemo`/`useCallback` for expensive computations or stable references.
*   **Error Boundaries** - Wrap major sections to gracefully handle runtime errors.

### E. TypeScript Standards

*   **Strict Mode** - Always enabled (`"strict": true`).
*   **Explicit Return Types** - All exported functions must have explicit return types.
*   **No `any`** - Use `unknown` and type guards instead.
*   **Discriminated Unions** - For puzzle types: `type Puzzle = InputPuzzle | UrlPuzzle | InspectorPuzzle`.
*   **Readonly** - Use `readonly` for props and immutable data structures.
*   **Type-only Imports** - Use `import type` for type-only imports.

### F. File Organization

```
src/
├── components/          # React components
│   ├── ui/              # Reusable UI primitives
│   └── puzzles/         # Puzzle-specific components
├── hooks/               # Custom React hooks
├── store/               # Zustand stores
├── data/                # Static data (levels, config)
├── types/               # TypeScript type definitions
├── utils/               # Pure utility functions
└── constants/           # Magic numbers, strings, configs
```

### G. Naming Conventions

*   **Components:** PascalCase (`LevelRenderer.tsx`)
*   **Hooks:** camelCase with `use` prefix (`useGameStore.ts`)
*   **Utilities:** camelCase (`hashAnswer.ts`)
*   **Types/Interfaces:** PascalCase (`Level`, `PuzzleProps`)
*   **Constants:** SCREAMING_SNAKE_CASE (`MAX_SANITY`, `CREEPY_MESSAGES`)
*   **Files:** Match export name (`InputBox.tsx` exports `InputBox`)

### H. Testing Guidelines

*   **Unit Tests** - For utilities and pure functions.
*   **Component Tests** - Using React Testing Library.
*   **Integration Tests** - For puzzle flows (input → validation → navigation).
*   **Test file location:** Co-locate with source (`InputBox.test.tsx` next to `InputBox.tsx`).