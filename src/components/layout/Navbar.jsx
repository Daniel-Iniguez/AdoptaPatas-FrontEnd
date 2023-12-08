import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import Logo from '../../assets/logos/Logo.svg'
import { FaTimes } from 'react-icons/fa'
import { IoMenu } from "react-icons/io5";


function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const content =
    <>
      <div className='lg:hidden block absolute top-14 w-full left-0 right-0 h-[100vh]
      py-8 bg-main-bg-color'>
        <ul className='text-center text-[1.1rem] p-20'>
          <Link  to='/pet.card'>
            <li className='transition my-4 py-4 border-b hover:bg-dark-pink hover:rounded'>Adoptar</li>
          </Link>
          <Link  to='/'>
            <li className='transition my-4 py-4 border-b hover:bg-dark-pink hover:rounded'>Acerca De</li>
          </Link>
          <Link  to='/'>
            <li className='transition my-4 py-4 border-b hover:bg-dark-pink hover:rounded'>Involúcrate</li>
          </Link>
          <Link  to='/'>
            <li className='transition my-4 py-4 border-b hover:bg-dark-pink hover:rounded'>Iniciar Sesión</li>
          </Link>
          <Link  to='/'>
            <li className='transition my-4 py-4 border-b hover:bg-dark-pink hover:rounded'>Regístrate</li>
          </Link>
        </ul>

      </div>
    </>

  return (
    <nav className='text-main-text-color text-[0.9rem]'>
      <div className='h-9vh flex justify-between z-50 bg-main-bg-color lg:py-4 px-10 py-4'>
        <div className='flex items-center flex-1'>
          <Link>
            <img className='lg:w-[11rem] md:w-[9rem] sm:w-[8rem] w-[8rem] transition-all' src={Logo} alt="" />
          </Link>
        </div>
        <div className='lg:flex md:flex lg:flex-auto items-center justify-end hidden '>
          <div className='flex-10 '>
            <ul className='flex gap-10 mr-1 items-center'>
              <Link  to='/pet.card'>
                <li className='hover:text-black transition cursor-pointer' >Adoptar</li>
              </Link>
              <Link  to='/contact'>
                <li className='hover:text-black transition cursor-pointer' >Acerca De</li>
              </Link>
              <Link  to='/'>
                <li className='hover:text-black transition cursor-pointer' >Involúcrate</li>
              </Link>
              <Link  to='/'>
                <li className='hover:text-white transition duration-200 ease-in-out px-6 py-[0.5rem] rounded-3xl border-2 border-main-text-color hover:bg-main-text-color cursor-pointer' >Iniciar Sesión</li>
              </Link>
              <Link  to='/'>
                <li className='hover:text-black transition duration-200 ease-in-out cursor-pointer bg-main-text-color px-7 py-[0.5rem] text-white rounded-3xl hover:bg-white' >Regístrate</li>
              </Link>
            </ul>
          </div>
        </div>
        <div>
          {click && content}
        </div>
        <button className='block sm:hidden transition' onClick={handleClick}>
          {click ? <FaTimes /> : <IoMenu size={'2rem'} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar