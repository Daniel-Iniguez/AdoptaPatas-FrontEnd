import React from 'react'
import { provisionalFollowerData } from '../../constants/provisionalFollowerData'
import FollowerCard from './FollowerCard'
import ProfileCard from './ProfileCard'

function RightSideBar() {
  return (
    // Base container
    <div className='w-full flex flex-col items-center  py-4 gap-3 '>
      {/* Profile card */}
      <div className='w-full flex flex-col items-start'>
        <h3 className='pl-5 text-[1.3rem] font-["Open_Sans_Medium"] text-main-text-color'>Mi perfil</h3>
        <div className='w-full flex flex-col items-center  py-4 gap-3 '>
          <ProfileCard />
        </div>
      </div>
      {/* Followers Container */}
      <div className='w-full flex flex-col items-start'>
        <h3 className='pl-5 text-[1.3rem] font-["Open_Sans_Medium"] text-main-text-color'>Followers</h3>
        <div className='w-full bg-bg-light-green flex flex-col items-center rounded-xl px-3 py-4 gap-2 '>
          {provisionalFollowerData.map(follower => (
            <FollowerCard key={follower.id} follower={follower} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default RightSideBar