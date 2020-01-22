import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameService } from '../services/game.service';
import { IAppState } from '../store/state/app.state';
import { Card } from '../models/card.model';
import { selectCards, selectStatus, selectTries } from '../store/selectors/game.selectors';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  tries = 0;
  status: string | null = null;
  cards: Card[] = [];

  constructor(public gameService: GameService, public store: Store<IAppState>) {
  }

  ngOnInit() {
    this.store.select(selectStatus).subscribe((value: string) => this.status = value);
    this.store.select(selectCards).subscribe((value: Card[]) => this.cards = value);
    this.store.select(selectTries).subscribe((value: number) => this.tries = value);

    this.gameService.start();
  }

  /**
   * Restart game by stop and start
   */
  restart() {
    this.gameService.stop();
    this.gameService.start();
  }

  async turnCard(card: Card) {
    const cards = await this.gameService.getPairs();

    // already turned 2 cards wait to finish
    if (cards && cards.length > 1) {
      return;
    }

    card.turn();

    await this.gameService.checkPairs();
    await this.gameService.checkIfFinished();
  }
}
