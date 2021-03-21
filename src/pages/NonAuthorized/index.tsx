import React from 'react';
import { Route } from 'react-router-dom';

import { IPages } from 'shared/models/Pages';

import { LoginPage } from './LoginPage/LoginPage';

export const NonAuthorizedPages: IPages = {
  getPages() {
    return [
      <Route key="login" exact path="/login" component={LoginPage} />,
      <Route
        key="login/:accessToken"
        path="/login/:accessToken"
        component={LoginPage}
      />,
    ];
  },
};
