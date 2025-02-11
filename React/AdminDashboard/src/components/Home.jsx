import React from 'react'

const Home = () => {
    const getAdminName = localStorage.getItem('LoginAdmin')

  return (
    <>
    <div className="container-fluid mt-3">
    <h2>Welcome {getAdminName}</h2>
    </div>
    
    </>
  )
}

export default Home