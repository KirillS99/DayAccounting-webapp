import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

import { MainPages } from '../pages/Main';

const App: React.FC = () => {
  const pages = MainPages.getPages();

  return (
    <Switch>
      <Redirect from="/" to="/overview" exact={true} />
      {pages}
    </Switch>
  );
};

export default App;
