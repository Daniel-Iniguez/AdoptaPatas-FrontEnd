import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { HomeFeed } from './_social/pages';
import SignInForm from './_auth/forms/SignInForm';
import SignUpForm from './_auth/forms/SignUpForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_social/RootLayout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='flex h-screen'>
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

      </Routes>
    </main>
  )
}

export default App
