import { Action } from '@ngrx/store';
import { PropertyDetailsModel } from '../propertyDetails.model';
import {
  PropertyActions,
  PropertyActionTypes,
} from './property-details.actions';

export const propertyDetailsFeatureKey = 'PropertiesDetailsState';

export interface PropertiesDetailsState {
  properties: PropertyDetailsModel[];
  error: string;
  loaded: boolean;
}
export const initialState: PropertiesDetailsState = {
  properties: [],
  error: '',
  loaded: false,
};
export function propertiesDetailsReducer(
  state = initialState,
  action: PropertyActions
): PropertiesDetailsState {
  switch (action.type) {
    case PropertyActionTypes.LoadPropertiesDetails:
      return {
        ...state,
      };
    case PropertyActionTypes.LoadPropertiesDetailsSuccess:
      return {
        ...state,
        properties: [...action.payload],
        error: '',
      };
    case PropertyActionTypes.LoadPropertiesDetailsFailure:
      return {
        ...state,
        properties: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
}
