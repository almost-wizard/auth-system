import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../API/services/AuthService";
import {
  googleAuthenticateActionParams,
  resetPasswordActionParams,
  resetPasswordConfirmActionParams,
  signInActionParams,
  signUpActionParams,
  verifyActionParams,
} from "./auth.types";

export const loadUser = createAsyncThunk(
  "auth/loadUser",
  async (_, thunkAPI) => {
    try {
      const response = await AuthService.load_user();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователя");
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (params: signInActionParams, thunkAPI) => {
    try {
      const response = await AuthService.sign_in(params);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось выполнить авторизацию");
    }
  }
);

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (params: signUpActionParams, thunkAPI) => {
    try {
      await AuthService.sign_up(params);
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось выполнить регистрацию");
    }
  }
);

export const verify = createAsyncThunk(
  "auth/verify",
  async (params: verifyActionParams, thunkAPI) => {
    try {
      await AuthService.verify(params);
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось верифицировать аккаунт");
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (params: resetPasswordActionParams, thunkAPI) => {
    try {
      await AuthService.reset_password(params);
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось отправить запрос на восстановление пароля");
    }
  }
);

export const resetPasswordConfirm = createAsyncThunk(
  "auth/resetPasswordConfirm",
  async (params: resetPasswordConfirmActionParams, thunkAPI) => {
    try {
      await AuthService.reset_password_confirm(params);
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось восстановить пароль");
    }
  }
);

export const googleAuthenticate = createAsyncThunk(
  "auth/googleAuthenticate",
  async (params: googleAuthenticateActionParams, thunkAPI) => {
    try {
      const result = await AuthService.google_authenticate(params);
      return result.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось выполнить авторизацию через Google");
    }
  }
);
