import MD5 from 'crypto-js/md5';

/**
 * Creates an MD5 hash of the answer for secure storage.
 * Normalizes input by lowercasing and trimming whitespace.
 */
export function hashAnswer(answer: string): string {
  return MD5(answer.toLowerCase().trim()).toString();
}

/**
 * Validates user input against a stored hash.
 */
export function validateAnswer(input: string, expectedHash: string): boolean {
  return hashAnswer(input) === expectedHash;
}
