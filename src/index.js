import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import MyRouter from './router';

import { browserHistory } from 'react-router';
import './index.css';

var config = {
  apiKey: 'AIzaSyBblWmW4g2XFh0ggGT8G6uU6s_1G3g10qc',
  authDomain: 'portfolio-13a33.firebaseapp.com',
  databaseURL: 'https://portfolio-13a33.firebaseio.com'
}

firebase.initializeApp(config)

ReactDOM.render(
  <MyRouter history={browserHistory}/>,
  document.getElementById('root')
);
