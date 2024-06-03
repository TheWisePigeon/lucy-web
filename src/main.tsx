import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RegistrationPage from './pages/register'
import LandingPage from './pages/landing'
import LoginPage from './pages/login'
import Dashboard from './pages/Dashboard'
import AddCategory from './pages/AddCategory'
import AddProduct from './pages/AddProduct'
import ListCategory from './pages/ListCategory'
import ListProduct from './pages/ListProduct'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/register",
    element: <RegistrationPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/add-category",
    element: <AddCategory />,
  },
  {
    path: "/add-product",
    element: <AddProduct />,
  },
  {
    path: "/list-category",
    element: <ListCategory />,
  },
  {
    path: "/list-product",
    element: <ListProduct />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
