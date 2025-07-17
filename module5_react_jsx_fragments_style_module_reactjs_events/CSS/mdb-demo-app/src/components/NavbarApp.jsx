import React from 'react'
import { MDBNavbar, MDBNavbarBrand } from 'mdb-react-ui-kit'

export default function NavbarApp() {
  return (
    <>
    <MDBNavbar className='w-100 p-3 bg-dark'>
        <MDBNavbarBrand className='text-white fs-3 p-2 ms-4'>Zero 2 Pro</MDBNavbarBrand>
            <ul className='navbar-link d-flex flex-grow gap-5 mt-3 m-lg-2'>
                <li><a href="">Home</a></li>
            
                <li><a href="">Our Courses</a></li>
            
                <li><a href="">Feedback</a></li>
            
                <li><a href="">Our blogs</a></li>
        
                <li><a href="">Contact us</a></li>
            </ul>
        
    </MDBNavbar>
    </>
  )
}
