import { MDBNavbar, MDBNavbarBrand, MDBRow } from 'mdb-react-ui-kit';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <section className='bg-primary sticky-navbar' >
      <MDBRow className='d-flex align-items-center justify-content-between p-3'>
        <div className='col-md-2'>
          <MDBNavbarBrand className='text-white p-3 fs-4 fw-bold' href='/'>
            Zero2pro
          </MDBNavbarBrand>
        </div>

        <div className='col-md-10'>
          <MDBNavbar className='shadow-0'>
            <ul className='d-flex justify-content-center align-items-center gap-4 m-0 p-0 list-unstyled navbar-links'>
              <li>
                <Link className='nav-link text-white' to="/">Home</Link>
              </li>
              <li>
                <Link className='nav-link text-white' to="../User/Pages/About.jsx">About</Link>
              </li>
              <li>
                <Link className='nav-link text-white' to="../User/Pages/Centers.jsx">Centers</Link>
              </li>
              <li>
                <Link className='nav-link text-white' to="../User/Pages/Franchies.jsx">Franchise</Link>
              </li>
              <li>
                <Link className='nav-link text-white' to="../User/Pages/Courses.jsx">Our courses</Link>
              </li>
              <li>
                <Link className='nav-link text-white' to="../User/Pages/Placements.jsx">Placements</Link>
              </li>
              <li>
                <Link className='nav-link text-white' to="../User/Pages/Blogs.jsx">Blogs</Link>
              </li>
              <li>
                <Link className='nav-link text-white' to="../User/Pages/ContactUs.jsx">Contact Us</Link>
              </li>
            </ul>
          </MDBNavbar>
        </div>
      </MDBRow>
    </section>
  );
}
