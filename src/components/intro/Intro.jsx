import React, { useState, useEffect } from 'react';
import logoImage from '../../assets/images/logo-rbg-preview.webp';
import './Intro.css';

export default function Intro({ onComplete }) {
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationFinished(true);
      const exitTimer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 1000); // وقت الـ Fade-out
      return () => clearTimeout(exitTimer);
    }, 4500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`intro-container ${animationFinished ? 'fade-out' : ''}`}>
      {/* جسيمات ذهبية متطايرة في الخلفية */}
      <div className="gold-particles">
        {[...Array(25)].map((_, i) => (
          <div key={i} className={`particle p-${i % 5}`} style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 3}s`
          }} />
        ))}
      </div>

      <div className="intro-content">
        {/* إطار دائري ذهبي متوهج يحتوي على اللوجو الأصلي */}
        <div className="gold-ring-wrapper">
          <div className="outer-glow-ring"></div>
          
          <div className="logo-container">
            <img 
              src={logoImage} 
              alt="MK Creations Logo" 
              className="original-logo"
            />
          </div>
        </div>

        {/* النصوص التحتية */}
        <div className="brand-text-container">
          <h2 className="brand-name">MK CREATIONS</h2>
          <div className="gold-divider"></div>
          <p className="brand-tagline">TRADITIONAL ELEGANCE</p>
        </div>
      </div>
    </div>
  );
}