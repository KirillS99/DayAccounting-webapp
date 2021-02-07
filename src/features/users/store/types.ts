import { IUser } from 'shared/models/User';
import { ICommunication } from 'shared/types/communication';

export interface IUsersState {
  currentUserCommunication: ICommunication<IUser>;
}
