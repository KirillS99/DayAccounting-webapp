import { ICommunication } from 'shared/models/Communication/Communication';
import { IUser } from 'shared/models/User';
export interface IUsersState {
  communications: {
    loadingCurrentUser: ICommunication;
  };
  data: {
    currentUser: IUser | null;
  };
}
