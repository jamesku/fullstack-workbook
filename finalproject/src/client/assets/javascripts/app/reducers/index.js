import { combineReducers } from 'redux';
import HTOperations from './HTOperations';
import userReducers from './userInfo';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  HTOperations,
  userReducers,
  form: formReducer
});
