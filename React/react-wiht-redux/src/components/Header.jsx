import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='d-flex gap-4 mt-4 px-5'>
        <Link to='/'>Task 1</Link>
        <Link to='/task2'>Task 2</Link>
        <Link to='/task3'>Task 3</Link>
    </div>
  )
}

export default Header