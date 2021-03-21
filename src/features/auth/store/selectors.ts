import { IApplicationState } from 'setup/store';

export const selectAuthenticatingByGoogle = (state: IApplicationState) =>
  state.auth.communications.authenticatingByGoogle;

export const selectIsUserAuthenticated = (state: IApplicationState) =>
  state.auth.data.accessToken;
