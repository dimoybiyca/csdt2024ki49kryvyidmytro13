import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { GameService } from 'src/app/game/services/game.service';
import {
  moveAction,
  moveFailureAction,
  moveSuccessAction,
} from 'src/app/game/store/actions/move-action';
import { NewGameResponseInterface } from 'src/app/menu/types/new-game-response.interface';

@Injectable()
export class MoveEffect {
  move$ = createEffect(() =>
    this.actions$.pipe(
      ofType(moveAction),
      switchMap(({ row, column, board }) => {
        return this.gameService.move(row, column, board).pipe(
          map((response: NewGameResponseInterface) => {
            return moveSuccessAction(response);
          }),

          catchError(() => {
            return of(moveFailureAction());
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private gameService: GameService) {}
}
