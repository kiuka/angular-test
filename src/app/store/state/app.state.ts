import { initialGameState, IGameState } from './game.state';
import { IAuthState, initialAuthState } from './auth.state';

export interface IAppState {
  auth: IAuthState
  game: IGameState
}

export const initialAppState: IAppState = {
  auth: initialAuthState,
  game: initialGameState
};

export const getInitialState = (): IAppState => {
  return initialAppState;
};
