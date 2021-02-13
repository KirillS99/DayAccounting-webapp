import { BaseHttpService } from '../BaseHttpService';

import { IUser } from 'shared/models/User';

export class UsersService extends BaseHttpService {
  public getCurrentUser = async (): Promise<IUser> => {
    const user = await this.get<IUser>({
      url: '/user/getCurrentUser',
    });

    return user.data;
  };
}
