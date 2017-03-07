import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './index';
import Head from './Head';
import Foot from './Foot';

export const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={UserProfile}/>
    <Route path="/counter" component={Counter}/>
  </Route>
);

export default routes