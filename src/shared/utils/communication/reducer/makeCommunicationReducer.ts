import { AnyAction } from 'redux';
import { getType } from 'typesafe-actions';

import {
  ICommunication,
  initialCommunication,
} from 'shared/models/Communication/Communication';

import { ICommunicationActions } from '../actions/makeCommunicationActions';

export const makeCommunicationReducer = <
  L extends string,
  S extends string,
  E extends string,
  R extends string,
  Data
>(
  actions: ICommunicationActions<L, S, E, R, Data>
) => {
  return (
    state: ICommunication = initialCommunication,
    action: AnyAction
  ): ICommunication => {
    switch (action.type) {
      case getType(actions.loading):
        return {
          isLoading: true,
          error: undefined,
          isSuccess: false,
        };
      case getType(actions.success):
        return {
          isLoading: false,
          isSuccess: true,
          error: undefined,
        };
      case getType(actions.error):
        return {
          isLoading: false,
          isSuccess: false,
          error: action.payload,
        };
      case getType(actions.reset):
        return initialCommunication;
      default:
        return state;
    }
  };
};
