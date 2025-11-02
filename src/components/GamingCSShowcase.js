import React from 'react';

const GamingCSShowcase = () => {
  return (
    <section id="gaming-cs-showcase" className="gaming-cs-showcase">
      <div className="container">
        <h2 className="section-title">Code • Create • Innovate</h2>
        <div className="showcase-content">
          {/* Frontend Development */}
          <div className="frontend-zone">
            <div className="zone-header">
              <div className="zone-icon frontend-icon-header">
                <i className="fab fa-react"></i>
              </div>
              <h3>Frontend Mastery</h3>
              <p className="zone-subtitle">Crafting beautiful user experiences</p>
            </div>
            
            {/* Tech Stack Display */}
            <div className="tech-stack-card">
              <div className="stack-header">
                <div className="stack-icon">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <span className="stack-text">TECH STACK</span>
              </div>
              <div className="stack-technologies">
                <div className="tech-badge react">
                  <i className="fab fa-react"></i>
                  <span>React</span>
                </div>
                <div className="tech-badge js">
                  <i className="fab fa-js-square"></i>
                  <span>JavaScript</span>
                </div>
                <div className="tech-badge html">
                  <i className="fab fa-html5"></i>
                  <span>HTML5</span>
                </div>
                <div className="tech-badge css">
                  <i className="fab fa-css3-alt"></i>
                  <span>CSS3</span>
                </div>
              </div>
              <div className="experience-bar">
                <div className="experience-fill"></div>
                <span className="experience-text">Frontend Expert</span>
              </div>
            </div>
            
            {/* Frontend Stats */}
            <div className="frontend-stats">
              <div className="stat-frontend">
                <div className="stat-icon"><i className="fas fa-palette"></i></div>
                <div className="stat-value">Creative</div>
                <div className="stat-label">Design</div>
              </div>
              <div className="stat-frontend">
                <div className="stat-icon"><i className="fas fa-mobile-alt"></i></div>
                <div className="stat-value">Responsive</div>
                <div className="stat-label">Design</div>
              </div>
              <div className="stat-frontend">
                <div className="stat-icon"><i className="fas fa-rocket"></i></div>
                <div className="stat-value">Fast</div>
                <div className="stat-label">Performance</div>
              </div>
            </div>
          </div>
          
          {/* Center Animation */}
          <div className="center-animation">
            <div className="code-terminal">
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <span className="btn-close"></span>
                  <span className="btn-minimize"></span>
                  <span className="btn-maximize"></span>
                </div>
                <div className="terminal-title">devesh@portfolio:~$</div>
              </div>
              <div className="terminal-body">
                <div className="code-line">
                  <span className="prompt">$</span>
                  <span className="command typing-command">./run_portfolio.sh</span>
                </div>
                <div className="code-line">
                  <span className="output">Initializing gaming mode...</span>
                </div>
                <div className="code-line">
                  <span className="output success">✓ Valorant skills loaded</span>
                </div>
                <div className="code-line">
                  <span className="output success">✓ Coding abilities activated</span>
                </div>
                <div className="code-line">
                  <span className="output info">Ready for digital adventures!</span>
                </div>
                <div className="code-line">
                  <span className="prompt">$</span>
                  <span className="cursor-blink">_</span>
                </div>
              </div>
            </div>
            
            {/* Floating Code Elements */}
            <div className="floating-elements">
              <div className="floating-icon code-icon" style={{'--delay': '0s', '--duration': '3s'}}>
                <i className="fab fa-python"></i>
              </div>
              <div className="floating-icon code-icon" style={{'--delay': '1s', '--duration': '4s'}}>
                <i className="fab fa-node-js"></i>
              </div>
              <div className="floating-icon code-icon" style={{'--delay': '2s', '--duration': '3.5s'}}>
                <i className="fab fa-react"></i>
              </div>
              <div className="floating-icon code-icon" style={{'--delay': '0.5s', '--duration': '4.5s'}}>
                <i className="fab fa-github"></i>
              </div>
              <div className="floating-icon code-icon" style={{'--delay': '1.5s', '--duration': '3.2s'}}>
                <i className="fab fa-js-square"></i>
              </div>
              <div className="floating-icon code-icon" style={{'--delay': '2.5s', '--duration': '4.2s'}}>
                <i className="fas fa-database"></i>
              </div>
            </div>
          </div>
          
          {/* Backend Development */}
          <div className="backend-zone">
            <div className="zone-header">
              <div className="zone-icon backend-icon-header">
                <i className="fas fa-server"></i>
              </div>
              <h3>Backend Expertise</h3>
              <p className="zone-subtitle">Building robust server solutions</p>
            </div>
            
            {/* Skills Matrix */}
            <div className="skills-matrix">
              <div className="matrix-row">
                <div className="skill-node active" data-skill="Python">
                  <i className="fab fa-python"></i>
                </div>
                <div className="skill-node active" data-skill="JavaScript">
                  <i className="fab fa-js-square"></i>
                </div>
                <div className="skill-node" data-skill="C++">
                  <i className="fab fa-cuttlefish"></i>
                </div>
              </div>
              <div className="matrix-row">
                <div className="skill-node active" data-skill="React">
                  <i className="fab fa-react"></i>
                </div>
                <div className="skill-node" data-skill="Node.js">
                  <i className="fab fa-node-js"></i>
                </div>
                <div className="skill-node active" data-skill="AI/ML">
                  <i className="fas fa-brain"></i>
                </div>
              </div>
            </div>
            
            {/* Achievement Unlocked */}
            <div className="achievement-popup">
              <div className="achievement-icon">
                <i className="fas fa-medal"></i>
              </div>
              <div className="achievement-text">
                <div className="achievement-title">Achievement Unlocked!</div>
                <div className="achievement-desc">Full Stack Developer</div>
              </div>
            </div>
            
            {/* Backend Stats */}
            <div className="backend-stats">
              <div className="stat-backend">
                <div className="stat-icon"><i className="fas fa-server"></i></div>
                <div className="stat-value">Scalable</div>
                <div className="stat-label">APIs</div>
              </div>
              <div className="stat-backend">
                <div className="stat-icon"><i className="fas fa-database"></i></div>
                <div className="stat-value">Efficient</div>
                <div className="stat-label">Databases</div>
              </div>
              <div className="stat-backend">
                <div className="stat-icon"><i className="fas fa-cloud"></i></div>
                <div className="stat-value">Cloud</div>
                <div className="stat-label">Ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamingCSShowcase;