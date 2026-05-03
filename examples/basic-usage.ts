import NadTranslator from '../src/index';

const translator = new NadTranslator();

// Demonstrate dynamic language creation
translator.addCustomLanguage('jp', {
  welcome: "Nad-UIへようこそ",
  description: "高度な翻訳サービスが有効です。"
});

async function runExample() {
  await translator.setLanguage('jp');
  console.log('Current Translation:', translator.translate('welcome'));
}

runExample();
