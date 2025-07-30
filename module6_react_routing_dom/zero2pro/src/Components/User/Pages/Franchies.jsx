import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit'

export default function Franchies() {
  return (
    <>
      <Header />

      <MDBContainer
        fluid
        className="d-flex align-items-center justify-content-end "
        style={{
          backgroundImage: "url('https://statics.myclickfunnels.com/image/1747320/file/5227210c6e29dea1b9e1939a9fa56cc4.jpeg')",
          backgroundSize: 'cover',
          backgroundAttachment: 'scroll',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <MDBRow className="w-75 mt-5 d-flex justify-content-end p-5">
          <MDBCol md="4" className="bg-danger text-white p-4 rounded shadow-lg">
            <h5 className="fw-bold mb-4 text-center">
              Transform the youth <br />
              with a Jetking <br /> 
              Franchise in your <br />
              City!!
            </h5>

            <MDBInput label="Full Name" type="text" className="mb-3 bg-white text-dark rounded" />

            <MDBInput label="Phone" type="text" className="mb-3 bg-white text-dark rounded" />

            <MDBInput label="Email" type="email" className="mb-3 bg-white text-dark rounded" />

            <MDBInput label="Preferred City" type="text" className="mb-3 bg-white text-dark rounded" />

            <select className="form-select mb-4 bg-white text-dark rounded">
              <option>Investment Capacity</option>
              <option value="1">Below ₹5L</option>
              <option value="2">₹5L - ₹10L</option>
              <option value="3">Above ₹10L</option>
            </select>

            <div className="text-center">
              <MDBBtn color="light" className="text-danger fw-bold px-4 rounded-pill">
                Submit
              </MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid className=" bg-gray p-1 rounded w-100">
        <MDBRow className="align-items-center">
          <MDBCol md="6" className="p-4 text-dark">
            <div className="mt-5 p-4 rounded">
              <h1 className='text-primary'>A proven system to help you achieve your potential</h1>
              <p>
                Since the past 34 years, Jetking has been paving the way for inclusive education that reaches every corner of our society. With a staggering yearly student passout count of 236.91 million and an unemployment rate of 18.31 million, The IT sector presents a vast landscape of opportunities, with an estimated 32.5 million jobs waiting to be filled.
              </p>
            </div>
          </MDBCol>
          <MDBCol md="6" className="p-4 text-dark">
            <img
              src="https://images.clickfunnels.com/cdn-cgi/image/width=1400,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/990078/file/e0c480e4f91131c998c0ded795f3e5fe.png"
              alt=""
              className="img-fluid rounded"
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <Footer />
    </>
  )
}
 