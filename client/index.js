/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import store from './store';
import {Provider} from 'react-redux';
import MyRoutes from './components/Routes';

const root = ReactDOMClient.createRoot(document.getElementById('app'));

root.render(
  <Provider store={store}>
    <MyRoutes />
  </Provider>,
);
