import { Dispatch } from "redux";
import { getCookie } from "../../utils/cookie";
import {
  authAction,
  authActionTypes,
} from "../types/auth";
import AuthService from "../../API/services/AuthService";

export const load_user =
  () => async (dispatch: Dispatch<authAction>) => {
    const token = getCookie("access");
    if (token) {
      try {
        const res = await AuthService.load_user();
        dispatch({
          type: authActionTypes.USER_LOADED_SUCCESS,
          payload: res.data,
        });
      } catch {
        dispatch({
          type: authActionTypes.USER_LOADED_FAIL,
        });
      }
    } else {
      dispatch({
        type: authActionTypes.USER_LOADED_FAIL,
      });
    }
  };

export const sign_in =
  (email: string, password: string) => async (dispatch: Dispatch<any>) => {
    // FixMe <any> //
    try {
      const res = await AuthService.sign_in(email, password);
      dispatch({
        type: authActionTypes.SIGN_IN_SUCCESS,
        payload: res.data,
      });

      dispatch(load_user());
    } catch {
      dispatch({
        type: authActionTypes.SIGN_IN_FAIL,
      });
    }
  };

export const sign_up =
  (first_name: string, last_name: string, email: string, password: string) =>
  async (dispatch: Dispatch<authAction>) => {
    try {
      await AuthService.sign_up(
        first_name,
        last_name,
        email,
        password
      );
      dispatch({
        type: authActionTypes.SIGN_UP_SUCCESS,
      });
    } catch {
      dispatch({
        type: authActionTypes.SIGN_UP_FAIL,
      });
    }
  };

export const verify =
  (uid: string, token: string) =>
  async (dispatch: Dispatch<authAction>) => {
    try {
      await AuthService.verify(uid, token);
      dispatch({
        type: authActionTypes.ACTIVATION_SUCCESS,
      });
    } catch {
      dispatch({
        type: authActionTypes.ACTIVATION_FAIL,
      });
    }
  };

export const google_authenticate =
  (state: string, code: string) => async (dispatch: Dispatch<any>) => {
    // FixMe <any> //
    if (state && code && !getCookie("access")) {
      try {
        const res = await AuthService.google_authenticate(
          state,
          code
        );
        dispatch({
          type: authActionTypes.GOOGLE_AUTH_SUCCESS,
          payload: res.data,
        });

        dispatch(load_user());
      } catch {
        dispatch({
          type: authActionTypes.GOOGLE_AUTH_FAIL,
        });
      }
    }
  };

export const reset_password =
  (email: string) => async (dispatch: Dispatch<authAction>) => {
    try {
      await AuthService.reset_password(email);
      dispatch({
        type: authActionTypes.PASSWORD_RESET_SUCCESS,
      });
    } catch {
      dispatch({
        type: authActionTypes.PASSWORD_RESET_FAIL,
      });
    }
  };

export const reset_password_confirm =
  (uid: string, token: string, new_password: string) =>
  async (dispatch: Dispatch<authAction>) => {
    try {
      await AuthService.reset_password_confirm(
        uid,
        token,
        new_password
      );
      dispatch({
        type: authActionTypes.PASSWORD_RESET_CONFIRM_SUCCESS,
      });
    } catch {
      dispatch({
        type: authActionTypes.PASSWORD_RESET_CONFIRM_FAIL,
      });
    }
  };

export const sign_out = () => (dispatch: Dispatch<authAction>) => {
  dispatch({
    type: authActionTypes.SIGN_OUT,
  });
};
