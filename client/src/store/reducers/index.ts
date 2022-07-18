import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { localeReducer } from "./localeReducer";

export const rootReducer = combineReducers({
  locale: localeReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
