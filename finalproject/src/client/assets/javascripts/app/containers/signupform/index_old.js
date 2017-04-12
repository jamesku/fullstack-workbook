import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import signUpForm from '../../components/SignupForm';
import {submitNewUser, setUserEmail, setUserFirstName, setUserLastName, setUserPassword} from '../../actions/UserActions';

const mapStateToProps = (state) => {
  return {
    FirstName: state.reducers.userInfo.user.FirstName,
    LastName: state.reducers.userInfo.user.LastName,
    ID: state.reducers.userInfo.user.Id,
    Email: state.reducers.userInfo.user.Email,
    Password: state.reducers.userInfo.user.Password
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
    handleSubmit: (userObj) => {
      dispatch(submitNewUser(userObj));
    }
  };
};

const SignUpForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(signUpForm);

export default SignUpForm;
