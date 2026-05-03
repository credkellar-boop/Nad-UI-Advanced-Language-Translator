# Nad-UI-Advanced-Language-Translator

![Build Status](https://github.com/credkellar-boop/Nad-UI-Advanced-Language-Translator/actions/workflows/ci.yml/badge.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![TypeScript](https://img.shields.io/badge/language-TypeScript-blue.svg)
![Version](https://img.shields.io/badge/version-1.1.0-green.svg)

A type-safe, high-performance translation engine for modern UIs. Built with **TypeScript**, **i18next**, and **Zod**, Nad-UI offers dynamic language switching and strict schema validation. Optimized for developers building scalable, reliable, and easily localized web applications.

## 🚀 Key Features

*   **Dynamic Language Registration**: Create and add new languages at runtime without rebuilding.
*   **Strict Type Safety**: Full TypeScript support for translation keys and resources.
*   **Robust Error Handling**: Integrated warning system for missing keys or invalid configurations.
*   **Automated Testing**: CI/CD ready with GitHub Actions and Jest.

---

## 🎨 Create Your Own Language

You can dynamically add any language at runtime without editing the source code:

```typescript
const translator = new NadTranslator();

translator.addCustomLanguage('fr', {
  welcome: "Bienvenue sur Nad-UI",
  description: "Service de traduction activé."
});

await translator.setLanguage('fr');
console.log(translator.translate('welcome')); 
// Output: "Bienvenue sur Nad-UI"
