import {
  IReport,
  IServerCreateReportDto,
  ITimestampDuration,
  IUpdateReportDto,
  UpdatedReport,
} from 'shared/models/Report';
import { makeCommunicationActionCreator } from 'shared/utils/communication/actions/makeCommunicationActionCreator';
import { makeCommunicationByIdActionCreator } from 'shared/utils/communication/actions/makeCommunicationByIdActionCreator';

export const loadReportsByDay = makeCommunicationActionCreator({
  loading: '@reports/LOAD_REPORTS_BY_DAY_LOADING',
  success: '@reports/LOAD_REPORTS_BY_DAY_SUCCESS',
  error: '@reports/LOAD_REPORTS_BY_DAY_ERROR',
  reset: '@reports/LOAD_REPORTS_BY_DAY_RESET',
})<string, IReport[]>(({ deps: { extra: { api } }, payload: date }) =>
  api.reports.getReportsByDay({ date })
);

export const createReport = makeCommunicationActionCreator({
  loading: '@reports/CREATE_REPORT_LOADING',
  success: '@reports/CREATE_REPORT_SUCCESS',
  error: '@reports/CREATE_REPORT_ERROR',
  reset: '@reports/CREATE_REPORT_RESET',
})<IServerCreateReportDto, IReport>(
  ({
    deps: {
      extra: { api },
    },
    payload: { createdAt, totalTime, text, user },
  }) => api.reports.createReport({ createdAt, totalTime, text, user })
);

export const updateReport = makeCommunicationByIdActionCreator({
  loading: '@reports/UPDATE_REPORT_LOADING',
  success: '@reports/UPDATE_REPORT_SUCCESS',
  error: '@reports/UPDATE_REPORT_ERROR',
  reset: '@reports/UPDATE_REPORT_RESET',
})<IUpdateReportDto, IReport>(
  ({
    deps: {
      extra: { api },
    },
    payload: { id, text, totalTime, createdAt, user },
  }) => api.reports.updateReport({ id, text, totalTime, createdAt, user })
);

export const deleteReport = makeCommunicationByIdActionCreator({
  loading: '@reports/DELETE_REPORT_LOADING',
  success: '@reports/DELETE_REPORT_SUCCESS',
  error: '@reports/DELETE_REPORT_ERROR',
  reset: '@reports/DELETE_REPORT_RESET',
})<Pick<IReport, 'id'>, Pick<IReport, 'id'>>(
  ({
    deps: {
      extra: { api },
    },
    payload: { id },
  }) => api.reports.deleteReport({ id })
);
