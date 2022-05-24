import React from 'react'
import {
  useRoutes
} from 'react-router-dom'
import Home from '../pages/home'
import Login from '../pages/login'



const Router = () => {
  let router = useRoutes([
    {
      path: '/',
      element: < Login / >,
    },
    {
      path:'/login',
      element:<Login/>
    }
  ])
  return  router
}

export default Router