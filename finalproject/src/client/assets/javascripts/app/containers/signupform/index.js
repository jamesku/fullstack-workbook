import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import SignUpForm from '../../components/SignupForm';
import {submitNewUser, setUserEmail, setUserFirstName, setUserLastName, setUserPassword} from '../../actions/UserActions';

const mapStateToProps = (state) => {
  return {
    FirstName: state.reducers.userReducers.userInfo.user.FirstName,
    LastName: state.reducers.userReducers.userInfo.user.LastName,
    Id: state.reducers.userReducers.userInfo.user.Id,
    Email: state.reducers.userReducers.userInfo.user.Email,
    Password: state.reducers.userReducers.userInfo.user.Password
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setEmail: (value) => {
      if (value) {
        dispatch( setUserEmail(value));
      }
    },
    setFirstName: (value) => {
      if (value) {
        dispatch( setUserFirstName(value));
      }
    },
    setLastName: (value) => {
      if (value) {
        dispatch( setUserLastName(value));
      }
    },
    setPassword: (value) => {
      if (value) {
        dispatch( setUserPassword(value));
      }
    },
    onSubmit: (values) => {
      dispatch(submitNewUser(values));
    }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SignUpForm);
