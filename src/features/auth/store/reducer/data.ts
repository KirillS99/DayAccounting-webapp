import { ActionType, createReducer } from 'typesafe-actions';

import { IAuthState } from '../types';
import * as actions from '../actions';

const initialState: IAuthState['data'] = {
  accessToken: '',
};

export default createReducer<IAuthState['data'], ActionType<typeof actions>>(
  initialState
)
  .handleAction(actions.saveAccessToken, (state, action) => ({
    ...state,
    accessToken: action.payload,
  }))
  .handleAction(actions.removeAccessToken, (state) => ({
    ...state,
    accessToken: '',
  }));
