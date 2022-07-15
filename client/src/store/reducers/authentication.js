import { getCookie, removeCookie, setCookie } from "../../utils/cookie";
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

const initialState = {
  access: getCookie("access"),
  refresh: getCookie("refresh"),
  isAuthenticated: null,
  user: null,
};

export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOOGLE_AUTH_SUCCESS:
    case SIGN_IN_SUCCESS: {
      setCookie("access", action.payload.access);
      setCookie("refresh", action.payload.refresh);
      return {
        ...state,
        isAuthenticated: true,
        access: action.payload.access,
        refresh: action.payload.refresh,
      };
    }
    case SIGN_UP_SUCCESS: {
      return { ...state, isAuthenticated: false };
    }
    case USER_LOADED_SUCCESS: {
      return { ...state, isAuthenticated: true, user: action.payload };
    }
    case GOOGLE_AUTH_FAIL:
    case SIGN_IN_FAIL:
    case SIGN_UP_FAIL:
    case SIGN_OUT: {
      removeCookie("access");
      removeCookie("refresh");
      return {
        ...state,
        isAuthenticated: false,
        access: null,
        refresh: null,
        user: null,
      };
    }
    case USER_LOADED_FAIL: {
      return { ...state, user: null };
    }
    case PASSWORD_RESET_SUCCESS:
    case PASSWORD_RESET_FAIL:
    case PASSWORD_RESET_CONFIRM_SUCCESS:
    case PASSWORD_RESET_CONFIRM_FAIL:
    case ACTIVATION_SUCCESS:
    case ACTIVATION_FAIL: {
      return { ...state };
    }
    default:
      return state;
  }
};
