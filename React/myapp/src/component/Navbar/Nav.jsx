
import Logo from './Logo'
import Menu from './Menu'
import './Nav.css'
import Search from './Search'
function Nav() {
  return (
    <>
    <div className="nav align-items-center pt-1">
    <Logo/>
    <ul className='menu  fs-4'>
        <Menu/>
    </ul>
    <Search/>
    </div>
    </>
  )
}

export default Nav