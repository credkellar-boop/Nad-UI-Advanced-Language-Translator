export class SpeechEngine {
  private synthesis: any;
  private recognition: any;

  constructor() {
    // Check if we are in a browser environment
    if (typeof window !== 'undefined') {
      this.synthesis = window.speechSynthesis;
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        this.recognition = new SpeechRecognition();
      }
    }
  }

  public speak(text: string, lang: string = 'en-US'): void {
    if (!this.synthesis) {
      console.warn('Speech synthesis not supported in this environment.');
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    this.synthesis.speak(utterance);
  }

  public async listen(): Promise<string> {
    if (!this.recognition) {
      throw new Error('Speech recognition not supported in this environment.');
    }
    return new Promise((resolve, reject) => {
      this.recognition.onresult = (event: any) => resolve(event.results[0][0].transcript);
      this.recognition.onerror = (err: any) => reject(err);
      this.recognition.start();
    });
  }
}
// Inside SpeechEngine
public speak(text: string, lang: string = 'en-US'): void {
    if (!this.synthesis || typeof SpeechSynthesisUtterance === 'undefined') {
        console.warn('Speech synthesis not supported.');
        return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    // ...
}
