import { Component, OnInit } from '@angular/core';
import { FavouritesService } from '../../_services/favourites.service';
import { IBoyRoutineList } from '../../models/boy_routine.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  public favouriteRoutine: IBoyRoutineList;

  constructor(
    private _favouritesService: FavouritesService
  ) {}

  public ngOnInit() {
    this.favouriteRoutine = this._favouritesService.favouriteLettersList;
    this._favouritesService.favouriteLetters.subscribe((favList) => {
      this.favouriteRoutine = favList;
    });
  }

}
