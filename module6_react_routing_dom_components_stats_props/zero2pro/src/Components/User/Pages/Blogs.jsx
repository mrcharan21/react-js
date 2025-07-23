import { MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

export default function Blogs() {
  return (
    <>    
  {/*Header */}
  <Header />


    <MDBContainer>
      <MDBRow>
        <div className='text-primary fw-bold text-center p-2 mt-2'>
          <p>Welcome to our Blogs</p>
            <h1>Our Blogs</h1>
        </div>
      </MDBRow>
    </MDBContainer>

    {/*Footer */}

    <Footer />
    </>

  )
}
