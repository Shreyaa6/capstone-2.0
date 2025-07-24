import React from 'react';
import Footer from './Footer';
import styles from '../styles/Services.module.css';
import { FaHammer, FaCogs, FaChalkboardTeacher, FaTools } from 'react-icons/fa';
import NavBar from './Navbar';
import { useNavigate } from 'react-router-dom';
import coustom from '../assets/coustom.jpg';
import del from '../assets/delivery.jpg';

export default function Services() {
  const navigate = useNavigate();
  return (
    <div className={styles.servicesPage}>
      <NavBar />
      <h1 className={styles.heading}>Our Services</h1>
      <section className={styles.serviceSection}>
        <div className={styles.imageBox}>
          <img src={coustom} alt="Flooring Business" />
        </div>
        <div className={styles.infoBox}>
          <h2>Service 01: Custom Design & Personalization</h2>
          <p className={styles.desc}>
            Our primary offering focuses on creating custom-designed phone cases tailored to your personal taste and style. We provide a seamless and interactive platform where users can upload their own images, choose fonts, colors, and layouts, and view a live preview before placing an order. Our customization service supports a wide range of phone models.
          </p>
          <ul className={styles.subServices}>
            <li><strong>We Coustomize</strong> – Allowing customers to design their phone case using images, text, art, and templates.</li>
            <li><strong>We Print & Manufacture</strong> – High-quality UV printing on durable materials with precision-fit for each phone model.</li>
            <li><strong>Preview & Modify</strong> – Real-time design preview with options to edit before checkout.</li>
            <li><strong>Coustomer Guidance</strong> – Design assistance and mockup previews upon request.</li>
          </ul>
        </div>
      </section>
      <section className={styles.serviceSectionAlt}>
        <div className={styles.infoBox}>
          <h2>Service 02: Delivery & Order Fulfilment</h2>
          <p className={styles.desc}>
            We ensure reliable, fast, and safe delivery of all custom cases directly to your doorstep. From processing your design to final packaging and shipping, our logistics team handles it efficiently.
          </p>
          <ul className={styles.subServices}>
            <li><strong>Shipping Services</strong> – Standard and express delivery options available across India and abroad.</li>
            <li><strong>Live Tracking</strong> – Real-time order tracking updates provided after dispatch.</li>
            <li><strong>Packaging Assurance</strong> – Protective and eco-friendly packaging to prevent damage in transit.</li>
            <li><strong>Delivery Support</strong> – Prompt assistance with lost/delayed shipments.</li>
          </ul>
        </div>
        <div className={styles.imageBox}>
          <img src={del} alt="Design & Build" />
        </div>
      </section>
      <Footer />
    </div>
  );
} 