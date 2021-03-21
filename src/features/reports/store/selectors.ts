import { initialCommunication } from 'shared/models/Communication/Communication';
import { IApplicationState } from '../../../setup/store';

export const selectReports = (state: IApplicationState) =>
  state.reports.data.reportsList;

export const selectUpdatingReport = (reportId: string) => (
  state: IApplicationState
) =>
  state.reports.communications.updatingReport[reportId] || initialCommunication;
