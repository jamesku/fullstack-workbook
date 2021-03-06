import axios from 'axios';

export const ADD_NEW_POST = 'ADD_NEW_POST';
export const REQUEST_HT = 'REQUEST_HT';
export const RECEIVE_MOVIE_META = 'RECEIVE_MOVIE_META';
export const REQUEST_USER_MOVIES = 'REQUEST_USER_MOVIES';
export const RECEIVE_USER_MOVIES = 'RECEIVE_USER_MOVIES';
export const CLEAR_MOVIE_SEARCH = 'CLEAR_MOVIE_SEARCH';
export const UPDATE_HT_VALUE = 'UPDATE_HT_VALUE';
export const SET_USER_ID = 'SET_USER_ID';
export const LOAD_POSTS = 'LOAD_POSTS';

export function setUserID(userId){
  return {
    type: SET_USER_ID,
    userId
  };
}

export function updateHTValue(value) {
  return {
    type: UPDATE_HT_VALUE,
    value
  };
}

export function requestHT(hashtag) {
  return {
    type: REQUEST_HT,
    hashtag
  };
}

function addNewPost(fileURL,hashtag) {
  return {
    type: ADD_NEW_POST,
    fileURL,
    hashtag
  };
}

//###############################################################
//#Hashtag actions
//#

export function searchForHT(hashtag) {

  return (dispatch) => {
    // const { JWT } = getState().reducers.userReducers.userInfo.user;
    //
    // axios.defaults.headers.common['JWToken'] = JWT;

  window.location.href = "/"+ hashtag;

    axios({
      url: 'http://localhost:8080/hashtags',
      timeout: 20000,
      method: 'post',
      data: {hashtag}
    })
      // When the response is received, dispatch the data (via action creator)

      .then( (resp) => {
        if(resp.data.newhashtag){
          console.log(resp);
        }

        //  dispatch(resp.dataddUserMovie(movie));
        });
  };
}

function loadPosts(hashtag){
  return {
    type: LOAD_POSTS,
    hashtag,
  };
}



















//
// function receiveMovieMeta(json) {
//   return {
//     type: RECEIVE_MOVIE_META,
//     movieObject: json,
//     receivedAt: Date.now()
//   };
// }

function requestUserMovies() {
  return {
    type: REQUEST_USER_MOVIES,
  };
}

function receiveUserMovies(movieArray) {
  return {
    type: RECEIVE_USER_MOVIES,
    movieArray,
    receivedAt: Date.now()
  };
}

export function clearMovieSearch() {
  return {
    type: CLEAR_MOVIE_SEARCH
  };
}

export function deleteMovieFromState(movieId) {
  return {
    type: DELETE_MOVIE,
    movieId
  };
}

export function saveMovie(movieTitle, moviePosterPath, _id) {
  return function (dispatch) {

    const movie = {
      movieTitle,
      moviePosterPath,
      _id
    };

      // Initial dispatch to add the movie to the local store

      // Return a Promise via Axios to wait for
    return axios.post('http://localhost:4000/movies' , movie);

  };

}

// THUNK Action Creator
export function getUserMovies() {

  // THUNK automatically passes dispatch
  return function (dispatch) {
      // Initial dispatch to let the app know that a request has been made
    dispatch(requestUserMovies());

      // Return a Promise via Axios to wait for
    return axios({
      url: 'http://localhost:4000/movies',
      timeout: 20000,
      method: 'get',
      responseType: 'json'
    })
      // When the response is received, dispatch the data (via action creator)

      .then(resp => {
        const MovieArray = [];
        resp.data.forEach((obj) => {
          const movie = {
            movieTitle: obj.movieTitle,
            moviePosterPath: obj.moviePosterPath,
            _id: obj._id
          };
        //  dispatch(resp.dataddUserMovie(movie));
          MovieArray.push(movie);
        });

        // I HAVE A BIG QUESTIO HERE! (ABOUT MANIPULATING THINGS IN STATE IN REDUX)
        dispatch(receiveUserMovies(MovieArray));
      });
			// .catch(function(response){
			// 	dispatch(receiveError(response.data));
			// 	dispatch(pushState(null,'/error'));
			// })
  };
}

function addHT(searchValue) {
  return function (dispatch) {

    const hashtag = {
      hashtag: searchValue
    };
    axios.post('http://localhost:8080/newhashtag' , hashtag);

  };
}


//const fs = require('fs');
//const rp = require('request-promise-native');

export function uploadMedia(receivedFile, hashtag) {
  return function (dispatch) {

 receivedFile.forEach((file) => {
   let data = new FormData();
   data.append('file', file);
   data.append('hashtag', hashtag);
   console.log(data);

   //put the data in the store

   // put the data in the db
   axios.post('http://localhost:8080/newpost', data)
  .then( (resp) => {
    console.log(resp);
  });
  });
} ;
}

export function updateHT(value) {
  return function (dispatch) {
      // Dispatch the request for the Movie Meta Data
    dispatch(updateHTValue(value));
  };
}


export function deleteMovie(movieId) {
  return function (dispatch) {
      // Dispatch the request for the Movie Meta Data
    dispatch(deleteMovieFromState(movieId));

    axios.delete('http://localhost:4000/movies/' + movieId);
    // return axios({
    //   method: 'delete',
    //   url: 'http://localhost:4000/movies?movie.movieTitle=' + movieTitle,
    // })
    //     // When the response is received, dispatch the data (via action creator)
    //     .then(resp => {
    //       console.log('movie deleted');
    //     });
    //     // .catch(function(response){
        // 	dispatch(receiveError(response.data));
        // 	dispatch(pushState(null,'/error'));
        // })
  };
}
