import { combineReducers } from 'redux';
import HTOperations from './HTOperations';
import userReducers from './userInfo';
import showError from './errors';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  showError,
  HTOperations,
  userReducers,
  form: formReducer
});
