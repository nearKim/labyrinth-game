import { useMemo, type ReactElement } from 'react';
import { useGameStore } from '../store/gameStore';
import { calculateSanityFilters, buildFilterString } from '../utils';
import { SANITY } from '../constants';

/**
 * Sanity overlay component.
 * Applies CSS filters based on sanity level to create horror atmosphere.
 * Single Responsibility: visual filter effects only.
 */
export function SanityOverlay(): ReactElement {
  const sanity = useGameStore((state) => state.sanity);

  const { filter, bgOpacity, mixBlendMode } = useMemo(() => {
    const filters = calculateSanityFilters(sanity);
    return {
      filter: buildFilterString(filters),
      bgOpacity: filters.bgOpacity,
      mixBlendMode: sanity < SANITY.THRESHOLD_DANGER ? 'difference' : 'normal',
    };
  }, [sanity]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 transition-all duration-1000"
      style={{
        filter,
        backgroundColor: `rgba(10, 10, 10, ${bgOpacity})`,
        mixBlendMode: mixBlendMode as React.CSSProperties['mixBlendMode'],
      }}
    />
  );
}
