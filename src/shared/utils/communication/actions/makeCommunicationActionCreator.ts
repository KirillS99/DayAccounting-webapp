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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const actionCreator = (payload: Payload = {} as any): ThunkResult => async (
    dispatch,
    getState,
    extra
  ) => {
    try {
      dispatch(actions.loading);
      const data = await communicate({
        payload,
        deps: {
          dispatch,
          getState,
          extra,
        },
      });
      dispatch(actions.success(data));
    } catch (e) {
      dispatch(actions.error(e));
    }
  };

  actionCreator.success = actions.success;
  actionCreator.error = actions.error;
  actionCreator.loading = actions.loading;
  actionCreator.reset = actions.reset;

  return actionCreator;
};
