import axios from 'axios';
import showErrorBox from './various.js';

export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';
export const SET_USER_FIRST_NAME = 'SET_USER_FIRST_NAME';
export const SET_USER_LAST_NAME = 'SET_USER_LAST_NAME';
export const SET_USER_ID = 'SET_USER_ID';
export const SUBMIT_NEW_USER = 'SUBMIT_NEW_USER';
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

// function submitNewUserFailure(message) {
//   return {
//     type: DISPLAY_ERROR,
//     message
//   };
// }

function receiveNewUser(user) {
  return {
    type: NEW_USER_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    JWT: user.token,
    Id: user.userId
  };
}

export function submitNewUser(userObj){

  return function (dispatch) {
    dispatch(requestNewUser(userObj));
    console.log(userObj);
    axios.post('http://localhost:8080/signup' , userObj).
    then( function (response) {
      console.log(response);

      if(response.data.error){
console.log(response.data.error);
        dispatch(showErrorBox(response.data.error));
      }
      else {
        // Window.localstorage.setItem('mwtok':response.data.token);
        dispatch(receiveNewUser(response.data));}
        if (response.data.token){
          axios.defaults.headers.common['jwtoken'] = response.data.token;
          window.location.href = "/";
        }
    }).catch( (err) => console.log((err)));
  };
}

//#############################################
// Login/Logout functionality


function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    creds
  };
}
//
// function receiveLogin(user) {
//   return {
//     type: LOGIN_SUCCESS,
//     isFetching: false,
//     isAuthenticated: true,
//     idToken: user.idToken
//   };
// }
//
// function loginError(message) {
//   return {
//     type: LOGIN_FAILURE,
//     isFetching: false,
//     isAuthenticated: false,
//     message
//   };
// }
//
function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
  };
}
//
// function receiveLogout() {
//   return {
//     type: LOGOUT_SUCCESS,
//     isFetching: false,
//     isAuthenticated: false
//   };
// }
//
// Logs the user out
export function logoutUser() {
  return (dispatch) => {
    dispatch(requestLogout());
    axios.defaults.headers.common['jwtoken'] = "";

//    localStorage.removeItem('idToken');
//    dispatch(receiveLogout());
  };
}

export function loginUser(creds) {
  return (dispatch) => {
console.log(creds);
    axios({
      url: 'http://localhost:8080/login',
      timeout: 20000,
      method: 'post',
      data: {creds}
    })
      // When the response is received, dispatch the data (via action creator)

      .then( (resp) => {
          console.log(resp);
        

        //  dispatch(resp.dataddUserMovie(movie));
        });

  };
}

//###########################
// Functions to set various values in state pertaining to the user

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
