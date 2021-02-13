import { combineReducers } from 'redux';

import { makeCommunicationReducer } from 'shared/utils/communication/reducer/makeCommunicationReducer';

import { IUsersState } from '../types';
import * as actions from '../actions';

export default combineReducers<IUsersState['communications']>({
  loadingCurrentUser: makeCommunicationReducer(actions.loadCurrentUser),
});
