import { Action } from '@ngrx/store';
import { PropertyDetailsModel } from '../propertyDetails.model';

export enum PropertyActionTypes {
  LoadPropertiesDetails = '[Property]Load Properties Details',
  LoadPropertiesDetailsSuccess = '[Property]Load Properties Details Success',
  LoadPropertiesDetailsFailure = '[Property]Load Properties Details Failure',
}

export class LoadPropertiesDetails implements Action {
  readonly type = PropertyActionTypes.LoadPropertiesDetails;
  constructor(public payload: { id: string }) {}
}
export class LoadPropertiesDetailsSuccess implements Action {
  readonly type = PropertyActionTypes.LoadPropertiesDetailsSuccess;
  constructor(public payload: any) {}
}
export class LoadPropertiesDetailsFailure implements Action {
  readonly type = PropertyActionTypes.LoadPropertiesDetailsFailure;
  constructor(public payload: { error: string }) {}
}
export type PropertyActions =
  | LoadPropertiesDetails
  | LoadPropertiesDetailsSuccess
  | LoadPropertiesDetailsFailure;
