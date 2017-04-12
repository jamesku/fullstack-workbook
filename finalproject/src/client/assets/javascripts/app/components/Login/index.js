import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
export default class Login extends Component {

constructor(){
  super();
  this.state = {
    showLogin: false
  };
}

handleClick(event){
    const username = this.refs.username;
    const password = this.refs.password;
    const creds = { username: username.value.trim(), password: password.value.trim() };
    this.props.onLoginClick(creds);
}

openLogin(event){
  event.preventDefault();
  this.setState({showLogin:!this.state.showLogin});
}

render() {
    const { errorMessage } = this.props;
    return (
<div>
  {!this.state.showLogin &&
      <div>
      <button onClick={(event) => this.openLogin(event)} className="btn btn-primary">
        Login
      </button>
      </div>
}
 {this.state.showLogin &&
      <div>
        <input type='text' ref='username' className="form-control" style={{ marginRight: '5px' }} placeholder='Username'/>
        <input type='password' ref='password' className="form-control" style={{ marginRight: '5px' }} placeholder='Password'/>
        <button onClick={(event) => this.handleClick(event)} className="btn btn-primary">
          Login
        </button>
        <button className="btn btn-primary"> <Link to='/signup' style={{color:'white'}}>
          Signup
          </Link>
        </button>

        {errorMessage &&
          <p style={{color:'red'}}>{errorMessage}</p>
        }
      </div> }
      </div>
    );
  }

}

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
};
