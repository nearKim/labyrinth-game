import { useEffect, useCallback, type ReactElement } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getLevelBySlug } from '../data/levels';
import { useGameStore } from '../store/gameStore';
import { useConsoleWhisperer } from '../hooks';
import { UI_TEXT } from '../constants';
import { ActionButton } from './ui';
import { PuzzleFactory } from './puzzles';

/**
 * Level renderer component.
 * Renders level content and delegates puzzle rendering to PuzzleFactory.
 * Single Responsibility: orchestrates level display, not puzzle logic.
 */
export function LevelRenderer(): ReactElement {
  const { slug = 'start' } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { setCurrentLevel, setSanity } = useGameStore();

  const level = getLevelBySlug(slug);

  // Console whisperer effect
  useConsoleWhisperer(level?.meta.consoleClue);

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
    navigate('/start');
  }, [navigate]);

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

      {/* Image display for non-inspector puzzles */}
      {content.image && puzzle.type !== 'inspector' && (
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
      />

      {/* Puzzle component via factory */}
      <PuzzleFactory
        puzzle={puzzle}
        onSuccess={handleSuccess}
        imageSrc={content.image}
      />
    </article>
  );
}
