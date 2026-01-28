import { useEffect, useCallback, type ReactElement } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getLevelBySlug } from '../data/levels';
import { useGameStore } from '../store/gameStore';
import { useConsoleWhisperer } from '../hooks';
import { UI_TEXT, DEFAULT_TITLE } from '../constants';
import { isClickPuzzle } from '../types';
import { ActionButton } from './ui';
import { PuzzleFactory } from './puzzles';

/**
 * Level renderer component.
 * Renders level content and delegates puzzle rendering to PuzzleFactory.
 * Single Responsibility: orchestrates level display, not puzzle logic.
 */
export function LevelRenderer(): ReactElement {
  const { slug = '', '*': nestedPath } = useParams<{ slug: string; '*': string }>();
  const navigate = useNavigate();
  const { setCurrentLevel, setSanity } = useGameStore();

  // Combine slug and nested path for full path support (e.g., chapter-6/LATCH)
  const fullSlug = nestedPath ? `${slug}/${nestedPath}` : slug;
  const level = getLevelBySlug(fullSlug);

  // Console whisperer effect
  useConsoleWhisperer(level?.meta.consoleClue);

  // Title clue effect (for L03 - clue hidden in browser title)
  useEffect(() => {
    if (level?.meta.titleClue) {
      document.title = level.meta.titleClue;
    } else {
      document.title = DEFAULT_TITLE;
    }
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [level?.meta.titleClue]);

  // Sync level state with store
  useEffect(() => {
    if (level) {
      setCurrentLevel(level.slug);
      setSanity(level.sanity);
    }
  }, [level, setCurrentLevel, setSanity]);

  const handleSuccess = useCallback(() => {
    if (level) {
      navigate(`/${level.puzzle.nextSlug}`);
    }
  }, [level, navigate]);

  const handleReturnToStart = useCallback(() => {
    navigate('/');
  }, [navigate]);

  // Handle click events on story content for click puzzles (event delegation)
  const handleStoryClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const clickTarget = target.closest('[data-click]')?.getAttribute('data-click');
    if (clickTarget && level?.puzzle && isClickPuzzle(level.puzzle)) {
      navigate(`/${level.puzzle.nextSlug}`);
    }
  }, [level, navigate]);

  // Not found state
  if (!level) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl text-warm-brown mb-4">{UI_TEXT.NOT_FOUND_TITLE}</h1>
        <p className="text-warm-brown/70">{UI_TEXT.NOT_FOUND_MESSAGE}</p>
        <div className="mt-4">
          <ActionButton onClick={handleReturnToStart}>
            {UI_TEXT.RETURN_BUTTON}
          </ActionButton>
        </div>
      </div>
    );
  }

  const { content, puzzle } = level;

  return (
    <article className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-warm-brown mb-2">
          {content.title}
        </h1>
      </header>

      {/* Image display for puzzles that don't handle their own image */}
      {content.image && puzzle.type !== 'inspector' && puzzle.type !== 'hotspot' && (
        <div className="relative">
          <img
            src={content.image}
            alt=""
            className="w-full rounded-lg shadow-md"
          />
        </div>
      )}

      {/* Story content */}
      <div
        className="prose prose-warm-brown max-w-none text-warm-brown leading-relaxed"
        dangerouslySetInnerHTML={{ __html: content.story }}
        onClick={handleStoryClick}
      />

      {/* Puzzle component via factory - key forces remount on level change */}
      <PuzzleFactory
        key={level.id}
        puzzle={puzzle}
        onSuccess={handleSuccess}
        imageSrc={content.image}
      />
    </article>
  );
}
