export class TranslatorError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TranslatorError';
  }
}

export const handleMissingKey = (key: string): string => {
  console.warn(`[Nad-UI Warning]: Key "${key}" not found.`);
  return `[MISSING_KEY]: ${key}`;
};
