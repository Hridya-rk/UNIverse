import React, { useState } from 'react';

export default function Events() {
  const [events] = useState([
    { id: 1, title: "Tech Fest 2026", date: "March 15", description: "Annual technology festival with coding competitions and tech talks" },
    { id: 2, title: "Cultural Night", date: "March 20", description: "Celebrate diversity together with music, dance, and food" },
    { id: 3, title: "Career Fair", date: "March 25", description: "Meet top recruiters from leading tech companies" },
    { id: 4, title: "Sports Day", date: "April 5", description: "Inter-department sports competition and games" },
    { id: 5, title: "Alumni Meet", date: "April 12", description: "Network with successful alumni and gain career insights" },
    { id: 6, title: "Hackathon 2026", date: "April 20", description: "24-hour coding challenge with exciting prizes" }
  ]);

  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="section" style={{
      background: 'linear-gradient(135deg, #e0b3ff 0%, #9b59b6 100%)'
    }}>
      <h2 style={{
        fontFamily: 'Righteous, cursive',
        fontSize: '3em',
        color: 'white',
        marginBottom: '40px',
        textShadow: '3px 3px 6px rgba(0,0,0,0.3)'
      }}>
        📅 Important Events
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        width: '90%',
        maxWidth: '1200px',
        perspective: '1000px'
      }}>
        {events.map((event, index) => (
          <div key={event.id} style={{
            animationDelay: `${index * 0.1}s`,
            transform: hoveredId === event.id 
              ? 'rotateY(-5deg) rotateX(10deg) translateZ(50px) translateY(-15px)' 
              : 'rotateY(0) rotateX(0) translateZ(0) translateY(0)',
            transformStyle: 'preserve-3d',
            transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            cursor: 'pointer',
            background: 'linear-gradient(135deg, #fff9e6 0%, #fffbf0 100%)',
            borderRadius: '8px',
            padding: '30px',
            boxShadow: hoveredId === event.id
              ? '0 30px 60px rgba(155, 89, 182, 0.5), 15px 20px 40px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.7)'
              : '0 8px 20px rgba(0,0,0,0.15), 5px 5px 15px rgba(155, 89, 182, 0.2), inset 0 1px 0 rgba(255,255,255,0.5)',
            border: '1px solid rgba(155, 89, 182, 0.2)',
            position: 'relative',
            background: hoveredId === event.id
              ? 'linear-gradient(135deg, #fffbf0 0%, #fff5e6 100%)'
              : 'linear-gradient(135deg, #fff9e6 0%, #fffbf0 100%)',
            minHeight: '280px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start'
          }}
          onMouseEnter={() => setHoveredId(event.id)}
          onMouseLeave={() => setHoveredId(null)}
          className="fade-in-up">
            {/* Sticky note fold effect */}
            <div style={{
              position: 'absolute',
              top: '0',
              right: '0',
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #e0b3ff 0%, #d4a5e6 100%)',
              borderRadius: '0 8px 0 40px',
              opacity: hoveredId === event.id ? 1 : 0.7,
              transition: 'all 0.3s ease',
              boxShadow: '-3px 3px 8px rgba(0,0,0,0.15)'
            }} />
            
            <div style={{
              fontSize: '3em',
              marginBottom: '15px',
              filter: hoveredId === event.id ? 'scale(1.15)' : 'scale(1)',
              transition: 'filter 0.3s ease'
            }}>📌</div>
            <h3 style={{
              color: '#9b59b6',
              fontSize: '1.8em',
              marginBottom: '10px',
              fontWeight: '700',
              zIndex: '1'
            }}>
              {event.title}
            </h3>
            <p style={{
              color: '#ff6b6b',
              fontSize: '1.2em',
              fontWeight: '600',
              marginBottom: '10px',
              zIndex: '1'
            }}>
              📅 {event.date}
            </p>
            <p style={{
              fontSize: '1.1em',
              color: '#555',
              lineHeight: '1.6',
              zIndex: '1',
              flex: '1'
            }}>
              {event.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}