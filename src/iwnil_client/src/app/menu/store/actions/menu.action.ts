import { createAction, props } from '@ngrx/store';
import { NewGameResponseInterface } from 'src/app/menu/types/new-game-response.interface';

enum ActionTypes {
  NEW_GAME = '[Menu] New game',
  NEW_GAME_SUCCESS = '[Menu] New game success',
  NEW_GAME_FAILURE = '[Menu] New game failure',

  LOAD_GAME = '[Menu] Load game',
  LOAD_GAME_SUCCESS = '[Menu] Load game success',
  LOAD_GAME_FAILURE = '[Menu] Load game failure',

  SAVE_GAME = '[Menu] Save game',
  SAVE_GAME_SUCCESS = '[Menu] Save game success',
  SAVE_GAME_FAILURE = '[Menu] Save game failure',
}

export const newGameAction = createAction(ActionTypes.NEW_GAME);

export const newGameSuccessAction = createAction(
  ActionTypes.NEW_GAME_SUCCESS,
  props<NewGameResponseInterface>()
);

export const newGameFailureAction = createAction(ActionTypes.NEW_GAME_FAILURE);
