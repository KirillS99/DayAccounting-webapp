import { IServerUser, IUser } from './User';

export interface IReport {
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  text: string;
  totalTime: number;
  user: IUser;
}

export interface IServerCreateReportDto {
  createdAt: Date | string;
  text: string;
  totalTime: number;
  user: IUser;
}

export interface IUpdateReportDto {
  id: string;
  createdAt: Date | string;
  text: string;
  totalTime: number;
  user: IUser;
}

export type UpdatedReport = Pick<
  IReport,
  'id' | 'text' | 'totalTime' | 'createdAt' | 'user'
>;

export interface IServerReport {
  id: number | string;
  created_at: Date;
  updated_at: Date;
  text: string;
  total_time: number;
  user: IServerUser;
}

export interface IReportDate {
  date: string;
}

export interface ICreateReport {
  id: number | string;
  updated_at: Date | string;
  created_at: Date;
  text: string;
  total_time: number;
}

export interface IServerReportsList {
  reports: IServerReport[];
}

export interface IServerUpdatedReport {
  report: IServerReport;
}

export interface ITimestampDuration {
  timestampStart: number;
  timestampEnd: number;
}
