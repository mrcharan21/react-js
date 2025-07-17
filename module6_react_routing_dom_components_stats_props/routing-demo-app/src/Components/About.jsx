import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import NavbarApp from './Navbar';

export default function About() {
  return (
    <>
    <NavbarApp />
    <MDBContainer className='text-center mt-5'>
        <h1>About-us</h1>
        <p>Welcome to About-us page</p>
        <p>This is a simple example of About page using MDB React UI kit</p>
    </MDBContainer>
    </>
 )
}
