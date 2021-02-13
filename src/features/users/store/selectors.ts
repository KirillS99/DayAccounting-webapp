import { IApplicationState } from '../../../setup/store';

export const selectCurrentUser = (state: IApplicationState) =>
  state.users.data.currentUser;
