import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './core/app';
import Home from './home';
import Portfolio from './portfolio';
import Resume from './resume';

const MyRouter = ({ history }) => (
  <Router history={history}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='home' component={Home}/>
      <Route path='resume' component={Resume}/>
      <Route path='portfolio' component={Portfolio}/>
    </Route>
  </Router>
);

export default MyRouter;
