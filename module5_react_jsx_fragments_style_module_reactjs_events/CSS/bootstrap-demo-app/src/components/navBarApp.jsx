import React from 'react';
import { Navbar, NavbarBrand, Nav, Badge, Container,Form,FormControl,Button } from 'react-bootstrap';
import '../assets/css/style.css'

export default function NavBarComponent() {
  return (
  <Navbar bg="white" expand="md" className="shadow-sm sticky-top px-3 p-3">
      <Container fluid>
        {/* Move brand to left by using ms-0 or custom styling */}
        <NavbarBrand href="#" className="fw-bold text-primary fs-4 me-4 ms-3">
          <em>Flipkart App</em>
        </NavbarBrand>
        
        <Form className="d-flex mx-auto w-50">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-primary">Search</Button>
        </Form>

        <Nav className="ms-auto align-items-center gap-2">
          <Nav.Link href="#" className="text-dark">Home</Nav.Link>
          <Nav.Link href="#" className="text-dark">About</Nav.Link>
          <Nav.Link href="#" className="text-dark">Services</Nav.Link>
          <Nav.Link href="#" className="text-dark">Account</Nav.Link>
          <Nav.Link href="#" className="text-dark">
            <i className="bi bi-cart-fill me-1"></i>
            <Badge bg="danger">0</Badge>
          </Nav.Link>

        </Nav>
      </Container>
    </Navbar>
  );
}
