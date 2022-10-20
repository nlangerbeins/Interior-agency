import './ContactForm.css';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {

  const [state, handleSubmit] = useForm("xjvzevyd");

  if (state.succeeded) {
      return <p>Thanks for sending us a message!</p>;
  }

  return (
      <form method="POST" onSubmit={handleSubmit} className="form">
        <div className='form_field'>
            <label htmlFor="firstName">First name *</label>
            <input id="firstName" type="text" name="firstName" required/>
            <ValidationError prefix="firstName" field="firstName" errors={state.errors}/>
        </div>
        <div className='form_field'>
            <label htmlFor="lastName">Last name *</label>
            <input id="lastName" type="text" name="lastName" required/>
            <ValidationError prefix="lastName" field="lastName" errors={state.errors}/>
        </div>
        <div className='form_field'>
            <label htmlFor="email">E-mail *</label>
            <input id="email" type="email" name="email" required/>
            <ValidationError prefix="Email" field="email" errors={state.errors}/>
        </div>
        <div className='form_field'>
            <label htmlFor="phone">Phone *</label>
            <input id="phone" type="tel" name="phone" required/>
            <ValidationError prefix="Phone" field="phone" errors={state.errors}/>
        </div>
        <div className='form_field'>
            <label htmlFor="message">Tell us about your idea</label>
            <textarea id="message" name="message"/>
            <ValidationError prefix="Message" field="message" errors={state.errors}/>
        </div>
        <div className="contact_btn">
            <button type="submit" disabled={state.submitting} className="btn_send">send</button>
        </div>
    </form>
  );
}

export default ContactForm;