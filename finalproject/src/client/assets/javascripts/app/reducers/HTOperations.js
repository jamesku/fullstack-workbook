import {combineReducers} from 'redux';
import update from 'react-addons-update';
import {DELETE_MOVIE, ADD_MOVIE, REQUEST_HT,
   CLEAR_MOVIE_SEARCH, RECEIVE_MOVIE_META,
    RECEIVE_USER_MOVIES, UPDATE_HT_VALUE, SET_USER_ID, LOAD_POSTS, ADD_ARRAY_TO_INDEX } from '../actions';

// Change the state tree (movieSearch) based on the value input searching for the movie

import userInfo from './userInfo.js';

function searchHT(state = {
  isFetching: false,
  HT: '',
  searchValue: ''
}, action) {
  switch (action.type) {
    case UPDATE_HT_VALUE:
      return Object.assign({}, state, {
        searchValue: action.value
      });

    // If the reducer is passed that the request is made is notes it in the state object
    case REQUEST_HT:
      return Object.assign({}, state, {
        isFetching: true,
        searchValue: action.movie
      });
    // If the reducer is passed that the response has been received, it updates the state
    case RECEIVE_MOVIE_META:
      return Object.assign({}, state, {
        isFetching: false,
        movieTitle: action.movieObject[0].original_title,
        movieOverview: action.movieObject[0].overview,
        moviePosterPath: action.movieObject[0].poster_path,
        _id: action.movieObject[0].id,
        lastUpdated: action.receivedAt
      });
    case CLEAR_MOVIE_SEARCH:
      return Object.assign({}, state, {
        isFetching: false,
        movieTitle: '',
        movieOverview: '',
        moviePosterPath: '',
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}

function HTWall(state = {
  Posts: [],
  indexArray: [],
}, action) {
  switch (action.type) {
    case LOAD_POSTS:
      return Object.assign({}, state, {
        Posts: state.Posts.concat(action.post)
      });
    case ADD_ARRAY_TO_INDEX:
        return Object.assign({}, state, {
            indexArray: state.indexArray.concat(action.hashtag)
      });
    default:
      return state;
  }
}

// Combine reducers
const HTOperations = combineReducers({
  searchHT,
  HTWall,
  userInfo
});

export default HTOperations;
