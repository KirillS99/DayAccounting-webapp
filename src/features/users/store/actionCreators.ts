import { ThunkResult } from 'shared/types/redux';

import {
  loadCurrentUserError,
  loadCurrentUserRequest,
  loadCurrentUserSuccess,
} from './actions';

export const loadCurrentUser = (): ThunkResult => async (
  dispatch,
  getState,
  deps
) => {
  dispatch(loadCurrentUserRequest);
  deps.api.users
    .getCurrentUser()
    .then((user) => dispatch(loadCurrentUserSuccess(user)))
    .catch((error) => dispatch(loadCurrentUserError(error)));
};
