import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import Footer from '../Footer';
import Header from '../Header';


export default function Centers() {
  const centers = [
    {
      title: 'Zero2Pro Allahabad Learning Centre',
      address: '4th Floor Vinayak Complex, 27/17, Elgin Road, Civil Lines, Allahabad, Uttar Pradesh -211001.',
      helpline: '07666830000',
      phones: '0532-6545289 / 09307022076',
    },
    {
      title: 'Zero2Pro Ameerpet Learning Centre',
      address: '1st Floor, Beside IDBI Bank, S.R. Nagar, Ameerpet, Hyderabad - 38, Telangana. Pin: 500038',
      helpline: '07666830000',
      phones: '8008911700 / 8008911300',
    },
    {
      title: 'Zero2Pro Azadpur Learning Centre',
      address: 'R/o: F29 Gopal Nagar, Main road, Kewalpark, opp. Ramlila ground, Azadpur Delhi 110033',
      helpline: '07666830000',
      phones: '9899305736 / 9811305736',
    },
    {
      title: 'Zero2Pro Balasore Learning Centre',
      address: 'FM college road, Azimabad near Jagannath petrol pump, Balasore, Odisha - 756001.',
      helpline: '07666830000',
      phones: '7735701702',
    },
    {
      title: 'Zero2Pro Bhubaneshwar Learning Centre',
      address: '4th Floor, Plot No. -A/167, Saheed Nagar Road, Saheed Nagar - 751007',
      helpline: '07666830000',
      phones: '7077707700 / 7735269507',
    },
    {
      title: 'Zero2Pro Bhopal Learning Centre',
      address: '3rd Floor 212, Hare Govind Complex, Ram Gopal Maheswari Marg, Near Hotel Nissarga, MP Nagar, Zone-1, Bhopal, MP - 462001',
      helpline: '07666830000',
      phones: '9999999999 / 8888888888', // Placeholder
    },
  ];

  return (
    <>
    <Header />
        <MDBContainer className='my-5'>

      <MDBRow>
        <div className='mt-2 p-2  text-center'>
          <h1 className='text-primary  fw-bold'>Center Locator</h1>
          <p className='fs-5'>Zero2pro has centres across the nation.</p>
        </div>
        {centers.map((center, index) => (
          <MDBCol md='6' className='mb-4' key={index}>
            <MDBCard shadow='0' className='border rounded-4'>
              <MDBCardBody className='text-center'>
                <h5 className='text-danger fw-bold'>{center.title}</h5>
                <p className='mb-2'>{center.address}</p>
                <p className='mb-1'>Zero2Pro Admissions Helpline: <span className='fw-bold'>{center.helpline}</span></p>
                <p className='mb-0'>Phone: {center.phones}</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
      
    </MDBContainer>

        

    <Footer />
  </>

  );


}
