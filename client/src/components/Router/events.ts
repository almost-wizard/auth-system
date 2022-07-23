import { IEvent } from "../../types/router/IEvent";

enum EventPaths {
  HOME = "/",
  SIGN_IN = "/sign-in",
  SIGN_OUT = "/sign-out",
}

export const publicEvents: IEvent[] = [
  {
    path: EventPaths.SIGN_OUT,
    to: EventPaths.SIGN_IN,
  },
];

export const privateEvents: IEvent[] = [
  {
    path: EventPaths.SIGN_IN,
    to: EventPaths.HOME,
  },
];
