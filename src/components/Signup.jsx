import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from '../styles/Signup.module.css';
import Footer from './Footer';
import NavBar from './Navbar';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.some(user => user.email === email)) {
      alert('User already exists!');
    } else {
      const newUsers = [...users, { email, password }];
      localStorage.setItem('users', JSON.stringify(newUsers));
      alert('Signup successful!');
      navigate('/');
    }
  };

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <h2 className={styles.signup}>Signup</h2>
        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button onClick={handleSignup}>Signup</button>
        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
      <Footer />
    </>
  );
}
