import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './navbar.css'
import Logo from '../../assets/logos/Logo.svg'
import { FaTimes } from 'react-icons/fa'
import { IoMenu } from "react-icons/io5";
import AccountMenu from './AccountMenu'

export const Navbar2 = ({ setIsLogin }) => {

  let { pathname } = useLocation();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);



  const content =
    <>
      <div className='lg:hidden block absolute top-14 w-full z-[999] left-0 right-0 h-[100vh]
        py-8' style={{
          backgroundColor: pathname.includes("social/") ? "White" : "#F2D0D2"
        }}
      >
        <ul className='text-center text-[1.1rem] p-20'>
          <Link to='/profile'>
            <li className='transition my-4 py-4 border-b hover:bg-dark-pink hover:rounded' >Mi Perfil</li>
          </Link>
          <Link to='/social/home'>
            <li className='transition my-4 py-4 border-b hover:bg-dark-pink hover:rounded' >Mi Red</li>
          </Link>
          <Link to='/search'>
            <li className='transition my-4 py-4 border-b hover:bg-dark-pink hover:rounded'>Adoptar</li>
          </Link>
          <Link to='/about-us'>
            <li className='transition my-4 py-4 border-b hover:bg-dark-pink hover:rounded'>Acerca De</li>
          </Link>
          <Link to='/involucrate'>
            <li className='transition my-4 py-4 border-b hover:bg-dark-pink hover:rounded'>Involúcrate</li>
          </Link>
        </ul>

      </div>
    </>

  return (
    <nav className='text-main-text-color text-[1rem]'>
      <div style={{
        backgroundColor: pathname.includes("social/") ? "White" : "#F2D0D2"
      }} className='h-9vh flex justify-between z-50 bg-secondary-bg-color lg:py-4 px-10 py-4'>
        <div className='flex items-center flex-1'>
          <Link to='/'>
            <img className='lg:w-[11rem] md:w-[9rem] sm:w-[8rem] w-[8rem] transition-all' src={Logo} alt="" />
          </Link>
        </div>
        <div className='lg:flex md:flex lg:flex-auto items-center justify-end hidden '>
          <div className='flex-10 '>
            <ul className='flex gap-10 mr-1 items-center'>
              <Link to='/social/home'>
                <li className='hover:text-black transition cursor-pointer' >Mi red</li>
              </Link>
              <Link to='/search'>
                <li className='hover:text-black transition cursor-pointer' >Adoptar</li>
              </Link>
              <Link to='/about-us'>
                <li className='hover:text-black transition cursor-pointer' >Acerca De</li>
              </Link>
              <Link to='/involucrate'>
                <li className='hover:text-black transition cursor-pointer' >Involúcrate</li>
              </Link>
              <AccountMenu setIsLogin={setIsLogin}></AccountMenu>
            </ul>
          </div>
        </div>
        <div>
          {click && content}
        </div>
        <button className='block md:hidden transition' onClick={handleClick}>
          {click ? <FaTimes /> : <IoMenu size={'2rem'} />}
        </button>
      </div>
    </nav>
  )

}
