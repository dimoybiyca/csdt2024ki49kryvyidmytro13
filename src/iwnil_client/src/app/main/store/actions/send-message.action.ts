import { createAction, props } from '@ngrx/store';
import { SendMessageResponseInterface } from 'src/app/main/types/send-message-response.interface';

enum ActionTypes {
  SEND_MESSAGE = '[Main] Send message',
  SEND_MESSAGE_SUCCESS = '[Main] Send message success',
  SEND_MESSAGE_FAILURE = '[Main] Send message failure',
}

export const sendMessageAction = createAction(
  ActionTypes.SEND_MESSAGE,
  props<{ message: string }>()
);

export const sendMessageSuccessAction = createAction(
  ActionTypes.SEND_MESSAGE_SUCCESS,
  props<{ response: SendMessageResponseInterface }>()
);

export const sendMessageFailureAction = createAction(
  ActionTypes.SEND_MESSAGE_FAILURE
);
