import {
  IReport,
  ITimestampDuration,
  UpdatedReport,
} from 'shared/models/Report';
import { makeCommunicationActionCreator } from 'shared/utils/communication/actions/makeCommunicationActionCreator';
import { makeCommunicationByIdActionCreator } from 'shared/utils/communication/actions/makeCommunicationByIdActionCreator';

export const loadReportsByDay = makeCommunicationActionCreator({
  loading: '@reports/LOAD_REPORTS_BY_DAY_LOADING',
  success: '@reports/LOAD_REPORTS_BY_DAY_SUCCESS',
  error: '@reports/LOAD_REPORTS_BY_DAY_ERROR',
  reset: '@reports/LOAD_REPORTS_BY_DAY_RESET',
})<ITimestampDuration, IReport[]>(
  ({
    deps: {
      extra: { api },
    },
    payload: { timestampEnd, timestampStart },
  }) => api.reports.getReportsByDay({ timestampEnd, timestampStart })
);

export const updateReport = makeCommunicationByIdActionCreator({
  loading: '@reports/UPDATE_REPORT_LOADING',
  success: '@reports/UPDATE_REPORT_SUCCESS',
  error: '@reports/UPDATE_REPORT_ERROR',
  reset: '@reports/UPDATE_REPORT_RESET',
})<{ text: string; id: string; totalTime: number }, IReport>(
  ({
    deps: {
      extra: { api },
    },
    payload: { id, text, totalTime },
  }) => api.reports.updateReport({ id, text, totalTime })
);