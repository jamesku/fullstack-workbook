import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';
import PrivateRoute from './privateRoutes.js';

import App from './App';
import FriendsView from '../features/friends/components/FriendsView';
import NotFoundView from './components/NotFound';
import MovieSearch from './containers/MovieSearch.js';
import Navbar from './containers/Navbar';
import Wall from './containers/wall';
import TopBar from './containers/header';
import SignUpForm from './containers/signupform';


export default (
  <div>
    <Route path="/" component={Wall}>
      <IndexRoute component={Wall} />
      </Route>
      <PrivateRoute path="/p/" component={App} >
        <IndexRoute component={Wall} />
        <PrivateRoute path="users" component={Navbar}/>
        <PrivateRoute path="user/:userId" component={Wall} />
      </PrivateRoute>
      <Route path="/signup" component={SignUpForm}/>
  </div>

  );

  // /*
  // <Route path="/" component={App}>
  //   <IndexRoute component={FriendsView} />
  //   <Route path="404" component={NotFoundView} />
  //   <Redirect from="*" to="404" />
  // </Route>
  // */
