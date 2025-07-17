import React, { useState } from 'react';

const images = [
    'https://picsum.photos/id/1018/600/300',
    'https://picsum.photos/id/1015/600/300',
    'https://picsum.photos/id/1019/600/300'
];

export default function Slider() {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    return (
        <div className="slider-container">
            <button className="slider-btn" onClick={prevSlide}>&lt;</button>
            <img src={images[current]} alt={`slide-${current}`} className="slider-img" />
            <button className="slider-btn" onClick={nextSlide}>&gt;</button>
        </div>
    );
}
