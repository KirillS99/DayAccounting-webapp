import { ActionType, createReducer } from 'typesafe-actions';

import { IUsersState } from '../types';
import * as actions from '../actions';

const initialState: IUsersState['data'] = {
  currentUser: null,
};

export default createReducer<IUsersState['data'], ActionType<typeof actions>>(
  initialState
)
  .handleAction(actions.loadCurrentUser.success, (state, action) => ({
    ...state,
    currentUser: action.payload,
  }))
  .handleAction(actions.loadCurrentUser.reset, (state) => ({
    ...state,
    currentUser: null,
  }));
