import React, { useState } from 'react';

export default function AttendancePredictor() {
  const [currentAttendance, setCurrentAttendance] = useState('');
  const [totalHours, setTotalHours] = useState('');
  const [riskResult, setRiskResult] = useState(null);

  const calculateAttendanceRisk = () => {
    const current = parseFloat(currentAttendance);
    const total = parseFloat(totalHours);
    
    if (isNaN(current) || isNaN(total) || total <= 0) {
      alert('Please enter valid numbers');
      return;
    }

    if (current < 0 || current > 100) {
      alert('Attendance percentage must be between 0 and 100');
      return;
    }
    
    if (current >= 75) {
      setRiskResult({
        status: 'safe',
        message: 'You are safe! Keep it up! 🎉',
        percentage: current,
        details: `You have ${(current * total / 100).toFixed(1)} hours out of ${total} total hours.`
      });
    } else {
      const currentHours = (current * total) / 100;
      const requiredHours = 0.75 * total;
      const hoursNeeded = Math.ceil(requiredHours - currentHours);
      const riskLevel = current < 65 ? 'high' : 'medium';
      
      setRiskResult({
        status: riskLevel,
        message: `Risk of shortage! You need ${hoursNeeded} more hours to reach 75%`,
        percentage: current,
        details: `Current: ${currentHours.toFixed(1)} hours. Required: ${requiredHours.toFixed(1)} hours.`
      });
    }
  };

  return (
    <div className="section" style={{
      background: 'linear-gradient(135deg, #ffd93d 0%, #e0b3ff 100%)'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '40px',
        padding: '60px',
        boxShadow: '0 20px 60px rgba(155, 89, 182, 0.4)',
        maxWidth: '600px',
        width: '90%'
      }}>
        <h2 style={{
          fontFamily: 'Righteous, cursive',
          fontSize: '2.8em',
          color: '#9b59b6',
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          📊 Attendance Risk Predictor
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          <div>
            <label style={{ 
              fontSize: '1.2em', 
              color: '#555', 
              display: 'block', 
              marginBottom: '10px',
              fontWeight: '600'
            }}>
              Current Attendance (%)
            </label>
            <input
              type="number"
              value={currentAttendance}
              onChange={(e) => setCurrentAttendance(e.target.value)}
              placeholder="e.g., 70"
              className="input-bubble"
              style={{ width: '100%' }}
              min="0"
              max="100"
              step="0.1"
            />
          </div>
          
          <div>
            <label style={{ 
              fontSize: '1.2em', 
              color: '#555', 
              display: 'block', 
              marginBottom: '10px',
              fontWeight: '600'
            }}>
              Total Hours
            </label>
            <input
              type="number"
              value={totalHours}
              onChange={(e) => setTotalHours(e.target.value)}
              placeholder="e.g., 100"
              className="input-bubble"
              style={{ width: '100%' }}
              min="1"
            />
          </div>
          
          <button onClick={calculateAttendanceRisk} className="feature-button" style={{ margin: '20px 0 0 0' }}>
            Calculate Risk 📈
          </button>
          
          {riskResult && (
            <div className="fade-in-up" style={{
              background: riskResult.status === 'safe' ? 'linear-gradient(135deg, #4CAF50 0%, #8BC34A 100%)' : 
                         riskResult.status === 'high' ? 'linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%)' :
                         'linear-gradient(135deg, #ffb347 0%, #ffd93d 100%)',
              color: 'white',
              padding: '30px',
              borderRadius: '25px',
              textAlign: 'center',
              marginTop: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
            }}>
              <div style={{ fontSize: '3em', marginBottom: '15px' }}>
                {riskResult.status === 'safe' ? '✅' : riskResult.status === 'high' ? '🚨' : '⚠️'}
              </div>
              <h3 style={{ fontSize: '2.2em', marginBottom: '15px', fontWeight: '700' }}>
                {riskResult.percentage}%
              </h3>
              <p style={{ fontSize: '1.3em', fontWeight: '600', marginBottom: '10px' }}>
                {riskResult.message}
              </p>
              <p style={{ fontSize: '1em', opacity: 0.9 }}>
                {riskResult.details}
              </p>
            </div>
          )}
        </div>

        <div style={{
          marginTop: '30px',
          padding: '20px',
          background: '#f5f0ff',
          borderRadius: '15px',
          border: '2px solid #e0b3ff'
        }}>
          <h4 style={{ color: '#9b59b6', marginBottom: '10px', fontSize: '1.2em' }}>
            💡 How it works:
          </h4>
          <ul style={{ color: '#555', lineHeight: '1.8', paddingLeft: '20px' }}>
            <li>Minimum required attendance: <strong>75%</strong></li>
            <li>Green (Safe): 75% or above</li>
            <li>Orange (Medium): 65% - 74%</li>
            <li>Red (High Risk): Below 65%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}