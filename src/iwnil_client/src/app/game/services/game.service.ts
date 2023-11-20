import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { gameFeatureSelector } from 'src/app/game/store/selectors';
import { NewGameResponseInterface } from 'src/app/menu/types/new-game-response.interface';
import { CellTypes } from 'src/app/shared/data/cell-types.enum';
import { GameInterface } from 'src/app/shared/types/game.interface';
import { urls } from 'src/app/shared/urls';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  game: GameInterface;

  constructor(private http: HttpClient, private store: Store) {
    this.store
      .pipe(select(gameFeatureSelector))
      .subscribe((game) => (this.game = game));
  }

  public move(
    row: number,
    column: number,
    board: number[][]
  ): Observable<NewGameResponseInterface> {
    console.log(row, column, board);

    let tempGame: GameInterface = {
      firstPlayer: this.game.firstPlayer,
      secondPlayer: this.game.secondPlayer,
      board: board.map((row) => [...row]),
      nextMove: this.game.nextMove,
      gameStatus: this.game.gameStatus,
      aiType: this.game.aiType,
    } as GameInterface;

    tempGame.board[row][column] = CellTypes.NEW_MOVE;

    return this.http.post<NewGameResponseInterface>(urls.move, tempGame);
  }
}
