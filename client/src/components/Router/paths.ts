import Activate from "../screens/Auth/SignUp/Activate";
import Google from "../screens/Auth/SignIn/Google";
import ResetPassword from "../screens/Auth/ResetPassword/ResetPassword";
import ResetPasswordConfirm from "../screens/Auth/ResetPassword/ResetPasswordConfirm";
import SignIn from "../screens/Auth/SignIn/SignIn";
import SignOut from "../screens/Auth/SignOut/SignOut";
import SignUp from "../screens/Auth/SignUp/SignUp";
import Error from "../screens/Common/Error/Error";
import Home from "../screens/Common/Home/Home";
import { IRoute } from "../../types/router/IRoute";

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
