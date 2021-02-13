import React from 'react';
import { Route } from 'react-router-dom';

import { IPages } from 'shared/models/Pages';

import OverviewPage from './OverviewPage/OverviewPage';

export const MainPages: IPages = {
  getPages() {
    return [
      <Route
        exact={true}
        key="overview"
        path="/overview"
        component={OverviewPage}
      />,
    ];
  },
};
