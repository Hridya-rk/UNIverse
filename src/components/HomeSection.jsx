import React from 'react';

export default function HomeSection({ onNavigate }) {
  return (
    <div className="section" style={{
      background: 'linear-gradient(135deg, #9b59b6 0%, #e0b3ff 50%, #ffd93d 100%)'
    }}>
      <h2 className="wiggle" style={{
        fontFamily: 'Righteous, cursive',
        fontSize: '4em',
        color: 'white',
        textShadow: '4px 4px 8px rgba(0,0,0,0.3)',
        marginBottom: '50px',
        textAlign: 'center'
      }}>
        🌟 Your Campus Universe 🌟
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <button onClick={() => onNavigate('chat')} className="feature-button fade-in-up" style={{animationDelay: '0.1s'}}>
          💬 Common Chat Room
        </button>
        
        <button onClick={() => onNavigate('lostfound')} className="feature-button fade-in-up" style={{animationDelay: '0.2s'}}>
          🔍 Lost & Found
        </button>
        
        <button onClick={() => onNavigate('events')} className="feature-button fade-in-up" style={{animationDelay: '0.3s'}}>
          📅 Important Events
        </button>
        
        <button onClick={() => onNavigate('attendance')} className="feature-button fade-in-up" style={{animationDelay: '0.4s'}}>
          📊 Attendance Risk
        </button>
        
        <button onClick={() => onNavigate('bus')} className="feature-button fade-in-up" style={{animationDelay: '0.5s'}}>
          🚌 Bus Timings
        </button>
      </div>
    </div>
  );
}