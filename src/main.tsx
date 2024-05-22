import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RegistrationPage from './pages/register'
import LandingPage from './pages/landing'
import LoginPage from './pages/login'
import Dashboard from './pages/Dashboard'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/register",
    element: <RegistrationPage />
  },
  {
    path:"/login",
    element: <LoginPage />
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
