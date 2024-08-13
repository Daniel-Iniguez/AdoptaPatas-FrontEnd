import React from 'react'
import FollowerPageCard from '../../components/social/FollowerPageCard'
import { provisionalFollowerData } from '../../constants/provisionalFollowerData'

function FollowersPage() {
  return (
    <section className='max-w-[45rem] h-[800px] flex-col flex gap-2 lg:gap-4 pt-5 pb-10 lg:px-8 px-6 mx-0 lg:mx-10'>
      <div className='overflow-y-auto h-full flex-col flex gap-10 lg:gap-10 items-center'>
        <div className='w-full flex flex-col gap-5 '>
          <h4 className='text-[18px] md:text-[22px] font-["Open_Sans_Medium"] text-main-text-color tracking-[-.010rem]'>Personas a las que sigues</h4>
          {provisionalFollowerData.map(user => {
            return (
              <FollowerPageCard key={user.id} user={user} />
            )
          })}

        </div>
      </div>
    </section>
  )
}

export default FollowersPage