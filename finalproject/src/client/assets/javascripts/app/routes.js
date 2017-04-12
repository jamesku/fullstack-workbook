import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

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

    <Router history={browserHistory} >
      <Route path="/" component={App} >
        <IndexRoute component={Wall} />
        <Route path="users" component={Navbar}/>
        <Route path="user/:userId" component={Wall} />
      </Route>
      <Route path="/signup" component={SignUpForm}/>
    </Router>
  </div>

  );

  // /*
  // <Route path="/" component={App}>
  //   <IndexRoute component={FriendsView} />
  //   <Route path="404" component={NotFoundView} />
  //   <Redirect from="*" to="404" />
  // </Route>
  // */
