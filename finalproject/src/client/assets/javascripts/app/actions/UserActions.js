import axios from 'axios';

export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';
export const SET_USER_FIRST_NAME = 'SET_USER_FIRST_NAME';
export const SET_USER_LAST_NAME = 'SET_USER_LAST_NAME';
export const SET_USER_ID = 'SET_USER_ID';
export const SUBMIT_NEW_USER = 'SUBMIT_NEW_USER';
export const DISPLAY_ERROR = 'DISPLAY_ERROR';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const NEW_USER_REQUEST = 'NEW_USER_REQUEST';
export const NEW_USER_SUCCESS = 'NEW_USER_SUCCESS';
export const NEW_USER_FAILURE = 'NEW_USER_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

function requestNewUser(creds) {
  return {
    type: NEW_USER_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  };
}

function submitNewUserFailure(error) {
  return {
    type: DISPLAY_ERROR,
    error
  };
}


function recieveNewUser(user) {
  return {
    type: NEW_USER_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    idToken: user.idToken
  };
}

function newUserError(message) {
  return {
    type: NEW_USER_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  };
}

export function submitNewUser(userObj){

  // let config = {
  //   method: 'POST',
  //   headers: { 'Content-Type':'application/x-www-form-urlencoded' },
  //   body: `firstname=${value.FirstName}&password=${value.Password}&lastname=${value.LastName}&email=${value.Email}`
  // }

;

  return function (dispatch) {
    dispatch(requestNewUser(userObj));
    console.log(userObj);
    axios.post('http://localhost:8080/signup' , userObj).
    then( function (response) {

      console.log(response);

    }).catch( (err) => console.log("Error: ", err));

  };
}

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  };
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    idToken: user.idToken
  };
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  };
}

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  };
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  };
}

// Logs the user out
export function logoutUser() {
  return (dispatch) => {
    dispatch(requestLogout());
    localStorage.removeItem('idToken');
    dispatch(receiveLogout());
  };
}

export function setUserID(value){
  return {
    type: SET_USER_ID,
    value
  };
}

export function setUserEmail(value){
  return {
    type: SET_USER_EMAIL,
    value
  };
}

export function setUserFirstName(value){
  return {
    type: SET_USER_FIRST_NAME,
    value
  };
}

export function setUserLastName(value){
  return {
    type: SET_USER_LAST_NAME,
    value
  };
}

export function setUserPassword(value){
  return {
    type: SET_USER_PASSWORD,
    value
  };
}
