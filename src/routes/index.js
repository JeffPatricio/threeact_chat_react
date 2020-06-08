import React from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Register from '../pages/Register';
import Chat from '../pages/Chat';

const Routes = ({ authUser }) => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' render={() => authUser.authenticated ? <Redirect to='/chat' /> : <Redirect to='/register' />} />
        <Route exact path='/register' render={() => authUser.authenticated ? <Redirect to='/chat' /> : <Register />} />
        <PrivateRoute path='/chat' component={Chat} authUser={authUser} />
      </Switch>
    </Router>
  )
}

export default Routes