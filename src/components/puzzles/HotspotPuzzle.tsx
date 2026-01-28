import { type ReactElement, useState, useEffect } from 'react';
import type { HotspotPuzzle as HotspotPuzzleType } from '../../types';
import { UI_TEXT } from '../../constants';

export interface HotspotPuzzleProps {
  readonly puzzle: HotspotPuzzleType;
  readonly onSuccess: () => void;
  readonly imageSrc?: string;
}

/**
 * Check if hotspot debug mode is enabled via URL param.
 * Usage: Add ?debug=hotspot to the URL to show hotspot regions.
 */
function useHotspotDebug(): boolean {
  const [isDebug, setIsDebug] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setIsDebug(params.get('debug') === 'hotspot');
  }, []);

  return isDebug;
}

/**
 * Hotspot puzzle component.
 * Renders an image with an invisible clickable region.
 * Used for L07 where clicking a carved door region advances the game.
 *
 * Debug mode: Add ?debug=hotspot to URL to visualize the hotspot area.
 */
export function HotspotPuzzle({
  puzzle,
  onSuccess,
  imageSrc,
}: HotspotPuzzleProps): ReactElement {
  const { hotspot } = puzzle;
  const isDebug = useHotspotDebug();

  if (!imageSrc) {
    return (
      <div className="text-center py-4">
        <p className="text-sm text-warm-brown/60 italic">
          {UI_TEXT.HOTSPOT_HINT}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="relative">
        <img
          src={imageSrc}
          alt=""
          className="w-full rounded-lg shadow-md"
        />
        <button
          onClick={onSuccess}
          className={`absolute transition-opacity cursor-pointer rounded ${
            isDebug
              ? 'bg-red-500/40 border-2 border-red-500 border-dashed'
              : 'opacity-0 hover:opacity-5 hover:bg-amber-200'
          }`}
          style={{
            left: `${hotspot.x}%`,
            top: `${hotspot.y}%`,
            width: `${hotspot.width}%`,
            height: `${hotspot.height}%`,
          }}
          aria-label="Interactive region"
        />
        {isDebug && (
          <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded font-mono">
            x:{hotspot.x}% y:{hotspot.y}% w:{hotspot.width}% h:{hotspot.height}%
          </div>
        )}
      </div>
      <p className="text-sm text-warm-brown/60 italic text-center">
        {UI_TEXT.HOTSPOT_HINT}
      </p>
      {isDebug && (
        <p className="text-xs text-center text-red-600 font-mono">
          Debug mode: Hotspot visible. Remove ?debug=hotspot to hide.
        </p>
      )}
    </div>
  );
}
