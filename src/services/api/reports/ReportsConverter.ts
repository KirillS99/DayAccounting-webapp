import dayjs from 'dayjs';
import {
  ICreateReport,
  IReport,
  IServerReport,
  IServerReportsList,
  IServerUpdatedReport,
} from 'shared/models/Report';
import { IServerUser } from 'shared/models/User';
import { convertUser } from '../users/UsersConverter';

interface ICreateReportConverter {
  report: ICreateReport;
  user: IServerUser;
}

export const convertReports = (data: IServerReportsList): IReport[] => {
  return data.reports
    .map(convertReport)
    .sort((a, b) => (dayjs(a.createdAt).isBefore(b.createdAt) ? 1 : -1));
};

export const convertCreateReport = ({
  report,
  user,
}: ICreateReportConverter): IReport => ({
  id: report.id.toString(),
  createdAt: report.created_at,
  text: report.text,
  totalTime: report.total_time,
  user: convertUser(user),
});

export const convertReport = (data: IServerReport) => ({
  id: data.id.toString(),
  createdAt: data.created_at,
  text: data.text,
  totalTime: data.total_time,
  user: convertUser(data.user),
});
