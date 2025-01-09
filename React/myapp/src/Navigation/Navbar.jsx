import React from 'react'
import Search from '../component/Navbar/Search'
import Menu from './Menu'

function Navbar({logoname}) {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{logoname}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <Menu Home='Home' Link='Link' OtherLink='OtherLink' />
      <Search/>
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar