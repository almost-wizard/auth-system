import AuthenticationService from "../../API/services/AuthenticationService";
import { getCookie } from "../../utils/cookie";
import {
  ACTIVATION_FAIL,
  ACTIVATION_SUCCESS,
  GOOGLE_AUTH_FAIL,
  GOOGLE_AUTH_SUCCESS,
  PASSWORD_RESET_CONFIRM_FAIL,
  PASSWORD_RESET_CONFIRM_SUCCESS,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
  SIGN_UP_FAIL,
  SIGN_UP_SUCCESS,
  USER_LOADED_FAIL,
  USER_LOADED_SUCCESS,
} from "../types";

export const load_user = () => async (dispatch) => {
  const token = getCookie("access");
  if (token) {
    try {
      const res = await AuthenticationService.load_user();
      dispatch({
        type: USER_LOADED_SUCCESS,
        payload: res.data,
      });
    } catch {
      dispatch({
        type: USER_LOADED_FAIL,
      });
    }
  } else {
    dispatch({
      type: USER_LOADED_FAIL,
    });
  }
};

export const sign_in = (email, password) => async (dispatch) => {
  try {
    const res = await AuthenticationService.sign_in(email, password);
    dispatch({
      type: SIGN_IN_SUCCESS,
      payload: res.data,
    });

    dispatch(load_user());
  } catch {
    dispatch({
      type: SIGN_IN_FAIL,
    });
  }
};

export const sign_up =
  (first_name, last_name, email, password) => async (dispatch) => {
    try {
      await AuthenticationService.sign_up(
        first_name,
        last_name,
        email,
        password
      );
      dispatch({
        type: SIGN_UP_SUCCESS,
      });
    } catch {
      dispatch({
        type: SIGN_UP_FAIL,
      });
    }
  };

export const verify = (uid, token) => async (dispatch) => {
  try {
    await AuthenticationService.verify(uid, token);
    dispatch({
      type: ACTIVATION_SUCCESS,
    });
  } catch {
    dispatch({
      type: ACTIVATION_FAIL,
    });
  }
};

export const google_authenticate = (state, code) => async (dispatch) => {
  if (state && code && !getCookie("access")) {
    try {
      const res = await AuthenticationService.google_authenticate(state, code);
      dispatch({
        type: GOOGLE_AUTH_SUCCESS,
        payload: res.data,
      });

      dispatch(load_user());
    } catch {
      dispatch({
        type: GOOGLE_AUTH_FAIL,
      });
    }
  }
};

export const reset_password = (email) => async (dispatch) => {
  try {
    await AuthenticationService.reset_password(email);
    dispatch({
      type: PASSWORD_RESET_SUCCESS,
    });
  } catch {
    dispatch({
      type: PASSWORD_RESET_FAIL,
    });
  }
};

export const reset_password_confirm =
  (uid, token, new_password) => async (dispatch) => {
    try {
      await AuthenticationService.reset_password_confirm(
        uid,
        token,
        new_password
      );
      dispatch({
        type: PASSWORD_RESET_CONFIRM_SUCCESS,
      });
    } catch {
      dispatch({
        type: PASSWORD_RESET_CONFIRM_FAIL,
      });
    }
  };

export const sign_out = () => (dispatch) => {
  dispatch({
    type: SIGN_OUT,
  });
};
