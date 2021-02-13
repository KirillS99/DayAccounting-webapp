import { IApplicationState } from '../../../setup/store';

export const selectCurrentUser = (state: IApplicationState) =>
  state.users.data.currentUser;

export const selectLoadingCurrentUser = (state: IApplicationState) =>
  state.users.communications.loadingCurrentUser;
