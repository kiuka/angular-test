import { initialGameState, IGameState } from './game.state';

export interface IAppState {
  game: IGameState
}

export const initialAppState: IAppState = {
  game: initialGameState
};

export const getInitialState = (): IAppState => {
  return initialAppState;
};
