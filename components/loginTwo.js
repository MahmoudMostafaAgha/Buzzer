'use client'

import React from 'react';
import { useRouter } from "next/navigation";
import '../app/styles/login.css'

const LoginTwo = () => {
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
     
        localStorage.setItem('isLoggedIn', 'true');

        router.push("/");
      };
      

  return (
    <div className='login row'>
      <div className='login-data col-md-5'>
        <img src='dark-logo.svg' alt='Logo' className='login-logo' height={120}/>
        <form className='login-form' onSubmit={handleSubmit}>
          <h5 className='welcome-title'>Login Code</h5>
          <div className='welcome-paragraph'>
          Enter the authentication code we sent at*******896
          </div>
          <input type="tel" id="phoneNumber" placeholder='Phone number' className='login-input' required/>
          <div className='login-text'>or</div>
          <input type="number"  placeholder='+971 2356 5896' className='login-input' required/>
          <button type="submit" className='login-btn'>Submit</button>
          <a  className='login-text'>Don’t have an Account?<span className='red-text'> Register</span></a>
        </form>
      </div>
      <div className='login-img col-md-5'>
      <img  src='login-2.svg' alt='Login' height={344}/>
        </div>
    </div>
  );
};

export default LoginTwo;
