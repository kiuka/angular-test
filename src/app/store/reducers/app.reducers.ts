import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { gameReducers } from './game.reducers';
import { authReducers } from './auth.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  auth: authReducers,
  game: gameReducers
};
