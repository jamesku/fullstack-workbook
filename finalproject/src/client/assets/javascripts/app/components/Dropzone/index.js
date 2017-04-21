import React from 'react';
import Dropzone from 'react-dropzone';

export default class DropzoneComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  onDrop(acceptedFiles, rejectedFiles){
    console.log('Accepted files: ', acceptedFiles);
    console.log('Rejected files: ', rejectedFiles);
    console.log(this.props.searchValue);
    this.props.handleMediaSubmit(acceptedFiles,this.props.searchValue);
    }

render (){

      return (
          <div>
            <Dropzone style={divStyle} onDrop={this.onDrop.bind(this)}>
              <div style={{minWidth:"24px"}}> + </div>
            </Dropzone>
          </div>
      );
    }
}

DropzoneComponent.propTypes = {
  handleMediaSubmit: React.PropTypes.func,
  searchValue: React.PropTypes.string,

};

const divStyle = {
        marginLeft: "3px",
        height: "1.8em",
        fontFamily: "monospace",
        textAlign: "center",
        display: "flex",
        borderWidth: 2,
        borderColor: '#666',
        borderStyle: 'dashed',
        borderRadius: 5
      };
