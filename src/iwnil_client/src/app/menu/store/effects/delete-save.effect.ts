import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { MenuService } from 'src/app/menu/services/menu.service';
import {
  deleteSaveAction,
  deleteSavesFailureAction,
  deleteSavesSuccessAction,
} from 'src/app/menu/store/actions/menu.action';

@Injectable()
export class DeleteSaveEffect {
  deleteSave$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteSaveAction),
      switchMap(({ id }) => {
        return this.menuService.delete(id).pipe(
          map(() => {
            return deleteSavesSuccessAction();
          }),

          catchError(() => {
            return of(deleteSavesFailureAction());
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private menuService: MenuService) {}
}
