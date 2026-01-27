import { Outlet } from 'react-router-dom';
import { GlobalAudio } from './GlobalAudio';
import { SanityOverlay } from './SanityOverlay';
import { GhostSystems } from './GhostSystems';

export function GameLayout() {
  return (
    <div className="min-h-screen bg-cream font-serif">
      <GlobalAudio />
      <SanityOverlay />
      <GhostSystems />
      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <Outlet />
      </main>
    </div>
  );
}
