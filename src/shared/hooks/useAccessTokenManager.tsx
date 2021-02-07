import { useCallback, useState } from 'react';

import { AccessTokenManager } from '../managers/AccessTokenManager';

const accessTokenManager = new AccessTokenManager(localStorage);

export const useAccessTokenManager = () => {
  const [accessToken, changeAccessToken] = useState(() =>
    accessTokenManager.getAccessToken()
  );

  const setAccessToken = useCallback((token: string) => {
    changeAccessToken(token);
    accessTokenManager.setAccessToken(token);
  }, []);

  const removeAccessToken = useCallback(() => {
    changeAccessToken(null);
    accessTokenManager.removeAccessToken();
  }, []);

  return {
    setAccessToken,
    removeAccessToken,
    accessToken,
  };
};
