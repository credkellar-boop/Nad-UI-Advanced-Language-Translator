import NadTranslator from '../src/index';

describe('Custom Language Feature', () => {
  const translator = new NadTranslator();

  test('should allow user to create and use a custom language', async () => {
    // 1. Create a custom "Pirate" language
    translator.addCustomLanguage('pirate', {
      welcome: "Ahoy, welcome to Nad-UI!",
      description: "The sails be set for translation."
    });

    // 2. Switch to it
    await translator.setLanguage('pirate');

    // 3. Verify it works
    expect(translator.translate('welcome')).toBe("Ahoy, welcome to Nad-UI!");
  });
});
