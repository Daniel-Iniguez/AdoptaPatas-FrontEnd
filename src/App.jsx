import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom'
import HomeFeed from './_social/pages/HomeFeed'
import SignInForm from './_auth/forms/SignInForm/SignInForm'
import SignUpForm from './_auth/forms/SignUpForm/SignUpForm'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_social/RootLayout'
import Navbar from './components/layout/Navbar'
import MainLayout from './_search/MainLayout'
import Home from './_search/pages/Home'
import Footer from './components/layout/Footer'
import { PetCards } from './_search/pages/Adopt/PetCards'
import { useState } from 'react'
import { Navbar2 } from './components/layout/Navbar2'
import { useEffect } from 'react'


function App() {
  const [isLogin, setIsLogin] = useState(!(localStorage.getItem('isLogin') === 'false'));

  useEffect(() => {
    // Guardar el valor actual en localStorage cuando la variable cambia
    localStorage.setItem('isLogin', isLogin.toString());
  }, [isLogin]);
  console.log(isLogin);
  return (
    <main className='text-blue-800'>
      {isLogin ?  <Navbar2 /> : <Navbar />}
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>

        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path='/sign-in' element={<SignInForm setIsLogin={setIsLogin} />} />
          <Route path='/sign-up' element={<SignUpForm />} />
        </Route>

        {/* Private Routes */}
        <Route element={<RootLayout />}>
          <Route path='/social' element={<HomeFeed />} />
        </Route>

        <Route path='/pet-card' element={<PetCards />} />


      </Routes>
      <Footer />
    </main>
  )
}

export default App
