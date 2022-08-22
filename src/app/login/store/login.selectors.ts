import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginState } from './login.reducer';

const getPropertyFeatureState =
  createFeatureSelector<LoginState>('propertiesState');
export const getLoginDetails = createSelector(
  getPropertyFeatureState,
  //   (state) => state.login
  (state) => {
    console.log(state);
    return state.login;
  }
);
export const getError = createSelector(
  getPropertyFeatureState,
  (state) => state.error
);
