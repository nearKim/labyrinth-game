import { type ReactElement, useEffect, useRef, useState, useCallback } from 'react';
import { X } from 'lucide-react';
import { useSettingsStore, type FontSize } from '../store/settingsStore';
import { useGameStore } from '../store/gameStore';
import { Slider } from './ui';
import { SETTINGS_TEXT } from '../constants/messages';

export interface SettingsPanelProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

const FONT_SIZE_OPTIONS: readonly { value: FontSize; label: string }[] = [
  { value: 'small', label: SETTINGS_TEXT.FONT_SIZE_SMALL },
  { value: 'medium', label: SETTINGS_TEXT.FONT_SIZE_MEDIUM },
  { value: 'large', label: SETTINGS_TEXT.FONT_SIZE_LARGE },
] as const;

/**
 * Settings panel component.
 * Slide-in panel from right with display, audio, and game settings.
 */
export function SettingsPanel({ isOpen, onClose }: SettingsPanelProps): ReactElement | null {
  const panelRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const { fontSize, darkMode, audioVolume, setFontSize, toggleDarkMode, setAudioVolume } =
    useSettingsStore();
  const resetGame = useGameStore((state) => state.reset);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 200);
  }, [onClose]);

  // Close on click outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    // Delay adding listener to prevent immediate close
    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleClose]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  const handleResetProgress = (): void => {
    resetGame();
    setShowConfirm(false);
    handleClose();
    // Navigate to home
    window.location.hash = '/';
  };

  if (!isOpen && !isClosing) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-void/20 transition-opacity duration-200 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={SETTINGS_TEXT.TITLE}
        className={`fixed top-0 right-0 z-50 h-full w-72 max-w-[85vw] bg-cream shadow-xl ${
          isClosing ? 'settings-panel-exit' : 'settings-panel-enter'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-warm-brown/20">
            <h2 className="text-lg font-serif text-warm-brown">{SETTINGS_TEXT.TITLE}</h2>
            <button
              type="button"
              onClick={handleClose}
              aria-label={SETTINGS_TEXT.CLOSE}
              className="p-1 rounded hover:bg-warm-brown/10 text-warm-brown transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
            {/* Display Section */}
            <section>
              <h3 className="text-sm font-semibold text-warm-brown/80 uppercase tracking-wide mb-3">
                {SETTINGS_TEXT.DISPLAY_SECTION}
              </h3>

              {/* Font Size */}
              <div className="mb-4">
                <label className="block text-sm text-warm-brown mb-2">
                  {SETTINGS_TEXT.FONT_SIZE_LABEL}
                </label>
                <div className="flex gap-2">
                  {FONT_SIZE_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setFontSize(option.value)}
                      className={`flex-1 px-3 py-2 text-sm rounded border transition-colors ${
                        fontSize === option.value
                          ? 'bg-warm-brown text-cream border-warm-brown'
                          : 'bg-transparent text-warm-brown border-warm-brown/30 hover:border-warm-brown/60'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dark Mode */}
              <div className="flex items-center justify-between">
                <label htmlFor="dark-mode-toggle" className="text-sm text-warm-brown">
                  {SETTINGS_TEXT.DARK_MODE_LABEL}
                </label>
                <button
                  id="dark-mode-toggle"
                  type="button"
                  role="switch"
                  aria-checked={darkMode}
                  onClick={toggleDarkMode}
                  className={`relative w-11 h-6 rounded-full transition-colors ${
                    darkMode ? 'bg-warm-brown' : 'bg-warm-brown/30'
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-cream transition-transform ${
                      darkMode ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </section>

            {/* Audio Section */}
            <section>
              <h3 className="text-sm font-semibold text-warm-brown/80 uppercase tracking-wide mb-3">
                {SETTINGS_TEXT.AUDIO_SECTION}
              </h3>
              <Slider
                label={SETTINGS_TEXT.VOLUME_LABEL}
                displayValue={`${Math.round(audioVolume * 100)}%`}
                min={0}
                max={100}
                value={Math.round(audioVolume * 100)}
                onChange={(e) => setAudioVolume(Number(e.target.value) / 100)}
              />
            </section>

            {/* Game Section */}
            <section>
              <h3 className="text-sm font-semibold text-warm-brown/80 uppercase tracking-wide mb-3">
                {SETTINGS_TEXT.GAME_SECTION}
              </h3>

              {!showConfirm ? (
                <button
                  type="button"
                  onClick={() => setShowConfirm(true)}
                  className="w-full px-4 py-2 text-sm rounded border border-red-400/50 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                >
                  {SETTINGS_TEXT.RESET_PROGRESS}
                </button>
              ) : (
                <div className="p-3 rounded bg-amber-50 dark:bg-amber-100 border border-amber-200">
                  <p className="text-sm text-amber-900 dark:text-amber-900 mb-3">
                    {SETTINGS_TEXT.RESET_CONFIRM_MESSAGE}
                  </p>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={handleResetProgress}
                      className="flex-1 px-3 py-2 text-sm rounded bg-red-500 text-white hover:bg-red-600 transition-colors"
                    >
                      {SETTINGS_TEXT.RESET_CONFIRM_YES}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowConfirm(false)}
                      className="flex-1 px-3 py-2 text-sm rounded border border-warm-brown/30 text-warm-brown hover:bg-warm-brown/10 transition-colors"
                    >
                      {SETTINGS_TEXT.RESET_CONFIRM_NO}
                    </button>
                  </div>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
