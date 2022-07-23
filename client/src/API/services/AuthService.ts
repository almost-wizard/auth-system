import axios from "axios";
import $api from "..";
import {
  googleAuthenticateActionParams,
  resetPasswordActionParams,
  resetPasswordConfirmActionParams,
  signInActionParams,
  signUpActionParams,
  verifyActionParams,
} from "../../store/auth/auth.types";
import { API_URL } from "../../utils/constants/api.constants";

export default class AuthService {
  static async load_user() {
    return $api.get(`/auth/users/me/`);
  }

  static async sign_in(params: signInActionParams) {
    return axios.post(`${API_URL}/auth/jwt/create/`, params);
  }

  static async sign_up(params: signUpActionParams) {
    return axios.post(`${API_URL}/auth/users/`, params);
  }

  static async verify(params: verifyActionParams) {
    return axios.post(`${API_URL}/auth/users/activation/`, params);
  }

  static async reset_password(params: resetPasswordActionParams) {
    return axios.post(`${API_URL}/auth/users/reset_password/`, params);
  }

  static async reset_password_confirm(
    params: resetPasswordConfirmActionParams
  ) {
    return axios.post(`${API_URL}/auth/users/reset_password_confirm/`, params);
  }

  static async google_authenticate(params: googleAuthenticateActionParams) {
    const config = {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    };
    const formBody = Object.keys(params)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
      )
      .join("&");

    return axios.post(`${API_URL}/auth/o/google-oauth2/?${formBody}`, config);
  }

  static async continue_with_google() {
    return axios.get(
      `${API_URL}/auth/o/google-oauth2/?redirect_uri=${API_URL}/google`
    );
  }
}
