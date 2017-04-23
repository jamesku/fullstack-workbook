import React from 'react';
import SearchBar from '../SearchBar';
import DropzoneComponent from '../Dropzone';
import Login from '../Login';
import Logout from '../Logout';
import './Header.css';

import { FileUpload } from 'redux-file-upload';

const divStyle = {
        margin: "2px 2px 2px 2px",
        fontFamily: "monospace",
        textAlign: "center",
        display: "flex",
        justifyContent:"space-between"

      };

const divStyleLogin = ({
                margin: "2px 2px 2px 2px",
                fontFamily: "monospace",
                textAlign: "center",
                alignSelf: "flex-end"
              });

const Header = ({searchValue, onChange, handleSubmit, handleError, isAuthenticated, onLogoutClick, onLoginClick, handleMediaSubmit}) => {
  return (
    <div style={divStyle}>
      <div>
      </div>
      <div>
        <SearchBar onChange={onChange} searchValue={searchValue} handleSubmit={handleSubmit} />
        <DropzoneComponent searchValue={searchValue} isAuthenticated={isAuthenticated} handleError={handleError} handleMediaSubmit={handleMediaSubmit}/>
      </div>
      <div style={divStyleLogin} >
        {!isAuthenticated &&
          <Login onLoginClick={onLoginClick}/>
        }
        {isAuthenticated &&
          <Logout onLogoutClick={onLogoutClick}/>
        }
      </div>
    </div>
  );
};

export default Header;

Header.propTypes = {
  searchValue: React.PropTypes.string,
  onChange: React.PropTypes.func,
  handleSubmit: React.PropTypes.func,
  handleMediaSubmit: React.PropTypes.func

};
