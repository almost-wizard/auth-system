import axios from "axios";
import { API_URL } from "../data/API";
import { getCookie, removeCookie, setCookie } from "../utils/cookie";

const $api = axios.create({ baseURL: API_URL });

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `JWT ${getCookie("access")}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.post(`${API_URL}/auth/jwt/refresh`, {
          refresh: getCookie("refresh"),
        });
        setCookie("access", response.data.access);
        return $api.request(originalRequest);
      } catch {
        removeCookie("access");
        removeCookie("refresh");
      }
    }
    throw error;
  }
);

export default $api;
