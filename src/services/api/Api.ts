import { AccessTokenManager } from 'shared/managers/AccessTokenManager';

import { AuthService } from './auth/AuthService';
import { ReportsService } from './reports/ReportsService';
import { UsersService } from './users/UsersService';

export class Api {
  public users: UsersService;
  public auth: AuthService;
  public reports: ReportsService;

  constructor(accessTokenManager: AccessTokenManager) {
    this.users = new UsersService(accessTokenManager);
    this.auth = new AuthService(accessTokenManager);
    this.reports = new ReportsService(accessTokenManager);
  }
}
