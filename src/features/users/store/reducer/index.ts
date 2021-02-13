import { combineReducers } from 'redux';

import { IUsersState } from '../types';
import communications from './communications';
import data from './data';

export default combineReducers<IUsersState>({
  communications,
  data,
});
