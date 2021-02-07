import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAccessTokenManager } from '../../../shared/hooks/useAccessTokenManager';

export const LoginPage: React.FC = () => {
  const { accessToken } = useParams<{ accessToken?: string }>();

  const accessTokenManager = useAccessTokenManager();

  useEffect(() => {
    if (accessToken) {
      accessTokenManager.setAccessToken(accessToken);
    }
  }, [accessToken, accessTokenManager]);

  return <div>LoginPage</div>;
};
