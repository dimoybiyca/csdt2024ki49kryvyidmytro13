import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  firstPlayerSelector,
  gameStatusSelector,
  secondPlayerSelector,
} from 'src/app/game/store/selectors';
import { GameStatus } from 'src/app/shared/data/game-status.enum';
import { PlayerType } from 'src/app/shared/types/player.type';

@Component({
  selector: 'iwnil-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  $firstPlayer: Observable<PlayerType | null>;
  $secondPlayer: Observable<PlayerType | null>;
  $gameStatus: Observable<GameStatus | null>;

  private status: Record<string, string> = {
    IN_PROGRES: 'In progres',
    PLAYER1_WIN: 'Player 1 Win!',
    PLAYER2_WIN: 'Player 2 Win!',
  };

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initListeners();
  }

  initListeners(): void {
    this.$firstPlayer = this.store.pipe(select(firstPlayerSelector));
    this.$secondPlayer = this.store.pipe(select(secondPlayerSelector));
    this.$gameStatus = this.store.pipe(select(gameStatusSelector));
  }

  public getStatus(gameStatus: GameStatus): string {
    console.log(gameStatus);

    return this.status[gameStatus.toLocaleString()];
  }
}
