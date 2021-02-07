import { ActionType, createReducer } from 'typesafe-actions';

import { IUsersState } from './types';
import * as actions from './actions';

import {
  initialCommunication,
  loadingCommunication,
  makeErrorCommunication,
  makeSuccessCommunication,
} from 'shared/utils/communication';

const initialState: IUsersState = {
  currentUserCommunication: initialCommunication,
};

export const reducer = createReducer<IUsersState, ActionType<typeof actions>>(
  initialState
)
  .handleAction(actions.loadCurrentUserRequest, (state) => ({
    ...state,
    currentUserCommunication: loadingCommunication,
  }))
  .handleAction(actions.loadCurrentUserSuccess, (state, action) => ({
    ...state,
    currentUserCommunication: makeSuccessCommunication(action.payload),
  }))
  .handleAction(actions.loadCurrentUserError, (state, action) => ({
    ...state,
    currentUserCommunication: makeErrorCommunication(action.payload),
  }));
