import React from 'react';
import { Card, Button, Container, Row, Col, CardHeader } from 'react-bootstrap';
import watch1 from '../assets/Images/watch1.jpeg';
import watch2 from '../assets/Images/watch2.jpeg';
import watch3 from '../assets/Images/watch3.jpeg';

export default function Cards() {
    return (
        <Container className="my-4">
            <CardHeader className='p-2'>
                <h1>Best of watches</h1></CardHeader>
            <Row>
                <Col md={4}>
                    <Card className='mobile-card'>
                        <Card.Img variant="top" src={watch1} alt="Image 1" />
                        <Card.Body>
                            <Card.Title>Titan</Card.Title>
                            <Card.Text>
                                <p>$ 500</p>
                                <p><i>car wheel watch</i></p>
                            </Card.Text>
                            <Button variant="primary">Add to cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className='mobile-card'>
                        <Card.Img variant="top" src={watch2} alt="Image 2" />
                        <Card.Body>
                            <Card.Title>FastTrack</Card.Title>
                            <Card.Text>
                                <p>$ 400</p>
                                <p>Analog watch</p>
                            </Card.Text>
                            <Button variant="primary">Add to cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className='mobile-card'>
                        <Card.Img variant="top" src={watch3} alt="Image 3" />
                        <Card.Body>
                            <Card.Title>Boat</Card.Title>
                            <Card.Text>
                                <p>$300</p>
                                <p>Analog watch</p>
                            </Card.Text>
                            <Button variant="primary">Add to cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
