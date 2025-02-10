import React from 'react'
import Navigation from './Navigation'
import { Outlet } from 'react-router'

const Home = () => {
    const getAdminName = localStorage.getItem('LoginAdmin')

  return (
    <>
    <Navigation/>
    <div>Welcome {getAdminName}</div>
    <Outlet/>
    </>
  )
}

export default Home