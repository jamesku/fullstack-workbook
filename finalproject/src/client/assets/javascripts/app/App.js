import React, { PropTypes } from 'react';
import Navbar from './containers/Navbar';
import Topbar from './containers/header';

const divStyle = {
        width: "100%",
        margin: "2px",
        fontFamily: "monospace",
        textAlign: "center",
      };


const App = (props) => (
<div style={divStyle}>

  <div className="page-container">
    {React.cloneElement({...props}.children, {...props})}
  </div>
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
