import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from '../styles/Login.module.css';
import loginBg from '../assets/login.jpg';
import Footer from './Footer';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      alert('Login successful!');
      navigate('/homepage');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <>
      <div style={{
        minHeight: '100vh',
        backgroundImage: `url(${loginBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div className={styles.container}>
          <h2>Login</h2>
          <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Login</button>
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
