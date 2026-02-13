import React, { useState, useEffect } from 'react';
import { ref, push, onValue, remove } from 'firebase/database';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { database, storage } from '../firebase/config';

export default function LostAndFound({ user }) {
  const [lostItems, setLostItems] = useState([]);
  const [itemDescription, setItemDescription] = useState('');
  const [itemLocation, setItemLocation] = useState('');
  const [itemImage, setItemImage] = useState(null);
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');

  useEffect(() => {
    const lostItemsRef = ref(database, 'lostItems');
    onValue(lostItemsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const itemList = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value
        }));
        setLostItems(itemList);
      } else {
        setLostItems([]);
      }
    });
  }, []);

  const handleLostItemSubmit = async (e) => {
    e.preventDefault();
    let imageUrl = null;
    
    if (itemImage) {
      const imageRef = storageRef(storage, `lost-items/${Date.now()}_${itemImage.name}`);
      await uploadBytes(imageRef, itemImage);
      imageUrl = await getDownloadURL(imageRef);
    }
    
    const lostItemsRef = ref(database, 'lostItems');
    push(lostItemsRef, {
      description: itemDescription,
      location: itemLocation,
      imageUrl: imageUrl,
      reportedBy: user.email,
      contactName: contactName,
      contactPhone: contactPhone,
      contactEmail: contactEmail,
      timestamp: Date.now()
    });
    
    setItemDescription('');
    setItemLocation('');
    setItemImage(null);
    setContactName('');
    setContactPhone('');
    setContactEmail('');
    // Reset file input
    document.getElementById('imageInput').value = '';
  };

  const markAsFound = (itemId) => {
    const itemRef = ref(database, `lostItems/${itemId}`);
    remove(itemRef);
  };

  return (
    <div className="section" style={{
      background: 'linear-gradient(135deg, #ffd93d 0%, #ffb347 100%)'
    }}>
      <h2 style={{
        fontFamily: 'Righteous, cursive',
        fontSize: '3em',
        color: '#9b59b6',
        marginBottom: '40px'
      }}>
        🔍 Lost & Found Hive
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
        width: '90%',
        maxWidth: '1200px'
      }}>
        {/* Report Lost Item */}
        <div style={{
          background: 'white',
          borderRadius: '30px',
          padding: '40px',
          boxShadow: '0 15px 40px rgba(0,0,0,0.2)'
        }}>
          <h3 style={{ color: '#9b59b6', fontSize: '2em', marginBottom: '25px' }}>
            Report Lost Item
          </h3>
          <form onSubmit={handleLostItemSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <textarea
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
              placeholder="Describe the item..."
              className="input-bubble"
              rows="4"
              required
              style={{ resize: 'vertical' }}
            />
            <input
              type="text"
              value={itemLocation}
              onChange={(e) => setItemLocation(e.target.value)}
              placeholder="📍 Last seen location"
              className="input-bubble"
              required
            />
            <input
              type="text"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              placeholder="👤 Your name"
              className="input-bubble"
              required
            />
            <input
              type="tel"
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
              placeholder="📱 Phone number"
              className="input-bubble"
              required
            />
            <input
              type="email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              placeholder="📧 Email address"
              className="input-bubble"
              required
            />
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              onChange={(e) => setItemImage(e.target.files[0])}
              style={{ 
                padding: '15px',
                border: '2px dashed #e0b3ff',
                borderRadius: '15px',
                cursor: 'pointer'
              }}
            />
            <button type="submit" className="feature-button" style={{ margin: 0 }}>
              Report Lost Item
            </button>
          </form>
        </div>
        
        {/* Lost Items List */}
        <div style={{
          background: 'white',
          borderRadius: '30px',
          padding: '40px',
          boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
          maxHeight: '600px',
          overflowY: 'auto'
        }}>
          <h3 style={{ color: '#9b59b6', fontSize: '2em', marginBottom: '25px' }}>
            Lost Items
          </h3>
          {lostItems.map(item => (
            <div key={item.id} style={{
              background: '#f5f0ff',
              borderRadius: '20px',
              padding: '20px',
              marginBottom: '20px',
              border: '3px solid #e0b3ff'
            }}>
              {item.imageUrl && (
                <img src={item.imageUrl} alt="Lost item" style={{
                  width: '100%',
                  borderRadius: '15px',
                  marginBottom: '15px',
                  maxHeight: '200px',
                  objectFit: 'cover'
                }} />
              )}
              <p style={{ fontSize: '1.1em', marginBottom: '10px' }}>
                <strong>Description:</strong> {item.description}
              </p>
              <p style={{ marginBottom: '10px' }}>
                <strong>📍 Location:</strong> {item.location}
              </p>
              <p style={{ fontSize: '0.9em', color: '#666', marginBottom: '10px' }}>
                <strong>Reported by:</strong> {item.reportedBy}
              </p>
              <p style={{ fontSize: '0.9em', color: '#666', marginBottom: '10px' }}>
                <strong>👤 Contact:</strong> {item.contactName}
              </p>
              <p style={{ fontSize: '0.9em', color: '#666', marginBottom: '10px' }}>
                <strong>📱 Phone:</strong> {item.contactPhone}
              </p>
              <p style={{ fontSize: '0.9em', color: '#666', marginBottom: '15px' }}>
                <strong>📧 Email:</strong> {item.contactEmail}
              </p>
              <button onClick={() => markAsFound(item.id)} className="found-button">
                ✓ Found!
              </button>
            </div>
          ))}
          {lostItems.length === 0 && (
            <p style={{ textAlign: 'center', color: '#999', fontSize: '1.2em', padding: '40px 0' }}>
              No lost items reported yet 🎉
            </p>
          )}
        </div>
      </div>
    </div>
  );
}