import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import './footer.css';
import LogoFooter from "../../assets/logos/Logo-Footer.svg"

function Footer() {
  return (
    <footer className="bg-main-text-color text-white">
      <div className="w-[100%]">
        <div className="flex flex-wrap-reverse gap-[2.8rem] lg:gap-4 lg:flex-nowrap custom-padding-row py-20">
          <div className="w-[100%]  md:text-left text-center place-items-center pr-10 pl-10 lg:w-1/2 lg:place-items-start flex flex-col left-container justify-between md:gap-[2.2rem]">
            <Link className='text-[15px] md:text-[1rem] hover:text-hover-pink transition' to=''>
              <img className='w-[13rem]' id="footer-logo" src={LogoFooter} alt="" />
            </Link>
            <Link className='text-[15px] md:text-[1rem] hover:text-hover-pink transition' to=''>
              contacto.adoptapatas@gmail.com
            </Link>
            <p className='text-[15px] md:text-[1rem]' >
              @ Copyright 2023 AdoptaPatas. Todos los derechos reservados
            </p>
          </div>
          <div className="lg:w-1/2 w-[100%] place-items-center md:text-center pr-10 pl-10 flex flex-col lg:place-items-end right-container justify-between md:gap-[2.2rem]">
            <Link className='text-[15px] md:text-[1rem] hover:text-hover-pink transition' to=''>
              Preguntas Frecuentes
            </Link>
            <Link className='text-[15px] md:text-[1rem] hover:text-hover-pink transition' to='/contact'>
              Contacto
            </Link>
            <Link className='text-[15px] md:text-[1rem] hover:text-hover-pink transition' to='/donation'>
              Apoya este proyecto
            </Link>
            <Link className='text-[15px] md:text-[1rem] hover:text-hover-pink transition' to=''>
              Encuentra una mascota
            </Link>
            <ul className="w-[35%] md:w-[30%] flex flex-row justify-between">
              <li>
                <Link
                  to=''
                  className="text-[24px] md:text-[28px] text-white hover:text-hover-pink transition"
                >
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link
                  to=''
                  className="text-[24px] md:text-[28px] text-white hover:text-hover-pink transition"
                >
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link
                  to=''
                  className="text-[24px] md:text-[28px] text-white hover:text-hover-pink transition"
                >
                  <FaTwitter />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer