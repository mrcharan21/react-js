import { MDBContainer } from 'mdb-react-ui-kit';
import React from 'react';
import NavbarApp from './Navbar';


export default function Contact() {
 return (
    <>
    <NavbarApp />
    <MDBContainer className='text-center mt-5'>
        <h1>Contact-us</h1>
        <p>Contact to this number (+91)9434233423</p>
        <p>This is a simple example of Contact page using MDB React UI kit</p>
    </MDBContainer>
    </>
 )
}
