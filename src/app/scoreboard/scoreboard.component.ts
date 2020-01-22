import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../services/score.service';
import { IScore } from '../interfaces/score.interface';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  scores: IScore[] = [];

  constructor(private scoreService: ScoreService) {
  }

  ngOnInit() {
    this.populateScores();
  }

  populateScores() {
    this.scores = this.scoreService.getSortedScores();
  }
}
