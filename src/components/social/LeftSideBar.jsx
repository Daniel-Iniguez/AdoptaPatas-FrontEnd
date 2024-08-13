import React from 'react'
import { sideBarLinks } from '../../constants/sideBarLinks'
import { NavLink } from 'react-router-dom'

function LeftSideBar({ pathname }) {

  return (
    // Base container
    <div className="hidden md:flex w-full min-w-[12rem] flex-col items-center rounded-xl bg-white px-5 py-6 mt-16">
      <ul className='flex flex-col gap-6 px-4 items-start justify-center list-none'>
        {sideBarLinks.map((link) => {
          const isActive = pathname === link.route;
          return (
            <li key={link.label}
              className={`${isActive && 'bg-gray-100'} list-none rounded-lg w-full text-[1rem] font-["Open_Sans_Semi"] text-[#71717a] hover:bg-gray-100 ease-in transition duration-200`}>
              <NavLink
                to={link.route}
                className="flex gap-6 items-center justify-start p-4">
                <link.icon size={"40"} color={"#71717a"} />
                {link.label}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default LeftSideBar