import { AnyAction } from 'redux';
import { getType } from 'typesafe-actions';

import { initialCommunication } from 'shared/models/Communication/Communication';
import { ICommunicationById } from 'shared/models/Communication/CommunicationById';

import { ICommunicationByIdActions } from '../actions/makeCommucationByIdActions';
import { ICommunicationByIdPayload } from '../shared';

interface IIdGetters<LP, SP, EP, RP> {
  loading: (payload: LP) => string;
  success: (payload: SP) => string;
  error: (payload: EP) => string;
  reset: (payload: RP) => string;
}

const defaultIdGetters: IIdGetters<
  ICommunicationByIdPayload,
  ICommunicationByIdPayload,
  ICommunicationByIdPayload,
  ICommunicationByIdPayload
> = {
  success: ({ id }) => id,
  loading: ({ id }) => id,
  reset: ({ id }) => id,
  error: ({ id }) => id,
};

export const makeCommunicationByIdReducer = <
  L extends string,
  S extends string,
  E extends string,
  R extends string,
  LP,
  SP,
  EP,
  RP
>(
  actions: ICommunicationByIdActions<L, S, E, R, LP, SP, EP, RP>,
  idGettersObj?: IIdGetters<LP, SP, EP, RP>
) => {
  const idGetters = idGettersObj ?? defaultIdGetters;
  return (
    state: ICommunicationById = {},
    action: AnyAction
  ): ICommunicationById => {
    switch (action.type) {
      case getType(actions.loading):
        return {
          ...state,
          [idGetters.loading(action.payload)]: {
            isLoading: true,
            error: undefined,
            isSuccess: false,
          },
        };
      case getType(actions.success):
        return {
          ...state,
          [idGetters.success(action.payload)]: {
            isLoading: false,
            error: undefined,
            isSuccess: true,
          },
        };
      case getType(actions.error):
        return {
          ...state,
          [idGetters.error(action.payload)]: {
            isLoading: false,
            error: action.payload.error,
            isSuccess: false,
          },
        };
      case getType(actions.reset):
        return {
          ...state,
          [idGetters.reset(action.payload)]: initialCommunication,
        };

      default:
        return state;
    }
  };
};
