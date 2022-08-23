import {
  createFeatureSelector,
  createSelector,
  ActionReducerMap,
} from '@ngrx/store';
import { PropertiesDetailsState } from './property-details.reducer';
import * as fromPropertyDetails from './property-details.reducer';

const getPropertyFeatureState = createFeatureSelector<PropertiesDetailsState>(
  fromPropertyDetails.propertyDetailsFeatureKey
);
export const getProperties = createSelector(
  getPropertyFeatureState,
  (state) => {
    console.log(state);
    return state.properties;
  }
);
export const getError = createSelector(
  getPropertyFeatureState,
  (state) => state.error
);

export const getLoaded = createSelector(getPropertyFeatureState, (state) => {
  return state.loaded;
});
