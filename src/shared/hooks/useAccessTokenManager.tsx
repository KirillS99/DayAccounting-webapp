import { saveAccessToken } from 'features/auth/store/actions';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { AccessTokenManager } from '../managers/AccessTokenManager';

const accessTokenManager = new AccessTokenManager(localStorage);

export const useAccessTokenManager = () => {
  const dispatch = useDispatch();
  const [accessToken, changeAccessToken] = useState(
    accessTokenManager.getAccessToken()
  );
  // const storeAccessToken
  // useEffect(() => {
  //   if (accessToken && accessTokenManager.getAccessToken()) {
  //     console.log('useEffect');
  //     setAccessToken(accessToken);
  //   }
  // }, []);

  const setAccessToken = useCallback((token: string) => {
    changeAccessToken(token);
    dispatch(saveAccessToken(token));
    accessTokenManager.setAccessToken(token);
  }, []);

  const removeAccessToken = useCallback(() => {
    changeAccessToken('');
    dispatch(removeAccessToken());
    accessTokenManager.removeAccessToken();
  }, []);

  return {
    setAccessToken,
    removeAccessToken,
    accessToken,
  };
};
