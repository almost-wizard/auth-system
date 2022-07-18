import { getCookie, removeCookie, setCookie } from "../../utils/cookie";
import {
  authAction,
  authActionTypes,
  authState,
} from "../types/auth";

const defaultState: authState = {
  access: getCookie("access"),
  refresh: getCookie("refresh"),
  isAuthenticated: false,
  user: null,
  loading: false,
  error: false,
};

export const authReducer = (
  state = defaultState,
  action: authAction
): authState => {
  switch (action.type) {
    case authActionTypes.GOOGLE_AUTH_SUCCESS:
    case authActionTypes.SIGN_IN_SUCCESS: {
      setCookie("access", action.payload.access);
      setCookie("refresh", action.payload.refresh);
      return {
        ...state,
        isAuthenticated: true,
        access: action.payload.access,
        refresh: action.payload.refresh,
      };
    }
    case authActionTypes.SIGN_UP_SUCCESS: {
      return { ...state, isAuthenticated: false };
    }
    case authActionTypes.USER_LOADED_SUCCESS: {
      return { ...state, isAuthenticated: true, user: action.payload };
    }
    case authActionTypes.GOOGLE_AUTH_FAIL:
    case authActionTypes.SIGN_IN_FAIL:
    case authActionTypes.SIGN_UP_FAIL:
    case authActionTypes.SIGN_OUT: {
      removeCookie("access");
      removeCookie("refresh");
      return {
        ...state,
        isAuthenticated: false,
        access: "",
        refresh: "",
        user: null,
      };
    }
    case authActionTypes.USER_LOADED_FAIL: {
      return { ...state, user: null };
    }
    case authActionTypes.PASSWORD_RESET_SUCCESS:
    case authActionTypes.PASSWORD_RESET_FAIL:
    case authActionTypes.PASSWORD_RESET_CONFIRM_SUCCESS:
    case authActionTypes.PASSWORD_RESET_CONFIRM_FAIL:
    case authActionTypes.ACTIVATION_SUCCESS:
    case authActionTypes.ACTIVATION_FAIL:
    default:
      return state;
  }
};
