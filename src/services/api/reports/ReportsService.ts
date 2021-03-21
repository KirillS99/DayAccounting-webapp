import { BaseHttpService } from '../BaseHttpService';
import {
  IReport,
  IServerCreateReportDto,
  IServerReport,
  IServerReportsList,
  IServerUpdatedReport,
  ITimestampDuration,
  UpdatedReport,
} from 'shared/models/Report';
import { convertReport, convertReports } from './ReportsConverter';
import { AccessTokenManager } from 'shared/managers/AccessTokenManager';

export class ReportsService extends BaseHttpService {
  constructor(accessTokenManager: AccessTokenManager, baseUrl: string) {
    super(accessTokenManager, baseUrl);
  }
  public async createReport(data: IServerCreateReportDto): Promise<IReport> {
    const reports = await this.post<IServerUpdatedReport>({
      url: `${this.baseUrl}/api/reports/create`,
      data,
    });
    return convertReport({ ...reports.data.report, user: data.user });
  }

  public async getReportsByDay({
    timestampStart,
    timestampEnd,
  }: ITimestampDuration): Promise<IReport[]> {
    const reports = await this.get<IServerReportsList>({
      url: `${this.baseUrl}/api/reports/get-reports?timestampStart=${timestampStart}&timestampEnd=${timestampEnd}`,
    });
    return convertReports(reports.data);
  }

  public async updateReport(data: UpdatedReport): Promise<IReport> {
    const report = await this.post<IServerUpdatedReport>({
      url: `${this.baseUrl}/api/reports/update/${data.id}`,
      data,
    });
    return convertReport(report.data.report);
  }
}
