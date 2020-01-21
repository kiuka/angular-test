import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { testReducers } from './test.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  test: testReducers
}
