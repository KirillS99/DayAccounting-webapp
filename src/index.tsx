import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './setup/App';
import { configureStore } from './setup/store';
import { Api } from './services/api/Api';
import { AccessTokenManager } from './shared/managers/AccessTokenManager';

const bootstrap = () => {
  const accessTokenManager = new AccessTokenManager(localStorage);
  const api = new Api(accessTokenManager);
  const store = configureStore({ api });

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

bootstrap();
