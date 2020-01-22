import { Injectable } from '@angular/core';
import { Score } from '../models/score.model';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  key = 'scores';

  constructor() {
  }

  getScores(): Score[] {
    const scores = localStorage.getItem(this.key);

    if (!scores) {
      return [];
    }

    try {
      return JSON.parse(scores);
    } catch (e) {
      // invalid data in scores

      return [];
    }
  }

  /**
   * Save single score
   */
  saveScore(score: Score) {
    const scores = this.getScores();

    scores.push(score);

    this.saveScores(scores);
  }

  /**
   * Save all the scores to localStorage
   */
  saveScores(scores: Score[]): void {
    localStorage.setItem(this.key, JSON.stringify(scores));
  }
}
