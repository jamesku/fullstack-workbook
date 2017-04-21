import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.age) {
    errors.age = 'Required';
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number';
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old';
  }
  return errors;
};

const warn = (values) => {
  const warnings = {};
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...';
  }
  return warnings;
};

const renderField = ({ input, value, update, label, type, meta: { touched, error, warning } }) => (

  <div>
    <label>{label}</label>
    <div>
      <input {...value} placeholder={label} type={type} onChange={(event) => {update(event.target.value);}} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

class SignUpForm extends Component {

  constructor(props) {
      super(props);
      this.handleMyFormSubmit = this.handleMyFormSubmit.bind(this);

    }

    handleMyFormSubmit() {
      const userObj = { FirstName:this.props.FirstName, LastName:this.props.LastName, Password:this.props.Password, Email:this.props.Email};
      this.props.onSubmit(userObj);
    }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleMyFormSubmit)}>
        <Field name="FirstName"
               type="text"
               component={renderField}
               label="First Name"
               value={this.props.FirstName}
               update={(value) => {this.props.setFirstName(value);}}
         />
        <Field name="LastName" type="text" component={renderField} label="Last Name" value={this.props.LastName} update={this.props.setLastName} />
        <Field name="Email" type="email" component={renderField} label="Email" value={this.props.Email} update={this.props.setEmail}/>
        <Field name="Password" type="text" component={renderField} label="Password" value={this.props.Password} update={this.props.setPassword}/>
        <div>
          <button type="submit" disabled={this.props.submitting}>Submit</button>
          <button type="button" disabled={this.props.pristine || this.props.submitting} onClick={this.props.reset}>Clear Values</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
form: 'SignUp',  // a unique identifier for this form
validate,                // <--- validation function given to redux-form
warn                     // <--- warning function given to redux-form
})(SignUpForm);

// // Decorate the form component
// SignUpForm = reduxForm({
//   forms: 'signup' // a unique name for this form
// })(SignUpForm);
//
// export default SignUpForm;
