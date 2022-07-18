import { localeAction, localeActionTypes } from "../types/locale";

export const set_locale = (code: string): localeAction => ({
  type: localeActionTypes.SET_LOCALE,
  payload: code,
});
