import { Action, createReducer, on } from '@ngrx/store';
import {
  sendMessageAction,
  sendMessageFailureAction,
  sendMessageSuccessAction,
} from 'src/app/main/store/actions/send-message.action';
import { MainStateInterface } from 'src/app/main/types/main-state.interface';

const initialState: MainStateInterface = {
  message: '',
  isLoadingMessage: false,
  messages: [],
};

const reducer = createReducer(
  initialState,
  on(
    sendMessageAction,
    (state, action): MainStateInterface => ({
      ...state,
      isLoadingMessage: true,
      messages: [...state.messages, { send: action.message, receive: '' }],
    })
  ),
  on(
    sendMessageSuccessAction,
    (state, action): MainStateInterface => ({
      ...state,
      isLoadingMessage: false,
      message: action.response.message,
      messages: state.messages.map((message) => {
        if (message.receive === '') {
          return { send: message.send, receive: action.response.message };
        } else return message;
      }),
    })
  ),
  on(
    sendMessageFailureAction,
    (state): MainStateInterface => ({
      ...state,
      isLoadingMessage: false,
      messages: state.messages.slice(0, -1),
    })
  )
);

export function mainReducers(state: MainStateInterface, action: Action) {
  return reducer(state, action);
}
