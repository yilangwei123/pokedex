import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.scss';
import {store} from './redux/store';
import { Provider } from 'react-redux';
import "@babel/polyfill";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
