import React from 'react'
import { Link } from 'react-router-dom'

function FollowerPageCard({ user }) {
  return (
    <div
      class="w-full  md:mx-auto lg:mx-auto xl:mx-auto bg-white rounded-lg text-gray-700 shadow-md">
      <div class="rounded-t-lg sm:h-32 h-20 overflow-hidden">
        <img class="object-cover object-top w-full" src={user.headerImg} alt='Mountain' />
      </div>
      <div className='flex flex-row w-full justify-around'>
        <div class=" sm:w-36 sm:h-36 w-24 h-24 relative sm:-mt-16 -mt-8 border-4 border-white rounded-full overflow-hidden">
          <img class="object-cover object-center h-24 sm:h-36" src={user.image} alt='User Profile Picture' />
        </div>
        <ul class="w-[60%]  py-4 mt-2 text-gray-700 flex items-center justify-around sm:justify-between sm:text-[1rem] text-[0.8rem]">
          <li class="flex  flex-col items-center justify-around">
            <p className='font-["Open_Sans_Semi"] text-gray-600'>Seguidores</p>
            <div className='font-["Open_Sans_Medium"] text-gray-500'>2k</div>
          </li>
          <li class="flex flex-col items-center justify-between">
            <p className='font-["Open_Sans_Semi"] text-gray-600'>Siguiendo</p>
            <div className='font-["Open_Sans_Medium"] text-gray-500'>10k</div>
          </li>
          <li class="flex flex-col items-center justify-around">
            <p className='font-["Open_Sans_Semi"] text-gray-600'>Publicaciones</p>
            <div className='font-["Open_Sans_Medium"] text-gray-500'>15</div>
          </li>
        </ul>

      </div>
      <div className='flex flex-row sm:pb-6 pb-3 justify-between items-center '>
        <div class=" text-left mx-8">
          <h2 class="font-['Open_Sans_Semi'] text-[1rem] sm:text-[1.2rem]">{user.name}</h2>
          <p class="text-gray-500 text-[0.95rem] sm:text-[1rem] font-['Open_Sans_Medium']">{user.city}</p>
        </div>

        <div class="sm:w-[15rem] w-[12rem] mt-2">
          <Link to={`/social/profile/${user.id}`} class="sm:w-1/2 w-[8rem] text-center transition ease-in duration-150 hover:shadow-md block mx-auto rounded-full bg-main-text-color sm:text-[1rem] text-[0.8rem] hover:bg-white hover:text-main-text-color font-['Open_Sans_Semi'] text-white px-6 py-2">Ver Perfil</Link>
        </div>
      </div>
    </div>
  )
}

export default FollowerPageCard