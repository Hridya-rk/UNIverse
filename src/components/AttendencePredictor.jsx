import React, { useState } from 'react';

export default function AttendancePredictor() {
  const [hoursAttended, setHoursAttended] = useState('');
  const [totalHours, setTotalHours] = useState('');
  const [riskResult, setRiskResult] = useState(null);

  const calculateAttendanceRisk = () => {
    const attended = parseFloat(hoursAttended);
    const total = parseFloat(totalHours);
    
    if (isNaN(attended) || isNaN(total) || total <= 0) {
      alert('Please enter valid numbers');
      return;
    }

    if (attended < 0 || attended > total) {
      alert('Hours attended cannot be negative or exceed total hours');
      return;
    }
    
    // Calculate current attendance percentage using equation: (attended / total) * 100
    const currentPercentage = (attended / total) * 100;
    
    // Calculate required hours: 75% of total hours
    const requiredHours = 0.75 * total;
    
    // Calculate shortage: requiredHours - attended hours
    const shortage = requiredHours - attended;
    
    if (shortage <= 0) {
      setRiskResult({
        status: 'safe',
        message: 'You are safe! Keep it up! 🎉',
        percentage: currentPercentage.toFixed(2),
        details: `You have attended ${attended.toFixed(1)} out of ${total} hours. No shortage!`
      });
    } else {
      const riskLevel = currentPercentage < 65 ? 'high' : 'medium';
      
      setRiskResult({
        status: riskLevel,
        message: `Shortage Alert! You are short by ${shortage.toFixed(1)} hours`,
        percentage: currentPercentage.toFixed(2),
        details: `Current attendance: ${attended} hours (${currentPercentage.toFixed(2)}%). Required: ${requiredHours.toFixed(1)} hours.`
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
              Hours Attended
            </label>
            <input
              type="number"
              value={hoursAttended}
              onChange={(e) => setHoursAttended(e.target.value)}
              placeholder="e.g., 70"
              className="input-bubble"
              style={{ width: '100%' }}
              min="0"
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
              Total Hours in Course
            </label>
            <input
              type="number"
              value={totalHours}
              onChange={(e) => setTotalHours(e.target.value)}
              placeholder="e.g., 100"
              className="input-bubble"
              style={{ width: '100%' }}
              min="1"
              step="0.1"
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
            <li>Equation: Current % = (Hours Attended / Total Hours) × 100</li>
            <li>Required Hours: 75% of Total Hours</li>
            <li>Shortage Calculation: Required Hours - Hours Attended</li>
            <li>If surplus ≥ 0: <strong>Safe</strong> ✅</li>
            <li>If shortage exists: <strong>Risk Alert</strong> ⚠️</li>
          </ul>
        </div>
      </div>
    </div>
  );
}