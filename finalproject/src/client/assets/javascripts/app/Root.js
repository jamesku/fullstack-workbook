import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  IndexRoute,
  Switch
} from 'react-router-dom';
import { Provider, connect } from 'react-redux';

import App from './App';
import FriendsView from '../features/friends/components/FriendsView';
import NotFoundView from './components/NotFound';
import MovieSearch from './containers/MovieSearch.js';
import Navbar from './containers/Navbar';
import Wall from './containers/wall';
import TopBar from './containers/header';
import SignUpForm from './containers/signupform';
import ErrorBox from './containers/errorBox'

////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

const Root = ({store, history}) => {
  let ComponentEl = (
    <Provider store={store}>
    <div style={divStyle}>
    <TopBar />
    <ErrorBox />
      <Router history={history}>
          <div>
          <Route exact path="/" component={Wall}/>
          <Switch>
              <PrivateRoute exact path="/p/" component={Wall}/>
              <PrivateRoute path="/users" component={Wall}/>
              <PrivateRoute path="/user/:userId" component={Wall} />
              <Route path="/signup" component={SignUpForm}/>
            </Switch>
          </div>
      </Router>
      </div>
  </Provider>
);
  return ComponentEl;
};

let PrivateRoute = ({ component: Component, ...rest, JWT }) => (
  <Route {...rest} render={props => (
    JWT ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/signup'
      }}/>
    )
  )}/>
);

const mapStateToProps = (state) => {
  return {
    JWT: state.reducers.userReducers.userInfo.user.JWT,
  };
};

PrivateRoute = connect(
  mapStateToProps,
)(PrivateRoute);




// const AuthButton = withRouter(({ history }) => (
//   fakeAuth.isAuthenticated ? (
//     <p>
//       Welcome! <button onClick={() => {
//         fakeAuth.signout(() => history.push('/'))
//       }}>Sign out</button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   )
// ))

export default Root;

const divStyle = {
        width: "100%",
        margin: "2px",
        fontFamily: "monospace",
        textAlign: "center",
      };
