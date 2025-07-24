import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon
} from 'mdb-react-ui-kit';

export default () => (
  <MDBFooter bgColor="dark" className="text-white pt-5">
    <MDBContainer>
      <MDBRow>
        {/* Logo & Contact Section */}
        <MDBCol md="3" className="mb-4 text-center text-md-start ms-auto">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrGhFVUkEOfvXJncmzQTaf8x59m-6gJPA06g&s"
            alt="Zero2Pro Logo"
            className="mb-3 img-fluid mt-4 rounded-5"
            style={{ height: '150px' }}
          />
        </MDBCol>

        {/* Important & Career Links */}
        <MDBCol md="3" className="mb-4 mt-4 p-1">
          <h6 className="fw-bold">CONTACT US</h6>
          <p className="mb-1">5th Floor, Amore Building, Junction of 2nd & 4th Road, Khar, Mumbai - 400052, India</p>
          <p className="mb-1">
            <a href="mailto:info@Zero2Pro.com" className="text-white text-decoration-none">
              info@Zero2Pro.com
            </a>
          </p>
          <p>
            <a href="tel:07666830000" className="text-white text-decoration-none">
              07666830000
            </a>
          </p>
          <h6 className="fw-bold">IMPORTANT LINKS</h6>
          <ul className="list-unstyled">
            <li><a href="/" className="text-white text-decoration-none">About Us</a></li>
            <li><a href="/" className="text-white text-decoration-none">Investors</a></li>
            <li><a href="/" className="text-white text-decoration-none">Faqs</a></li>
            <li><a href="/" className="text-white text-decoration-none">Career</a></li>
            <li><a href="/" className="text-white text-decoration-none">Centres</a></li>
            <li><a href="/" className="text-white text-decoration-none">Enrollment Terms & Conditions</a></li>
            <li><a href="/" className="text-white text-decoration-none">Sitemap</a></li>
          </ul>
        </MDBCol>

        {/* Certification & Short Courses */}
        <MDBCol md="3" className="mb-4">
          <h6 className="fw-bold mt-4">CAREER COURSES</h6>
          <ul className="list-unstyled">
            <li><a href="/courses/cloud-ai-engineer" className="text-white text-decoration-none">Cloud Computing Engineer with AI</a></li>
            <li><a href="/courses/cloud-ai-pro" className="text-white text-decoration-none">Cloud Computing Professional with AI</a></li>
            <li><a href="/courses/bca-cyber" className="text-white text-decoration-none">BCA in Cloud & Cyber Security</a></li>
            <li><a href="/courses/metaverse" className="text-white text-decoration-none">Masters in Gaming & Metaverse</a></li>
          </ul>

          <h6 className="fw-bold">CERTIFICATION COURSES</h6>
          <ul className="list-unstyled">
            <li><a href="/" className="text-white text-decoration-none">Red Hat Professional</a></li>
            <li><a href="/" className="text-white text-decoration-none">Routing & Switching</a></li>
            <li><a href="/" className="text-white text-decoration-none">Microsoft Server Specialist</a></li>
            <li><a href="/" className="text-white text-decoration-none">Ethical Hacking</a></li>
            <li><a href="/" className="text-white text-decoration-none">AWS Solution Specialist</a></li>
          </ul>

          <h6 className="fw-bold mt-4">SHORT COURSES</h6>
          <ul className="list-unstyled">
            <li><a href="/" className="text-white text-decoration-none">Digital Marketing</a></li>
            <li><a href="/" className="text-white text-decoration-none">PC Hardware Support</a></li>
            <li><a href="/" className="text-white text-decoration-none">Windows 10</a></li>
            <li><a href="/" className="text-white text-decoration-none">Networking Essentials</a></li>
          </ul>
        </MDBCol>

        {/* Zero2Pro Connect, Franchise, Help */}
        <MDBCol md="3" className="mb-4">
          <h6 className="fw-bold mt-4 p-1">Zero2Pro CONNECT</h6>
          <ul className="list-unstyled">
            <li><a href="/" className="text-white text-decoration-none">Institutional Alliance</a></li>
            <li><a href="/" className="text-white text-decoration-none">Corporate Training</a></li>
          </ul>

          <h6 className="fw-bold mt-4">FRANCHISE</h6>
          <ul className="list-unstyled">
            <li><a href="/" className="text-white text-decoration-none">India Franchise</a></li>
            <li><a href="/" className="text-white text-decoration-none">International Franchise</a></li>
          </ul>

          <h6 className="fw-bold mt-4">HELP</h6>
          <ul className="list-unstyled">
            <li><a href="/contact" className="text-white text-decoration-none">Contact Us</a></li>
            <li><a href="/faqs" className="text-white text-decoration-none">Student FAQs</a></li>
            <li><a href="/terms" className="text-white text-decoration-none">Terms & Conditions</a></li>
            <li><a href="/privacy" className="text-white text-decoration-none">Privacy Policy</a></li>
          </ul>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    {/* Social Media Icons */}
    <div className="bg-dark py-3 text-center border-top border-secondary">
      <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white mx-2">
        <MDBIcon fab icon="facebook-f" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white mx-2">
        <MDBIcon fab icon="instagram" />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-white mx-2">
        <MDBIcon fab icon="youtube" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white mx-2">
        <MDBIcon fab icon="linkedin-in" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white mx-2">
        <MDBIcon fab icon="twitter" />
      </a>
      <a href="https://vimeo.com" target="_blank" rel="noreferrer" className="text-white mx-2">
        <MDBIcon fab icon="vimeo-v" />
      </a>
    </div>
  </MDBFooter>
);
