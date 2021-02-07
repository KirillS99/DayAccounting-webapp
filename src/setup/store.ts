import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Store,
} from 'redux';
import thunk from 'redux-thunk';

import { IApplicationState, IExtra } from '../shared/types/redux';

export function configureStore(extra: IExtra): Store<IApplicationState> {
  const middleware = thunk.withExtraArgument<IExtra>(extra);

  const reducer = combineReducers({});

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
