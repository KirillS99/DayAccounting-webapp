import React, { useEffect } from 'react';
import { Redirect, Switch } from 'react-router-dom';

import { MainPages } from '../pages/Main';
import { NonAuthorizedPages } from '../pages/NonAuthorized';
import { useAccessTokenManager } from '../shared/hooks/useAccessTokenManager';

const mainPages = MainPages.getPages();
const nonAuthorizedPages = NonAuthorizedPages.getPages();

const App: React.FC = () => {
  const { accessToken } = useAccessTokenManager();

  return accessToken ? <MainApp /> : <NonAuthorized />;
};

const MainApp: React.FC = () => {
  return (
    <Switch>
      {mainPages}
      <Redirect to="/overview" />
    </Switch>
  );
};

const NonAuthorized: React.FC = () => {
  return (
    <Switch>
      {nonAuthorizedPages}
      <Redirect to="/login" />
    </Switch>
  );
};

export default App;
