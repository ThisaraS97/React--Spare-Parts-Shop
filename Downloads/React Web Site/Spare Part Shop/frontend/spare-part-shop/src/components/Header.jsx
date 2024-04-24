import React from 'react';
import './Header.css'; // Import CSS file for styling
import logo from './logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* Website logo */}
        <img src={logo} alt="SparePart Shop Logo" />
      </div>
      <nav className="navbar">
        <ul>
          {/* Navigation links */}
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Brands</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">Help</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Warranty</a></li>
        </ul>
      </nav>
      <div className="actions">
        {/* Call now button */}
        <button className="call-now">Call Now</button>
        {/* Cart icon */}
        <div className="cart-icon">
          <img src="cart-icon.png" alt="Cart" />
          {/* Optional: Display number of items in cart */}
          <span className="cart-items">0</span>
        </div>
        {/* Login button */}
        <button className="login">Login</button>
      </div>
    </header>
  );
}

export default Header;
