import React from 'react';
import Router from './initRouter';
import { Provider } from 'react-redux';

const createApp = (store: any, history: any) => (
  <Provider store={store}>
    <Router history={history} />
  </Provider>
);

export default createApp;