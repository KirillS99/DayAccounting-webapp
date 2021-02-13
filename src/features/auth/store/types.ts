import { ICommunication } from 'shared/models/Communication/Communication';

export interface IAuthState {
  communications: {
    authenticatingByGoogle: ICommunication;
  };
}
