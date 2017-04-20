import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MyRouter from './router';
import configureStore from './store';

import { browserHistory } from 'react-router';
import './index.css';

const initialState = window.__INITIAL_STATE__ || {firebase: { authError: null }}

const store = configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
    <MyRouter history={browserHistory}/>
  </Provider>,
  document.getElementById('root')
);
