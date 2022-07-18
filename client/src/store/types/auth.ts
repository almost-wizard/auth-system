import { IUser } from "../../models/IUser";

export interface authState {
  access: string;
  refresh: string;
  isAuthenticated: boolean;
  user: null | IUser;
  loading: boolean;
  error: boolean;
}

export enum authActionTypes {
  SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS",
  SIGN_IN_FAIL = "SIGN_IN_FAIL",
  SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS",
  SIGN_UP_FAIL = "SIGN_UP_FAIL",
  ACTIVATION_SUCCESS = "ACTIVATION_SUCCESS",
  ACTIVATION_FAIL = "ACTIVATION_FAIL",
  USER_LOADED_SUCCESS = "USER_LOADED_SUCCESS",
  USER_LOADED_FAIL = "USER_LOADED_FAIL",
  PASSWORD_RESET_SUCCESS = "PASSWORD_RESET_SUCCESS",
  PASSWORD_RESET_FAIL = "PASSWORD_RESET_FAIL",
  PASSWORD_RESET_CONFIRM_SUCCESS = "PASSWORD_RESET_CONFIRM_SUCCESS",
  PASSWORD_RESET_CONFIRM_FAIL = "PASSWORD_RESET_CONFIRM_FAIL",
  GOOGLE_AUTH_SUCCESS = "GOOGLE_AUTH_SUCCESS",
  GOOGLE_AUTH_FAIL = "GOOGLE_AUTH_FAIL",
  SIGN_OUT = "SIGN_OUT",
}

export interface googleAuthSuccessAction {
  type: authActionTypes.GOOGLE_AUTH_SUCCESS;
  payload: {
    access: string;
    refresh: string;
  };
}
export interface signInSuccessAction {
  type: authActionTypes.SIGN_IN_SUCCESS;
  payload: {
    access: string;
    refresh: string;
  };
}
export interface signUpSuccessAction {
  type: authActionTypes.SIGN_UP_SUCCESS;
}
export interface userLoadedSuccessAction {
  type: authActionTypes.USER_LOADED_SUCCESS;
  payload: IUser;
}
export interface googleAuthFailAction {
  type: authActionTypes.GOOGLE_AUTH_FAIL;
}
export interface signInFailAction {
  type: authActionTypes.SIGN_IN_FAIL;
}
export interface signUpFailAction {
  type: authActionTypes.SIGN_UP_FAIL;
}
export interface signOutAction {
  type: authActionTypes.SIGN_OUT;
}
export interface userLoadedFailAction {
  type: authActionTypes.USER_LOADED_FAIL;
}
export interface passwordResetSuccessAction {
  type: authActionTypes.PASSWORD_RESET_SUCCESS;
}
export interface passwordResetFailAction {
  type: authActionTypes.PASSWORD_RESET_FAIL;
}
export interface passwordResetConfirmSuccessAction {
  type: authActionTypes.PASSWORD_RESET_CONFIRM_SUCCESS;
}
export interface passwordResetConfirmFailAction {
  type: authActionTypes.PASSWORD_RESET_CONFIRM_FAIL;
}
export interface ActivationSuccessAction {
  type: authActionTypes.ACTIVATION_SUCCESS;
}
export interface ActivationFailAction {
  type: authActionTypes.ACTIVATION_FAIL;
}

export type authAction =
  | googleAuthSuccessAction
  | signInSuccessAction
  | signUpSuccessAction
  | userLoadedSuccessAction
  | googleAuthFailAction
  | signInFailAction
  | signUpFailAction
  | signOutAction
  | userLoadedFailAction
  | passwordResetSuccessAction
  | passwordResetFailAction
  | passwordResetConfirmSuccessAction
  | passwordResetConfirmFailAction
  | ActivationSuccessAction
  | ActivationFailAction;
