import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from '../pages/home';
import Login from '../pages/login';

const router = () => (
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/' component={Home} />
      <Redirect to='/login' />
    </Switch>
)

export default router