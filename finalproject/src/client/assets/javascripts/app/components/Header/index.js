import React from 'react';
import SearchBar from '../SearchBar';
import DropzoneComponent from '../Dropzone';
import './Header.css';

import { FileUpload } from 'redux-file-upload';

const Header = ({searchValue, onChange, handleSubmit, handleMediaSubmit}) => {
  return (
    <div>
      <SearchBar onChange={onChange} searchValue={searchValue} handleSubmit={handleSubmit} />

      <DropzoneComponent searchValue={searchValue} handleMediaSubmit={handleMediaSubmit}/>

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