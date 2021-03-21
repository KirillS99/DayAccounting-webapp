import { combineReducers } from 'redux';

import { IAuthState } from '../types';
import communications from './communications';
import data from './data';

export const reducer = combineReducers<IAuthState>({
  communications: communications,
  data,
});
