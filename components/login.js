'use client'

import React from 'react';
import '../app/styles/login.css'

const Login = ({ onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
      };

  return (
    <div className='login row'>
      <div className='login-data col-md-5'>
        <img src='dark-logo.svg' alt='Logo' className='login-logo' height={120}/>
        <form className='login-form' onSubmit={handleSubmit}>
          <h5 className='welcome-title'>Welcome!</h5>
          <div className='welcome-paragraph'>
            Enter the authentication code we sent at*******896
          </div>
          <input type="tel" id="phoneNumber" placeholder='Phone number' className='login-input' required/>
          <div className='login-text'>or</div>
          <input type="email" id="email" placeholder='Email' className='login-input' required/>
          <button type="submit" className='login-btn'>Next</button>
          <a  className='login-text'>Don’t have an Account?<span className='red-text'> Register</span></a>
        </form>
      </div>
      <div className='login-img col-md-5'>
      <img  src='login-1.svg' alt='Login' height={344}/>
        </div>
    </div>
  );
};

export default Login;
