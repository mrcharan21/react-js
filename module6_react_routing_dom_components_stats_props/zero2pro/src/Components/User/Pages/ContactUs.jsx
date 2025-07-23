import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon
} from 'mdb-react-ui-kit';
import Footer from '../Footer';
import Header from '../Header';

export default function ContactAndOffices() {
  const offices = [
    {
      type: 'Corporate Office',
      city: 'Mumbai',
      address: '5th Floor, Amore Building, Junction of 2nd & 4th Road, Khar, Maharashtra, Mumbai - 400052',
      phone: '07666830000',
      email: 'info@Zero2Pro.com',
    },
    {
      type: 'Registered Office',
      city: 'Mumbai',
      address: 'Office No. 503, 5th Floor, Amore Commercial Premises Co-Op Society Ltd., CTS No. Junction of 2nd & 4th Road, Khar (West), Mumbai – 400052',
      phone: '07666830000',
      email: 'info@Zero2Pro.com',
    },
    {
      type: 'Regional Office',
      city: 'Delhi - Laxmi Nagar',
      address: 'Pragati Deep Building, 6th Floor, Plot no. 8, Laxmi Nagar Dist Centre, Delhi 110092',
      phone: '011-4728888',
      email: 'delro@Zero2Pro.com',
    },
    {
      type: 'Regional Office',
      city: 'Kolkata - Elgin Road - Bhawanipore',
      address: '1 A, Elgin Apartments, Ashutosh Mukherjee Road, Above ICICI Bank, Bhawanipore, Kolkata 700020',
      phone: '033-40034601, 40034602, 40034603',
      email: 'kol@Zero2Pro.com',
    },
    {
      type: 'Regional Office',
      city: 'Dadar - Mumbai',
      address: '605/606, 6th floor, Laxmi Commercial premises, co op.so. ltd, Senapati Bapat Marg, Dadar West, Mumbai, Maharashtra 400028',
      phone: '8928375588, 9702334038',
      email: 'dadar.cm@Zero2Pro.com',
    },
    {
      type: 'Regional Office',
      city: 'Vashi - Mumbai',
      address: 'Fantasia Business Park, G-198, next to Inorbit Mall, near Railway Station, Sector 30A, Vashi, Navi Mumbai, Maharashtra 400708',
      phone: '022 2781 0254',
      email: 'vashi.cm@Zero2Pro.com',
    },
  ];

  return (
    <>
    {/*Header */}
    <Header />

    <MDBContainer className="py-5">

      {/* Contact Us Section */}
      <MDBRow className="mb-5">
        {/* LEFT: IMAGE */}
        <MDBCol md="6" className="mb-4">
          <img
            src="https://images.clickfunnels.com/cdn-cgi/image/width=1400,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/322074/file/661ffd02a107a7074cd4485b4bfe8f3d.png"
            alt="Support"
            className="img-fluid rounded"
          />
        </MDBCol>

        {/* RIGHT: FORM */}
        <MDBCol md="6">
          <h1 className='text-primary fw-bold'>Contact Us</h1>
          <p className='text-dark'>Have an inquiry or some feedback for us? Fill out the form below to contact our team.</p>
          <form className='shadow-4 p-3 rounded-3 bg-white'>
            <div className="mb-3">
              <label className="form-label">Name:</label>
              <MDBInput type="text" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <MDBInput type="email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone:</label>
              <MDBInput type="tel" />
            </div>
            <div className="mb-3">
              <label className="form-label">State:</label>
              <select className="form-select">
                <option>Select State</option>
                <option>Maharashtra</option>
                <option>Karnataka</option>
                <option>Delhi</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Center:</label>
              <select className="form-select">
                <option>Select Center</option> 
                <option>Pune</option>
                <option>Bangalore</option>
                <option>Delhi</option>
              </select>
            </div>
            <MDBBtn color="danger" block>Submit</MDBBtn>
          </form>
        </MDBCol>
      </MDBRow>

      {/* Office Locations Section */}
      <div className="text-center mb-4 mt-3">
        <p className="fw-bold text-muted mb-1">Visit Us</p>
        <h2 className="fw-bold text-danger">Spread Across India</h2>
      </div>

      <MDBRow className="gy-4">
        {offices.map((office, index) => (
          <MDBCol md="6" key={index}>
            <MDBCard className="shadow-sm h-100">
              <MDBCardBody>
                <h5 className="text-danger mb-1">{office.type}</h5>
                <h6 className="fw-bold">{office.city}</h6>
                <p className="mb-2">{office.address}</p>
                <p className="mb-1">
                  <MDBIcon icon="phone-alt" className="me-2" />
                  {office.phone}
                </p>
                <p className="mb-0">
                  <MDBIcon icon="envelope" className="me-2" />
                  {office.email}
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>

    {/*Footer */}
        <Footer />
    </>
  );
}
