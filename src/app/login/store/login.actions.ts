import { Action } from '@ngrx/store';
import { LoginModel } from '../login.model';

export enum LoginActionTypes {
  LoadLogin = '[Login]Load Login',
  LoadLoginSuccess = '[Login]Load Login Success',
  LoadLoginFailure = '[Login]Load Login Failure',
}

export class LoadLogin implements Action {
  readonly type = LoginActionTypes.LoadLogin;
  constructor(public payload: { email: string; password: string }) {}
  // props<{ credentials: Credentials }>()
}
export class LoadLoginSuccess implements Action {
  readonly type = LoginActionTypes.LoadLoginSuccess;
  constructor(public payload: { data: LoginModel[] }) {}
}
export class LoadLoginFailure implements Action {
  readonly type = LoginActionTypes.LoadLoginFailure;
  constructor(public payload: { error: string }) {}
}
export type LoginActions = LoadLogin | LoadLoginSuccess | LoadLoginFailure;

// import { createAction, props } from '@ngrx/store';
// import { User } from '../entity';

// export const USER_LOGIN = '[Login Page] Login';
// export const USER_LOGIN_SUCCESS = '[Login Page] Login Success';
// export const USER_LOGIN_FAILURE = '[Login Page] Login Failure';

// export const login = createAction(
//   USER_LOGIN,
//   props<{user: User}>()
// );

// export const loginSuccess = createAction(
//   USER_LOGIN_SUCCESS,
//   props<any>()
// )

// export const loginFailure = createAction(
//   USER_LOGIN_FAILURE,
//   props<{message: string}>()
// )
