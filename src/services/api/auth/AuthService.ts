import { BaseHttpService } from '../BaseHttpService';

export class AuthService extends BaseHttpService {
  public googleLogin = () => {
    return this.get({
      url: '/google',
    });
  };
}
