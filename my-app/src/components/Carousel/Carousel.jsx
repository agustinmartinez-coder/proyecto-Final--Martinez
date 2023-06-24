import React, { useState } from 'react';
import './Carousel.css';

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
        'bangkok-.jpg',
        'beijing-china.jpg',
        'pekin-china.jpg',
        'seul-corea-del-sur.jpg',
        'tokyo-japon.jpg',
        
    ];

    const handlePrev = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    };

    const handleNext = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    };

    return (
        <div className="carousel">
            <h2>Explore nuestros destinos!!</h2>
            <img className="carousel-image" src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
            <div className="carousel-buttons">
                <button className="carousel-button prev" onClick={handlePrev}>
                    &lt;
                </button>
                <button className="carousel-button next" onClick={handleNext}>
                    &gt;
                </button>
            </div>
        </div>
    );
}

