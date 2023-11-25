import { createSelector } from '@ngrx/store';
import { MenuStateInterface } from 'src/app/menu/types/menu-state.interface';
import { AppStateInterface } from 'src/app/shared/types/app-state.interface';

export const menuFeatureSelector = (
  state: AppStateInterface
): MenuStateInterface => state.menu;

export const isLoadingSelector = createSelector(
  menuFeatureSelector,
  (state: MenuStateInterface) => state.isLoading
);

export const savesSelector = createSelector(
  menuFeatureSelector,
  (state: MenuStateInterface) => state.saves
);
