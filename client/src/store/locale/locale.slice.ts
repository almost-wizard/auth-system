import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setCookie } from "../../utils/helpers/cookie.helpers";
import { get_current_locale } from "../../utils/helpers/localization.helpers";
import { localeInitialState } from "./locale.types";

const initialState: localeInitialState = {
  locale: get_current_locale(),
};

export const localeSlice = createSlice({
  name: "locale",
  initialState,
  reducers: {
    setLocale(state, action: PayloadAction<string>) {
      state.locale = action.payload;
      setCookie("locale", action.payload);
    },
  },
});

export const localeReducer = localeSlice.reducer;
export const { setLocale } = localeSlice.actions;
