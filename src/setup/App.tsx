import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Redirect, Switch } from 'react-router-dom';
import Header from 'shared/view/elements/Header/Header';
import 'dayjs/locale/ru';
import dayjs from 'dayjs';

import { loadCurrentUser } from 'features/users/store/actions';

import { MainPages } from '../pages/Main';
import { NonAuthorizedPages } from '../pages/NonAuthorized';
import { useAccessTokenManager } from '../shared/hooks/useAccessTokenManager';
import { IApplicationState } from './store';
import { AccessTokenManager } from 'shared/managers/AccessTokenManager';

import styles from './App.module.css';

const accessTokenManager = new AccessTokenManager(localStorage);
dayjs.locale('ru');

const mainPages = MainPages.getPages();
const nonAuthorizedPages = NonAuthorizedPages.getPages();

const App: React.FC = () => {
  const accessToken = useSelector(
    (state: IApplicationState) => state.auth.data.accessToken,
    shallowEqual
  );
  const accessTokenMangerHook = useAccessTokenManager();

  useEffect(() => {
    const localStorageAccessToken = accessTokenManager.getAccessToken();
    if (localStorageAccessToken) {
      accessTokenMangerHook.setAccessToken(localStorageAccessToken);
    }
  }, []);

  return accessToken ? <MainApp /> : <NonAuthorized />;
};

const MainApp: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCurrentUser());
  }, []);

  return (
    <div className={styles.mainApp}>
      <Header />
      <Switch>
        {mainPages}
        <Redirect from="/login" to="/overview" />
        <Redirect exact from="/" to="/overview" />
      </Switch>
    </div>
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
