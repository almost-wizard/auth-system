export interface localeState {
  locale: string;
}

export enum localeActionTypes {
  SET_LOCALE = "SET_LOCALE",
}

export interface setLocaleAction {
  type: localeActionTypes.SET_LOCALE;
  payload: string;
}

export type localeAction = setLocaleAction;
