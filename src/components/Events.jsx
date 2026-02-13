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
        maxWidth: '1200px'
      }}>
        {events.map((event, index) => (
          <div key={event.id} className="notepad fade-in-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
            <div style={{
              fontSize: '2.5em',
              marginBottom: '15px'
            }}>📌</div>
            <h3 style={{
              color: '#9b59b6',
              fontSize: '1.8em',
              marginBottom: '10px',
              fontWeight: '700'
            }}>
              {event.title}
            </h3>
            <p style={{
              color: '#ff6b6b',
              fontSize: '1.2em',
              fontWeight: '600',
              marginBottom: '10px'
            }}>
              📅 {event.date}
            </p>
            <p style={{
              fontSize: '1.1em',
              color: '#555',
              lineHeight: '1.6'
            }}>
              {event.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}