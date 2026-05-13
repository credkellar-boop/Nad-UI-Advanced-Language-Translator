import i18next, { i18n } from 'i18next';
import { ResourceSchema, TranslationResource, TranslatorOptions } from './types';
import { TranslationError } from './utils/errors';

export class NadTranslator {
  private i18nInstance: i18n;
  private currentLanguage: string;

  constructor(options: TranslatorOptions = {}) {
    this.currentLanguage = options.fallbackLng || 'en';
    this.i18nInstance = i18next.createInstance();
    
    this.i18nInstance.init({
      lng: this.currentLanguage,
      fallbackLng: this.currentLanguage,
      resources: {},
      returnNull: false,
      debug: options.debug || false,
    });
  }

  /**
   * Dynamically registers a custom language dictionary at runtime.
   * Validates the input structure using Zod schemas.
   */
  public addCustomLanguage(lng: string, resources: TranslationResource): void {
    const validation = ResourceSchema.safeParse(resources);
    if (!validation.success) {
      throw new TranslationError(`Invalid translation resource schema provided for language: "${lng}"`);
    }

    // Deep merge resources into the default 'translation' namespace
    this.i18nInstance.addResourceBundle(lng, 'translation', validation.data, true, true);
  }

  /**
   * Asynchronously switches the active language context.
   */
  public async setLanguage(lng: string): Promise<void> {
    try {
      await this.i18nInstance.changeLanguage(lng);
      this.currentLanguage = lng;
    } catch (error) {
      throw new TranslationError(`Failed to set active language to: "${lng}"`);
    }
  }

  /**
   * Resolves a key to its localized string. Logs integrated warnings if missing.
   */
  public translate(key: string, interpolationParams?: Record<string, unknown>): string {
    if (!this.i18nInstance.exists(key)) {
      console.warn(`[Nad-UI Warning]: Missing translation key "${key}" for locale "${this.currentLanguage}"`);
    }

    const value = this.i18nInstance.t(key, interpolationParams as any);
    return typeof value === 'string' ? value : key;
  }

  /**
   * Returns the currently active language code.
   */
  public getLanguage(): string {
    return this.currentLanguage;
  }
}

export * from './types';
export * from './utils/errors';
