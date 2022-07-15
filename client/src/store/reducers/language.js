import { I18N_MESSAGES } from "../../data/localization";
import { setCookie } from "../../utils/cookie";
import { get_current_locale } from "../../utils/localization";
import { SET_LANGUAGE } from "../types";

const defaultState = {
  locale: get_current_locale(),
  messages: I18N_MESSAGES,
};

export const languageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_LANGUAGE: {
      setCookie("locale", action.payload);
      return { ...state, locale: action.payload };
    }
    default:
      return state;
  }
};
