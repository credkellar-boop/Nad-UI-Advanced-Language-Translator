import Tesseract from 'tesseract.js';

export class VisionEngine {
  public async captureAndProcess(videoElement: HTMLVideoElement): Promise<string> {
    if (typeof document === 'undefined') {
      return "Vision processing unavailable in non-browser environment.";
    }

    const canvas = document.createElement('canvas');
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error("Could not get canvas context");
    
    ctx.drawImage(videoElement, 0, 0);
    const imageData = canvas.toDataURL('image/png');

    const { data: { text } } = await Tesseract.recognize(imageData, 'eng');
    return text;
  }
}
