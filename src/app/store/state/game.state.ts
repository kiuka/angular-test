import { ICard } from '../../interfaces/card.interface';

export interface IGameState {
  status: string
  tries: number
  cards: ICard[]
}

export const initialGameState: IGameState = {
  status: 'unloaded',
  tries: 0,
  cards: []
};
