import { Component, OnInit } from '@angular/core';
import { GameRound } from '../model/game-round';
import { GameRoundService } from '../service/game-round.service';

@Component({
  selector: 'app-game-round-list',
  templateUrl: './game-round-list.component.html',
  styleUrls: ['./game-round-list.component.scss']
})
export class GameRoundListComponent implements OnInit {
  gameRounds: GameRound[] = [];

  constructor(private gameRoundService: GameRoundService) {}

  ngOnInit(): void {
    this.loadGameRounds();
  }

  loadGameRounds(): void {
    this.gameRoundService
      .getGameRounds()
      .subscribe((gr) => (this.gameRounds = gr));
  }
}
