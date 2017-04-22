import React from 'react';
import { connect } from 'react-redux';
import errorBox from '../../components/errorbox';
import {showErrorBox, hideErrorBox} from '../../actions/various.js';

const mapStateToProps = (state) => {
  return {
    message: state.reducers.showError.message,
    show: state.reducers.showError.show,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (value) => {
      if (value) {
        dispatch( hideErrorBox());
      }
    },
      showErrorBoxProp: (message) => {
          dispatch( showErrorBox(message));
    }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(errorBox);
