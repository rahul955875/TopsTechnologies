import React from 'react'
import {Container,Nav,Navbar,Button} from 'react-bootstrap'
import NavLogo from './NavLogo'
import NavMenuList from './NavMenuList'
import TopheadingBtn from './TopheadingBtn';

function TopHeading() {
    const menuList = ["List Your Property", "Introducing myBiz", "My Trips"];
  return (
    <>
    <Navbar expand="lg" className="" style={{background:'#dcdcf1'}}>
      <Container>
        <NavLogo logo={"https://promos.makemytrip.com/Growth/Images/1x/mmt_dt_top_icon.png"}/>
        <Navbar.Toggle aria-controls="NavHome" />
        <Navbar.Collapse id="NavHome">
          <Nav className="ms-auto gap-3">
          <NavMenuList menuList={menuList}/>  
          <TopheadingBtn/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default TopHeading