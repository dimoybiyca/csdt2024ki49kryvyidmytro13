import { createAction, props } from '@ngrx/store';
import { NewGameResponseInterface } from 'src/app/menu/types/new-game-response.interface';

enum ActionTypes {
  MOVE = '[Main] Move',
  MOVE_SUCCESS = '[Main] Move success',
  MOVE_FAILURE = '[Main] Move failure',
}

export const moveAction = createAction(
  ActionTypes.MOVE,
  props<{ row: number; column: number; board: number[][] }>()
);

export const moveSuccessAction = createAction(
  ActionTypes.MOVE_SUCCESS,
  props<NewGameResponseInterface>()
);

export const moveFailureAction = createAction(ActionTypes.MOVE_FAILURE);
