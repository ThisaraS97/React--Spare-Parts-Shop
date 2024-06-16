import React from 'react';
import './Footer.css'; // Import CSS file for styling
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'; // Import icons from Font Awesome
import { Link } from 'react-router-dom';
import AboutUsPage from '../pages/AboutUs';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>AboutUs</h3>
        <ul>
          <li>About Us</li>
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Help & Contact</h3>
        <ul>
          <li>Contact Us</li>
          <li>Shipping</li>
        </ul>
      </div>
     
      <div className="footer-section">
        <h3>SHOP</h3>
        <ul>
          <li>Brake Washers</li>
          <li>Wiper Blades</li>
          <li>Spark Plugs</li>
          <li>Air Filters</li>

        </ul>
      </div>
      <div className="footer-section">
        <h3>Social Media</h3>
        <ul className="social-icons">
          <li><a href="https://www.facebook.com"><FaFacebook /></a></li>
          <li><a href="https://www.instagram.com"><FaInstagram /></a></li>
          <li><a href="https://www.youtube.com"><FaYoutube /></a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
