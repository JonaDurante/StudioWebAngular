import { createReducer, on } from '@ngrx/store';
import { AppInit, RequestError } from '../actions/app.action';
import { InitialState } from '../state/initial.state';

export const initialState: Readonly<InitialState> = {
    error: undefined
};

export const appReducer = createReducer(
  initialState,
  on(AppInit, (state, action) => {
    return {
      ...state,
      ...action,
    };
  }),
  on(RequestError, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  })
);
