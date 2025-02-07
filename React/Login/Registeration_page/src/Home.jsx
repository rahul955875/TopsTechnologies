import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
  const getUser = JSON.parse(localStorage.getItem('loginUser'))
  const navigate = useNavigate()
  // console.log(getUser)
  const logOut =()=>{
    localStorage.removeItem('loginUser')
navigate('/')
  }

  return (
    <>
    <h1>Welcome {getUser.username}</h1>
    <div><button className='btn btn-danger' onClick={logOut}>Logout</button></div>
    </>
  )
}

export default Home