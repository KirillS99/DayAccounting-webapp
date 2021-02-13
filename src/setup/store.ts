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

import { IExtra } from '../shared/types/redux';

export interface IApplicationState {
  users: UsersFeature.types.IUsersState;
  auth: AuthFeature.types.IAuthState;
}

export function configureStore(extra: IExtra): Store<IApplicationState> {
  const middleware = thunk.withExtraArgument<IExtra>(extra);

  const reducer: Reducer<IApplicationState, AnyAction> = combineReducers({
    users: UsersFeature.reducer,
    auth: AuthFeature.reducer,
  });

  const store = createStore(
    reducer,
    compose(
      applyMiddleware(middleware),
      process.env.NODE_ENV === 'development' &&
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
}
