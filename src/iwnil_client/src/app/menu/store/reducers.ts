import { Action, createReducer, on } from '@ngrx/store';
import {
  deleteSaveAction,
  loadGameAction,
  loadSavesAction,
  loadSavesSuccessAction,
  newGameAction,
  newGameFailureAction,
  newGameSuccessAction,
} from 'src/app/menu/store/actions/menu.action';
import { MenuStateInterface } from 'src/app/menu/types/menu-state.interface';

const initialState: MenuStateInterface = {
  isLoading: false,
  saves: [],
};

const reducer = createReducer(
  initialState,
  on(
    newGameAction,
    (state): MenuStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    newGameSuccessAction,
    (state): MenuStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    newGameFailureAction,
    (state): MenuStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    loadSavesSuccessAction,
    (state, action): MenuStateInterface => ({
      ...state,
      saves: action.saves,
    })
  ),
  on(
    deleteSaveAction,
    (state, action): MenuStateInterface => ({
      ...state,
      saves: state.saves.filter((state) => state.id != action.id),
    })
  )
);

export function menuReducers(state: MenuStateInterface, action: Action) {
  return reducer(state, action);
}
