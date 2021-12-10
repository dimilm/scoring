import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GAME_ROUNDS } from '../mock/mock-score';
import { GameRound } from '../model/game-round';

@Injectable({
  providedIn: 'root'
})
export class GameRoundService {

  constructor() { }

  getGameRounds():Observable<GameRound[]>{
    const gameRounds = of(GAME_ROUNDS);
    return gameRounds;
  }
}
