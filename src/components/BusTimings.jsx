import React, { useState } from 'react';

export default function BusTimings() {
  const [busTimings] = useState([
    { 
      route: "Campus → Downtown", 
      times: ["7:00 AM", "9:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"],
      color: '#9b59b6'
    },
    { 
      route: "Campus → Shopping Mall", 
      times: ["8:00 AM", "11:00 AM", "2:00 PM", "5:00 PM", "7:00 PM"],
      color: '#e74c3c'
    },
    { 
      route: "Campus → Railway Station", 
      times: ["6:30 AM", "10:00 AM", "1:00 PM", "4:00 PM", "8:00 PM"],
      color: '#3498db'
    },
    { 
      route: "Campus → Airport", 
      times: ["5:00 AM", "9:00 AM", "2:00 PM", "6:00 PM"],
      color: '#f39c12'
    },
    { 
      route: "Campus → Tech Park", 
      times: ["7:30 AM", "12:30 PM", "5:30 PM", "9:00 PM"],
      color: '#2ecc71'
    },
    { 
      route: "Campus → City Center", 
      times: ["8:30 AM", "11:30 AM", "3:30 PM", "7:30 PM"],
      color: '#e91e63'
    }
  ]);

  return (
    <div className="section" style={{
      background: 'linear-gradient(135deg, #9b59b6 0%, #ffd93d 100%)'
    }}>
      <h2 style={{
        fontFamily: 'Righteous, cursive',
        fontSize: '3em',
        color: 'white',
        marginBottom: '40px',
        textShadow: '3px 3px 6px rgba(0,0,0,0.3)'
      }}>
        🚌 Bus Timings
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '30px',
        width: '90%',
        maxWidth: '1400px'
      }}>
        {busTimings.map((bus, index) => (
          <div key={index} className="fade-in-up" style={{
            background: 'white',
            borderRadius: '30px',
            padding: '35px',
            boxShadow: '0 15px 40px rgba(155, 89, 182, 0.3)',
            animationDelay: `${index * 0.1}s`,
            border: '4px solid #e0b3ff',
            transition: 'transform 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ 
              fontSize: '3em', 
              marginBottom: '20px', 
              textAlign: 'center',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
            }}>
              🚌
            </div>
            <h3 style={{
              color: bus.color,
              fontSize: '1.5em',
              marginBottom: '25px',
              textAlign: 'center',
              fontWeight: '700',
              lineHeight: '1.4'
            }}>
              {bus.route}
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {bus.times.map((time, i) => (
                <div key={i} style={{
                  background: `linear-gradient(135deg, ${bus.color}15 0%, ${bus.color}25 100%)`,
                  padding: '15px 20px',
                  borderRadius: '15px',
                  fontSize: '1.15em',
                  textAlign: 'center',
                  color: '#333',
                  fontWeight: '600',
                  border: `2px solid ${bus.color}40`,
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `linear-gradient(135deg, ${bus.color}30 0%, ${bus.color}40 100%)`;
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = `linear-gradient(135deg, ${bus.color}15 0%, ${bus.color}25 100%)`;
                  e.currentTarget.style.transform = 'scale(1)';
                }}
                >
                  🕐 {time}
                </div>
              ))}
            </div>
            <div style={{
              marginTop: '20px',
              padding: '12px',
              background: '#f5f0ff',
              borderRadius: '12px',
              textAlign: 'center',
              fontSize: '0.9em',
              color: '#666'
            }}>
              <strong>{bus.times.length}</strong> trips daily
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '50px',
        background: 'white',
        borderRadius: '25px',
        padding: '30px 40px',
        maxWidth: '800px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
      }}>
        <h3 style={{
          color: '#9b59b6',
          fontSize: '1.8em',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          📌 Important Notes
        </h3>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          color: '#555',
          fontSize: '1.1em',
          lineHeight: '2'
        }}>
          <li>✅ Please arrive 5 minutes before departure</li>
          <li>🎫 Show your student ID for boarding</li>
          <li>⏰ Timings may vary on holidays and weekends</li>
          <li>📱 Download the campus app for real-time updates</li>
          <li>🚌 Buses run on first-come, first-served basis</li>
        </ul>
      </div>
    </div>
  );
}