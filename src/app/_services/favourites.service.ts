import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IBoyRoutine, IBoyRoutineList } from '../models/boy_routine.model';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  private _favouriteRoutineList: IBoyRoutineList;
  public favouriteRoutines: Subject<IBoyRoutineList> = new Subject<IBoyRoutineList>();

  constructor() {
    this._favouriteRoutineList = {
      routine: []
    };
  }

  public get favouriteRoutinesList(): IBoyRoutineList {
    return this._favouriteRoutineList;
  }

  /**
   * This method adds a letter object
   * @param routine Letter object to be added
   */
  public addTofavourite(routine: IBoyRoutine): void {
    this._favouriteRoutineList.routine.push(routine);
    this.favouriteRoutines.next(this._favouriteRoutineList);
  }

  /**
   * This method removes a letter object
   * @param routine Letter object to be removed
   */
  public removeFromFavourites(routine: IBoyRoutine): void {
    this._favouriteRoutineList.routine.splice(this._favouriteRoutineList.routine.indexOf(routine), 1);
    this.favouriteRoutines.next(this._favouriteRoutineList);
  }
}
