import { useState, type FormEvent, type ReactElement } from 'react';
import type { PuzzleComponentProps, InputPuzzle as InputPuzzleType } from '../../types';
import { validateAnswer } from '../../utils';
import { useShakeAnimation } from '../../hooks';
import { UI_TEXT } from '../../constants';
import { StyledInput, ActionButton } from '../ui';

interface InputPuzzleProps extends PuzzleComponentProps {
  readonly puzzle: InputPuzzleType;
}

/**
 * Input puzzle component - user types an answer validated via MD5.
 */
export function InputPuzzle({ puzzle, onSuccess }: InputPuzzleProps): ReactElement {
  const [input, setInput] = useState('');
  const [showHint, setShowHint] = useState(false);
  const { isShaking, triggerShake } = useShakeAnimation();

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    const trimmedInput = input.toLowerCase().trim();

    if (trimmedInput === UI_TEXT.HELP_COMMAND && puzzle.hint) {
      setShowHint(true);
      return;
    }

    if (validateAnswer(input, puzzle.answerHash)) {
      onSuccess();
    } else {
      triggerShake();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex gap-2">
        <StyledInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={UI_TEXT.ANSWER_PLACEHOLDER}
          isShaking={isShaking}
        />
        <ActionButton type="submit">
          {UI_TEXT.SUBMIT_BUTTON}
        </ActionButton>
      </div>

      {showHint && puzzle.hint && (
        <p className="text-sm text-warm-brown/60 italic">
          Hint: {puzzle.hint}
        </p>
      )}

      <p className="text-xs text-warm-brown/40 text-center">
        {UI_TEXT.HELP_PROMPT}
      </p>
    </form>
  );
}
