import { IApplicationState } from '../../../setup/store';

export const selectCurrentUser = (state: IApplicationState) =>
  state.users.data.currentUser;

export const selectLoadingCurrentUser = (state: IApplicationState) =>
  state.users.communications.loadingCurrentUser;

export const selectCurrentUserOrThrowError = (state: IApplicationState) => {
  const user = selectCurrentUser(state);
  if (user) return user;
  throw new Error('Current user is not exist');
};
