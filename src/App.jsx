import React, { useState, useRef } from 'react';
import './styles/animations.css';
import IntroSection from './components/IntroSection';
import LoginSection from './components/LoginSection';
import HomeSection from './components/HomeSection';
import ChatRoom from './components/ChatRoom';
import LostAndFound from './components/LostAndFound';
import Events from './components/Events';
import BusTimings from './components/BusTimings';
import ThankYou from './components/ThankYou';

export default function App() {
  const [currentSection, setCurrentSection] = useState('intro');
  const [user, setUser] = useState(null);
  const sectionsRef = useRef({});

  const scrollToSection = (section) => {
    sectionsRef.current[section]?.scrollIntoView({ behavior: 'smooth' });
    setCurrentSection(section);
  };

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
    scrollToSection('home');
  };

  return (
    <div style={{
      fontFamily: "'Fredoka', 'Comic Neue', cursive",
      background: 'linear-gradient(135deg, #f5f0ff 0%, #fff9e6 100%)',
      minHeight: '100vh',
      overflow: 'hidden'
    }}>
      {/* Intro Section */}
      <div ref={el => sectionsRef.current['intro'] = el}>
        <IntroSection onNext={() => scrollToSection('login')} />
      </div>

      {/* Login Section */}
      <div ref={el => sectionsRef.current['login'] = el}>
        <LoginSection onLogin={handleLogin} />
      </div>

      {/* Home Section */}
      <div ref={el => sectionsRef.current['home'] = el}>
        <HomeSection onNavigate={scrollToSection} />
      </div>

      {/* Feature Sections - Only shown after login */}
      {user && (
        <>
          <div ref={el => sectionsRef.current['chat'] = el}>
            <ChatRoom user={user} />
          </div>

          <div ref={el => sectionsRef.current['lostfound'] = el}>
            <LostAndFound user={user} />
          </div>

          <div ref={el => sectionsRef.current['events'] = el}>
            <Events />
          </div>

          <div ref={el => sectionsRef.current['bus'] = el}>
            <BusTimings />
          </div>

          <div ref={el => sectionsRef.current['thankyou'] = el}>
            <ThankYou />
          </div>
        </>
      )}
    </div>
  );
}