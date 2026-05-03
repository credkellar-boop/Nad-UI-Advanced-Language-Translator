## 🎨 Create Your Own Language

You can dynamically add any language at runtime without editing the source code:
```typescript
const translator = new NadTranslator();

translator.addCustomLanguage('fr', {
  welcome: "Bienvenue sur Nad-UI",
  description: "Service de traduction activé."
});

await translator.setLanguage('fr');
console.log(translator.translate('welcome')); // Output: Bienvenue sur Nad-UI
