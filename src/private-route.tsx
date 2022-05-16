import React, { ElementType, useContext } from 'react';
import { RouteProps } from 'react-router';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from './auth';

export type PrivateRouteProps = Omit<RouteProps, "component"> & {
  component: ElementType;
};

export const PrivateRoute = ({ component: Component, ...rest }: PrivateRouteProps) => {
  const jwt = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={props =>
        jwt?.token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}
