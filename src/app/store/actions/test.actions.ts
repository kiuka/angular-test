import { Action } from '@ngrx/store';

export enum ETestActions {
  SetTest = '[Test] set test'
}

export class SetTest implements Action {
  public readonly type = ETestActions.SetTest
  constructor(public message: string) {}
}

export type TestActions = SetTest
