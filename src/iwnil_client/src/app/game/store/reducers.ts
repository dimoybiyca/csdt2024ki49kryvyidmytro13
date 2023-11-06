import { Action, createReducer, on } from '@ngrx/store';
import { moveSuccessAction } from 'src/app/game/store/actions/move-action';
import { GameStateInterface } from 'src/app/game/types/game-state.interface';
import { newGameSuccessAction } from 'src/app/menu/store/actions/menu.action';

const initialState: GameStateInterface = {
  isLoadingMove: false,
  isGameInitialized: false,
  board: null,
  firstPlayer: null,
  secondPlayer: null,
  nextMove: null,
  gameStatus: null,
};

const reducer = createReducer(
  initialState,
  on(
    newGameSuccessAction,
    (state, action): GameStateInterface => ({
      ...state,
      ...action,
      isGameInitialized: true,
    })
  ),
  on(
    moveSuccessAction,
    (state, action): GameStateInterface => ({
      ...state,
      ...action,
      isLoadingMove: false,
    })
  )
);

export function gameReducers(state: GameStateInterface, action: Action) {
  return reducer(state, action);
}
