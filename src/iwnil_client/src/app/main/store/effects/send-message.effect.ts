import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { MainService } from 'src/app/main/services/main.service';
import {
  sendMessageAction,
  sendMessageFailureAction,
  sendMessageSuccessAction,
} from 'src/app/main/store/actions/send-message.action';
import { SendMessageResponseInterface } from 'src/app/main/types/send-message-response.interface';

@Injectable()
export class SendMessageEffect {
  sendMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(sendMessageAction),
      switchMap(({ message }) => {
        return this.mainService.sendMessage(message).pipe(
          map((response: SendMessageResponseInterface) => {
            return sendMessageSuccessAction({ response });
          }),

          catchError(() => {
            return of(sendMessageFailureAction());
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private mainService: MainService) {}
}
