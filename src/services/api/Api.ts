import { AccessTokenManager } from 'shared/managers/AccessTokenManager';

import { AuthService } from './auth/AuthService';
import { UsersService } from './users/UsersService';

export class Api {
  public users: UsersService;
  public auth: AuthService;

  constructor(accessTokenManager: AccessTokenManager) {
    this.users = new UsersService(accessTokenManager);
    this.auth = new AuthService(accessTokenManager);
  }
}
