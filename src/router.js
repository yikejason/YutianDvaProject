import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Home from './routes/home/Home';
import Frist from './routes/frist/Frist';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/frist" exact component={Frist}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
