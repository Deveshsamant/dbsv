import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// Import the original website styles first to ensure theme definitions are available
import './styles.css';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import GamingCSShowcase from './components/GamingCSShowcase';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import MyApps from './components/MyApps';
import useCustomCursor from './hooks/useCustomCursor';
import useRobotAssistant from './hooks/useRobotAssistant';
import useThemeEffects from './hooks/useThemeEffects';

// Create a component to handle scroll to top on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Theme definitions - including all themes from the original website
const themes = [
  { 
      id: 'original', 
      name: 'Cosmic Dark',
      description: 'The original dark theme with cosmic blues and purples',
      preview: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)',
      category: 'Originals'
  },
  { 
      id: 'original-light', 
      name: 'Stellar Light',
      description: 'A clean light theme with stellar accents',
      preview: 'linear-gradient(135deg, #f0f4f8 0%, #e2e8f0 100%)',
      category: 'Originals'
  },
  { 
      id: 'gaming-coding-space', 
      name: 'Neon Nexus',
      description: 'Vibrant neon blues and purples for immersive coding',
      preview: 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)',
      category: 'Gaming & Tech'
  },
  { 
      id: 'retro-arcade-tech-neon', 
      name: 'Retro Arcade',
      description: 'Nostalgic magenta and cyan for classic gaming vibes',
      preview: 'linear-gradient(135deg, #ff00ff 0%, #00ffff 100%)',
      category: 'Gaming & Tech'
  },
  { 
      id: 'space-sci-fi-robotics', 
      name: 'Galactic Explorer',
      description: 'Deep space blues for futuristic tech adventures',
      preview: 'linear-gradient(135deg, #0066ff 0%, #00ccff 100%)',
      category: 'Gaming & Tech'
  },
  { 
      id: 'cyberpunk-coding-ai', 
      name: 'Neon Dystopia',
      description: 'Bold pinks and purples for cyberpunk aesthetics',
      preview: 'linear-gradient(135deg, #ff0066 0%, #cc00ff 100%)',
      category: 'Gaming & Tech'
  },
  { 
      id: 'fantasy-rpg-coding-quest', 
      name: 'Dragon\'s Lair',
      description: 'Warm oranges and browns for fantasy-inspired coding',
      preview: 'linear-gradient(135deg, #ff9800 0%, #ff5722 100%)',
      category: 'Gaming & Tech'
  },
  { 
      id: 'esports-coding-tech-arena', 
      name: 'Champion\'s Arena',
      description: 'Vibrant pinks and purples for competitive coding',
      preview: 'linear-gradient(135deg, #e91e63 0%, #9c27b0 100%)',
      category: 'Gaming & Tech'
  },
  { 
      id: 'astronomy-minimal-techie', 
      name: 'Stellar Minimal',
      description: 'Clean blues and purples for focused astronomy work',
      preview: 'linear-gradient(135deg, #64b5f6 0%, #bb86fc 100%)',
      category: 'Gaming & Tech'
  },
  { 
      id: 'puzzle-coding-brainstorm', 
      name: 'Mind Bender',
      description: 'Cool blues and purples for intense problem-solving',
      preview: 'linear-gradient(135deg, #4cc9f0 0%, #4361ee 100%)',
      category: 'Gaming & Tech'
  },
  { 
      id: 'winter-wonderland', 
      name: 'Frozen Tundra',
      description: 'Cool blues and whites for a winter atmosphere',
      preview: 'linear-gradient(135deg, #e6f7ff 0%, #b3e0ff 100%)',
      category: 'Seasonal'
  },
  { 
      id: 'autumn-season', 
      name: 'Golden Leaves',
      description: 'Warm oranges and browns for autumn inspiration',
      preview: 'linear-gradient(135deg, #f9f3e6 0%, #f4e0b5 100%)',
      category: 'Seasonal'
  },
  { 
      id: 'midnight-ocean', 
      name: 'Abyssal Depths',
      description: 'Deep blues for mysterious ocean exploration',
      preview: 'linear-gradient(135deg, #001111 0%, #002222 100%)',
      category: 'Nature'
  },
  { 
      id: 'sunset-desert', 
      name: 'Desert Dusk',
      description: 'Warm oranges and reds for desert landscapes',
      preview: 'linear-gradient(135deg, #2b0e0e 0%, #3b2b27 100%)',
      category: 'Nature'
  },
  { 
      id: 'forest-coding', 
      name: 'Emerald Grove',
      description: 'Rich greens for a forest coding environment',
      preview: 'linear-gradient(135deg, #0b1a0b 0%, #1b2a1b 100%)',
      category: 'Nature'
  },
  { 
      id: 'galaxy-nebula', 
      name: 'Cosmic Cloud',
      description: 'Deep purples for nebula-like beauty',
      preview: 'linear-gradient(135deg, #1a0033 0%, #2a0043 100%)',
      category: 'Space'
  },
  { 
      id: 'arctic-frost', 
      name: 'Glacial Peak',
      description: 'Cool blues and cyans for arctic landscapes',
      preview: 'linear-gradient(135deg, #f0ffff 0%, #e0f0f0 100%)',
      category: 'Nature'
  },
  { 
      id: 'volcanic-eruption', 
      name: 'Molten Core',
      description: 'Fiery reds and oranges for volcanic energy',
      preview: 'linear-gradient(135deg, #2b0e0e 0%, #3b1e1e 100%)',
      category: 'Nature'
  },
  { 
      id: 'deep-sea-exploration', 
      name: 'Oceanic Abyss',
      description: 'Deep blues for underwater exploration',
      preview: 'linear-gradient(135deg, #000033 0%, #000044 100%)',
      category: 'Nature'
  },
  { 
      id: 'cosmic-storm', 
      name: 'Solar Flare',
      description: 'Electric purples for cosmic storms',
      preview: 'linear-gradient(135deg, #1a0033 0%, #2a0043 100%)',
      category: 'Space'
  },
  { 
      id: 'golden-harvest', 
      name: 'Harvest Moon',
      description: 'Warm golds and yellows for harvest season',
      preview: 'linear-gradient(135deg, #2b2b0e 0%, #3b3b1e 100%)',
      category: 'Seasonal'
  },
  { 
      id: 'neon-cyber', 
      name: 'Digital Pulse',
      description: 'Bright neons for cyber aesthetics',
      preview: 'linear-gradient(135deg, #0e2b0e 0%, #1e3b1e 100%)',
      category: 'Gaming & Tech'
  },
  { 
      id: 'midnight-galaxy', 
      name: 'Void Wanderer',
      description: 'Deep purples for midnight galaxy gazing',
      preview: 'linear-gradient(135deg, #0a001a 0%, #1a002a 100%)',
      category: 'Space'
  },
  { 
      id: 'tropical-paradise', 
      name: 'Paradise Isle',
      description: 'Turquoise and greens for tropical relaxation',
      preview: 'linear-gradient(135deg, #0e2b2b 0%, #1e3b3b 100%)',
      category: 'Nature'
  },
  { 
      id: 'autumn-forest', 
      name: 'Crimson Woods',
      description: 'Rich reds and browns for autumn forest walks',
      preview: 'linear-gradient(135deg, #2b0e0e 0%, #3b1e1e 100%)',
      category: 'Nature'
  },
  { 
      id: 'arctic-lights', 
      name: 'Northern Glow',
      description: 'Cool cyans for aurora-like beauty',
      preview: 'linear-gradient(135deg, #0e2b2b 0%, #1e3b3b 100%)',
      category: 'Nature'
  },
  { 
      id: 'rainy-thunderbolt', 
      name: 'Storm Watch',
      description: 'Moody blues and purples for rainy days',
      preview: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 100%)',
      category: 'Weather'
  },
  // Adding missing themes from the original website
  { 
      id: 'summer-on-beach', 
      name: 'Sandy Shores',
      description: 'Warm golds and blues for beachside coding',
      preview: 'linear-gradient(135deg, #fff8dc 0%, #ffe4b5 100%)',
      category: 'Seasonal'
  },
  { 
      id: 'spring-bloom', 
      name: 'Cherry Blossom',
      description: 'Soft pinks and greens for spring renewal',
      preview: 'linear-gradient(135deg, #f5fff5 0%, #e6ffe6 100%)',
      category: 'Seasonal'
  },
  { 
      id: 'starry-night', 
      name: 'Celestial Canvas',
      description: 'Deep blues and purples for starlit nights',
      preview: 'linear-gradient(135deg, #000033 0%, #000044 100%)',
      category: 'Space'
  }
];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentTheme, setCurrentTheme] = useState('original');
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
  const [themeSearch, setThemeSearch] = useState('');

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('selectedTheme') || 'original';
    setCurrentTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    return () => clearTimeout(timer);
  }, []);

  // Initialize custom cursor, robot assistant, and theme effects
  useCustomCursor();
  useRobotAssistant();
  useThemeEffects(currentTheme);

  // Filter themes based on search - memoized for performance
  const filteredThemes = useMemo(() => {
    if (!themeSearch) return themes;
    return themes.filter(theme => 
      theme.name.toLowerCase().includes(themeSearch.toLowerCase()) || 
      theme.description.toLowerCase().includes(themeSearch.toLowerCase())
    );
  }, [themeSearch]);

  // Group themes by category for organized display - memoized for performance
  const groupedThemes = useMemo(() => {
    const grouped = {};
    filteredThemes.forEach(theme => {
      if (!grouped[theme.category]) {
        grouped[theme.category] = [];
      }
      grouped[theme.category].push(theme);
    });
    return grouped;
  }, [filteredThemes]);

  // Change theme function - optimized with useCallback
  const changeTheme = useCallback((themeId) => {
    setCurrentTheme(themeId);
    document.documentElement.setAttribute('data-theme', themeId);
    localStorage.setItem('selectedTheme', themeId);
    
    setIsThemeModalOpen(false);
    setThemeSearch('');
    
    // Show theme confirmation
    showThemeConfirmation(themeId);
  }, []);

  // Show theme confirmation message
  const showThemeConfirmation = useCallback((themeId) => {
    // Find the theme name
    const theme = themes.find(t => t.id === themeId);
    if (!theme) return;
    
    // Create confirmation element
    const confirmation = document.createElement('div');
    confirmation.className = 'theme-confirmation';
    confirmation.textContent = `Theme changed to: ${theme.name}`;
    confirmation.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--gradient-primary);
        color: white;
        padding: 12px 24px;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-lg);
        z-index: 10002;
        font-weight: 600;
        animation: slideUp 0.3s ease, fadeOut 0.5s ease 2.5s forwards;
    `;
    
    document.body.appendChild(confirmation);
    
    // Add animation styles if not already present
    if (!document.querySelector('#theme-confirmation-styles')) {
      const style = document.createElement('style');
      style.id = 'theme-confirmation-styles';
      style.textContent = `
          @keyframes slideUp {
              from { 
                  transform: translate(-50%, 20px);
                  opacity: 0;
              }
              to { 
                  transform: translate(-50%, 0);
                  opacity: 1;
              }
          }
          
          @keyframes fadeOut {
              from { opacity: 1; }
              to { opacity: 0; }
          }
      `;
      document.head.appendChild(style);
    }
    
    // Remove element after animation
    setTimeout(() => {
      if (confirmation.parentNode) {
        confirmation.parentNode.removeChild(confirmation);
      }
    }, 3000);
  }, []);

  // Open theme modal - optimized with useCallback
  const openThemeModal = useCallback(() => {
    setIsThemeModalOpen(true);
  }, []);

  // Close theme modal - optimized with useCallback
  const closeThemeModal = useCallback(() => {
    setIsThemeModalOpen(false);
    setThemeSearch('');
  }, []);

  // Handle search input change - optimized with useCallback
  const handleSearchChange = useCallback((e) => {
    setThemeSearch(e.target.value);
  }, []);

  if (isLoading) {
    return (
      <div id="cosmic-loader" className="cosmic-loader">
        <div className="warp-tunnel">
          <div className="stars"></div>
          <div className="stars"></div>
          <div className="stars"></div>
        </div>
        
        {/* Gaming Icons Animation */}
        <div className="gaming-icons">
          {/* Rockets */}
          <div className="gaming-icon rocket" style={{'--delay': '0s', '--orbit': '150px'}}>
            <i className="fas fa-rocket"></i>
          </div>
          <div className="gaming-icon rocket" style={{'--delay': '1s', '--orbit': '180px'}}>
            <i className="fas fa-rocket"></i>
          </div>
          
          {/* Gaming Console */}
          <div className="gaming-icon console" style={{'--delay': '0.5s', '--orbit': '200px'}}>
            <i className="fas fa-gamepad"></i>
          </div>
          <div className="gaming-icon console" style={{'--delay': '1.5s', '--orbit': '120px'}}>
            <i className="fas fa-gamepad"></i>
          </div>
          
          {/* Laptops */}
          <div className="gaming-icon laptop" style={{'--delay': '0.3s', '--orbit': '170px'}}>
            <i className="fas fa-laptop"></i>
          </div>
          <div className="gaming-icon laptop" style={{'--delay': '1.3s', '--orbit': '220px'}}>
            <i className="fas fa-laptop"></i>
          </div>
        </div>
        
        <div className="loader-content">
          <div className="terminal-text">
            <span className="terminal-prompt">$</span>
            <span className="typing-text" id="typing-text">Booting Portfolio.exe...</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        {/* Scroll to top on route changes */}
        <ScrollToTop />
        
        {/* Robot Assistant */}
        <div id="robot-assistant" className="robot-assistant" data-tooltip="Click me to get helpful tips!">
          <div className="robot-body">
            <div className="robot-head">
              <div className="robot-eyes">
                <div className="eye left-eye"></div>
                <div className="eye right-eye"></div>
              </div>
            </div>
          </div>
          <div className="tooltip" id="tooltip">
            <span className="tooltip-text">Welcome to my cosmic portfolio!</span>
          </div>
        </div>

        {/* Theme Modal */}
        {isThemeModalOpen && (
          <div id="theme-modal" className="theme-modal" style={{display: 'block'}}>
            <div className="theme-modal-content">
              <div className="theme-modal-header">
                <h2><i className="fas fa-palette"></i> Select a Theme</h2>
                <span className="theme-modal-close" onClick={closeThemeModal}>&times;</span>
              </div>
              <div className="theme-modal-body">
                <div className="theme-search">
                  <input 
                    type="text" 
                    id="theme-search-input" 
                    placeholder="Search themes..." 
                    className="theme-search-input"
                    value={themeSearch}
                    onChange={handleSearchChange}
                  />
                </div>
                <div className="theme-grid">
                  {/* Group themes by category */}
                  {Object.keys(groupedThemes).map(category => (
                    <React.Fragment key={category}>
                      <div className="theme-category-heading">
                        <h2>{category}</h2>
                      </div>
                      {groupedThemes[category].map((theme) => (
                        <div 
                          key={theme.id} 
                          className={`theme-option ${currentTheme === theme.id ? 'selected' : ''}`}
                          data-theme={theme.id}
                          onClick={() => changeTheme(theme.id)}
                        >
                          <div className="theme-preview" style={{background: theme.preview}}>
                            <div className="preview-elements">
                              <div className="preview-header"></div>
                              <div className="preview-content">
                                <div className="preview-box"></div>
                                <div className="preview-box"></div>
                                <div className="preview-box"></div>
                              </div>
                            </div>
                          </div>
                          <h3 className="theme-name">{theme.name}</h3>
                          <p className="theme-description">{theme.description}</p>
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <Routes>
          <Route path="/" element={
            <>
              <Navigation openThemeModal={openThemeModal} />
              {/* Pass openThemeModal function to Hero component */}
              <Hero openThemeModal={openThemeModal} />
              <GamingCSShowcase />
              <Footer />
            </>
          } />
          <Route path="/about" element={
            <>
              <Navigation openThemeModal={openThemeModal} />
              <About />
              <Footer />
            </>
          } />
          <Route path="/projects" element={
            <>
              <Navigation openThemeModal={openThemeModal} />
              <Projects />
              <Footer />
            </>
          } />
          <Route path="/certifications" element={
            <>
              <Navigation openThemeModal={openThemeModal} />
              <Certifications />
              <Footer />
            </>
          } />
          <Route path="/hobbies" element={
            <>
              <Navigation openThemeModal={openThemeModal} />
              <Hobbies />
              <Footer />
            </>
          } />
          <Route path="/my-apps" element={
            <>
              <Navigation openThemeModal={openThemeModal} />
              <MyApps />
              <Footer />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Navigation openThemeModal={openThemeModal} />
              <Contact />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;