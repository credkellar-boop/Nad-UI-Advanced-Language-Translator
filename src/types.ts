export interface TranslationSchema {
  welcome: string;
  description: string;
  [key: string]: string; // Allows for custom extra keys
}

export interface LanguageResource {
  translation: TranslationSchema;
}
