import { combineReducers } from 'redux';

import { makeCommunicationReducer } from 'shared/utils/communication/reducer/makeCommunicationReducer';

import { IReportsState } from '../types';
import * as actions from '../actions';
import { makeCommunicationByIdReducer } from 'shared/utils/communication/reducer/makeCommunicationByIdReducer';

export default combineReducers<IReportsState['communications']>({
  loadingReportsByDay: makeCommunicationReducer(actions.loadReportsByDay),
  updatingReport: makeCommunicationByIdReducer(actions.updateReport),
});
