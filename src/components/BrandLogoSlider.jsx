// BrandLogoSlider.js

import React, { useState, useEffect } from 'react';
import './BrandLogoSlider.css'; // Import CSS file for styling

const BrandLogoSlider = ({ logos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex => (currentIndex + 1) % logos.length);
      setScrollLeft(scrollLeft => (scrollLeft - 160) % (logos.length * 160)); // Assuming each logo is 160px wide
    }, 3000); // Change images every 3 seconds

    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <div className="brand-logo-slider-container">
      <div className="brand-logo-slider" style={{ marginLeft: scrollLeft }}>
        {logos.map((logo, index) => (
          <img src={logo} alt={`Brand Logo ${index}`} key={index} />
        ))}
        {logos.map((logo, index) => (
          <img src={logo} alt={`Brand Logo ${index}`} key={index + logos.length} />
        ))}
      </div>
    </div>
  );
}

export default BrandLogoSlider;
