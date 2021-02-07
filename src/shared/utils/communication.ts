import {
  CommunicationType,
  IErrorCommunication,
  ILoadingCommunication,
  INotAskedCommunication,
  ISuccessCommunication,
} from 'shared/types/communication';
import { AppError } from 'shared/types/error';

export const initialCommunication: INotAskedCommunication = {
  data: null,
  error: null,
  type: CommunicationType.NOT_ASKED,
};

export const loadingCommunication: ILoadingCommunication = {
  data: null,
  error: null,
  type: CommunicationType.LOADING,
};

export const makeSuccessCommunication = <Data>(
  data: Data
): ISuccessCommunication<Data> => ({
  data,
  error: null,
  type: CommunicationType.SUCCESS,
});

export const makeErrorCommunication = (
  error: AppError
): IErrorCommunication => ({
  data: null,
  error,
  type: CommunicationType.ERROR,
});
