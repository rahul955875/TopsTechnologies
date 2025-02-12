import React from 'react'
import ShowProducts from './ShowProducts'

const Home = () => {
    const getAdminName = localStorage.getItem('LoginAdmin')

  return (
    <>
    <div className="container-fluid mt-3">
    <h2>Welcome {getAdminName}</h2>
    <ShowProducts/>
    </div>
    
    </>
  )
}

export default Home