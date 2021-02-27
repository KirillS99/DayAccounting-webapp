import Auth from 'features/auth/view/Auth/Auth';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAccessTokenManager } from 'shared/hooks/useAccessTokenManager';

import NonAuthorizedLayout from '../shared/NonAuthorizedLayout/NonAuthorizedLayout';

export const LoginPage: React.FC = () => {
  const { accessToken } = useParams<{ accessToken?: string }>();

  const accessTokenManager = useAccessTokenManager();

  useEffect(() => {
    if (accessToken) {
      accessTokenManager.setAccessToken(accessToken);
    }
  }, [accessToken, accessTokenManager]);

  return (
    <NonAuthorizedLayout>
      <Auth />
    </NonAuthorizedLayout>
  );
};
