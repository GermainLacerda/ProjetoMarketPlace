// src/components/CarouselBanner.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importe os estilos padrão do carrosel

import './CarouselBanner.css'; // Se precisar de estilos personalizados

const CarouselBanner = ({ images }) => {
  return (
    <div className="carousel-container">
      <Carousel
        showArrows={true} 
        showStatus={false} 
        showIndicators={true} 
        infiniteLoop={true} 
        autoPlay={true} 
        interval={5000} 
        transitionTime={500} 
        stopOnHover={true} 
        swipeable={true} 
        dynamicHeight={false} 
        showThumbs={false}
      >
        {images.map((img, index) => (
          <div key={index} className="carousel-slide">
            <img src={img.src} alt={img.alt} className="carousel-image" />
            {img.legend && <p className="legend">{img.legend}</p>}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselBanner;