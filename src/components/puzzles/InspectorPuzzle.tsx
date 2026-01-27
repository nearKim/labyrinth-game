import { useState, useEffect, type FormEvent, type ReactElement } from 'react';
import type { PuzzleComponentProps, InspectorPuzzle as InspectorPuzzleType } from '../../types';
import { validateAnswer } from '../../utils';
import { useGameStore } from '../../store/gameStore';
import { UI_TEXT, THRESHOLDS } from '../../constants';
import { StyledInput, ActionButton, Slider } from '../ui';

interface InspectorPuzzleProps extends PuzzleComponentProps {
  readonly puzzle: InspectorPuzzleType;
  readonly imageSrc: string;
}

/**
 * Inspector puzzle component - user adjusts brightness/contrast to reveal hidden content.
 */
export function InspectorPuzzle({
  puzzle,
  imageSrc,
  onSuccess,
}: InspectorPuzzleProps): ReactElement {
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [input, setInput] = useState('');
  const { hasItem, addToInventory } = useGameStore();

  // Unlock the lens tool on first use (moved to useEffect to avoid side effects in render)
  useEffect(() => {
    if (!hasItem('lens')) {
      addToInventory('lens');
    }
  }, [hasItem, addToInventory]);

  const showInput = brightness > THRESHOLDS.BRIGHTNESS_REVEAL;

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if (validateAnswer(input, puzzle.answerHash)) {
      onSuccess();
    }
  };

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-lg shadow-md">
        <img
          src={imageSrc}
          alt=""
          className="w-full transition-all duration-200"
          style={{
            filter: `brightness(${brightness}%) contrast(${contrast}%)`,
          }}
        />
      </div>

      <div className="bg-warm-brown/10 rounded-lg p-4 space-y-3">
        <div className="flex items-center justify-between text-sm text-warm-brown">
          <span>{UI_TEXT.MAGIC_LENS_TITLE}</span>
          <span className="text-warm-brown/60">{UI_TEXT.MAGIC_LENS_SUBTITLE}</span>
        </div>

        <div className="space-y-2">
          <Slider
            label="Brightness"
            min={0}
            max={300}
            value={brightness}
            onChange={(e) => setBrightness(Number(e.target.value))}
            displayValue={`${brightness}%`}
          />

          <Slider
            label="Contrast"
            min={0}
            max={300}
            value={contrast}
            onChange={(e) => setContrast(Number(e.target.value))}
            displayValue={`${contrast}%`}
          />
        </div>
      </div>

      {showInput && (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <StyledInput
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={UI_TEXT.INSPECTOR_PLACEHOLDER}
          />
          <ActionButton type="submit">
            {UI_TEXT.ANSWER_BUTTON}
          </ActionButton>
        </form>
      )}
    </div>
  );
}
