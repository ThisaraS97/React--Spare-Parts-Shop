// ImageSlider.js

import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Import CSS file for styling

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the current image index
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, [images]);

  const handleDotClick = (index) => {
    // Navigate to the corresponding image when a dot is clicked
    setCurrentImageIndex(index);
  };

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={index === currentImageIndex ? 'slide active' : 'slide'}
        />
      ))}
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentImageIndex ? 'dot active' : 'dot'}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
