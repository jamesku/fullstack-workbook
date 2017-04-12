import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loginUser, fetchQuote, fetchSecretQuote } from '../../actions';
import Login from '../../components/Login';
import Navbar from '../../components/Navbar';

class App extends Component {

  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props;
    return (
      <div>
        <Navbar
          isAuthenticated={isAuthenticated}
          errorMessage={errorMessage}
          dispatch={dispatch}
        />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  quote: PropTypes.string,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  isSecretQuote: PropTypes.bool.isRequired
};
//
function mapStateToProps(state) {
//
//   const {  auth } = state;
//   const { quote, authenticated } = quotes;
//   const { isAuthenticated, errorMessage } = auth;
//
//   return {
//     quote,
//     isSecretQuote: authenticated,
//     isAuthenticated,
//     errorMessage
  }
// // }
//
 export default connect(mapStateToProps)(Navbar);
