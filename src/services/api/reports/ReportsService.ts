import { BaseHttpService } from '../BaseHttpService';
import {
  IReport,
  IReportDate,
  IServerCreateReportDto,
  IServerReport,
  IServerReportsList,
  IServerUpdatedReport,
  ITimestampDuration,
  UpdatedReport,
} from 'shared/models/Report';
import {
  convertCreateReport,
  convertReport,
  convertReports,
} from './ReportsConverter';
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
    return convertCreateReport({
      report: reports.data.report,
      user: data.user,
    });
  }

  public async getReportsByDay({ date }: IReportDate): Promise<IReport[]> {
    const reports = await this.get<IServerReportsList>({
      url: `${this.baseUrl}/api/reports/get-reports?date=${date}`,
    });
    return convertReports(reports.data);
  }

  public async updateReport(data: UpdatedReport): Promise<IReport> {
    console.log(data, 'data');
    const res = await this.post<IServerUpdatedReport>({
      url: `${this.baseUrl}/api/reports/update/${data.id}`,
      data,
    });

    return convertReport({ ...res.data.report, user: data.user });
  }
}
