import React from 'react'
import {Container,Nav,Navbar,Button} from 'react-bootstrap'
import NavLogo from './NavLogo'
import NavMenuList from './NavMenuList'

function TopHeading() {
    const menuList = ["List Your Property", "Introducing myBiz", "My Trips"];
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLogo logo={"https://promos.makemytrip.com/Growth/Images/1x/mmt_dt_top_icon.png"}/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavMenuList menuList={menuList}/>  
          <Button variant='primary'>Account</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default TopHeading