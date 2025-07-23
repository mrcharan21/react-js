import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
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
              {['About Us', 'Investors', 'Faqs', 'Career', 'Centres', 'Enrollment Terms & Conditions', 'Sitemap'].map((text, i) => (
                <li key={i}>
                  <a href="/" className="text-white text-decoration-none">{text}</a>
                </li>
              ))}
            </ul>
            
          </MDBCol>

          {/* Certification & Short Courses */}
          <MDBCol md="3" className="mb-4">
            <h6 className="fw-bold mt-4">CAREER COURSES</h6>
            <ul className="list-unstyled">
              {[
                { text: 'Cloud Computing Engineer with AI', href: '/courses/cloud-ai-engineer' },
                { text: 'Cloud Computing Professional with AI', href: '/courses/cloud-ai-pro' },
                { text: 'BCA in Cloud & Cyber Security', href: '/courses/bca-cyber' },
                { text: 'Masters in Gaming & Metaverse', href: '/courses/metaverse' }
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="text-white text-decoration-none">{item.text}</a>
                </li>
              ))}
            </ul>
            <h6 className="fw-bold">CERTIFICATION COURSES</h6>
            <ul className="list-unstyled">
              {['Red Hat Professional', 'Routing & Switching', 'Microsoft Server Specialist', 'Ethical Hacking', 'AWS Solution Specialist'].map((course, i) => (
                <li key={i}>
                  <a href="/" className="text-white text-decoration-none">{course}</a>
                </li>
              ))}
            </ul>
            <h6 className="fw-bold mt-4">SHORT COURSES</h6>
            <ul className="list-unstyled">
              {['Digital Marketing', 'PC Hardware Support', 'Windows 10', 'Networking Essentials'].map((course, i) => (
                <li key={i}>
                  <a href="/" className="text-white text-decoration-none">{course}</a>
                </li>
              ))}
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
        {[
          { icon: 'facebook-f', link: 'https://facebook.com' },
          { icon: 'instagram', link: 'https://instagram.com' },
          { icon: 'youtube', link: 'https://youtube.com' },
          { icon: 'linkedin-in', link: 'https://linkedin.com' },
          { icon: 'twitter', link: 'https://twitter.com' },
          { icon: 'vimeo-v', link: 'https://vimeo.com' },
        ].map((item, i) => (
          <a key={i} href={item.link} target="_blank" rel="noreferrer" className="text-white mx-2">
            <MDBIcon fab icon={item.icon} />
          </a>
        ))}
      </div>
    </MDBFooter>
  );
}
