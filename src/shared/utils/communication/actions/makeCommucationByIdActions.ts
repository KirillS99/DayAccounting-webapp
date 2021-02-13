import { createAction, PayloadActionCreator } from 'typesafe-actions';

import { ICommunicationActionTypes } from './communicationActionTypes';

export interface ICommunicationByIdActions<
  L extends string,
  S extends string,
  E extends string,
  R extends string,
  LP,
  SP,
  EP,
  RP
> {
  loading: PayloadActionCreator<L, LP>;
  success: PayloadActionCreator<S, SP>;
  error: PayloadActionCreator<E, EP>;
  reset: PayloadActionCreator<R, RP>;
}

export const makeCommunicationByIdActions = <
  L extends string,
  S extends string,
  E extends string,
  R extends string,
  LP,
  SP,
  EP,
  RP
>(
  actionTypes: ICommunicationActionTypes<L, S, E, R>
): ICommunicationByIdActions<L, S, E, R, LP, SP, EP, RP> => {
  const loading = createAction(actionTypes.loading)<LP>();
  const success = createAction(actionTypes.success)<SP>();
  const error = createAction(actionTypes.error)<EP>();
  const reset = createAction(actionTypes.reset)<RP>();

  return {
    success,
    loading,
    error,
    reset,
  } as ICommunicationByIdActions<L, S, E, R, LP, SP, EP, RP>;
};
