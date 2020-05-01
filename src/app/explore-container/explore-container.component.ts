import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy, SimpleChanges, ChangeDetectorRef, OnChanges } from '@angular/core';
import { IBoyRoutineList } from '../models/boy_routine.model';
import { IonSlides, ToastController } from '@ionic/angular';
import { TextToSpeechService } from '../_services/utility_Services/text-to-speech.service';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExploreContainerComponent implements OnChanges {
  @Input('routineList') routineList: IBoyRoutineList;

  @ViewChild('slides', {static: true}) slides: IonSlides;

  constructor(
    private _ttsService: TextToSpeechService,
    private _toastController: ToastController,
    public cdRef: ChangeDetectorRef,
  ) { }

  public ngOnChanges(changes: SimpleChanges) {
    if (this.routineList && this.routineList.routine && this.routineList.routine.length > 0) {
      this.cdRef.detectChanges();
    }
  }

  public previousSlide() {
    this.slides.slidePrev();
  }

  public nextSlide() {
    this.slides.slideNext();
  }

  public pronounce(text: string) {
    this._ttsService.getSpeach(text).then(() => {
      console.log('done!!');
    }).catch(async (error) => {
      const toast = await this._toastController.create({
        message: 'Unable to convert into speech',
        duration: 4000
      });
      toast.present();
    })
  }

}
