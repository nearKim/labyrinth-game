# The Labyrinth

Assignment repository for the **AI Startup Studio** class at Columbia University.

**Author:** In Keun Kim (ik2619@columbia.edu)

A browser-based puzzle game that starts as a cozy fairytale and gradually shifts into psychological horror. Players solve riddles by typing answers, clicking hidden elements, inspecting page source, and manipulating the URL.

## Tech Stack

- React 18 + TypeScript (Vite)
- Tailwind CSS
- Zustand (state management)
- Howler.js (audio)
- HashRouter for static hosting (GitHub Pages)

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Reflection: What AI Is Bad at When Building Software

This project was built with heavy AI assistance. Here is an honest look at where AI fell short and what patterns helped compensate.

### Where AI Struggled

1. **Storytelling lacks soul.** AI-generated narrative felt flat and generic. Even after adjusting temperature and providing detailed prompts, the stories never reached the quality of human-written fiction. For a game whose entire appeal hinges on atmosphere — shifting from cozy fairytale to psychological horror — this was a real limitation. The AI could produce grammatically correct prose but not *evocative* prose.

2. **Non-trivial UX intuition is missing.** Small but important usability details were consistently overlooked. For example, when a player solves a puzzle and advances to the next level, a human designer would instinctively clear the input box. AI did not catch this — it treated each component in isolation and missed the holistic user experience. These "obvious to a human" interactions required manual intervention every time.

3. **Code organization degrades without guardrails.** Left to its own devices, AI produced monolithic files — walls of text with all level data, constants, and configuration crammed into a single source file. This made navigation painful and defeated the purpose of modular architecture. AI optimizes for "working code," not for "code a human can maintain."

### Patterns That Made AI More Helpful

1. **Explicit software quality guidelines as guardrails.** Adding a detailed `CLAUDE.md` with SOLID principles, file organization rules, and naming conventions dramatically improved output quality. When AI had concrete structural constraints to follow, it produced cleaner, more modular code. The lesson: AI needs an architectural blueprint the same way a junior developer needs a style guide.

2. **Directing AI to search for external sources.** Instead of asking AI to invent story content from scratch, pointing it toward existing fairy tale sources and having it adapt those narratives produced far better results. AI is stronger at synthesis and transformation than pure creation.
