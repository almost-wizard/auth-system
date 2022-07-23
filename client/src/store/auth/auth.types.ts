import { IUser } from "../../types/auth/IUser";

export interface authInitialState {
  access: string;
  refresh: string;
  user: null | IUser;
  isLoading: boolean;
  error: string;
}

export interface signInActionParams {
  email: string;
  password: string;
}

export interface signUpActionParams {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface verifyActionParams {
  uid: string;
  token: string;
}

export interface resetPasswordActionParams {
  email: string;
}

export interface resetPasswordConfirmActionParams {
  uid: string;
  token: string;
  new_password: string;
}

export interface googleAuthenticateActionParams {
  [key: string]: string;
  state: string;
  code: string;
}
