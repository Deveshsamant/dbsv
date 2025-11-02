import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; 2025 Devesh Samant. Exploring the digital cosmos, one line of code at a time.</p>
          </div>
          <div className="social-links">
            <a href="https://github.com/Deveshsamant" target="_blank" rel="noopener noreferrer" data-tooltip="GitHub - My code repository">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/devesh-samant-b78376258/" target="_blank" rel="noopener noreferrer" data-tooltip="LinkedIn - Professional network">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://leetcode.com/u/deveshsamant1744/" target="_blank" rel="noopener noreferrer" data-tooltip="LeetCode - My coding challenges">
              <i className="fas fa-code"></i>
            </a>
            <a href="https://t.me/+917820020955" target="_blank" rel="noopener noreferrer" data-tooltip="Telegram - Chat with me">
              <i className="fab fa-telegram"></i>
            </a>
            <a href="mailto:aani64257@gmail.com" data-tooltip="Email - Send me a message">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://www.instagram.com/devesh.samant/" target="_blank" rel="noopener noreferrer" data-tooltip="Instagram - Follow my journey">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;