import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action, Store, select } from '@ngrx/store';
import * as propertyActions from './property-details.actions';
import { PropertyDetailsService } from '../../services/property-details.service';
import {
  mergeMap,
  map,
  catchError,
  withLatestFrom,
  switchMap,
} from 'rxjs/operators';
import * as fromProperty from './property-details.selectors';
import { empty } from 'rxjs/internal/observable/empty';

@Injectable()
export class PropertyDetailsEffects {
  constructor(
    private actions$: Actions,
    private propertiesDetailsService: PropertyDetailsService,
    private store: Store<any>
  ) {}

  loadProperties$ = createEffect(() =>
    this.actions$.pipe(
      ofType(propertyActions.PropertyActionTypes.LoadPropertiesDetails),
      mergeMap((data: propertyActions.LoadPropertiesDetails) =>
        this.propertiesDetailsService.getPropertyDetails(data.payload.id).pipe(
          map(
            (users) => new propertyActions.LoadPropertiesDetailsSuccess(users)
          ),
          catchError((err) =>
            of(new propertyActions.LoadPropertiesDetailsFailure(err))
          )
        )
      )
    )
  );

  // testing code

  // loadProperties$: Observable<Action> = this.actions$.pipe(
  //   ofType(propertyActions.PropertyActionTypes.LoadPropertiesDetails),
  //   withLatestFrom(this.store.pipe(select(fromProperty.getLoaded))),
  //   switchMap(([, loaded]) => {
  //     if (loaded) {
  //       return empty();
  //     }

  //     console.log('LOADING DATA', loaded);

  //     return this.propertiesDetailsService.getPropertyDetails().pipe(
  //       map((properties) => {
  //         return new propertyActions.LoadPropertiesDetailsSuccess(properties);
  //       }),
  //       catchError((err) =>
  //         of(new propertyActions.LoadPropertiesDetailsFailure(err))
  //       )
  //     );
  //   })
  // );
}
