import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => navigate('/homepage');

  const showBack = location.pathname !== '/homepage' && location.pathname !== '/';

  return (
    <header className={styles.navbar}>
      <div className={styles.logoContainer}>
        {showBack && (
          <button
            onClick={() => navigate(-1)}
            className={styles.backButton}
            aria-label="Go Back"
          >
            &larr; Back
          </button>
        )}
        <div className={styles.logo} onClick={handleLogoClick}>
          Destiny
        </div>
      </div>

      <nav className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
        <Link to="/homepage">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/services">Services</Link>
        <Link to="/blog">Blog</Link>
      </nav>

      <div className={styles.authButtons}>
        <Link to="/" className={styles.login}>Login</Link>
        <Link to="/signup" className={styles.signup}>Signup</Link>
      </div>

      <div
        className={styles.hamburger}
        onClick={() => setMenuOpen(prev => !prev)}
      >
        ☰
      </div>
    </header>
  );
}
