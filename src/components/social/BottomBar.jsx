import React from 'react'
import { bottomBarLinks } from '../../constants/bottomBarLinks';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function BottomBar() {
  const { pathname } = useLocation();
  return (
    <section className=' z-50 flex-between w-full sticky bottom-0  bg-dark-2 px-5 py-4 md:hidden bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
      <ul className='flex gap-6 px-4 items-center justify-center list-none'>
        {bottomBarLinks.map((link) => {
          const isActive = pathname === link.route;
          return (
            <li key={link.label}
              className={`${isActive && 'bg-gray-100'} list-none rounded-lg w-full text-[.8rem] font-["Open_Sans_Semi"] text-[#71717a] hover:bg-gray-100 ease-in transition duration-200`}>
              <Link
                to={link.route}
                className="flex flex-col gap-2 items-center justify-start p-2 text-center">
                <link.icon size={"25"} color={"#71717a"} />
                {link.label}
              </Link>
            </li>
          )
        })}
      </ul>

    </section>
  )
}

export default BottomBar