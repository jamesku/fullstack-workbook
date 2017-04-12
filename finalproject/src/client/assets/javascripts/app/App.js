import React, { PropTypes } from 'react';
import Navbar from './containers/Navbar';
import Topbar from './containers/header';

const App = (props) => (
<div>
<Topbar />
  <div className="page-container">
    {React.cloneElement({...props}.children, {...props})}
  </div>
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
