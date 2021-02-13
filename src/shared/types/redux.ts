import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'typesafe-actions';

import { IUsersState } from 'features/users/store/types';

import { Api } from '../../services/api/Api';

export interface IExtra {
  api: Api;
}

export interface IApplicationState {
  users: IUsersState;
}

export type ThunkResult<R = void, A extends Action = AnyAction> = ThunkAction<
  R,
  IApplicationState,
  IExtra,
  A
>;