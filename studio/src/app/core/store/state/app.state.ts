import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import { appReducer } from '../reducers/app.reducer';
import { InitialState } from './initial.state';

export interface AppState {
  app: InitialState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  app: appReducer,
};
