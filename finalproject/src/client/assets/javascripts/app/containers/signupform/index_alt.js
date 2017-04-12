/*import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import FormMessages from 'redux-form-validation';
import {generateValidation} from 'redux-form-validation';
import {submitNewUser} from '../../actions/UserActions';


   var validations = {
     Email: {
       validateOnBlur: false,
       required: true,
       minLength: 5,
       email: true,
       promise:function (fieldName, fieldValue, dispatch){
         return new Promise((resolve,reject) => {
           setTimeout(function (){
             if(fieldValue == 'example@example.com'){
               resolve()
             }else{
               reject('The email  "' + fieldValue + '" is already in use!')
             }
           }, 1000)
         })
       }
     },
     FirstName: {
       required: true
     },
     LastName: {
       required: true,
       minLength: 5
     },
     Password: {
       required: true,
       minLength: 5
     }
   };

   const submit = (values, dispatch) => {
     return dispatch(submitNewUser(values));
   };

   @connect()
   @reduxForm({
     form: 'contact',
     ...generateValidation(validations)
   })

  export default class SignUpForm extends Component {
     render() {
       const {fields: {FirstName, LastName, Email, Password}, handleSubmit, submitting, valid, pristine} = this.props;
       var submitLabel = "Go!";
       if (pristine) {
         submitLabel = "Register";
       } else if (submitting) {
         submitLabel = "Sending...";
       }
       return (
         <form onSubmit={handleSubmit(submit)}>
         <div>
           <label>First Name</label>
           <input type="text" required="required" placeholder=" First Name" {...FirstName}/>
           <FormMessages tagName="ul" errorCount="1" field={FirstName}>
             <li when="required">
               this field is required
             </li>
           </FormMessages>
         </div>
         <div>
           <label>Last Name</label>
           <input type="text" required="required" placeholder=" Last Name" {...LastName}/>
           <FormMessages tagName="ul" errorCount="1" field={LastName}>
             <li when="required">
               this field is required
             </li>
           </FormMessages>
         </div>
           <div>
             <label>Email</label>
             <input type="email" required="required" placeholder="Email" {...Email}/>
             <FormMessages tagName="ul" field={Email}>
               <li when="required">
                 this field is required
               </li>
               <li when="Email">
                 please insert a valid email
               </li>
               <li when="minLength">
                 this field must have at least 5 characters
               </li>
             </FormMessages>
           </div>
           <div>
             <label>Password</label>
             <input type="text" required="required" placeholder=" Password" {...Password}/>
             <FormMessages tagName="ul" errorCount="1" field={Password}>
               <li when="required">
                 this field is required
               </li>
             </FormMessages>
           </div>
           <button onClick={handleSubmit(submit)}>
             {submitLabel}
           </button>
         </form>
       );
     }
   }
*/
