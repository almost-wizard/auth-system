import { setCookie } from "../../utils/cookie";
import { get_current_locale } from "../../utils/localization";
import { localeAction, localeActionTypes, localeState } from "../types/locale";

const defaultState: localeState = {
  locale: get_current_locale(),
};

export const localeReducer = (
  state = defaultState,
  action: localeAction
): localeState => {
  switch (action.type) {
    case localeActionTypes.SET_LOCALE: {
      setCookie("locale", action.payload);
      return { locale: action.payload };
    }
    default:
      return state;
  }
};
