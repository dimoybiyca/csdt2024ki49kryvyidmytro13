import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { MenuService } from 'src/app/menu/services/menu.service';
import {
  loadSavesAction,
  loadSavesFailureAction,
  loadSavesSuccessAction,
} from 'src/app/menu/store/actions/menu.action';
import { SaveInterface } from 'src/app/menu/types/save.interface.ts';

@Injectable()
export class LoadSavesEffect {
  loadSaves$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSavesAction),
      switchMap(() => {
        return this.menuService.allSaves().pipe(
          map((saves: SaveInterface[]) => {
            return loadSavesSuccessAction({ saves: saves });
          }),

          catchError(() => {
            return of(loadSavesFailureAction());
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private menuService: MenuService) {}
}
