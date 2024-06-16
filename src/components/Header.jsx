import React from 'react';
import './Header.css'; // Import CSS file for styling
import logo from './logo.png';
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon from Font Awesome


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
        </ul>
      </nav>
      <div className="actions">
        {/* Call now button */}
        <button className="call-now">Call Now</button>
        {/* Cart icon */}
        <div className="cart-icon">
          <FaShoppingCart /> {/* Use the cart icon */}
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
