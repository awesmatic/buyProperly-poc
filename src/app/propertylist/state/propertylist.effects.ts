import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as propertyActions from './propertylist.actions';
import { PropertyDataService } from '../../services/property-data.service';
import { mergeMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class PropertylistEffects {
  constructor(
    private actions$: Actions,
    private propertiesListService: PropertyDataService
  ) {}

  // @Effect()
  // loadProperties$: Observable<Action> = this.actions$.pipe(
  //   ofType(propertyActions.PropertyActionTypes.LoadProperties),
  //   mergeMap((action) =>
  //     this.propertyService.getPropertyDetails().pipe(
  //       map(
  //         (users) => new propertyActions.LoadPropertiesSuccess({ data: users })
  //       ),
  //       catchError((err) =>
  //         of(new propertyActions.LoadPropertiesFailure({ error: err }))
  //       )
  //     )
  //   )
  // );
  loadProperties$ = createEffect(() =>
    this.actions$.pipe(
      ofType(propertyActions.PropertyActionTypes.LoadProperties),
      mergeMap((action) =>
        this.propertiesListService.getPropertyDetails().pipe(
          map(
            (users) =>
              new propertyActions.LoadPropertiesSuccess({ data: users })
          ),
          catchError((err) =>
            of(new propertyActions.LoadPropertiesFailure({ error: err }))
          )
        )
      )
    )
  );
}
