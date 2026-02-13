import React from 'react';

export default function ThankYou() {
  return (
    <div className="section" style={{
      background: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 50%, #ffecd2 100%)',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh'
    }}>
      {/* Floating Bees */}
      <div className="bee" style={{ 
        position: 'absolute', 
        top: '10%', 
        left: '10%', 
        fontSize: '4em' 
      }}>🐝</div>
      <div className="bee" style={{ 
        position: 'absolute', 
        top: '20%', 
        right: '15%', 
        fontSize: '3em', 
        animationDelay: '0.5s' 
      }}>🐝</div>
      <div className="bee" style={{ 
        position: 'absolute', 
        bottom: '25%', 
        left: '20%', 
        fontSize: '3.5em', 
        animationDelay: '1s' 
      }}>🐝</div>
      <div className="bee" style={{ 
        position: 'absolute', 
        bottom: '15%', 
        right: '10%', 
        fontSize: '2.5em', 
        animationDelay: '1.5s' 
      }}>🐝</div>
      <div className="bee" style={{ 
        position: 'absolute', 
        top: '50%', 
        right: '30%', 
        fontSize: '3em', 
        animationDelay: '2s' 
      }}>🐝</div>
      <div className="bee" style={{ 
        position: 'absolute', 
        bottom: '40%', 
        left: '8%', 
        fontSize: '2.8em', 
        animationDelay: '2.5s' 
      }}>🐝</div>

      {/* Floating Honey Elements */}
      <div className="bubble" style={{
        position: 'absolute',
        top: '15%',
        left: '25%',
        fontSize: '2.5em',
        animationDelay: '0.3s'
      }}>🍯</div>
      <div className="bubble" style={{
        position: 'absolute',
        bottom: '20%',
        right: '25%',
        fontSize: '2em',
        animationDelay: '1.2s'
      }}>🍯</div>

      {/* Main Content */}
      <div style={{
        textAlign: 'center',
        zIndex: 10,
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '50px',
        padding: '80px 100px',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
        border: '5px solid #ffd93d',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <div className="bubble" style={{ 
          fontSize: '6em', 
          marginBottom: '30px',
          display: 'inline-block'
        }}>
          🍯✨
        </div>
        
        <h2 style={{
          fontFamily: 'Righteous, cursive',
          fontSize: '4.5em',
          background: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '30px',
          lineHeight: '1.2'
        }}>
          Thank You!
        </h2>
        
        <p style={{
          fontSize: '2em',
          color: '#9b59b6',
          fontWeight: '600',
          marginBottom: '20px'
        }}>
          Keep Buzzing in the UNIverse! 🐝
        </p>
        
        <p style={{
          fontSize: '1.4em',
          color: '#555',
          maxWidth: '700px',
          margin: '0 auto 40px',
          lineHeight: '1.8',
          fontWeight: '500'
        }}>
          Together we make our campus a sweeter place, just like bees make honey! 
          Stay connected, stay awesome, and keep spreading the buzz! 🌟
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          marginBottom: '40px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #9b59b6 0%, #e0b3ff 100%)',
            color: 'white',
            padding: '20px 30px',
            borderRadius: '20px',
            fontSize: '1.2em',
            fontWeight: '600'
          }}>
            💬 Chat Connected
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #ffd93d 0%, #ffb347 100%)',
            color: 'white',
            padding: '20px 30px',
            borderRadius: '20px',
            fontSize: '1.2em',
            fontWeight: '600'
          }}>
            🔍 Lost & Found Active
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%)',
            color: 'white',
            padding: '20px 30px',
            borderRadius: '20px',
            fontSize: '1.2em',
            fontWeight: '600'
          }}>
            📊 Always Tracking
          </div>
        </div>
        
        <div style={{
          fontSize: '3em',
          marginTop: '40px',
          animation: 'pulse 1.5s ease-in-out infinite'
        }}>
          💜💜💜
        </div>

        <div style={{
          marginTop: '40px',
          padding: '25px',
          background: '#fff9e6',
          borderRadius: '20px',
          border: '3px dashed #ffd93d'
        }}>
          <p style={{
            fontSize: '1.2em',
            color: '#666',
            margin: 0,
            fontWeight: '500'
          }}>
            <strong style={{ color: '#9b59b6' }}>Pro Tip:</strong> Scroll back up to access any feature anytime! 
            Your campus universe is just a scroll away! 🚀
          </p>
        </div>

        <div style={{
          marginTop: '30px',
          fontSize: '1.1em',
          color: '#999'
        }}>
          Made with 💜 for our campus community
        </div>
      </div>

      {/* Decorative Elements at Bottom */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '20px',
        fontSize: '2em',
        zIndex: 5
      }}>
        <span className="wiggle">🐝</span>
        <span className="wiggle" style={{ animationDelay: '0.2s' }}>🍯</span>
        <span className="wiggle" style={{ animationDelay: '0.4s' }}>💜</span>
        <span className="wiggle" style={{ animationDelay: '0.6s' }}>🍯</span>
        <span className="wiggle" style={{ animationDelay: '0.8s' }}>🐝</span>
      </div>
    </div>
  );
}