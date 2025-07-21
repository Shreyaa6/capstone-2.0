import React from 'react';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <h4>Follow Us</h4>
        <div className={styles.icons}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><span className="fa fa-facebook">Facebook</span></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><span className="fa fa-twitter">Twitter</span></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><span className="fa fa-linkedin">linkedin</span></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><span className="fa fa-instagram">Instagram</span></a>
        </div>
      </div>
      <div className={styles.contactInfo}>
        <h4>Contact Us</h4>
        <p>Phone: +91-1234567890</p>
        <p>Email: info@destiny.com</p>
        <p>delhi ncr, India</p>
      </div>
      <div className={styles.copyright}>
        <p>© 2025 Destiny.</p>
      </div>
    </footer>
  );
} 