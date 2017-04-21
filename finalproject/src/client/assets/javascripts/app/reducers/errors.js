import {SHOW_ERROR_BOX} from '../actions/various.js';

// Change the state tree (movieSearch) based on the value input searching for the movie

function showError(state = {
  shown: false,
  Content: '',
}, action) {
  switch (action.type) {
    case SHOW_ERROR_BOX:
      return Object.assign({}, state, {
        shown:action.shown,
        message: action.message
      });

    default:
      return state;
  }
}

export default showError;
