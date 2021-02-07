import { Route } from 'react-router-dom';

import { IPages } from 'shared/types/pages';

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
