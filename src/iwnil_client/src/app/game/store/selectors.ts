import { createSelector } from '@ngrx/store';
import { GameStateInterface } from 'src/app/game/types/game-state.interface';
import { AppStateInterface } from 'src/app/shared/types/app-state.interface';

export const gameFeatureSelector = (
  state: AppStateInterface
): GameStateInterface => state.game;

export const boardSelector = createSelector(
  gameFeatureSelector,
  (state: GameStateInterface) => state.board
);

export const firstPlayerSelector = createSelector(
  gameFeatureSelector,
  (state: GameStateInterface) => state.firstPlayer
);

export const secondPlayerSelector = createSelector(
  gameFeatureSelector,
  (state: GameStateInterface) => state.secondPlayer
);

export const nextMoveSelector = createSelector(
  gameFeatureSelector,
  (state: GameStateInterface) => state.nextMove
);

export const gameStatusSelector = createSelector(
  gameFeatureSelector,
  (state: GameStateInterface) => state.gameStatus
);

export const isGameInitializedSelector = createSelector(
  gameFeatureSelector,
  (state: GameStateInterface) => state.isGameInitialized
);
