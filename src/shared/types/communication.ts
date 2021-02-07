import { AppError } from './error';

export enum CommunicationType {
  NOT_ASKED,
  LOADING,
  ERROR,
  SUCCESS,
}

export interface ILoadingCommunication {
  data: null;
  type: CommunicationType.LOADING;
  error: null;
}

export interface IErrorCommunication {
  data: null;
  type: CommunicationType.ERROR;
  error: AppError;
}

export interface ISuccessCommunication<Data> {
  data: Data;
  type: CommunicationType.SUCCESS;
  error: null;
}

export interface INotAskedCommunication {
  data: null;
  type: CommunicationType.NOT_ASKED;
  error: null;
}

export type ICommunication<Data> =
  | ILoadingCommunication
  | IErrorCommunication
  | INotAskedCommunication
  | ISuccessCommunication<Data>;
