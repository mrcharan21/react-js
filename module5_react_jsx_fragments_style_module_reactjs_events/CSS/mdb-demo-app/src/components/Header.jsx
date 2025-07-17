import { MDBBtn, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import {FaFacebook, FaInstagram, FaSnapchat, FaWhatsapp , FaShoppingBag} from 'react-icons/fa'


export default function Header() {
  return (
    <>
    <MDBContainer fluid className='bg-light shadow p-5 sticky-top top-0'>
        <MDBRow>
            <div className='col-md-3'>
                <b>Call Us :(+91) 9434804323</b>
            </div>
            
        <div className='col-md-6'>
            <div className='input-group'>
                <input type="text" placeholder='search any course to add in cart' className='form-control p-4' />
            <MDBBtn className='btn btn-sm btn-dark text-white'>
                <span className='fa fa-search'></span>
            </MDBBtn>
            </div>
        </div>

        <div className='col-md-3'>
            
            <FaShoppingBag className='fs-3 mt-2 ms-2' />0
            
           <span className='header-icons'>
            <FaFacebook className='fs-3 mt-4 ms-2' />
            <FaInstagram className='fs-3 mt-4 ms-2' />
            <FaSnapchat className='fs-3 mt-4 ms-2' />
            <FaWhatsapp className='fs-3 mt-4 ms-2' />
            
           </span>
            
        </div>
        </MDBRow>
    </MDBContainer>
    </>
  )
}
