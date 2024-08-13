import React from 'react'
import Feed from '../../components/social/Feed'
import RightSideBar from '../../components/social/RightSideBar'

function HomeFeed() {


  return (
    <div className='w-full flex gap-2 lg:gap-4 pt-5 pb-10 h-[800px]'>

      <div className=' w-full h-full md:flex flex-col gap-6 overflow-y-auto'>

        <Feed />
      </div>
      <div className='hidden md:hidden w-full lg:max-w-[22rem] lg:flex md:max-w-[20rem] h-full  flex-col gap-6 overflow-y-auto pr-8'>

        <RightSideBar />
      </div>
    </div >
  )
}

export default HomeFeed