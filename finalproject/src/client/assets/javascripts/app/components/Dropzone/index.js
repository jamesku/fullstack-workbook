import React from 'react';
import Dropzone from 'react-dropzone';

export default class DropzoneComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  onDrop(acceptedFiles, rejectedFiles){
    console.log('Accepted files: ', acceptedFiles);
    console.log('Rejected files: ', rejectedFiles);
    this.props.handleMediaSubmit(acceptedFiles,this.props.searchValue);
    }

render (){
      return (
          <div>
            <Dropzone onDrop={this.onDrop.bind(this)}>
              <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
          </div>
      );
    }
}

DropzoneComponent.propTypes = {
  handleMediaSubmit: React.PropTypes.func,
  searchValue: React.PropTypes.string,

};
