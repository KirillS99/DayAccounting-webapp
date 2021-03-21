import { combineReducers } from 'redux';

import { IReportsState } from '../types';

import communications from './communications';
import data from './data';

export default combineReducers<IReportsState>({
  communications,
  data,
});
