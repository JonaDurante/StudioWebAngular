import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';

export const selectApp = (state: AppState) => state.app;
export const AppSelector = createSelector(
    selectApp,
    state => state
);