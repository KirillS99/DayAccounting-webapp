import { combineReducers } from 'redux';

import { IAuthState } from '../types';
import communications from './communications';

export const reducer = combineReducers<IAuthState>({
  communications: communications,
});
