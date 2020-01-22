import { Injectable } from '@angular/core';
import { config } from '../config/config';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { Finished, IncreaseTries, Start, Stop } from '../store/actions/game.actions';
import { ICard } from '../interfaces/card.interface';
import { Card } from '../models/card.model';
import { selectCards, selectTries } from '../store/selectors/game.selectors';
import { take } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { ScoreService } from './score.service';
import { Score } from '../models/score.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(
    private store: Store<IAppState>,
    private scoreService: ScoreService,
    private authService: AuthService
  ) {
  }

  stop() {
    this.store.dispatch(new Stop());
  }

  start() {
    const cards: ICard[] = [];

    Array.from(Array(config.game.number_of_cards).keys()).map(value => {
      const n = value + 1;

      // add twice so will have pairs
      cards.push(
        new Card(n),
        new Card(n)
      );
    });

    this.store.dispatch(new Start(this.shuffle(cards)));
  }

  async checkIfFinished() {
    const cards = await this.store
      .select(selectCards)
      .pipe(take(1))
      .toPromise();

    const unpaired = cards.filter((card: Card) => !card.isPaired);

    if (unpaired.length > 0) {
      return;
    }

    // save score before finish
    await this.saveScore();

    // finish game
    this.store.dispatch(new Finished());
  }

  async checkPairs() {
    const pairs = await this.getPairs();

    if (pairs.length < 2) {
      return;
    }

    // increase tries
    this.store.dispatch(new IncreaseTries());

    if (pairs.length === 2) {
      // mark them paired in case the values equal
      if (pairs[0].value === pairs[1].value) {
        pairs[0].isPaired = true;
        pairs[1].isPaired = true;

        return;
      }

      // otherwise turn the cards back
      pairs[0].isTurned = false;
      pairs[1].isTurned = false;

      return;
    }
  }

  async getPairs() {
    const cards = await this.store
      .select(selectCards)
      .pipe(take(1))
      .toPromise();

    return cards.filter((card: Card) => card.isTurned && !card.isPaired);
  }

  private async saveScore() {
    const tries = await this.store
      .select(selectTries)
      .pipe(take(1))
      .toPromise();

    const authData = this.authService.getAuthData();

    if (!authData) {
      return;
    }

    const score = new Score(authData.username, tries);

    this.scoreService.saveScore(score);
  }

  /**
   * Source: https://gomakethings.com/how-to-shuffle-an-array-with-vanilla-js/
   */
  private shuffle(array: ICard[]) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];

      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
