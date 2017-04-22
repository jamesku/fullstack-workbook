import {SHOW_ERROR_BOX, HIDE_ERROR_BOX} from '../actions/various.js';

// Change the state tree (movieSearch) based on the value input searching for the movie

function showError(state = {
  show: false,
  message: '',
}, action) {
  switch (action.type) {
    case SHOW_ERROR_BOX:
      return Object.assign({}, state, {
        show:true,
        message: action.message
      });
      case HIDE_ERROR_BOX:
        return Object.assign({}, state, {
          show:false,
        });

    default:
      return state;
  }
}

export default showError;
