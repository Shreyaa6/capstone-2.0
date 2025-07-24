import React from 'react';
import Footer from './Footer';
import styles from '../styles/About.module.css';
import NavBar from './Navbar';
import { useNavigate } from 'react-router-dom';
import img from '../assets/des.jpg';
import uni from '../assets/unique.jpg';
import pre from '../assets/premium.jpg';
import customers from '../assets/coustomer.jpg';

export default function About() {
  const navigate = useNavigate();
  return (
    <div className={styles.aboutPage}>
      <NavBar />
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <h1>About Destiny</h1>
          <p>Your one-stop shop for fully customizable phone cases and accessories. We believe everyone deserves to express their style and protect their devices with products as unique as they are.</p>
        </div>
        <img className={styles.heroImg} src={img} alt="About Destiny" />
      </section>
      <section className={styles.storySection}>
        <h2>Our Story</h2>
        <p>Founded in 2024, Destiny was born from a passion for creativity and technology. We set out to make it easy for anyone to design and order custom phone cases, gifts, and accessories online. Today, we serve thousands of happy customers who love to personalize their world.</p>
      </section>
      <section className={styles.uniqueSection}>
        <h2>What Makes Us Unique?</h2>
        <div className={styles.uniqueGrid}>
          <div className={styles.uniqueItem}>
            <img src={uni} alt="Customization" />
            <h3>Endless Customization</h3>
            <p>Design your own case with photos, text, and patterns. Choose from a wide range of models and styles.</p>
          </div>
          <div className={styles.uniqueItem}>
            <img src={pre} alt="Quality" />
            <h3>Premium Quality</h3>
            <p>We use only the best materials and printing technology to ensure your case looks great and lasts long.</p>
          </div>
          <div className={styles.uniqueItem}>
            <img src={customers} alt="Customer Service" />
            <h3>Customer First</h3>
            <p>Our support team is here to help you every step of the way, from design to delivery and beyond.</p>
          </div>
        </div>
      </section>
      <section className={styles.valuesSection}>
        <h2>Our Values</h2>
        <ul className={styles.valuesList}>
          <li>Creativity & Self-Expression</li>
          <li>Quality Craftsmanship</li>
          <li>Customer Satisfaction</li>
          <li>Innovation</li>
          <li>Sustainability</li>
        </ul>
      </section>
      <Footer />
    </div>
  );
} 