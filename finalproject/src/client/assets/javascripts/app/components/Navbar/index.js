 import React, { Component, PropTypes } from 'react';
import Login from '../Login';
import Logout from '../Logout';
import { loginUser, logoutUser } from '../../actions';

export default class Navbar extends Component {

  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props;

    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <a className="navbar-brand" href="#">MemWall</a>
           <div className='navbar-form'>

           {!isAuthenticated &&
             <Login

             />
           }
           {isAuthenticated &&
             <Logout onLogoutClick={() => dispatch(logoutUser())} />
           }
         </div>
       </div>
     </nav>
   );
  }
}

Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  isAuthenticated: PropTypes.bool.isRequired
};

// errorMessage={errorMessage}
// onLoginClick={(creds) => dispatch(loginUser(creds))}
