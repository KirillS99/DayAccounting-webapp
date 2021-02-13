import { makeCommunicationActionCreator } from 'shared/utils/communication/actions/makeCommunicationActionCreator';

export const loginByGoogle = makeCommunicationActionCreator({
  loading: '@auth/LOGIN_BY_GOOGLE_LOADING',
  success: '@auth/LOGIN_BY_GOOGLE_SUCCESS',
  error: '@auth/LOGIN_BY_GOOGLE_ERROR',
  reset: '@auth/LOGIN_BY_GOOGLE_RESET',
})(({ deps }) => deps.extra.api.auth.googleLogin());
