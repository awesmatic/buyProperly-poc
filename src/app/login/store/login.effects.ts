import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as LoginActions from './login.actions';
import { LoginService } from '../../services/login.service';
import { mergeMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class LoginEffects {
  constructor(
    private actions$: Actions,
    private loginDetailsService: LoginService
  ) {}

  loadLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.LoginActionTypes.LoadLogin),
      mergeMap((authData: LoginActions.LoadLogin) =>
        this.loginDetailsService
          .getLoginDetails(authData.payload.email, authData.payload.password)
          .pipe(
            map((users) => new LoginActions.LoadLoginSuccess({ data: users })),
            catchError((err) =>
              of(new LoginActions.LoadLoginFailure({ error: err }))
            )
          )
      )
    )
  );
}
