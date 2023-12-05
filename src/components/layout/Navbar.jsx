import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  const content =
    <>
      <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition '>
        <ul className='text-center '>
          <Link to='/'>
            <li>Adoptar</li>
          </Link>
          <Link to='/'>
            <li>Acerca De</li>
          </Link>
          <Link to='/'>
            <li>Involúcrate</li>
          </Link>
          <Link to='/'>
            <li>Iniciar Sesión</li>
          </Link>
          <Link to='/'>
            <li>Regístrate</li>
          </Link>
        </ul>

      </div>
    </>

  return (
    <nav>
      <div className='h-10vh flex justify-between z-50 bg-black lg:py-5 px-20 py-4'>
        <div className='flex items-center flex-1'>
          <span className='text-text-color'>Logo</span>
        </div>
        <div className='lg:flex md:flex lg: flex-1 items-center justify-end hidden'>
          <div className='flex-10'>
            <ul className='flex gap-8 mr-16 text-[18px]'>
              <Link className='' to='/'>
                <li>Adoptar</li>
              </Link>
              <Link to='/'>
                <li>Acerca De</li>
              </Link>
              <Link to='/'>
                <li>Involúcrate</li>
              </Link>
              <Link to='/'>
                <li>Iniciar Sesión</li>
              </Link>
              <Link to='/'>
                <li>Regístrate</li>
              </Link>
            </ul>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar