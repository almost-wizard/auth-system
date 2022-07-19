import Activate from "../components/Auth/Activate";
import Google from "../components/Auth/Google";
import ResetPassword from "../components/Auth/ResetPassword";
import ResetPasswordConfirm from "../components/Auth/ResetPasswordConfirm";
import SignIn from "../components/Auth/SignIn";
import SignOut from "../components/Auth/SignOut";
import SignUp from "../components/Auth/SignUp";
import Error from "../components/UI/Error";
import Home from "../components/UI/Home";
import { IRoute } from "../models/IRoute";

enum RoutePaths {
  HOME = "/",
  ERROR = "*",
  SIGN_OUT = "/sign-out",
  SIGN_IN = "/sign-in",
  SIGN_UP = "/sign-up",
  ACTIVATE = "/activate/:uid/:token",
  RESET_PASSWORD = "/reset-password",
  RESET_PASSWORD_CONFIRM = "/reset-password-confirm/:uid/:token",
  GOOGLE = "/google",
}

export const commonRoutes: IRoute[] = [
  {
    path: RoutePaths.HOME,
    element: Home,
  },
  {
    path: RoutePaths.ERROR,
    element: Error,
  },
];

export const publicRoutes: IRoute[] = [
  {
    path: RoutePaths.SIGN_IN,
    element: SignIn,
  },
  {
    path: RoutePaths.SIGN_UP,
    element: SignUp,
  },
  {
    path: RoutePaths.ACTIVATE,
    element: Activate,
  },
  {
    path: RoutePaths.RESET_PASSWORD,
    element: ResetPassword,
  },
  {
    path: RoutePaths.RESET_PASSWORD_CONFIRM,
    element: ResetPasswordConfirm,
  },
  {
    path: RoutePaths.GOOGLE,
    element: Google,
  },
];

export const privateRoutes: IRoute[] = [
  {
    path: RoutePaths.SIGN_OUT,
    element: SignOut,
  },
];
