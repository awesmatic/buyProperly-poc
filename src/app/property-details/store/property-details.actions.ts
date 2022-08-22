import { Action } from '@ngrx/store';
import { PropertyDetailsModel } from '../propertyDetails.model';

export enum PropertyActionTypes {
  LoadPropertiesDetails = '[Property]Load Properties Details',
  LoadPropertiesDetailsSuccess = '[Property]Load Properties Details Success',
  LoadPropertiesDetailsFailure = '[Property]Load Properties Details Failure',
}

export class LoadPropertiesDetails implements Action {
  readonly type = PropertyActionTypes.LoadPropertiesDetails;
  constructor() {}
}
export class LoadPropertiesDetailsSuccess implements Action {
  readonly type = PropertyActionTypes.LoadPropertiesDetailsSuccess;
  constructor(public payload: PropertyDetailsModel[]) {}
}
export class LoadPropertiesDetailsFailure implements Action {
  readonly type = PropertyActionTypes.LoadPropertiesDetailsFailure;
  constructor(public payload: { error: string }) {}
}
export type PropertyActions =
  | LoadPropertiesDetails
  | LoadPropertiesDetailsSuccess
  | LoadPropertiesDetailsFailure;
