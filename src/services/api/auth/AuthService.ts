import { BaseHttpService } from '../BaseHttpService';

export class AuthService extends BaseHttpService {
  public googleLogin = () => {
    this.get({
      url: '/api/google',
    });
  };
}
