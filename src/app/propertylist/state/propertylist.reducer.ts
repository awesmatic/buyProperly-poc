import { Action } from '@ngrx/store';
import { IProperty } from '../property';
import { PropertyActions, PropertyActionTypes } from './propertylist.actions';

export const propertyListFeatureKey = 'PropertiesState';

export interface PropertiesListState {
  properties: IProperty[];
  error: string;
}
export const initialState: PropertiesListState = {
  properties: [],
  error: '',
};
export function propertiesListReducer(
  state = initialState,
  action: PropertyActions
): PropertiesListState {
  switch (action.type) {
    case PropertyActionTypes.LoadProperties:
      return {
        ...state,
      };
    case PropertyActionTypes.LoadPropertiesSuccess:
      return {
        ...state,
        properties: action.payload.data,
        error: '',
      };
    case PropertyActionTypes.LoadPropertiesFailure:
      return {
        ...state,
        properties: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
}
