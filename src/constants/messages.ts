/**
 * Game messages and text constants.
 */

export const CREEPY_MESSAGES = [
  "DON'T LEAVE ME",
  "COME BACK",
  "I SEE YOU",
  "WHERE ARE YOU GOING?",
  "RUN AWAY",
] as const;

export const CONSOLE_WARNINGS = {
  CORRUPTION: 'Warning: File corruption detected.',
  INTEGRITY: 'SYSTEM INTEGRITY COMPROMISED',
  WATCHING: 'THEY ARE WATCHING.',
} as const;

export const DEFAULT_TITLE = 'Memory Archive';

export const UI_TEXT = {
  HELP_COMMAND: 'help',
  HELP_PROMPT: 'Type "help" for a hint',
  ANSWER_PLACEHOLDER: 'Type your answer...',
  INSPECTOR_PLACEHOLDER: 'What did you see?',
  SUBMIT_BUTTON: 'Enter',
  ANSWER_BUTTON: 'Answer',
  NOT_FOUND_TITLE: 'Lost in the woods...',
  NOT_FOUND_MESSAGE: "This path doesn't exist.",
  RETURN_BUTTON: 'Return to the beginning',
  URL_HACK_HINT: 'There\'s no input here. Perhaps the answer lies elsewhere...',
  MAGIC_LENS_TITLE: 'Magic Lens',
  MAGIC_LENS_SUBTITLE: 'Reveal hidden secrets',
  CLICK_HINT: 'Some words hold more than meaning...',
  HOTSPOT_HINT: 'Some things respond only to touch.',
} as const;

export const SETTINGS_TEXT = {
  TITLE: 'Settings',
  CLOSE: 'Close',

  // Display section
  DISPLAY_SECTION: 'Display',
  FONT_SIZE_LABEL: 'Font Size',
  FONT_SIZE_SMALL: 'Small',
  FONT_SIZE_MEDIUM: 'Medium',
  FONT_SIZE_LARGE: 'Large',
  DARK_MODE_LABEL: 'Dark Mode',

  // Audio section
  AUDIO_SECTION: 'Audio',
  VOLUME_LABEL: 'Volume',

  // Game section
  GAME_SECTION: 'Game',
  RESET_PROGRESS: 'Reset Progress',
  RESET_CONFIRM_TITLE: 'Reset Progress?',
  RESET_CONFIRM_MESSAGE: 'This will clear all progress and return you to the beginning. This cannot be undone.',
  RESET_CONFIRM_YES: 'Yes, Reset',
  RESET_CONFIRM_NO: 'Cancel',
} as const;
