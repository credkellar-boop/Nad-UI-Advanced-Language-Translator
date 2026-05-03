import { SpeechEngine } from './components/speech-engine';
import { VisionEngine } from './components/vision-engine';
import { Researcher } from './utils/researcher';
import NadTranslator from './translator-core'; // Your previous logic

class NadUIAdvanced {
  public speech = new SpeechEngine();
  public vision = new VisionEngine();
  public researcher = new Researcher();
  private translator = new NadTranslator();

  // The All-in-One Workflow
  public async captureTranslateAndResearch(video: HTMLVideoElement, apiKey: string) {
    // 1. Image to Text
    const rawText = await this.vision.captureAndProcess(video);
    
    // 2. Translate (assuming auto-detect or current language)
    const translatedText = this.translator.translate(rawText);

    // 3. Research Context
    const insight = await this.researcher.researchContext(translatedText, apiKey);

    return { translatedText, insight };
  }
}

export default NadUIAdvanced;
