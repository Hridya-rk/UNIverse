import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

export default function LoginSection({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      onLogin(userCredential.user);
    } catch (error) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        onLogin(userCredential.user);
      } catch (signupError) {
        alert('Login failed: ' + signupError.message);
      }
    }
  };

  return (
    <div className="section" style={{
      background: 'linear-gradient(135deg, #e0b3ff 0%, #ffd93d 100%)'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '50px',
        padding: '60px 80px',
        boxShadow: '0 20px 60px rgba(155, 89, 182, 0.3)',
        backdropFilter: 'blur(10px)',
        border: '5px solid #9b59b6'
      }}>
        <h2 style={{
          fontFamily: 'Righteous, cursive',
          fontSize: '3em',
          color: '#9b59b6',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          🍯 Join the Hive
        </h2>
        
        <form onSubmit={handleLogin} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '25px',
          minWidth: '400px'
        }}>
          <input
            type="email"
            placeholder="📧 Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-bubble"
            required
          />
          
          <input
            type="password"
            placeholder="🔒 Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-bubble"
            required
          />
          
          <button type="submit" className="feature-button">
            Buzz In! 🐝
          </button>
        </form>
      </div>
    </div>
  );
}