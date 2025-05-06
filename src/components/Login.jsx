import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { users } from '../users';
import styles from '../styles/Signup.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      alert('Login successful!');
      navigate('/homepage'); 
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}
