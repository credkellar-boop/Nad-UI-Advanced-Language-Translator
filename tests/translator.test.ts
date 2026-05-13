import { NadTranslator, TranslationError } from '../src';

describe('NadTranslator Engine', () => {
  let translator: NadTranslator;

  beforeEach(() => {
    translator = new NadTranslator();
    // Suppress console.warn clutter in test output
    jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('successfully registers and translates custom runtime languages', async () => {
    translator.addCustomLanguage('fr', {
      welcome: 'Bienvenue sur Nad-UI',
      description: 'Service de traduction activé.',
    });

    await translator.setLanguage('fr');
    
    expect(translator.translate('welcome')).toBe('Bienvenue sur Nad-UI');
    expect(translator.translate('description')).toBe('Service de traduction activé.');
  });

  test('supports interpolation parameters dynamically', async () => {
    translator.addCustomLanguage('en', {
      greeting: 'Hello {{name}}!',
    });

    await translator.setLanguage('en');
    
    expect(translator.translate('greeting', { name: 'Developer' })).toBe('Hello Developer!');
  });

  test('throws TranslationError when passing invalid schema objects', () => {
    expect(() => {
      // @ts-expect-error intentionally injecting invalid typing for validation testing
      translator.addCustomLanguage('es', 'Invalid Dictionary String');
    }).toThrow(TranslationError);
  });

  test('gracefully outputs a warning and returns key string when translation is missing', async () => {
    await translator.setLanguage('en');
    const result = translator.translate('non_existent_key');
    
    expect(result).toBe('non_existent_key');
    expect(console.warn).toHaveBeenCalledWith(
      expect.stringContaining('[Nad-UI Warning]: Missing translation key "non_existent_key"')
    );
  });
});
