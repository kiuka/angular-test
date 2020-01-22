import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { gameReducers } from './game.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  game: gameReducers
};
