import { IUser } from "../../types/auth/IUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { googleAuthenticate, loadUser, signIn } from "./auth.actions";
import { getCookie, removeCookie, setCookie } from "../../utils/helpers/cookie.helpers";
import { authInitialState } from "./auth.types";
import {
  isFulfilledAction,
  isPendingAction,
  isRejectedAction,
} from "../../utils/helpers/actions.helpers";
import { ITokens } from "../../types/auth/ITokens";

const initialState: authInitialState = {
  access: getCookie("access"),
  refresh: getCookie("refresh"),
  user: null,
  isLoading: false,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut(state) {
      removeCookie("access");
      removeCookie("refresh");
      state.access = "";
      state.refresh = "";
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      loadUser.fulfilled,
      (state, action: PayloadAction<IUser>) => {
        state.user = action.payload;
      }
    );
    builder.addCase(
      signIn.fulfilled,
      (state, action: PayloadAction<ITokens>) => {
        setCookie("access", action.payload.access);
        setCookie("refresh", action.payload.refresh);
        state.access = action.payload.access;
        state.refresh = action.payload.refresh;
      }
    );
    builder.addCase(
      googleAuthenticate.fulfilled,
      (state, action: PayloadAction<ITokens>) => {
        setCookie("access", action.payload.access);
        setCookie("refresh", action.payload.refresh);
        state.access = action.payload.access;
        state.refresh = action.payload.refresh;
      }
    );

    builder.addMatcher(isFulfilledAction, (state) => {
      state.isLoading = false;
      state.error = "";
    });
    builder.addMatcher(isPendingAction, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addMatcher(
      isRejectedAction,
      (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    );
  },
});

export const authReducer = authSlice.reducer;
export const { signOut } = authSlice.actions;
