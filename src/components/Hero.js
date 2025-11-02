import React, { useState, useEffect } from 'react';

// Add openThemeModal prop
const Hero = ({ openThemeModal }) => {
  const [typewriterText, setTypewriterText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const typewriterPhrases = [
    "Full Stack Developer",
    "Machine Learning Engineer", 
    "Space Explorer",
    "Gaming Enthusiast",
    "Tech Innovator",
    "Code Warrior"
  ];

  useEffect(() => {
    const currentPhrase = typewriterPhrases[typewriterIndex];
    
    if (isDeleting) {
      // Deleting text
      if (charIndex > 0) {
        const timer = setTimeout(() => {
          setTypewriterText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 100);
        return () => clearTimeout(timer);
      } else {
        // Finished deleting, move to next phrase
        setIsDeleting(false);
        setTypewriterIndex((typewriterIndex + 1) % typewriterPhrases.length);
      }
    } else {
      // Typing text
      if (charIndex < currentPhrase.length) {
        const timer = setTimeout(() => {
          setTypewriterText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 150);
        return () => clearTimeout(timer);
      } else {
        // Finished typing, pause then start deleting
        const timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timer);
      }
    }
  }, [charIndex, isDeleting, typewriterIndex, typewriterPhrases]);

  // Create starfield
  const stars = Array.from({ length: 10 }, (_, i) => (
    <div 
      key={i}
      className="star"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`
      }}
    ></div>
  ));

  return (
    <section className="hero" id="home">
      <div className="starfield">
        {stars}
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-line">Devesh Samant</span>
            <span className="title-subtitle">Space Explorer & Code Warrior</span>
          </h1>
          <div className="typewriter-container">
            <span className="typewriter-text">{typewriterText}</span>
            <span className="cursor-blink">|</span>
          </div>
          <p className="hero-description">
            B.Tech Computer Science graduate on a mission to explore the digital cosmos. 
            Passionate about creating stellar solutions through code, machine learning, 
            and pushing the boundaries of what's possible in the tech universe.
          </p>
          
          <div className="tech-stack">
            <div className="tech-item" data-tooltip="C++ - My first programming language">
              <i className="devicon-cplusplus-plain"></i>
              <span>C++</span>
            </div>
            <div className="tech-item" data-tooltip="Python - My go-to for AI and automation">
              <i className="devicon-python-plain"></i>
              <span>Python</span>
            </div>
            <div className="tech-item" data-tooltip="React - Building dynamic user interfaces">
              <i className="devicon-react-original"></i>
              <span>React</span>
            </div>
            <div className="tech-item" data-tooltip="Node.js - Powering the backend universe">
              <i className="devicon-nodejs-plain"></i>
              <span>Node.js</span>
            </div>
            <div className="tech-item" data-tooltip="Machine Learning - Teaching computers to think">
              <i className="fas fa-brain"></i>
              <span>ML</span>
            </div>
          </div>

          <div className="hero-actions">
            <button className="btn-primary" onClick={() => window.open('/resume.pdf', '_blank')} data-tooltip="Download my mission report">
              <i className="fas fa-download"></i>
              Download Resume
            </button>
            {/* Add onClick handler to open theme modal */}
            <button className="btn-secondary" id="change-theme-btn" onClick={openThemeModal} data-tooltip="Change website theme">
              <i className="fas fa-palette"></i>
              Change Theme
            </button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="profile-container">
            <div className="profile-card">
              <div className="profile-image">
                <img src="/images/myphoto.jpg" alt="Devesh Samant - Space Explorer" />
              </div>
              <div className="profile-glow"></div>
            </div>
            <div className="social-links-container">
              {/* GitHub */}
              <a href="https://github.com/Deveshsamant" target="_blank" rel="noopener noreferrer" className="social-link social-github" data-tooltip="GitHub - My code repository">
                <i className="fab fa-github"></i>
              </a>
              
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/devesh-samant-b78376258/" target="_blank" rel="noopener noreferrer" className="social-link social-linkedin" data-tooltip="LinkedIn - Professional network">
                <i className="fab fa-linkedin"></i>
              </a>
              
              {/* LeetCode */}
              <a href="https://leetcode.com/u/deveshsamant1744/" target="_blank" rel="noopener noreferrer" className="social-link social-leetcode" data-tooltip="LeetCode - My coding challenges">
                <i className="fas fa-code"></i>
              </a>
              
              {/* Telegram */}
              <a href="https://t.me/+917820020955" target="_blank" rel="noopener noreferrer" className="social-link social-telegram" data-tooltip="Telegram - Chat with me">
                <i className="fab fa-telegram"></i>
              </a>
              
              {/* Email */}
              <a href="mailto:aani64257@gmail.com" className="social-link social-email" data-tooltip="Email - Send me a message">
                <i className="fas fa-envelope"></i>
              </a>
              
              {/* Instagram */}
              <a href="https://www.instagram.com/devesh.samant/" target="_blank" rel="noopener noreferrer" className="social-link social-instagram" data-tooltip="Instagram - Follow my journey">
                <i className="fab fa-instagram"></i>
              </a>
              
              {/* Twitter */}
              <a href="https://x.com/DeveshSama32978?t=3ZEb0YjtYfHMk30saT-AXA&s=09" target="_blank" rel="noopener noreferrer" className="social-link social-twitter" data-tooltip="Twitter - My thoughts and updates">
                <i className="fab fa-twitter"></i>
              </a>
              
              {/* WhatsApp */}
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="social-link social-whatsapp" data-tooltip="WhatsApp - Chat with me">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;