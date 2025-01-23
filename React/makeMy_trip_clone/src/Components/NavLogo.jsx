import React from "react";
import {Navbar} from 'react-bootstrap'
function NavLogo({ logo }) {
  return (
    <>
      <Navbar.Brand href="#home">
        <img src={logo} alt="Logo" width={150} />
      </Navbar.Brand>
    </>
  );
}

export default NavLogo;
