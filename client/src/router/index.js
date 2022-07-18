import { Navigate } from "react-router-dom";
import Activate from "../components/auth/Activate";
import Google from "../components/auth/Google";
import ResetPassword from "../components/auth/ResetPassword";
import ResetPasswordConfirm from "../components/auth/ResetPasswordConfirm";
import SignIn from "../components/auth/SignIn";
import SignOut from "../components/auth/SignOut";
import SignUp from "../components/auth/SignUp";
import Error from "../components/UI/Error";
import Home from "../components/UI/Home";

export const commonRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <Error />,
  },
];

export const publicRoutes = [
  {
    path: "/sign-out",
    element: <Navigate to="/sign-in" />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/activate/:uid/:token",
    element: <Activate />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/reset-password-confirm/:uid/:token",
    element: <ResetPasswordConfirm />,
  },
  {
    path: "/google",
    element: <Google />,
  },
];

export const privateRoutes = [
  {
    path: "/sign-in",
    element: <Navigate to="/" />,
  },
  {
    path: "/sign-out",
    element: <SignOut />,
  },
];
