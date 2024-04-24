import React from 'react';
import './Footer.css'; // Import CSS file for styling
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'; // Import icons from Font Awesome


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>About Us</h3>
        <ul>
          <li>About Us</li>
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
          <li>After Pay</li>
          <li>ZipPay</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Help & Contact</h3>
        <ul>
          <li>Contact Us</li>
          <li>Shipping</li>
          <li>How To's</li>
          <li>Warranty & Returns</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Help & Contact</h3>
        <ul>
          <li>Contact Us</li>
          <li>Shipping</li>
          <li>How To's</li>
          <li>Warranty & Returns</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>SHOP</h3>
        <ul>
          <li>Alternator</li>
          <li>Airconditioning</li>
          <li>Electrical Accessories</li>
          <li>LED Lights</li>
          <li>Starter Motor</li>
          <li>Wiper Blades</li>
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
