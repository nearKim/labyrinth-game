import { useState, useEffect, type ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import clsx from 'clsx';
import { GlobalAudio } from './GlobalAudio';
import { SanityOverlay } from './SanityOverlay';
import { GhostSystems } from './GhostSystems';
import { SettingsButton } from './SettingsButton';
import { SettingsPanel } from './SettingsPanel';
import { useSettingsStore } from '../store/settingsStore';

export function GameLayout(): ReactElement {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { fontSize, darkMode } = useSettingsStore();

  // Apply font size to html element so rem units scale
  useEffect(() => {
    document.documentElement.setAttribute('data-font-size', fontSize);
  }, [fontSize]);

  return (
    <div
      className={clsx(
        'min-h-screen bg-cream font-serif transition-colors duration-300',
        darkMode && 'dark'
      )}
    >
      <GlobalAudio />
      <SanityOverlay />
      <GhostSystems />
      <SettingsButton
        onClick={() => setIsSettingsOpen(true)}
        isOpen={isSettingsOpen}
      />
      <SettingsPanel
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <Outlet />
      </main>
    </div>
  );
}
