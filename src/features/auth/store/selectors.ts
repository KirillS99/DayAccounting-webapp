import { IApplicationState } from 'setup/store';

export const selectAuthenticatingByGoogle = (state: IApplicationState) =>
  state.auth.communications.authenticatingByGoogle;
