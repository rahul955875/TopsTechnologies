import React from 'react'
import { Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlaneDeparture,faHotel,faHome,faIgloo,faTrain,faBus,faCab,faIndianRupeeSign,faLocationDot} from "@fortawesome/free-solid-svg-icons"
function NavHead() {
    const NavList =[
        {icon:faPlaneDeparture,desc:'Flights'},
        {icon:faHotel,desc:'Hotels'},
        {icon:faHome,desc:'Homestays & Villas'},
        {icon:faIgloo,desc:'Holidays Packages'},
        {icon:faTrain,desc:'Trains'},
        {icon:faBus,desc:'Buses'},
        {icon:faCab,desc:'Cabs'},
        {icon:faIndianRupeeSign,desc:'Forex Card & Currency'},
        {icon:faLocationDot,desc:'Travel Insurance'},
    ]
  return (
    <Nav className='container w-75 px-5 mt-5 d-flex justify-content-between flex-wrap text-center shadow  pt-4 border gap-2 '>
    {NavList.map(item => 
      <div href='' key={item.desc} className='d-flex flex-column flex-grow-1 align-items-center' style={{minWidth:'100px',maxWidth:'110px',wordWrap:'break-word'}}>
        <FontAwesomeIcon icon={item.icon} className='fs-3 mb-2' />
        <p className=''>{item.desc}</p>
      </div>
    )}
    </Nav>
  )
}

export default NavHead
