import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { users } from '../users';
import styles from '../styles/Signup.module.css';


export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    if (users.some(sh => sh.email === email)) {
      alert('User already exists!');
    } else {
      users.push({ email, password });
      alert('Signup successful!');
      navigate('/');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.signup}>Signup</h2>
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}
