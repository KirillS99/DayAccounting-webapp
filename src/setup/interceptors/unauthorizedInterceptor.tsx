import { AxiosError } from 'axios';
import { removeAccessToken } from 'features/auth/store/actions';
import { selectIsUserAuthenticated } from 'features/auth/store/selectors';
import { AnyAction, Store } from 'redux';
import { IApplicationState } from 'setup/store';

export const makeUnauthorizedInterceptor = (
  store: Store<IApplicationState, AnyAction>
) => {
  return (error: AxiosError) => {
    if (selectIsUserAuthenticated(store.getState())) {
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
      ) {
        store.dispatch(removeAccessToken());
      }
    }
  };
};
