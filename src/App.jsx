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
import { useState } from 'react'
import { Navbar2 } from './components/layout/Navbar2'
import { useEffect } from 'react'
import { AboutUs } from './_search/pages/AboutUs/AboutUs'
import { UserProvider } from './_auth/context/userProvider'
import Contact from './_contact/Contact'
import Donaciones from './_search/pages/Donaciones/Donaciones'
import InvolveApp from './_search/pages/Involucrate/InvolveApp'
import Search from './_search/pages/Search'
import PetDetails from './components/pets/PetDetails'
import { NewsFeed } from './_social/pages/NewsFeed/NewsFeed'
import { PostDetails } from './_social/pages/NewsFeed/PostDetails'
import { Profile } from './_search/pages/Profile/Profile'
import { Profiles } from './_search/pages/Profile/Porfiles'



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
          <Route path="/user-post/:id" element={<Profiles />} />
          <Route path='/about-us' element={<AboutUs />} />
        </Route>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path='/sign-in' element={<SignInForm setIsLogin={setIsLogin} />} />
          <Route path='/sign-up' element={<SignUpForm />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/involucrate' element={<InvolveApp isLogin={isLogin} />} />
          <Route path='/donation' element={<Donaciones />} />
          <Route path='/profile' element={<Profile setIsLogin={setIsLogin} />} />
          <Route path='/news-feed' element={<NewsFeed />} />
          {/* <Route path="/post-detail/:id" element={<PostDetails />} /> */}

        </Route>
        {/* Private Routes */}
        <Route element={<RootLayout />}>
          <Route path='/social' element={<HomeFeed />} />
        </Route>
        
      </Routes>
      <Footer />
    </UserProvider>
  )
}

export default App
