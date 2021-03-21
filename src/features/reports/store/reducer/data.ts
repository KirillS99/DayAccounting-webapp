import { ActionType, createReducer } from 'typesafe-actions';

import { IReportsState } from '../types';
import * as actions from '../actions';
import { IReport } from 'shared/models/Report';

const initialState: IReportsState['data'] = {
  reportsList: [],
};
const a = actions.updateReport.success;
export default createReducer<IReportsState['data'], ActionType<typeof actions>>(
  initialState
)
  .handleAction(actions.loadReportsByDay.success, (state, action) => ({
    ...state,
    reportsList: action.payload,
  }))
  .handleAction(actions.updateReport.success, (state, action) => ({
    ...state,
    reportsList: state.reportsList.map((t: IReport) =>
      t.id === action.payload.id ? { ...action.payload, user: t.user } : t
    ),
  }))
  .handleAction(actions.createReport.success, (state, action) => ({
    ...state,
    reportsList: [action.payload, ...state.reportsList],
  }));
