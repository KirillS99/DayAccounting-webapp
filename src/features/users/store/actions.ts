import { createAction } from 'typesafe-actions';

import { IUser } from 'shared/models/User';
import { AppError } from 'shared/types/error';

export const loadCurrentUserSuccess = createAction(
  '@users/LOAD_CURRENT_USER_SUCCESS'
)<IUser>();

export const loadCurrentUserRequest = createAction(
  '@users/LOAD_CURRENT_USER_REQUEST'
)();

export const loadCurrentUserError = createAction(
  '@users/LOAD_CURRENT_USER_ERROR'
)<AppError>();
