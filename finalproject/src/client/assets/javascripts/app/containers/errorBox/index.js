import React from 'react';
import { connect } from 'react-redux';
import errorBox from '../../components/errorbox';
import {showErrorBox} from '../../actions/UserActions';

const mapStateToProps = (state) => {
  return {
    errorText: state.reducers.errors.showError.shown,
    show: state.reducers.errors.show,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (value) => {
      if (value) {
        dispatch( showErrorBox("false"));
      }
    }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(errorBox);
