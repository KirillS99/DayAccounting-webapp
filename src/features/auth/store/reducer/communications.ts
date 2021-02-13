import { combineReducers } from 'redux';

import { makeCommunicationReducer } from 'shared/utils/communication/reducer/makeCommunicationReducer';

import { IAuthState } from '../types';
import * as actions from '../actions';

export default combineReducers<IAuthState['communications']>({
  authenticatingByGoogle: makeCommunicationReducer(actions.loginByGoogle),
});
