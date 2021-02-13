import { ThunkResult } from 'shared/types/redux';

import { ICommunicationActionTypes } from './communicationActionTypes';
import { makeCommunicationActions } from './makeCommunicationActions';
import { CommunicateFunc } from '../shared';

export const makeCommunicationActionCreator = <
  L extends string,
  S extends string,
  E extends string,
  R extends string
>(
  actionTypes: ICommunicationActionTypes<L, S, E, R>
) => <Payload, Data>(communicate: CommunicateFunc<Payload, Data>) => {
  const actions = makeCommunicationActions<L, S, E, R, Data>(actionTypes);
  const actionCreator = (payload: Payload): ThunkResult => (
    dispatch,
    getState,
    extra
  ) => {
    dispatch(actions.loading);
    communicate({
      payload,
      deps: {
        dispatch,
        getState,
        extra,
      },
    })
      .then((data) => dispatch(actions.success(data)))
      .catch((error) => dispatch(actions.error(error)));
  };

  actionCreator.success = actions.success;
  actionCreator.error = actions.error;
  actionCreator.loading = actions.loading;
  actionCreator.reset = actions.reset;

  return actionCreator;
};
