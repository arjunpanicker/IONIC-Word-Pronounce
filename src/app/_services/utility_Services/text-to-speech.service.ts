import { Injectable } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {

  constructor(private _tts: TextToSpeech) { }

  public getSpeach(text: string): Promise<any> {
    return this._tts.speak(text);
  }
}
