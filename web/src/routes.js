import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Store from './pages/Store';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Landing}/>
        <Route path='/store' exact component={Store}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;