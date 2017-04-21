import { combineReducers } from 'redux';
import {SET_USER_EMAIL, SET_USER_HTACCESS, SET_USER_ID,
  SET_USER_PASSWORD, SET_USER_FIRST_NAME, SET_USER_LAST_NAME, SET_USER_JWT,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, NEW_USER_SUCCESS } from '../actions/UserActions';

function userInfo(state = {
  user: {
    Id: '',
    FirstName: '',
    LastName: '',
    Password: '',
    JWT: '',
    Email: '',
    HTAccess: []
    }
  }, action) {
    switch(action.type){
    case SET_USER_ID:
    return {
      ...state,
      user: {
        ...state.user,
        Id: action.value
        }
      };
    case SET_USER_FIRST_NAME:
    return {
      ...state,
      user: {
        ...state.user,
        FirstName: action.value
        }
      };
    case SET_USER_LAST_NAME:
    return {
      ...state,
      user: {
        ...state.user,
        LastName: action.value
        }
      };
    case SET_USER_HTACCESS:
    return {
      ...state,
      user: {
        ...state.user,
        HTAccess: action.value
        }
      };
    case SET_USER_EMAIL:
    return {
      ...state,
      user: {
        ...state.user,
        Email: action.value
        }
      };
    case SET_USER_JWT:
    return {
      ...state,
      user: {
        ...state.user,
        JWT: action.value
        }
      };
    case SET_USER_PASSWORD:
    return {
      ...state,
      user: {
        ...state.user,
        Password: action.value
        }
      };
      case NEW_USER_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          Id: action.Id,
          JWT: action.JWT
          }
        };
    default:
      return state;
  }
}

function auth(state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false
  }, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: ''
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      });
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false
      });
    default:
      return state;
  }
}

const userReducers = combineReducers({
  auth,
  userInfo
});

export default userReducers;
