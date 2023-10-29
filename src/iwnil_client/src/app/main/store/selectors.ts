import { createSelector } from '@ngrx/store';
import { MainStateInterface } from 'src/app/main/types/main-state.interface';
import { AppStateInterface } from 'src/app/shared/types/app-state.interface';

export const mainFeatureSelector = (
  state: AppStateInterface
): MainStateInterface => state.main;

export const isLoadingMessageSelector = createSelector(
  mainFeatureSelector,
  (state: MainStateInterface) => state.isLoadingMessage
);

export const messagesSelector = createSelector(
  mainFeatureSelector,
  (state: MainStateInterface) => state.messages
);
