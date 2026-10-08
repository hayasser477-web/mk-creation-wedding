import React, { useState, useEffect } from "react";
import logoImage from "../../assets/images/logo-rbg-preview.webp";
import "./Intro.css";

export default function Intro({ onComplete }) {
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    // منع الـ scroll أثناء ظهور الـ Intro
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setAnimationFinished(true);

      const exitTimer = setTimeout(() => {
        // إعادة الـ scroll بعد انتهاء الـ Intro
        document.body.style.overflow = "";

        if (onComplete) onComplete();
      }, 1000);

      return () => clearTimeout(exitTimer);
    }, 4500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <div
      className={`intro-container ${
        animationFinished ? "fade-out" : ""
      }`}
    >
      <div className="gold-particles">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`particle p-${i % 5}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="intro-content">
        <div className="gold-ring-wrapper">
          <div className="outer-glow-ring"></div>

          <div className="logo-container">
            <img
              src={logoImage}
              alt="MK Creations Logo"
              className="original-logo"
              decoding="async"
            />
          </div>
        </div>

        <div className="brand-text-container">
          <h2 className="brand-name">MK CREATIONS</h2>

          <div className="gold-divider"></div>

          <p className="brand-tagline">TRADITIONAL ELEGANCE</p>
        </div>
      </div>
    </div>
  );
}