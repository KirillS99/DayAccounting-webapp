import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Reducer,
  Store,
} from 'redux';
import thunk from 'redux-thunk';

import * as UsersFeature from 'features/users';
import * as AuthFeature from 'features/auth';
import * as ReportsFeature from 'features/reports';

import { IExtra } from '../shared/types/redux';
import { BaseHttpService } from 'services/api/BaseHttpService';
import { makeUnauthorizedInterceptor } from './interceptors/unauthorizedInterceptor';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
export interface IApplicationState {
  users: UsersFeature.types.IUsersState;
  auth: AuthFeature.types.IAuthState;
  reports: ReportsFeature.types.IReportsState;
}

export function configureStore(extra: IExtra): Store<IApplicationState> {
  const middleware = thunk.withExtraArgument<IExtra>(extra);

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const reducer: Reducer<IApplicationState, AnyAction> = combineReducers({
    users: UsersFeature.reducer,
    auth: AuthFeature.reducer,
    reports: ReportsFeature.reducer,
  });

  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(middleware))
  );

  BaseHttpService.addErrorInterceptor(makeUnauthorizedInterceptor(store));

  return store;
}
