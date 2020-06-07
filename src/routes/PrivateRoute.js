import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, authUser, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (authUser.authenticated ? <Component {...props} /> : <Redirect to={{ pathname: '/register' }} />)}
    />
  )
}

export default PrivateRoute