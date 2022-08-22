import {
  PropertiesListState,
  propertiesListReducer,
} from '../propertylist/state/propertylist.reducer';

import { ActionReducerMap } from '@ngrx/store';
import * as fromLogin from '../login/store/login.reducer';
import * as fromPropertyDetails from '../property-details/store/property-details.reducer';

export const rootReducer = {};

export interface AppState {
  propertiesList: PropertiesListState;
  [fromLogin.loginFeatureKey]: fromLogin.LoginState;
  [fromPropertyDetails.propertyDetailsFeatureKey]: fromPropertyDetails.PropertiesDetailsState;
}

export const reducers: ActionReducerMap<AppState, any> = {
  propertiesList: propertiesListReducer,
  [fromLogin.loginFeatureKey]: fromLogin.loginReducer,
  [fromPropertyDetails.propertyDetailsFeatureKey]:
    fromPropertyDetails.propertiesDetailsReducer,
};
