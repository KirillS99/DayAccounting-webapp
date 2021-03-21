import { makeCommunicationActionCreator } from 'shared/utils/communication/actions/makeCommunicationActionCreator';
import { createAction } from 'typesafe-actions';

export const loginByGoogle = makeCommunicationActionCreator({
  loading: '@auth/LOGIN_BY_GOOGLE_LOADING',
  success: '@auth/LOGIN_BY_GOOGLE_SUCCESS',
  error: '@auth/LOGIN_BY_GOOGLE_ERROR',
  reset: '@auth/LOGIN_BY_GOOGLE_RESET',
})(({ deps }) => deps.extra.api.auth.googleLogin());

export const saveAccessToken = createAction(
  '@auth/SAVE_ACCESS_TOKEN'
)<string>();

export const removeAccessToken = createAction('@auth/REMOVE_ACCESS_TOKEN')();
