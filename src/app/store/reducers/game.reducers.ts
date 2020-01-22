import { initialGameState, IGameState } from '../state/game.state';
import { EGameActions, GameActions } from '../actions/game.actions';

export const gameReducers = (state = initialGameState, action: GameActions): IGameState => {
  switch (action.type) {
    case EGameActions.Start: {
      return {
        ...state,
        status: 'loaded',
        cards: action.cards
      };
    }

    case EGameActions.Stop: {
      return {
        ...state,
        status: 'unloaded',
        tries: 0,
        cards: []
      };
    }

    case EGameActions.Finished: {
      return {
        ...state,
        status: 'finished',
      };
    }

    case EGameActions.IncreaseTries: {
      return {
        ...state,
        tries: state.tries + 1
      };
    }

    default:
      return state;
  }
};

