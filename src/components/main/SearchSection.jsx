import React from 'react'
import SearchIcon from '../shared/SearchIcon'
import { Link } from 'react-router-dom'

function SearchSection() {
  return (
    <section className='w-[100%] h-[550px] border-solid border-orange-500 border-2 flex flex-col items-center justify-around py-16'>
      <h3 className='font-["Nunito_Black"] text-[3rem] text-main-text-color text-center'>Encuentra a tu próximo mejor amigo</h3>
      <div className='w-[80%] bg-main-text-color h-[15rem] rounded-2xl p-10'>
        <form className='w-[100%] border-solid border-orange-900 border-2 flex flex-col items-center gap-12'>
          <div className='w-[100%] border-solid border-pink-300 border-2 flex flex-row justify-between gap-9'>
            <div className="border-solid border-white border-2 relative flex-1">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <SearchIcon />
              </div>
              <input type="search" id="default-search" class="block w-[100%] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#eab7ba] focus:border-[#eab7ba] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#eab7ba] dark:focus:border-[#eab7ba]" placeholder="Busca por ubicación..." required />
            </div>
            <div className="flex flex-row border-solid border-white border-2 relative flex-1">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <SearchIcon />
              </div>
              <input type="search" id="default-search" class="block w-[100%] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#eab7ba] focus:border-[#eab7ba] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#eab7ba] dark:focus:border-[#eab7ba]" placeholder="Busca por raza, edad..." required />
            </div>
          </div>
          <button className='w-[13rem] h-[3rem] hover:text-white transition duration-200 ease-in-out cursor-pointer bg-white px-7 py-[0.5rem] text-main-text-color rounded-3xl hover:bg-[#eab7ba]'>
            <Link to='/'>
              Buscar
            </Link>
          </button>
        </form>
      </div>
    </section>
  )
}

export default SearchSection