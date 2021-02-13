import { IApplicationState } from 'shared/types/redux';

export const selectCurrentUser = (state: IApplicationState) =>
  state.users.data.currentUser;
