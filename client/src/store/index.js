import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { languageReducer } from "./reducers/language";
import { authenticationReducer } from "./reducers/authentication";

const rootReducer = combineReducers({
  language: languageReducer,
  authentication: authenticationReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
