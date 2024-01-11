import React from 'react'
import { Link } from 'react-router-dom'

function ButtonPrimary({ text, path, onClick }) {
  return (
    <button onClick={onClick} className='w-[13rem] h-[3rem] hover:text-black transition duration-200 ease-in-out cursor-pointer bg-main-text-color px-7 py-[0.5rem] text-white text-[0.95rem] rounded-3xl hover:bg-white font-["Open_Sans_Regular"]'>
      <Link to={`${path}`}>
        {text}
      </Link>
    </button>
  )
}

export default ButtonPrimary