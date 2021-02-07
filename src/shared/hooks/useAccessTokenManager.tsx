import { useMemo } from 'react';

import { AccessTokenManager } from '../managers/AccessTokenManager';

export const useAccessTokenManager = () => {
  return useMemo(() => new AccessTokenManager(localStorage), []);
};
