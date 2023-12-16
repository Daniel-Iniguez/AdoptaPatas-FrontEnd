import React from 'react'
import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <>
      {/* <div>AuthLayout</div> */}
      <Outlet></Outlet>
    </>
    
  )
}

export default AuthLayout;