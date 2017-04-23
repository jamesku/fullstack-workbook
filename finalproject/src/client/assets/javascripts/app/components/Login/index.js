import React, { Component, PropTypes } from 'react';

export default class Login extends Component {

handleClick(event){
    const email = this.refs.email;
    const password = this.refs.password;
    const creds = { email: email.value.trim(), password: password.value.trim() };
    this.props.onLoginClick(creds);
}

render() {
    const { errorMessage } = this.props;
    return (
      <div>
        <input type='text' ref='email' className="loginnavbar" style={{ marginRight: '5px' }} placeholder='Email'/>
        <input type='password' ref='password' className="loginnavbar" style={{ marginRight: '5px' }} placeholder='Password'/>
        <button onClick={(event) => this.handleClick(event)} >
          Login
        </button>
        <button onClick={() => { window.location.replace("/signup");}} style={{color:'white'}}>
          Signup
        </button>
      </div>
    );
  }

}

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
};
