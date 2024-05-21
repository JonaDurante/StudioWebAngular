import { createAction, props } from "@ngrx/store";
import { ApiError } from "../../models/api-error";

export const AppInit = createAction('[App component] App init');
export const AppInitSuccess = createAction('[App component] App init success', props<{response: any}>());
export const AppInitError = createAction('[App component] App init error', props<{error: ApiError}>());
export const RequestError = createAction('[App componet] Request Error', props<{error: ApiError}>());

