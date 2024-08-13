import React from 'react'
import { Outlet } from 'react-router-dom'
import LeftSideBar from '../components/social/LeftSideBar'
import { useLocation } from 'react-router-dom'
import BottomBar from '../components/social/BottomBar';


function NewsFeedLayout() {
  const { pathname } = useLocation();
  return (
    <div className='w-full flex pt-5 bg-bg-light-green h-full '>
      <div className='hidden md:w-[20rem] lg:w-[25rem] h-full md:flex flex-col gap-6 overflow-y-auto pl-8 pr-8'>
        <LeftSideBar pathname={pathname} />
      </div>
      {/* <main className='border-solid border-green-600 border-2 max-w-full '> */}
      <div className='w-full flex flex-col md:flex-row '>
        <section className='w-full flex-col md:flex-row gap-2 lg:w-full lg:gap-4 pt-5 pb-10'>
          <Outlet />
        </section>
        <BottomBar />
      </div>
      {/* </main> */}
    </div>
  )
}

export default NewsFeedLayout