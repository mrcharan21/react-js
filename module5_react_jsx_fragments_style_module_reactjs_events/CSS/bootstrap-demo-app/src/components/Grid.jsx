import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../assets/css/style.css'; // ✅ CSS for hover effect
import mobile1 from '../assets/Images/mobile1.jpeg';
import mobile2 from '../assets/Images/mobile2.jpeg';
import mobile3 from '../assets/Images/mobile3.jpeg';

const mobiles = [
  { id: 1, title: 'OnePlus 13', price: '$700', desc: 'Fast charging.', image: mobile1 },
  { id: 2, title: 'iPhone 15', price: '$850', desc: 'Great camera.', image: mobile2 },
  { id: 3, title: 'Vivo X90', price: '$850', desc: 'Powerful battery.', image: mobile3 },
  { id: 4, title: 'Samsung S23', price: '$900', desc: 'Dynamic AMOLED.', image: mobile1 },
  { id: 5, title: 'Realme GT', price: '$650', desc: 'Smooth display.', image: mobile2 },
  { id: 6, title: 'Redmi Note 12', price: '$400', desc: 'Budget king.', image: mobile3 },
];

export default function MobileGrid() {
  return (
    <Container fluid className="my-4">
      <h3 className="mb-4 text-center">Best of Mobiles</h3>
      <Row>
        {mobiles.map((mobile) => (
          <Col key={mobile.id + mobile.title} md={2} className="mb-4">
            <Card className="mobile-card">
              <Card.Img variant="top" src={mobile.image} alt={mobile.title} />
              <Card.Body>
                <Card.Title>{mobile.title}</Card.Title>
                <div>
                  <p>{mobile.price}</p>
                  <p><i>{mobile.desc}</i></p>
                </div>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
