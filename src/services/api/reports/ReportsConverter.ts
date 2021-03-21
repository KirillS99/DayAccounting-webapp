import dayjs from 'dayjs';
import {
  IReport,
  IServerReport,
  IServerReportsList,
  IServerUpdatedReport,
} from 'shared/models/Report';
import { convertUser } from '../users/UsersConverter';

export const convertReports = (data: IServerReportsList): IReport[] => {
  return data.reports
    .map(convertReport)
    .sort((a, b) => (dayjs(a.createdAt).isBefore(b.createdAt) ? 1 : -1));
};

export const convertReport = (data: IServerReport) => ({
  id: data.id.toString(),
  createdAt: data.created_at,
  text: data.text,
  totalTime: data.total_time,
  user: convertUser(data.user),
});
