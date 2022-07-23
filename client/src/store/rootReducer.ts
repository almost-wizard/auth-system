import { combineReducers } from "redux";
import { authReducer } from "./auth/auth.slice";
import { localeReducer } from "./locale/locale.slice";

export const rootReducer = combineReducers({
  authReducer,
  localeReducer,
});
