import { AccessTokenManager } from 'shared/managers/AccessTokenManager';
import { baseUrl } from 'shared/settings/baseUrl';

import { AuthService } from './auth/AuthService';
import { ReportsService } from './reports/ReportsService';
import { UsersService } from './users/UsersService';

export class Api {
  public users: UsersService;
  public auth: AuthService;
  public reports: ReportsService;

  constructor(accessTokenManager: AccessTokenManager, baseUrl: string) {
    this.users = new UsersService(accessTokenManager, baseUrl);
    this.auth = new AuthService(accessTokenManager, baseUrl);
    this.reports = new ReportsService(accessTokenManager, baseUrl);
  }
}
