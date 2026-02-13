import React, { useState, useEffect } from 'react';
import { ref, push, onValue } from 'firebase/database';
import { database } from '../firebase/config';

export default function ChatRoom({ user }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const messagesRef = ref(database, 'messages');
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messageList = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value
        }));
        setMessages(messageList);
      }
    });
  }, []);

  const sendMessage = () => {
    if (newMessage.trim() && user) {
      const messagesRef = ref(database, 'messages');
      push(messagesRef, {
        text: newMessage,
        sender: user.email,
        timestamp: Date.now()
      });
      setNewMessage('');
    }
  };

  return (
    <div className="section" style={{
      background: 'linear-gradient(135deg, #e0b3ff 0%, #c9a3e8 100%)'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '40px',
        padding: '40px',
        width: '90%',
        maxWidth: '800px',
        boxShadow: '0 20px 60px rgba(155, 89, 182, 0.4)',
        maxHeight: '80vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <h2 style={{
          fontFamily: 'Righteous, cursive',
          fontSize: '2.5em',
          color: '#9b59b6',
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          💬 Buzzing Chat Room
        </h2>
        
        <div style={{
          flex: 1,
          overflowY: 'auto',
          marginBottom: '20px',
          padding: '20px'
        }}>
          {messages.map((msg) => (
            <div key={msg.id} className="chat-bubble" style={{
              alignSelf: msg.sender === user?.email ? 'flex-end' : 'flex-start',
              marginLeft: msg.sender === user?.email ? 'auto' : '0'
            }}>
              <div style={{ fontSize: '0.8em', opacity: 0.8, marginBottom: '5px' }}>
                {msg.sender}
              </div>
              <div>{msg.text}</div>
            </div>
          ))}
        </div>
        
        <div style={{ display: 'flex', gap: '15px' }}>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type your message..."
            className="input-bubble"
            style={{ flex: 1 }}
          />
          <button onClick={sendMessage} className="feature-button" style={{ margin: 0 }}>
            Send 🐝
          </button>
        </div>
      </div>
    </div>
  );
}