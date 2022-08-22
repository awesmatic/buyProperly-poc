import { Action } from '@ngrx/store';
import { IProperty } from '../property';

export enum PropertyActionTypes {
  LoadProperties = '[Property]Load Properties',
  LoadPropertiesSuccess = '[Property]Load Properties Success',
  LoadPropertiesFailure = '[Property]Load Properties Failure',
}

export class LoadProperties implements Action {
  readonly type = PropertyActionTypes.LoadProperties;
}
export class LoadPropertiesSuccess implements Action {
  readonly type = PropertyActionTypes.LoadPropertiesSuccess;
  constructor(public payload: { data: IProperty[] }) {}
}
export class LoadPropertiesFailure implements Action {
  readonly type = PropertyActionTypes.LoadPropertiesFailure;
  constructor(public payload: { error: string }) {}
}
export type PropertyActions =
  | LoadProperties
  | LoadPropertiesSuccess
  | LoadPropertiesFailure;
