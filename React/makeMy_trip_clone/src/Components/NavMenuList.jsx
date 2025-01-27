import React from "react";
import {Nav} from 'react-bootstrap'
function NavMenuList({menuList}) {
  
  return (
    <>
      {menuList.map((item) => (
        <Nav.Link href="#link" key={item} >{item}</Nav.Link>
      ))}
      
    </>
  );
}

export default NavMenuList;
