import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PropertiesListState } from './propertylist.reducer';

const getPropertyFeatureState =
  createFeatureSelector<PropertiesListState>('propertiesState');
export const getProperties = createSelector(
  getPropertyFeatureState,
  (state) => state.properties
);
export const getError = createSelector(
  getPropertyFeatureState,
  (state) => state.error
);
