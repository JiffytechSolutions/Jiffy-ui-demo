import React, { useState, useEffect } from 'react';
import './InteractiveHero.css';

const InteractiveHero: React.FC = () => {

 const mousePosition = { x: 0, y: 0 };
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className={`interactive-hero  ${isVisible ? 'visible' : ''}`}
    >
      {/* Animated Background */}
      <div className="hero-background">
        <div 
          className="gradient-orb orb-1"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }}
        />
        <div 
          className="gradient-orb orb-2"
          style={{
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`
          }}
        />
        <div 
          className="gradient-orb orb-3"
          style={{
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * -10}px)`
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="grid-pattern" />
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-icon">✨</span>
          <span>Introducing Jiffy UI 2.0</span>
        </div>

        <h1 className="hero-title">
          Create Inclusive Web Apps in React with Jiffy-ui
        </h1>

        <p className="hero-description">
          The most comprehensive React component library with 50+ production-ready components.
          Built for developers who care about design, performance, and user experience.
        </p>

        {/* Action Buttons */}
        <div className="hero-actions">
          <button className="btn-primary">
            <span>Get Started</span>
            {/* <span className="btn-icon">→</span> */}
          </button>
          <button className="btn-secondary">
            
            <span>Explore components</span>
            <span className="btn-icon">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveHero;
