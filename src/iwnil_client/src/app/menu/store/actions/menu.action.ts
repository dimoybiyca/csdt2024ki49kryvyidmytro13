import { createAction, props } from '@ngrx/store';
import { NewGameResponseInterface } from 'src/app/menu/types/new-game-response.interface';
import { SaveInterface } from 'src/app/menu/types/save.interface.ts';
import { PlayerType } from 'src/app/shared/types/player.type';

enum ActionTypes {
  NEW_GAME = '[Menu] New game',
  NEW_GAME_SUCCESS = '[Menu] New game success',
  NEW_GAME_FAILURE = '[Menu] New game failure',

  LOAD_SAVES = '[Menu] Load saves',
  LOAD_SAVES_SUCCESS = '[Menu] Load saves success',
  LOAD_SAVES_FAILURE = '[Menu] Load saves failure',

  LOAD_GAME = '[Menu] Load game',

  SAVE_GAME = '[Menu] Save game',
  SAVE_GAME_SUCCESS = '[Menu] Save game success',
  SAVE_GAME_FAILURE = '[Menu] Save game failure',

  DELETE_SAVE = '[Menu] Delete save',
  DELETE_SAVE_SUCCESS = '[Menu] Delete save success',
  DELETE_SAVE_FAILURE = '[Menu] Delete save failure',
}

export const newGameAction = createAction(
  ActionTypes.NEW_GAME,
  props<{ firstPlayer: PlayerType; secondPlayer: PlayerType; aiType: string }>()
);

export const newGameSuccessAction = createAction(
  ActionTypes.NEW_GAME_SUCCESS,
  props<NewGameResponseInterface>()
);

export const newGameFailureAction = createAction(ActionTypes.NEW_GAME_FAILURE);

export const saveGameAction = createAction(ActionTypes.SAVE_GAME);

export const saveGameSuccessAction = createAction(
  ActionTypes.SAVE_GAME_SUCCESS,
  props<NewGameResponseInterface>()
);

export const saveGameFailureAction = createAction(
  ActionTypes.SAVE_GAME_FAILURE
);

export const loadSavesAction = createAction(ActionTypes.LOAD_SAVES);

export const loadSavesSuccessAction = createAction(
  ActionTypes.LOAD_SAVES_SUCCESS,
  props<{ saves: SaveInterface[] }>()
);

export const loadSavesFailureAction = createAction(
  ActionTypes.LOAD_SAVES_FAILURE
);

export const deleteSaveAction = createAction(
  ActionTypes.DELETE_SAVE,
  props<{ id: string }>()
);

export const deleteSavesSuccessAction = createAction(
  ActionTypes.DELETE_SAVE_SUCCESS
);

export const deleteSavesFailureAction = createAction(
  ActionTypes.DELETE_SAVE_FAILURE
);

export const loadGameAction = createAction(
  ActionTypes.LOAD_GAME,
  props<{ save: SaveInterface }>()
);
