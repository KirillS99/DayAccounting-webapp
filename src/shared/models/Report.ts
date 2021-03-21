import { IUser } from './User';

export interface IReport {
  id: string;
  createdAt: Date | string;
  text: string;
  totalTime: number;
  user: IUser | null;
}

export interface IServerCreateReportDto {
  createdAt: Date | string;
  text: string;
  totalTime: number;
  user: IUser | null;
}

export type UpdatedReport = Pick<IReport, 'id' | 'text' | 'totalTime'>;

export interface IServerReport {
  id: number;
  created_at: Date;
  text: string;
  total_time: number;
  user: IUser | null;
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
