import { BaseHttpService } from '../BaseHttpService';

export class UsersService extends BaseHttpService {
  public getCurrentUser = async () => {
    const user = await this.get({
      url: '/user/getCurrentUser',
    });

    return user;
  };
}
