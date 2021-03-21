import { BaseHttpService } from '../BaseHttpService';

import { IUser } from 'shared/models/User';

export class UsersService extends BaseHttpService {
  public async getCurrentUser(): Promise<IUser> {
    const user = await this.get<IUser>({
      url: '/api/user/current-user',
    });

    return user.data;
  }
}
