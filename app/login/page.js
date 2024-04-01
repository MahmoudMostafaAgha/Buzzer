'use client'

import React from 'react'
import { useState } from 'react'
import Login from '@/components/login'
import LoginTwo from '@/components/loginTwo'
const login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSubmit = () => {
    // Perform any necessary login logic here
    setIsLoggedIn(true);
  };

  return (
    <div>
    {!isLoggedIn ? (
      <Login onSubmit={handleLoginSubmit} />
    ) : (
      <LoginTwo />
    )}
  </div>
  )
}

export default login