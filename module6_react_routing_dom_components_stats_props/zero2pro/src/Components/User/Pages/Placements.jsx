import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBTypography
} from 'mdb-react-ui-kit';
import Footer from '../Footer';
import Header from '../Header';

const steps = [
  {
    title: 'Complete the training',
    image: 'https://images.clickfunnels.com/cdn-cgi/image/width=1400,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/575011/file/a9408bf6589804738d890bd94928be24.png',
  },
  {
    title: 'Biodata Preparation',
    image: 'https://images.clickfunnels.com/cdn-cgi/image/width=1400,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/576392/file/30a9ce62578e0c8059ec215f4eccf2d6.png',
  },
  {
    title: 'Mock Interviews',
    image: 'https://images.clickfunnels.com/cdn-cgi/image/width=1400,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/575009/file/f7f9d5b8f5d025e5b4b8cc857ce13197.png',
  },
  {
    title: 'Student Interviews',
    image: 'https://images.clickfunnels.com/cdn-cgi/image/width=1400,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/576390/file/8c4e3206f31f65ae0f92f47a42fc1105.png',
  },
  {
    title: 'Appointment letter',
    image: 'https://images.clickfunnels.com/cdn-cgi/image/width=1400,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/576391/file/caf1f42664ffbbf52b0491047fd0c10f.png',
  },
];

export default function Placements() {
  return (
    <>
  {/*Header */}
  <Header />

      {/* Career Goals Section */}
      <MDBContainer fluid className='bg-light p-5'>
        <MDBRow>
          <MDBCol md='6' className='mt-5'>
            <h1 className='text-primary fw-bold'>Career Goals Begin with Right Placement</h1>
            <p className='text-dark'>
              Gain the upper hand through our extensive network of world-renowned industry and placement partners.
            </p>
            <button className='btn btn-danger text-white p-3 rounded-3 fw-bold mx-auto'>Enquire Now</button>
          </MDBCol>
          <MDBCol md='5' className='mt-1'>
            <img
              src="https://images.clickfunnels.com/cdn-cgi/image/width=1400,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/440838/file/a7d0fbf31c543d36c8af6e6b5bfe0c03.png"
              alt="Placement"
              className='img-fluid ms-5 mx-auto p-5'
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {/* Five Steps Section with Blank Background */}
      <div style={{ backgroundColor: '#f5f5f5', padding: '60px 0' }}>
        <MDBContainer>
          <MDBRow className='text-center mb-5'>
            <h1 className='fw-bold text-dark'>Five steps towards 100% job guarantee</h1>
            <h4 className='text-muted'>
              Explore placement opportunities and find the right one for you with our complete support
            </h4>
          </MDBRow>

          <MDBRow className="justify-content-center">
            {steps.map((step, index) => (
              <MDBCol md="2" key={index} className="text-center mb-4">
                <MDBCard className="h-100 shadow job-card text-white bg-secondary">
                  <MDBCardImage
                    src={step.image}
                    alt={step.title}
                    position="top"
                    style={{
                      width: '100px',
                      height: '100px',
                      margin: 'auto',
                      paddingTop: '1rem',
                    }}
                  />
                  <MDBCardBody>
                    <MDBTypography tag="h6">{step.title}</MDBTypography>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </div>

      {/* Inline CSS for hover */}
      <style>
        {`
          .job-card {
            transition: all 0.3s ease-in-out;
          }
          .job-card:hover {
            background-color: #343a40 !important;
            transform: scale(1.05);
            color: #fff;
          }
        `}
      </style>

<MDBContainer className="text-center my-5">
      <h1 className="mb-4">Brands that are our placement partners</h1>
      <img
        src="https://images.clickfunnels.com/cdn-cgi/image/width=1400,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/574888/file/7dc21817d342639842529e4af722b00b.png"
        alt="Placement Partners"
        style={{ maxWidth: '60%', height: 'auto' }}
        className='img-fluid'
      />
    </MDBContainer>

    <MDBContainer className="text-center my-5 mt-4">
      <h1 className="mb-4 text-primary">Career Growth</h1>
      <img
        src="https://statics.myclickfunnels.com/image/574944/file/0ff6cb4286e5db35efba109861ca58f8.svg"
        alt="Placement Partners"
        style={{ maxWidth: '100%', height: 'auto' }}
        className='img-fluid'
      />
    </MDBContainer>

    {/*Footer */}
    <Footer />
    </>
  );
}
