import { BaseHttpService } from '../BaseHttpService';

import { IServerUser, IUser } from 'shared/models/User';
import { AccessTokenManager } from 'shared/managers/AccessTokenManager';
import { convertUser } from './UsersConverter';

export class UsersService extends BaseHttpService {
  constructor(accessTokenManager: AccessTokenManager, baseUrl: string) {
    super(accessTokenManager, baseUrl);
  }
  public async getCurrentUser(): Promise<IUser> {
    const user = await this.get<IServerUser>({
      url: `${this.baseUrl}/api/user/current-user`,
    });

    return convertUser(user.data);
  }
}
