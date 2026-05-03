export class SpeechEngine {
  private synthesis = window.speechSynthesis;
  private Recognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition;

  // Speak text in a specific language
  public speak(text: string, lang: string = 'en-US') {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    this.synthesis.speak(utterance);
  }

  // Record voice and return text
  public async listen(): Promise<string> {
    return new Promise((resolve, reject) => {
      const recognition = new this.Recognition();
      recognition.onresult = (event: any) => resolve(event.results[0][0].transcript);
      recognition.onerror = (err: any) => reject(err);
      recognition.start();
    });
  }
}
