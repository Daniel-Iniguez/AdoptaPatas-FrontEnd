import React from 'react'
import LocationIcon from '../icons/LocationIcon'
import { Link } from 'react-router-dom'

function PetCard({ pet: { id, name, breed, age, location, image }, handleDelete }) {
  return (
    <div
      className="hover:bg-[#f1d7d8] w-[15rem] block rounded-lg bg-secondary-bg-color shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 transition-colors">
      <a href="#!">
        <img
          className="rounded-t-lg block w-[100%] h-[10rem] object-cover"
          src={image}
          alt="" />
      </a>
      <div className="py-3 px-5 flex flex-col items-start gap-1">
        <h5
          className="mb-1 text-[1.2rem] text-center font-['Open_Sans_Semi'] text-main-text-color">
          {name}
        </h5>
        <div className='mb-1 text-text-color w-[100%] flex flex-row gap-2 font-["Open_Sans_Medium"] text-[.95rem]'>
          <h6
            className="text-center leading-tight">
            {breed}
          </h6>
          <span> | </span>
          <h6
            className="text-center leading-tight">
            {age}
          </h6>
        </div>
        <div className='w-[100%] flex flex-row gap-2'>
          <LocationIcon />
          <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
            {location}
          </p>
        </div>
        <div className='w-[100%] flex flex-row gap-2'>
          <button
            href="#"
            onClick={() => handleDelete(id)}
            className="inline-flex justify-center items-center rounded-lg bg-main-text-color px-4 py-2 text-center text-[.85rem] font-['Open_Sans_Medium'] text-white hover:bg-[#646060] focus:outline-none focus:ring-4 focus:ring-[#747474] dark:focus:ring-[#646060]"
          >
            Eliminar
          </button>
          <button
            href="#"
            className="inline-flex justify-center items-center rounded-lg bg-main-text-color px-4 py-2 text-center text-[.85rem] font-['Open_Sans_Medium'] text-white hover:bg-[#646060] focus:outline-none focus:ring-4 focus:ring-[#747474] dark:focus:ring-[#646060]"
          >
            <Link to={`/update/${id}`}>
              Editar
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PetCard