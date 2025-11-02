import React, { useEffect } from 'react';
import '../about.css'; // Import the about page styles

const About = () => {
  useEffect(() => {
    // Add scroll animation functionality
    const handleScroll = () => {
      const timelineItems = document.querySelectorAll('.timeline-item');
      
      timelineItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (itemPosition < screenPosition) {
          item.classList.add('animate');
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Trigger scroll event on load to animate visible items
    handleScroll();
    
    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="starfield">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-main">About My Mission</span>
              <span className="title-subtitle">Exploring the Digital Cosmos</span>
            </h1>
            <p className="hero-description">
              Welcome to my digital universe! I'm Devesh Samant, a passionate Computer Science student 
              on an endless quest to push the boundaries of technology and explore the infinite possibilities 
              of the digital realm.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mission-statement">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2 className="section-title">My Mission</h2>
              <p className="mission-description">
                As a <span className="highlight">B.Tech Computer Science</span> graduate from 
                <span className="highlight">Graphic Era Hill University</span>, I'm dedicated to 
                mastering the art of programming and technology. My mission is to create 
                innovative solutions that make a positive impact on the world while continuously 
                learning and growing in this ever-evolving field.
              </p>
              <div className="mission-stats">
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="fas fa-code"></i>
                  </div>
                  <div className="stat-content">
                    <h3>3+ Years</h3>
                    <p>Coding Experience</p>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="fas fa-project-diagram"></i>
                  </div>
                  <div className="stat-content">
                    <h3>10+ Projects</h3>
                    <p>Completed</p>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <div className="stat-content">
                    <h3>7.58 CGPA</h3>
                    <p>Final Score</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mission-visual">
              <div className="profile-showcase">
                {/* Fixed image path to point to the images folder */}
                <img src="/images/myphoto.jpg" alt="Devesh Samant - Space Explorer" />
                <div className="profile-glow"></div>
                <div className="floating-icons">
                  <div className="icon-float icon-1">
                    <i className="fas fa-rocket"></i>
                  </div>
                  <div className="icon-float icon-2">
                    <i className="fas fa-code"></i>
                  </div>
                  <div className="icon-float icon-3">
                    <i className="fas fa-gamepad"></i>
                  </div>
                  <div className="icon-float icon-4">
                    <i className="fas fa-brain"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="journey-timeline">
        <div className="container">
          <h2 className="section-title">My Journey Through the Digital Cosmos</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="timeline-content">
                <div className="timeline-date">2021 - 2025</div>
                <h3>B.Tech Computer Science</h3>
                <h4>Graphic Era Hill University</h4>
                <p>
                  Completed my Bachelor's degree in Computer Science and Engineering in 2025. 
                  This journey equipped me with a solid foundation in programming, algorithms, 
                  data structures, and software engineering principles.
                </p>
                <div className="timeline-tags">
                  <span className="tag">CSE</span>
                  <span className="tag">Programming</span>
                  <span className="tag">Algorithms</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-school"></i>
              </div>
              <div className="timeline-content">
                <div className="timeline-date">2020 - 2021</div>
                <h3>Class 12th (Science)</h3>
                <h4>N.P.S Khatima</h4>
                <p>
                  Completed my higher secondary education with 87% marks, focusing on Physics, 
                  Chemistry, and Mathematics. This period laid the foundation for my analytical 
                  thinking and problem-solving skills.
                </p>
                <div className="timeline-tags">
                  <span className="tag">PCM</span>
                  <span className="tag">Science</span>
                  <span className="tag">Mathematics</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-book"></i>
              </div>
              <div className="timeline-content">
                <div className="timeline-date">2018 - 2019</div>
                <h3>Class 10th</h3>
                <h4>N.P.S Khatima</h4>
                <p>
                  Achieved 88% marks in my secondary education, developing strong fundamentals 
                  in mathematics and science that would later become crucial for my programming journey.
                </p>
                <div className="timeline-tags">
                  <span className="tag">Mathematics</span>
                  <span className="tag">Science</span>
                  <span className="tag">Foundation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Technologies */}
      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">My Arsenal of Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="category-title">
                <i className="fas fa-code"></i>
                Programming Languages
              </h3>
              <div className="skill-items">
                <div className="skill-item" data-tooltip="C++ - My first love in programming">
                  <i className="devicon-cplusplus-plain"></i>
                  <span>C++</span>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill-item" data-tooltip="Python - My go-to for AI and automation">
                  <i className="devicon-python-plain"></i>
                  <span>Python</span>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill-item" data-tooltip="JavaScript - Powering the web universe">
                  <i className="devicon-javascript-plain"></i>
                  <span>JavaScript</span>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div className="skill-item" data-tooltip="Java - Enterprise-level development">
                  <i className="devicon-java-plain"></i>
                  <span>Java</span>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '70%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">
                <i className="fas fa-laptop-code"></i>
                Web Development
              </h3>
              <div className="skill-items">
                <div className="skill-item" data-tooltip="HTML5 - Structure of the web">
                  <i className="devicon-html5-plain"></i>
                  <span>HTML5</span>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="skill-item" data-tooltip="CSS3 - Styling the digital cosmos">
                  <i className="devicon-css3-plain"></i>
                  <span>CSS3</span>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill-item" data-tooltip="React - Building dynamic user interfaces">
                  <i className="devicon-react-original"></i>
                  <span>React</span>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="skill-item" data-tooltip="Node.js - Powering the backend universe">
                  <i className="devicon-nodejs-plain"></i>
                  <span>Node.js</span>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">
                <i className="fas fa-database"></i>
                Databases & Tools
              </h3>
              <div className="skill-items">
                <div className="skill-item" data-tooltip="MongoDB - NoSQL database">
                  <i className="devicon-mongodb-plain"></i>
                  <span>MongoDB</span>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '70%'}}></div>
                  </div>
                </div>
                <div className="skill-item" data-tooltip="MySQL - Relational database">
                  <i className="devicon-mysql-plain"></i>
                  <span>MySQL</span>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div className="skill-item" data-tooltip="Git - Version control system">
                  <i className="devicon-git-plain"></i>
                  <span>Git</span>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="skill-item" data-tooltip="VS Code - My primary code editor">
                  <i className="devicon-vscode-plain"></i>
                  <span>VS Code</span>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">
                <i className="fas fa-brain"></i>
                AI & Machine Learning
              </h3>
              <div className="skill-items">
                <div className="skill-item" data-tooltip="Machine Learning - Teaching computers to think">
                  <i className="fas fa-brain"></i>
                  <span>ML</span>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="skill-item" data-tooltip="Data Science - Extracting insights from data">
                  <i className="fas fa-chart-line"></i>
                  <span>Data Science</span>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div className="skill-item" data-tooltip="OpenCV - Computer vision adventures">
                  <i className="fas fa-eye"></i>
                  <span>OpenCV</span>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '70%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">
                <i className="fas fa-cloud"></i>
                Cloud & DevOps
              </h3>
              <div className="skill-items">
                <div className="skill-item" data-tooltip="AWS - Cloud computing platform">
                  <i className="devicon-amazonwebservices-plain-wordmark"></i>
                  <span>AWS</span>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div className="skill-item" data-tooltip="Docker - Containerization platform">
                  <i className="devicon-docker-plain"></i>
                  <span>Docker</span>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '70%'}}></div>
                  </div>
                </div>
                <div className="skill-item" data-tooltip="Kubernetes - Container orchestration">
                  <i className="devicon-kubernetes-plain"></i>
                  <span>Kubernetes</span>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '65%'}}></div>
                  </div>
                </div>
                <div className="skill-item" data-tooltip="Jenkins - Automation server">
                  <i className="devicon-jenkins-plain"></i>
                  <span>Jenkins</span>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '70%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">
                <i className="fas fa-mobile-alt"></i>
                Mobile Development
              </h3>
              <div className="skill-items">
                <div className="skill-item" data-tooltip="React Native - Cross-platform mobile development">
                  <i className="devicon-react-original"></i>
                  <span>React Native</span>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div className="skill-item" data-tooltip="Android - Native mobile development">
                  <i className="devicon-android-plain"></i>
                  <span>Android</span>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '70%'}}></div>
                  </div>
                </div>
                <div className="skill-item" data-tooltip="Flutter - UI toolkit for mobile apps">
                  <i className="devicon-flutter-plain"></i>
                  <span>Flutter</span>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '65%'}}></div>
                  </div>
                </div>
                <div className="skill-item" data-tooltip="iOS - Apple mobile development">
                  <i className="devicon-apple-plain"></i>
                  <span>iOS</span>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '60%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests & Hobbies */}
      <section className="interests-section">
        <div className="container">
          <h2 className="section-title">Beyond the Code</h2>
          <div className="interests-grid">
            <div className="interest-card" data-tooltip="Exploring the mysteries of the universe">
              <div className="interest-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Space Exploration</h3>
              <p>Fascinated by the cosmos and the infinite possibilities of space technology. Always following the latest discoveries and missions.</p>
            </div>
            
            <div className="interest-card" data-tooltip="Gaming is my way of exploring virtual worlds">
              <div className="interest-icon">
                <i className="fas fa-gamepad"></i>
              </div>
              <h3>Gaming</h3>
              <p>Passionate about gaming and the technology behind it. Love exploring virtual worlds and understanding game development.</p>
            </div>
            
            <div className="interest-card" data-tooltip="Always learning new technologies and frameworks">
              <div className="interest-icon">
                <i className="fas fa-book-open"></i>
              </div>
              <h3>Continuous Learning</h3>
              <p>Committed to lifelong learning, constantly exploring new technologies, frameworks, and programming paradigms.</p>
            </div>
            
            <div className="interest-card" data-tooltip="Building innovative solutions to real-world problems">
              <div className="interest-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation</h3>
              <p>Driven by the desire to create innovative solutions that can make a positive impact on society and technology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Explore Together?</h2>
            <p>Let's embark on a journey through the digital cosmos and create something amazing together!</p>
            <div className="cta-buttons">
              <a href="/projects" className="btn-primary" data-tooltip="See what I've built">
                <i className="fas fa-rocket"></i>
                View My Projects
              </a>
              <a href="/contact" className="btn-secondary" data-tooltip="Get in touch">
                <i className="fas fa-envelope"></i>
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;