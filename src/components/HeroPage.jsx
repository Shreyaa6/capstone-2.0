import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Customize Your Mobile Case</h1>
        <p>
          Design your own phone cover with photos, text, or patterns that match your personality.
          Express your style or create the perfect gift with our easy-to-use customizer.
        </p>
        <a href="#customizer">Start Customizing</a>
      </div>
      <div className="hero-image">
        <img src="https://images.dailyobjects.com/marche/product-images/1101/black-nimbus-magsafe-phone-case-cover-for-iphone-13-images/Black-Nimbus-MagSafe-Phone-Case-Cover-For-iPhone-13.png?tr=cm-pad_resize,v-3" alt="Mobile Case Preview" />
      </div>
    </section>
  );
};

export default Hero;
