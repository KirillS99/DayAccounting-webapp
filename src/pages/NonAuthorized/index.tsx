import { Route } from 'react-router-dom';

import { IPages } from '../../shared/model/Pages';
import { LoginPage } from './LoginPage/LoginPage';

export const NonAuthorizedPages: IPages = {
  getPages() {
    return [
      <Route key="login" path="/login/:accessToken" component={LoginPage} />,
    ];
  },
};
