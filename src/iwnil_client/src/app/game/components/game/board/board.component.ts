import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { moveAction } from 'src/app/game/store/actions/move-action';
import {
  boardSelector,
  gameStatusSelector,
  isGameInitializedSelector,
  nextMoveSelector,
} from 'src/app/game/store/selectors';
import { newGameAction } from 'src/app/menu/store/actions/menu.action';
import { CellTypes } from 'src/app/shared/data/cell-types.enum';
import { GameStatus } from 'src/app/shared/data/game-status.enum';

@Component({
  selector: 'iwnil-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  $nextMove: Observable<number | null>;
  $gameStatus: Observable<GameStatus | null>;
  myboard: number[][];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initValues();
    this.initListeners();
    this.initBoard();
  }

  initValues() {
    this.$nextMove = this.store.pipe(select(nextMoveSelector));
    this.$gameStatus = this.store.pipe(select(gameStatusSelector));
  }

  initListeners() {
    this.store
      .pipe(select(boardSelector))
      .subscribe((board) => (this.myboard = board));
  }

  initBoard() {
    this.store
      .pipe(select(isGameInitializedSelector), take(1))
      .subscribe((isGameInitialized) => {
        if (!isGameInitialized) {
          this.store.dispatch(newGameAction());
        }
      });
  }

  onCellClick(row: number, column: number) {
    this.store.dispatch(
      moveAction({ row: row, column: column, board: this.myboard })
    );
  }

  isImage(cellType): boolean {
    return cellType !== CellTypes.EMPTY;
  }

  getImage(cellType): string {
    if (cellType === CellTypes.TIC || cellType === CellTypes.TOE1) {
      return 'assets/img/X.svg';
    } else if (cellType === CellTypes.TAC || cellType == CellTypes.TOE2) {
      return 'assets/img/O.svg';
    }

    return '';
  }
}
