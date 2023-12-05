import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { HomeFeed } from './_social/pages';
import SignInForm from './_auth/forms/SignInForm';
import SignUpForm from './_auth/forms/SignUpForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_social/RootLayout';
import Navbar from './components/layout/Navbar';
import { AboutUs } from './_social/pages/AboutUs';
import { Contact } from './_social/pages/Contact';
import { Footer } from './components/layout/Footer';
import { AskedQuiestions } from './_social/pages/AskedQuiestions';
import { Involucrate } from './_social/pages/Involucrate';
import { Donations } from './_social/pages/Donations';
import { Adopt } from './_social/pages/Adopt';
import { NewsFeed } from './_social/pages/NewsFeed';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='flex h-screen'>
      <Navbar></Navbar>

      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path='/sign-in' element={<SignInForm />} />
          <Route path='/sign-up' element={<SignUpForm />} />
        </Route>

        {/* Private Routes */}
        <Route element={<RootLayout />}>
          <Route index element={<HomeFeed />} />
        </Route>

        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/asked-questions' element={<AskedQuiestions />} />
        <Route path='/involucrate' element={<Involucrate />} />
        <Route path='/donations' element={<Donations />} />
        <Route path='/adopt' element={<Adopt />} />
        <Route path='/news-feed' element={<NewsFeed />} />
      </Routes>
      
      <Footer></Footer>
    </main>
  )
}

export default App
