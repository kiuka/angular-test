import { IScore } from '../interfaces/score.interface';

export class Score implements IScore {
  name!: string;
  score!: number;

  constructor(name: string, score: number) {
    this.name = name;
    this.score = score;
  }
}
