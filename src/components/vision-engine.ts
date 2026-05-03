import Tesseract from 'tesseract.js';

export class VisionEngine {
  // Capture a frame from a video stream
  public async captureAndProcess(videoElement: HTMLVideoElement): Promise<string> {
    const canvas = document.createElement('canvas');
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    canvas.getContext('2d')?.drawImage(videoElement, 0, 0);
    
    const imageData = canvas.toDataURL('image/png');
    const { data: { text } } = await Tesseract.recognize(imageData, 'eng');
    return text;
  }
}
