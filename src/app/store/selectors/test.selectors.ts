import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { ITestState } from '../state/test.state';

export const selectMessage = createSelector(
  (state: IAppState) => state.test,
  (state: ITestState) => state.message
)
