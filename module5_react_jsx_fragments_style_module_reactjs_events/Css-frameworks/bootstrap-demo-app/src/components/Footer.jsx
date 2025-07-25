import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub, FaHome, FaEnvelope, FaPhone, FaPrint } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">

      {/* Social Media Section */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="#" className="me-4 text-reset"><FaFacebookF /></a>
          <a href="#" className="me-4 text-reset"><FaTwitter /></a>
          <a href="#" className="me-4 text-reset"><FaGoogle /></a>
          <a href="#" className="me-4 text-reset"><FaInstagram /></a>
          <a href="#" className="me-4 text-reset"><FaLinkedin /></a>
          <a href="#" className="me-4 text-reset"><FaGithub /></a>
        </div>
      </section>

      {/* Links Section */}
      <section className="">
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">

            {/* Company Info */}
            <Col md={3} lg={4} xl={3} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <FaHome className="me-2" />
                Flipkart
              </h6>
              
              <Row>
                <Col>
                Welcome to our page
                </Col>
              </Row>
              <Row>
                <Col>Thanks for visiting </Col>
              </Row>
            </Col>

            {/* Products */}
            <Col md={2} lg={2} xl={2} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p><a href="#!" className="text-reset">Watches</a></p>
              <p><a href="#!" className="text-reset">Mobiles</a></p>
              <p><a href="#!" className="text-reset">Headphones</a></p>
              <p><a href="#!" className="text-reset">Speakers</a></p>
            </Col>

            {/* Useful Links */}
            <Col md={3} lg={2} xl={2} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful Links</h6>
              <p><a href="#!" className="text-reset">Pricing</a></p>
              <p><a href="#!" className="text-reset">Settings</a></p>
              <p><a href="#!" className="text-reset">Orders</a></p>
              <p><a href="#!" className="text-reset">Help</a></p>
            </Col>

            {/* Contact */}
            <Col md={4} lg={3} xl={3} className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><FaHome className="me-2" /> Hyderabad</p>
              <p><FaEnvelope className="me-2" /> charanguguloth13@gmail.com</p>
              <p><FaPhone className="me-2" /> + 91 9347905272</p>
              <p><FaPrint className="me-2" /> + 91 9324872488</p>
            </Col>

          </Row>
        </Container>
      </section>

      {/* Copyright */}
      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © {new Date().getFullYear()} Copyright:
        <a className="text-reset fw-bold" href="https://yourcompany.com/"> YourCompany.com</a>
      </div>

    </footer>
  );
}
