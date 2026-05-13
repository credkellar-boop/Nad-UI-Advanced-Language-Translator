export class TranslationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TranslationError';
    Object.setPrototypeOf(this, TranslationError.prototype);
  }
}

export class MissingKeyError extends TranslationError {
  constructor(key: string, language: string) {
    super(`Translation key "${key}" is missing for language "${language}".`);
    this.name = 'MissingKeyError';
    Object.setPrototypeOf(this, MissingKeyError.prototype);
  }
}
