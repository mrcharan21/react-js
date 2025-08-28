import React from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBRow,
  MDBContainer,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <section className='bg-primary sticky-navbar'>
      <MDBNavbar expand='md' className='shadow-0'>
        <MDBContainer fluid>
          <MDBRow className='d-flex align-items-center justify-content-between w-100'>
            <div className='col-12 col-md-2 d-flex align-items-center justify-content-between'>
              <MDBNavbarBrand className='text-white fs-4 fw-bold' href='/'>
                Zero2pro
              </MDBNavbarBrand>

              {/* Toggle Button */}
              <MDBNavbarToggler
                type='button'
                data-mdb-toggle='collapse'
                data-mdb-target='#navbarMenu'
                aria-controls='navbarMenu'
                aria-expanded='false'
                aria-label='Toggle navigation'
                className='text-white d-md-none'
              >
                <i className='fas fa-bars'></i>
              </MDBNavbarToggler>
            </div>

            {/* Collapsible Menu */}
            <div className='col-12 col-md-10'>
              <MDBCollapse navbar id='navbarMenu'>
                <ul className='d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 gap-md-4 m-0 p-0 list-unstyled'>
                  <li>
                    <Link className='nav-link text-white' to="/">Home</Link>
                  </li>
                  <li>
                    <Link className='nav-link text-white' to="../User/Pages/About">About</Link>
                  </li>
                  <li>
                    <Link className='nav-link text-white' to="../User/Pages/Centers">Centers</Link>
                  </li>
                  <li>
                    <Link className='nav-link text-white' to="../User/Pages/Franchies">Franchise</Link>
                  </li>
                  <li>
                    <Link className='nav-link text-white' to="../User/Pages/Courses">Our Courses</Link>
                  </li>
                  <li>
                    <Link className='nav-link text-white' to="../User/Pages/Placements">Placements</Link>
                  </li>
                  <li>
                    <Link className='nav-link text-white' to="../User/Pages/Blogs">Blogs</Link>
                  </li>
                  <li>
                    <Link className='nav-link text-white' to="../User/Pages/ContactUs">Contact Us</Link>
                  </li>
                </ul>
              </MDBCollapse>
            </div>
          </MDBRow>
        </MDBContainer>
      </MDBNavbar>
    </section>
  );
}
