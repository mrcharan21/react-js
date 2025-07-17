import React from 'react';
import image1 from '../assets/Images/image1.jpeg';
import image2 from '../assets/Images/image2.jpeg';
import image3 from '../assets/Images/image3.jpeg';
import { Container } from 'react-bootstrap';
import '../assets/css/style.css'; // contains .fullscreen-carousel styles

export default function CarouselComponent() {
  return (
    <Container fluid className="p-2">
      <div
        id="carouselExampleIndicators"
        className="carousel slide fullscreen-carousel"
        data-bs-ride="carousel"
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* Carousel Images */}
        <div className="carousel-inner">
          <div className="carousel-item active c-item">
            <img src={image1} className="d-block w-100 c-img" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100 c-img" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100 c-img" alt="Slide 3" />
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </Container>
  );
}
