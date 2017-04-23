import { connect } from 'react-redux';
import Header from '../../components/Header';
import {searchForHT, updateHT, uploadMedia} from '../../actions';
import {showErrorBox} from '../../actions/various.js';
import {logoutUser, loginUser} from '../../actions/UserActions.js';

let isAuthenticated = false;

const mapStateToProps = (state) => {
  if (state.reducers.userReducers.userInfo.user.JWT){
    isAuthenticated = true;
  } else {isAuthenticated=false;}

  return {
    isAuthenticated,
    searchValue: state.reducers.HTOperations.searchHT.searchValue
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (value) => {
        dispatch(updateHT(value));
    },
    handleSubmit: (value) => {
      dispatch(searchForHT(value));
    },
    onClick: () => {
      dispatch(uploadMedia());
    },
    handleMediaSubmit: (acceptedFiles, value) => {
      dispatch(uploadMedia(acceptedFiles, value));
    },
    handleError: (message) => {
      dispatch(showErrorBox(message));
    },
    onLogoutClick: () => {
      dispatch(logoutUser());
    },
    onLoginClick: (creds) => {
      dispatch(loginUser(creds));
    }
  };
};

const TopBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default TopBar;
