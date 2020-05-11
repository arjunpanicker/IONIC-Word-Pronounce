import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IBoyRoutine, IBoyRoutineList } from '../models/boy_routine.model';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  private _favouriteLettersList: IBoyRoutineList;
  public favouriteLetters: Subject<IBoyRoutineList> = new Subject<IBoyRoutineList>();

  constructor() {
    this._favouriteLettersList = {
      letters: []
    };
  }

  public get favouriteLettersList(): IBoyRoutineList {
    return this._favouriteLettersList;
  }

  /**
   * This method adds a letter object
   * @param letter Letter object to be added
   */
  public addTofavouriteLetters(letter: IBoyRoutine): void {
    this._favouriteLettersList.letters.push(letter);
    this.favouriteLetters.next(this._favouriteLettersList);
  }

  /**
   * This method removes a letter object
   * @param letter Letter object to be removed
   */
  public removeFromFavourites(letter: IBoyRoutine): void {
    this._favouriteLettersList.letters.splice(this._favouriteLettersList.letters.indexOf(letter), 1);
    this.favouriteLetters.next(this._favouriteLettersList);
  }
}
