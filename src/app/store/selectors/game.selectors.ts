import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IGameState } from '../state/game.state';
import { Card } from '../../models/card.model';

export const selectGame = (state: IAppState) => state.game;

export const selectStatus = createSelector(
  selectGame,
  (state: IGameState) => state.status
);

export const selectCards = createSelector(
  selectGame,
  (state: IGameState) => state.cards
);

export const selectTries = createSelector(
  selectGame,
  (state: IGameState) => state.tries
);
