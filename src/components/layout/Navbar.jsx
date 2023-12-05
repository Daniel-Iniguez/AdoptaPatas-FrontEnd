import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/Navbar.css'


function Navbar() {
  return (
    <>
  {/* Navbar */}
  <header id="nav-bar">
    <nav className="navbar-custom navbar navbar-custom navbar-expand-lg">
      <div className="container-fluid">
        {/* Logo */}
        {/* Left Side Navbar */}
        <Link className="navbar-brand" to='/HomeFeed'>
          <img id="logoNav" src='src/assets/img/logos/SVG/Logo.svg' />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars" />
        </button>
        {/* Right Side Navbar */}
        <div
          className="collapse navbar-collapse justify-content-end pe-4"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to='/adopt'>
                Adoptar
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/news-feed' >
                News Feed
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/involucrate' >
                Involúcrate
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                id="btn-login"
                className="nav-link rounded-5"
                to='/sign-in'
              >
                Iniciar Sesión
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                id="btn-register"
                className="nav-link rounded-5"
                to = '/sign-up'
              >
                Registrarse
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</>

  )
}

export default Navbar