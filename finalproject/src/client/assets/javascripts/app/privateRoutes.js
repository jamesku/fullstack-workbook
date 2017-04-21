import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';

import { connect } from 'react-redux';

const PrivRoute = ({ component: Component, JWT, ...rest }) => (
  <Route {...rest} render={(props) => (
     ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/signup',
      }}/>
    )
  )}/>
);

const mapStateToProps = (state) => {
  return {
    JWT: state.reducers.userReducers.userInfo.user.JWT,
  };
};

const PrivateRoute = connect(
  mapStateToProps,
)(PrivRoute);

export default PrivateRoute;
