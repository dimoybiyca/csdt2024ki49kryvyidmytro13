import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { MenuService } from 'src/app/menu/services/menu.service';
import {
  saveGameAction,
  saveGameFailureAction,
  saveGameSuccessAction,
} from 'src/app/menu/store/actions/menu.action';
import { NewGameResponseInterface } from 'src/app/menu/types/new-game-response.interface';

@Injectable()
export class SaveGameEffect {
  saveGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveGameAction),
      switchMap(() => {
        return this.menuService.saveGame().pipe(
          map((response: NewGameResponseInterface) => {
            return saveGameSuccessAction(response);
          }),

          catchError(() => {
            return of(saveGameFailureAction());
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private menuService: MenuService) {}
}
