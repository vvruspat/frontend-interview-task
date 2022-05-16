import React from 'react';
import { PrivateRoute } from '../private-route';
import { LoginScreen } from './login-screen';
import { FeedScreen } from './feed-screen';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginScreen} />
        <PrivateRoute exact path="/feed" component={FeedScreen} />
        <Redirect to="/feed" />
      </Switch>
    </BrowserRouter>
  );
};
