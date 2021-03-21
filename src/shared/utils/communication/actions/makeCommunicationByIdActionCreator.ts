import { ThunkResult } from 'shared/types/redux';

import { ICommunicationActionTypes } from './communicationActionTypes';
import { makeCommunicationByIdActions } from './makeCommucationByIdActions';
import {
  CommunicateFunc,
  ICommunicationByIdErrorPayload,
  ICommunicationByIdPayload,
  ICommunicationByIdSuccessPayload,
} from '../shared';

export const makeCommunicationByIdActionCreator = <
  L extends string,
  S extends string,
  E extends string,
  R extends string
>(
  actionTypes: ICommunicationActionTypes<L, S, E, R>
) => <LoadingPayload extends ICommunicationByIdPayload, Data>(
  communicate: CommunicateFunc<
    LoadingPayload,
    ICommunicationByIdSuccessPayload<Data>
  >
) => {
  const actions = makeCommunicationByIdActions<
    L,
    S,
    E,
    R,
    LoadingPayload,
    ICommunicationByIdSuccessPayload<Data>,
    ICommunicationByIdErrorPayload,
    ICommunicationByIdPayload
  >(actionTypes);
  const actionCreator = (payload: LoadingPayload): ThunkResult => (
    dispatch,
    getState,
    extra
  ) => {
    dispatch(actions.loading(payload));
    communicate({
      payload,
      deps: {
        dispatch,
        getState,
        extra,
      },
    })
      .then((successPayload) => dispatch(actions.success(successPayload)))
      .catch((error) =>
        dispatch(
          actions.error({
            id: payload.id,
            error: error,
          })
        )
      );
  };

  actionCreator.success = actions.success;
  actionCreator.error = actions.error;
  actionCreator.loading = actions.loading;
  actionCreator.reset = actions.reset;

  return actionCreator;
};
