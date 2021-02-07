import { AppError } from './AppError';

export enum CommunicationType {
  INITIAL,
  LOADING,
  ERROR,
  SUCCESS,
}

export interface ILoadingCommunication<Data> {
  data: Data | null;
  type: CommunicationType.LOADING;
  error: null;
}

export interface IErrorCommunication<Data> {
  data: Data | null;
  type: CommunicationType.ERROR;
  error: AppError;
}

export interface ISuccessCommunication<Data> {
  data: Data;
  type: CommunicationType.SUCCESS;
  error: null;
}

export interface IInitialCommunication<Data> {
  data: Data | null;
  type: CommunicationType.INITIAL;
  error: null;
}

export type ICommunication<Data> =
  | ILoadingCommunication<Data>
  | IErrorCommunication<Data>
  | IInitialCommunication<Data>
  | ISuccessCommunication<Data>;
