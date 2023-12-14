import React from 'react'
import SignUpForm from './forms/SignUpForm';
import SignInForm from './forms/SignInForm';
import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <>
      <div>AuthLayout</div>
      <Outlet></Outlet>
    </>
    
  )
}

export default AuthLayout;