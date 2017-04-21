import React from 'react';
import Button from '../Button';
import ToggleDisplay from 'react-toggle-display';

var divStyle = {
  background: "#eee",
  padding: "20px",
  margin: "20px",
  zindex:1000
};

const errorBox = ({errorText, onClick, show}) => {
  return (

<ToggleDisplay show={show}>
    <div className="errorbox" style={divStyle} >
      {errorText}
    <Button onClick={onClick} buttonText="cool"/>
    </div>
</ToggleDisplay>
  );
};

export default errorBox;

errorBox.propTypes = {
  errorText: React.PropTypes.string,
  onClick: React.PropTypes.func,
  show: React.PropTypes.string
};
