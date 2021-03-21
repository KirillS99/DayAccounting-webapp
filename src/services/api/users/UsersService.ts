import { BaseHttpService } from '../BaseHttpService';

import { IUser } from 'shared/models/User';
import { AccessTokenManager } from 'shared/managers/AccessTokenManager';

export class UsersService extends BaseHttpService {
  constructor(accessTokenManager: AccessTokenManager, baseUrl: string) {
    super(accessTokenManager, baseUrl);
  }
  public async getCurrentUser(): Promise<IUser> {
    const user = await this.get<IUser>({
      url: `${this.baseUrl}/api/user/current-user`,
    });

    return user.data;
  }
}
