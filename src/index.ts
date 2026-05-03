import i18next from 'i18next';
import { defaultResources } from './components/dictionary';
import { TranslationSchema } from './types';

class NadTranslator {
  constructor() {
    this.init();
  }

  private async init() {
    await i18next.init({
      lng: 'en',
      resources: defaultResources,
      fallbackLng: 'en'
    });
  }

  // --- THE NEW FEATURE: CREATE YOUR OWN LANGUAGE ---
  public addCustomLanguage(code: string, translations: TranslationSchema) {
    i18next.addResourceBundle(code, 'translation', translations, true, true);
    console.log(`✨ Custom language "${code}" has been registered!`);
  }

  public translate(key: string): string {
    return i18next.t(key);
  }

  public async setLanguage(lng: string) {
    await i18next.changeLanguage(lng);
  }
}

export default NadTranslator;
