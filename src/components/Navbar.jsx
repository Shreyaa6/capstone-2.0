import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => navigate('/homepage');

  return (
    <header className={styles.navbar}>
      <div className={styles.logo} onClick={handleLogoClick}>
        Destiny
      </div>

      <nav className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
        <Link to="/homepage">Home</Link>
        <a href="#about">About</a>
        <Link to="/products">Products</Link>
        <a href="#services">Services</a>
        <a href="#blog">Blog</a>
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
