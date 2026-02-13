import React, { useState } from 'react';

export default function Events() {
  const [events, setEvents] = useState([
    { id: '1', title: "Tech Fest 2026", date: "March 15", description: "Annual technology festival with coding competitions and tech talks" },
    { id: '2', title: "Cultural Night", date: "March 20", description: "Celebrate diversity together with music, dance, and food" },
    { id: '3', title: "Career Fair", date: "March 25", description: "Meet top recruiters from leading tech companies" },
    { id: '4', title: "Sports Day", date: "April 5", description: "Inter-department sports competition and games" },
    { id: '5', title: "Alumni Meet", date: "April 12", description: "Network with successful alumni and gain career insights" },
    { id: '6', title: "Hackathon 2026", date: "April 20", description: "24-hour coding challenge with exciting prizes" }
  ]);
  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventDate, setNewEventDate] = useState('');
  const [newEventDescription, setNewEventDescription] = useState('');
  const [hoveredId, setHoveredId] = useState(null);

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (!newEventTitle || !newEventDate || !newEventDescription) {
      alert('Please fill in all fields');
      return;
    }

    const newEvent = {
      id: Date.now().toString(),
      title: newEventTitle,
      date: newEventDate,
      description: newEventDescription,
      timestamp: Date.now()
    };

    setEvents([...events, newEvent]);
    alert('Event added successfully!');
    setNewEventTitle('');
    setNewEventDate('');
    setNewEventDescription('');
  };

  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter(event => event.id !== eventId));
  };

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
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
        width: '90%',
        maxWidth: '1400px',
        alignItems: 'start'
      }}>
        {/* Add Event Form */}
        <div style={{
          background: 'white',
          borderRadius: '30px',
          padding: '40px',
          boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
          height: 'fit-content',
          position: 'sticky',
          top: '20px'
        }}>
          <h3 style={{ color: '#9b59b6', fontSize: '2em', marginBottom: '25px' }}>
            ➕ Add New Event
          </h3>
          <form onSubmit={handleAddEvent} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <input
              type="text"
              value={newEventTitle}
              onChange={(e) => setNewEventTitle(e.target.value)}
              placeholder="Event title"
              className="input-bubble"
              required
            />
            <input
              type="text"
              value={newEventDate}
              onChange={(e) => setNewEventDate(e.target.value)}
              placeholder="📅 Date (e.g., March 15)"
              className="input-bubble"
              required
            />
            <textarea
              value={newEventDescription}
              onChange={(e) => setNewEventDescription(e.target.value)}
              placeholder="Event description..."
              className="input-bubble"
              rows="4"
              required
              style={{ resize: 'vertical' }}
            />
            <button type="submit" className="feature-button" style={{ margin: 0 }}>
              Add Event
            </button>
          </form>
        </div>

        {/* Events List - Right Side */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '25px',
          perspective: '1000px',
          maxHeight: '800px',
          overflowY: 'auto',
          paddingRight: '10px'
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
            minHeight: '220px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            width: '100%'
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
              fontSize: '2.5em',
              marginBottom: '15px',
              filter: hoveredId === event.id ? 'scale(1.15)' : 'scale(1)',
              transition: 'filter 0.3s ease'
            }}>📌</div>
            <h3 style={{
              color: '#9b59b6',
              fontSize: '1.5em',
              marginBottom: '8px',
              fontWeight: '700',
              zIndex: '1'
            }}>
              {event.title}
            </h3>
            <p style={{
              color: '#ff6b6b',
              fontSize: '1em',
              fontWeight: '600',
              marginBottom: '10px',
              zIndex: '1'
            }}>
              📅 {event.date}
            </p>
            <p style={{
              fontSize: '0.95em',
              color: '#555',
              lineHeight: '1.4',
              zIndex: '1',
              flex: '1'
            }}>
              {event.description}
            </p>
            <button 
              onClick={() => handleDeleteEvent(event.id)}
              style={{
                marginTop: '12px',
                padding: '8px 15px',
                background: '#ff6b6b',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.9em',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                zIndex: '1'
              }}
              onMouseEnter={(e) => e.target.style.background = '#ff5252'}
              onMouseLeave={(e) => e.target.style.background = '#ff6b6b'}
            >
              🗑️ Delete
            </button>
          </div>
        ))}
        {events.length === 0 && (
          <p style={{ textAlign: 'center', color: '#999', fontSize: '1.1em', padding: '40px 20px' }}>
            No events yet 📝
          </p>
        )}
        </div>
      </div>
    </div>
  );
}