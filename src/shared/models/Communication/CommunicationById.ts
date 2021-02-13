import { ICommunication } from './Communication';

export interface ICommunicationById {
  [id: string]: ICommunication | undefined;
}
