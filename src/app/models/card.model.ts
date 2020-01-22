import { ICard } from '../interfaces/card.interface';

export class Card implements ICard {
  value!: number;
  isTurned = false;
  isPaired = false;

  constructor(value: number) {
    this.value = value;
  }

  turn(): void {
    if (this.isTurned || this.isPaired) {
      return;
    }

    this.isTurned = true;
  }
}
