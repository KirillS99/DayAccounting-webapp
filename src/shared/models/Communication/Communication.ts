import { AppError } from '../AppError';

export interface ICommunication {
  isLoading: boolean;
  isSuccess: boolean;
  error: AppError | undefined;
}

export const initialCommunication: ICommunication = {
  isLoading: false,
  isSuccess: false,
  error: undefined,
};
export const loadingCommunication: ICommunication = {
  isLoading: true,
  isSuccess: false,
  error: undefined,
};
export const successfullCommunication: ICommunication = {
  isLoading: false,
  error: undefined,
  isSuccess: true,
};
