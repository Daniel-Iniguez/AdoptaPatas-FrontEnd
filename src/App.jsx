import './App.css'
import { Routes, Route } from 'react-router-dom'
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
import { useState, useEffect } from 'react'
import { Navbar2 } from './components/layout/Navbar2'
import { AboutUs } from './_search/pages/AboutUs/AboutUs'
import { UserProvider } from './_auth/context/UserProvider'
import { Profile } from './_search/pages/Profile/Porfile'
import Contact from './_contact/Contact'
import Donaciones from './_search/pages/Donaciones/Donaciones'
import Search from './_search/pages/Search'
import PetDetails from './components/pets/PetDetails'
import NewsFeedLayout from './_social/NewsFeedLayout'
import CreatePost from './_social/pages/CreatePost'
import UserProfile from './_social/pages/UserProfile'
import FollowersPage from './_social/pages/FollowersPage'
import PostDetails from './_social/pages/PostDetails'
import Solicitud from './_solicitud/Solicitud'
import FormSolicitud from './_solicitud/FormSolicitud'
import InvolveApp from './_search/pages/Involucrate/InvolveApp'



function App() {
  const usersData = JSON.parse(localStorage.getItem('users')) || [];

  const [isLogin, setIsLogin] = useState(localStorage.getItem('isLogin') || []);
  useEffect(() => {
    // Guardar el valor actual en localStorage cuando la variable cambia
    localStorage.setItem('isLogin', isLogin);
  }, [isLogin]);
  console.log("isLogin?", isLogin);

  const activeUser = usersData.find(u => (u.userName === isLogin));
  console.log("Usuario Logueado: ", activeUser);

  return (
    <UserProvider>
      {isLogin.length > 0 ? <Navbar2 setIsLogin={setIsLogin} /> : <Navbar />}
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path="/pet-detail/:id" element={<PetDetails />} />
          <Route path='/about-us' element={<AboutUs />} />
        </Route>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path='/sign-in' element={<SignInForm setIsLogin={setIsLogin} />} />
          <Route path='/sign-up' element={<SignUpForm />} />
          <Route path='/involucrate' element={<InvolveApp isLogin={isLogin} />} />
          <Route path='/donation' element={<Donaciones />} />
          <Route path='/profile' element={<Profile setIsLogin={setIsLogin} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/solicitud' element={<Solicitud />} />
          <Route path='/formSolicitud' element={<FormSolicitud />} />
        </Route>
        {/* Private Routes */}
        <Route element={<NewsFeedLayout />}>
          <Route path='/social/home' element={isLogin.length > 0 ? <HomeFeed /> : <SignInForm setIsLogin={setIsLogin} />} />
          <Route path='/social/create_post' element={<CreatePost />} />
          <Route path='/social/profile/:id/*' element={<UserProfile />} />
          <Route path='/social/followers' element={<FollowersPage />} />
          <Route path='/social/posts/:id' element={<PostDetails />} />
        </Route>
      </Routes>
      <Footer />
    </UserProvider>
  )
}

export default App
