import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { MenuService } from 'src/app/menu/services/menu.service';
import {
  newGameAction,
  newGameFailureAction,
  newGameSuccessAction,
} from 'src/app/menu/store/actions/menu.action';
import { NewGameResponseInterface } from 'src/app/menu/types/new-game-response.interface';

@Injectable()
export class NewGameEffect {
  newGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(newGameAction),
      switchMap(({ firstPlayer, secondPlayer, aiType }) => {
        return this.menuService.newGame(firstPlayer, secondPlayer, aiType).pipe(
          map((response: NewGameResponseInterface) => {
            return newGameSuccessAction(response);
          }),

          catchError(() => {
            return of(newGameFailureAction());
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private menuService: MenuService) {}
}
