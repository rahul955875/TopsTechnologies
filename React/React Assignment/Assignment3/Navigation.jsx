import React from 'react'

const Navigation = () => {
  return (
    <>
    <nav className='container flex gap-4'>
        <Link to='/HomePage' >Home</Link>
        <Link to='/AboutPage' >About</Link>
        <Link to='/Contact' >Contact</Link>
    </nav>
    </>
  )
}

export default Navigation