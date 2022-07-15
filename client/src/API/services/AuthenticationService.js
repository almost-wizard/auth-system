import axios from "axios";
import $api from "..";
import { API_URL } from "../../data/API";

export default class AuthenticationService {
  static async load_user() {
    return $api.get(`/auth/users/me/`);
  }

  static async sign_in(email, password) {
    return axios.post(`${API_URL}/auth/jwt/create/`, { email, password });
  }

  static async sign_up(first_name, last_name, email, password) {
    const body = { first_name, last_name, email, password };
    return axios.post(`${API_URL}/auth/users/`, body);
  }

  static async verify(uid, token) {
    return axios.post(`${API_URL}/auth/users/activation/`, { uid, token });
  }

  static async reset_password(email) {
    return axios.post(`${API_URL}/auth/users/reset_password/`, { email });
  }

  static async reset_password_confirm(uid, token, new_password) {
    const body = { uid, token, new_password };
    return axios.post(`${API_URL}/auth/users/reset_password_confirm/`, body);
  }

  static async continue_with_google() {
    return axios.get(
      `${API_URL}/auth/o/google-oauth2/?redirect_uri=${API_URL}/google`
    );
  }

  static async google_authenticate(state, code) {
    const config = {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    };
    const details = { state, code };
    const formBody = Object.keys(details)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(details[key])
      )
      .join("&");

    return axios.post(`${API_URL}/auth/o/google-oauth2/?${formBody}`, config);
  }
}
