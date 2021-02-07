import { AccessTokenManager } from '../../shared/managers/AccessTokenManager';
import { UsersService } from './users/UsersService';

export class Api {
  public users: UsersService;

  constructor(accessTokenManager: AccessTokenManager) {
    this.users = new UsersService(accessTokenManager);
  }
}
