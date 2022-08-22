import { Action } from '@ngrx/store';
import { LoginModel } from '../login.model';
import { LoginActionTypes, LoginActions } from './login.actions';

export const loginFeatureKey = 'LoginDetailsState';

export interface LoginState {
  login: any;
  error: string;
}
export const initialState: LoginState = {
  login: {},
  error: '',
};
export function loginReducer(
  state = initialState,
  action: LoginActions
): LoginState {
  switch (action.type) {
    case LoginActionTypes.LoadLogin:
      return {
        ...state,
      };
    case LoginActionTypes.LoadLoginSuccess:
      return {
        ...state,
        login: action.payload.data,
        error: '',
      };
    case LoginActionTypes.LoadLoginFailure:
      return {
        ...state,
        login: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
}
