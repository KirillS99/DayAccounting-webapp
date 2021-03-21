import { BaseHttpService } from '../BaseHttpService';
import {
  IReport,
  IServerReport,
  IServerReportsList,
  IServerUpdatedReport,
  ITimestampDuration,
  UpdatedReport,
} from 'shared/models/Report';
import { convertReport, convertReports } from './ReportsConverter';

export class ReportsService extends BaseHttpService {
  public async getReportsByDay({
    timestampStart,
    timestampEnd,
  }: ITimestampDuration): Promise<IReport[]> {
    const reports = await this.get<IServerReportsList>({
      url: `/api/reports/get-reports?timestampStart=${timestampStart}&timestampEnd=${timestampEnd}`,
    });
    return convertReports(reports.data);
  }

  public async updateReport(data: UpdatedReport): Promise<IReport> {
    const report = await this.post<IServerUpdatedReport>({
      url: `/api/reports/update/${data.id}`,
      data,
    });
    return convertReport(report.data.report);
  }
}
