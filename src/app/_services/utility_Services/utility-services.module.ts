import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextToSpeechService } from './text-to-speech.service';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    TextToSpeech,
    TextToSpeechService
  ]
})
export class UtilityServicesModule { }
