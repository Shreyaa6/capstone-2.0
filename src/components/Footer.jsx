import React from 'react';
import styles from '../styles/Footer.module.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.quickLinks}>
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="/homepage">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
        </ul>
      </div>
      <div className={styles.socialMedia}>
        <h4>Follow Us</h4>
        <div className={styles.icons}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </div>
      <div className={styles.contactInfo}>
        <h4>Contact Us</h4>
        <p>Phone: +91-9878654354 </p>
        <p>Email: info@destiny.com</p>
        <p>Lajpat Nagar, delhi, India</p>
      </div>
      <div className={styles.copyright}>
        <p>© 2024 Destiny.</p>
      </div>
    </footer>
  );
} 