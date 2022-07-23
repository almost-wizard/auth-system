interface IAction {
  type: string;
  payload?: string;
}

export const isFulfilledAction = (action: IAction) =>
  action.type.endsWith("/fulfilled");

export const isPendingAction = (action: IAction) =>
  action.type.endsWith("/pending");

export const isRejectedAction = (action: IAction) =>
  action.type.endsWith("/rejected");
