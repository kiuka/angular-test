import { Action } from '@ngrx/store';
import { ICard } from '../../interfaces/card.interface';

export enum EGameActions {
  Start = '[Game] Start',
  Stop = '[Game] Stop',
  Finished = '[Game] Finished',
  IncreaseTries = '[Game] Increase tries'
}

export class Start implements Action {
  public readonly type = EGameActions.Start;

  constructor(public cards: ICard[]) {
  }
}

export class Stop implements Action {
  public readonly type = EGameActions.Stop;
}

export class Finished implements Action {
  public readonly type = EGameActions.Finished;
}

export class IncreaseTries implements Action {
  public readonly type = EGameActions.IncreaseTries;
}

export type GameActions = Start | Stop | Finished | IncreaseTries
