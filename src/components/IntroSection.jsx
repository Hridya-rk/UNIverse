import React from 'react';

export default function IntroSection({ onNext }) {
  return (
    <div className="section" style={{
      background: 'linear-gradient(135deg, #ffd93d 0%, #ffb347 50%, #9b59b6 100%)',
      overflow: 'hidden'
    }}>
      <div className="bee" style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        fontSize: '3em'
      }}>🐝</div>
      <div className="bee" style={{
        position: 'absolute',
        bottom: '30%',
        left: '15%',
        fontSize: '2em',
        animationDelay: '1s'
      }}>🐝</div>
      <div className="bee" style={{
        position: 'absolute',
        top: '40%',
        left: '5%',
        fontSize: '2.5em',
        animationDelay: '0.5s'
      }}>🐝</div>
      
      <div style={{ textAlign: 'center', zIndex: 10 }}>
        <div style={{ fontSize: '8em', marginBottom: '30px' }}>🍯</div>
        
        <h1 className="bubble" style={{
          fontFamily: 'Righteous, cursive',
          fontSize: '6em',
          background: 'linear-gradient(135deg, #9b59b6 0%, #e0b3ff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          margin: '20px 0',
          textShadow: '0 5px 15px rgba(155, 89, 182, 0.3)',
          letterSpacing: '5px'
        }}>
          UNIverse
        </h1>
        
        <p style={{
          fontSize: '1.8em',
          color: '#fff',
          fontWeight: '500',
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
          marginBottom: '50px'
        }}>
          🐝 Where Community Buzzes Together 🐝
        </p>
        
        <button onClick={onNext} className="feature-button" style={{
          fontSize: '1.5em',
          background: 'white',
          color: '#9b59b6',
          animation: 'pulse 2s ease-in-out infinite'
        }}>
          Enter the Hive ➜
        </button>
      </div>
      
      <div style={{
        position: 'absolute',
        bottom: '20px',
        fontSize: '2em',
        animation: 'bounce 1s ease-in-out infinite'
      }}>⬇️</div>
    </div>
  );
}