import React, { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import './InteractiveHero.css';

const InteractiveHero: React.FC = () => {
  // const { isDarkMode } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const features = [
    { icon: '⚡', text: 'Lightning Fast' },
    { icon: '🎨', text: 'Beautiful Design' },
    { icon: '📱', text: 'Responsive' },
    { icon: '🔧', text: 'Customizable' },
    { icon: '🚀', text: 'Production Ready' },
    { icon: '💡', text: 'Developer Friendly' }
  ];

  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      // setCurrentFeature(prev => (prev + 1) % features.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [features.length]);

  // const handleMouseMove = (e: React.MouseEvent) => {
  //   const rect = e.currentTarget.getBoundingClientRect();
  //   setMousePosition({
  //     x: (e.clientX - rect.left) / rect.width,
  //     y: (e.clientY - rect.top) / rect.height
  //   });
  // };

  return (
    <section 
      className={`interactive-hero  ${isVisible ? 'visible' : ''}`}
      // onMouseMove={handleMouseMove}
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
          
      {/* Floating Elements */}
      {/* <div className="floating-elements">
        <div className="floating-card card-1">
          <div className="card-content">
            <div className="card-icon">🎯</div>
            <div className="card-text">TypeScript</div>
          </div>
        </div>
        <div className="floating-card card-2">
          <div className="card-content">
            <div className="card-icon">⚡</div>
            <div className="card-text">Performance</div>
          </div>
        </div>
        <div className="floating-card card-3">
          <div className="card-content">
            <div className="card-icon">🎨</div>
            <div className="card-text">Design</div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default InteractiveHero;
