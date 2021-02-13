import {
  createAction,
  EmptyActionCreator,
  PayloadActionCreator,
} from 'typesafe-actions';

import { AppError } from 'shared/models/AppError';

import { ICommunicationActionTypes } from './communicationActionTypes';
export interface ICommunicationActions<
  L extends string,
  S extends string,
  E extends string,
  R extends string,
  Data
> {
  loading: EmptyActionCreator<L>;
  success: [Data] extends [undefined]
    ? unknown extends Data
      ? PayloadActionCreator<S, Data>
      : EmptyActionCreator<S>
    : PayloadActionCreator<S, Data>;
  error: PayloadActionCreator<E, AppError>;
  reset: EmptyActionCreator<R>;
}

export const makeCommunicationActions = <
  L extends string,
  S extends string,
  E extends string,
  R extends string,
  Data
>(
  actionTypes: ICommunicationActionTypes<L, S, E, R>
): ICommunicationActions<L, S, E, R, Data> => {
  const loading = createAction(actionTypes.loading)();
  const success = createAction(actionTypes.success)<Data>();
  const error = createAction(actionTypes.error)<AppError>();
  const reset = createAction(actionTypes.reset)();

  return {
    success,
    loading,
    error,
    reset,
  };
};
