import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ openThemeModal }) => {
  const location = useLocation();

  return (
    <nav className="nav-container">
      <div className="nav-brand" data-tooltip="This is the portfolio brand/logo">Devesh Samant</div>
      <div className="nav-links">
        <Link 
          to="/" 
          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          data-tooltip="Go to the home page"
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
          data-tooltip="Learn more about me"
        >
          About
        </Link>
        <Link 
          to="/projects" 
          className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
          data-tooltip="View my projects"
        >
          Projects
        </Link>
        <Link 
          to="/certifications" 
          className={`nav-link ${location.pathname === '/certifications' ? 'active' : ''}`}
          data-tooltip="See my certifications"
        >
          Certifications
        </Link>
        <Link 
          to="/hobbies" 
          className={`nav-link ${location.pathname === '/hobbies' ? 'active' : ''}`}
          data-tooltip="Discover my hobbies"
        >
          Hobbies
        </Link>
        <Link 
          to="/my-apps" 
          className={`nav-link ${location.pathname === '/my-apps' ? 'active' : ''}`}
          data-tooltip="Download my applications"
        >
          My Apps
        </Link>
        <Link 
          to="/contact" 
          className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
          data-tooltip="Get in touch with me"
        >
          Contact
        </Link>
      </div>
      <div className="theme-toggle">
        <button 
          className="theme-btn" 
          onClick={openThemeModal}
          data-tooltip="Change the website theme"
        >
          <i className="fas fa-palette"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;