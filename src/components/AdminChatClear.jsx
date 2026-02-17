import React, { useState } from 'react';
import { clearAllMessages } from '../firebase/clearChats';

export default function AdminChatClear() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleClearChats = async () => {
    if (window.confirm('Are you sure you want to clear all chat messages? This action cannot be undone.')) {
      setIsLoading(true);
      const result = await clearAllMessages();
      setMessage(result.message);
      setIsLoading(false);
      
      // Clear message after 3 seconds
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <div style={{
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#f0f0f0',
      borderRadius: '10px',
      margin: '20px'
    }}>
      <h3>Admin Panel - Clear Chat Messages</h3>
      <button
        onClick={handleClearChats}
        disabled={isLoading}
        style={{
          padding: '10px 20px',
          backgroundColor: '#e74c3c',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: isLoading ? 'not-allowed' : 'pointer',
          fontSize: '1em'
        }}
      >
        {isLoading ? 'Clearing...' : 'Clear All Chats'}
      </button>
      {message && <p style={{ marginTop: '10px', color: message.includes('success') ? 'green' : 'red' }}>{message}</p>}
    </div>
  );
}
