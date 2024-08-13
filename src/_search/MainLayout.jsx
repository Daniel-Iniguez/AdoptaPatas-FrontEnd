import React from 'react';
import { Outlet } from 'react-router-dom';

function MainLayout() {

  return (
    <div className='w-[100%] flex flex-col items-center justify-center'>
      {/* <main className='border-solid border-green-600 border-2 max-w-full '> */}
      <Outlet />
      {/* </main> */}
    </div>
  )
}

export default MainLayout