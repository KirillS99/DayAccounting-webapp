import { makeCommunicationActionCreator } from 'shared/utils/communication/actions/makeCommunicationActionCreator';

export const loadCurrentUser = makeCommunicationActionCreator({
  loading: '@users/LOAD_CURRENT_USER_LOADING',
  success: '@users/LOAD_CURRENT_USER_SUCCESS',
  error: '@users/LOAD_CURRENT_USER_ERROR',
  reset: '@users/LOAD_CURRENT_USER_RESET',
})(({ deps: { extra: { api } } }) => api.users.getCurrentUser());
