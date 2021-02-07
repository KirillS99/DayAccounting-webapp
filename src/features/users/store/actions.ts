import { createAction } from 'typesafe-actions';

import { IUser } from 'shared/models/User';

export const loadCurrentUserSuccess = createAction(
  '@users/LOAD_CURRENT_USER_SUCCESS'
)<IUser>();

export const loadCurrentUserRequest = createAction(
  '@users/LOAD_CURRENT_USER_REQUEST'
)();

export const loadCurrentUserError = createAction(
  '@users/LOAD_CURRENT_USER_ERROR'
)<Error>();
