import React, { useState } from 'react';
import '../projects.css'; // Import the projects page styles

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const projects = [
    {
      id: 'mobile',
      title: 'Mobile Price Prediction',
      category: 'ml',
      image: '/images/mobile.jpg',
      description: 'Developed a machine learning model using Random Forest algorithm to predict mobile phone prices with 92% accuracy. The model analyzes various features like RAM, storage, camera specs, and brand.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit'],
      stats: [
        { icon: 'fas fa-chart-line', text: '92% Accuracy' },
        { icon: 'fas fa-database', text: '10K+ Records' }
      ],
      github: 'https://github.com/Deveshsamant/Mobile-range-Prediction-using-Random-Forest',
      demo: 'https://mobile-price.streamlit.app/'
    },
    {
      id: 'hand',
      title: 'Hand Gesture Recognition',
      category: 'ai',
      image: '/images/hand.jpg',
      description: 'Real-time hand gesture recognition system using OpenCV and MediaPipe. The system can detect and classify various hand gestures for interactive applications and accessibility features.',
      tech: ['Python', 'OpenCV', 'MediaPipe', 'NumPy'],
      stats: [
        { icon: 'fas fa-clock', text: 'Real-time' },
        { icon: 'fas fa-hand-paper', text: '10+ Gestures' }
      ],
      github: '#',
      demo: '#'
    },
    {
      id: 'movie',
      title: 'Movie Recommendation System',
      category: 'ml',
      image: '/images/movie.jpg',
      description: 'Content-based filtering recommendation system using cosine similarity. The system analyzes movie features and user preferences to suggest personalized movie recommendations.',
      tech: ['Python', 'Pandas', 'Scikit-learn', 'Flask'],
      stats: [
        { icon: 'fas fa-film', text: '5000+ Movies' },
        { icon: 'fas fa-star', text: 'High Accuracy' }
      ],
      github: '#',
      demo: '#'
    },
    {
      id: 'portfolio',
      title: 'Space-Themed Portfolio',
      category: 'web',
      image: '/images/myphoto.jpg',
      description: 'A responsive, interactive portfolio website with space/gaming theme. Features custom animations, dark/light mode, and a robot assistant. Built with modern web technologies and best practices.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Node.js'],
      stats: [
        { icon: 'fas fa-mobile-alt', text: 'Responsive' },
        { icon: 'fas fa-palette', text: 'Custom Theme' }
      ],
      github: 'https://github.com/Deveshsamant',
      demo: 'index.html'
    },
    {
      id: 'todo-manager',
      title: 'Project To-Do Manager',
      category: 'web',
      image: '/images/Project-To-Do-Manager.png',
      description: 'Desktop application built with Electron.js for organizing tasks within projects. Features drag-and-drop functionality, multiple projects, and dark/light themes.',
      tech: ['Electron.js', 'JavaScript', 'HTML5', 'CSS3'],
      stats: [
        { icon: 'fas fa-tasks', text: 'Task Management' },
        { icon: 'fas fa-desktop', text: 'Desktop App' }
      ],
      github: 'https://github.com/Deveshsamant/Project-To-Do-Manager',
      demo: '#'
    },
    {
      id: 'dockeep',
      title: 'DocKeep',
      category: 'mobile',
      image: '/images/DocKeep.png',
      description: 'Android application for storing and organizing personal documents locally. Features Material Design, image management, and dark/light theme toggle.',
      tech: ['Kotlin', 'Android', 'Room DB', 'Material Design'],
      stats: [
        { icon: 'fas fa-mobile-alt', text: 'Android App' },
        { icon: 'fas fa-file-alt', text: 'Document Storage' }
      ],
      github: 'https://github.com/Deveshsamant/DocKeep',
      demo: '#'
    },
    {
      id: 'fileorganizer',
      title: 'FileOrganizer',
      category: 'web',
      image: '/images/FileOrganizer.png',
      description: 'Desktop application built with Python for organizing and managing files on Windows systems. Features file browsing, sorting, and export functionality.',
      tech: ['Python', 'Tkinter', 'FFmpeg', 'Threading'],
      stats: [
        { icon: 'fas fa-folder-open', text: 'File Management' },
        { icon: 'fas fa-desktop', text: 'Desktop App' }
      ],
      github: 'https://github.com/Deveshsamant/FileOrganizer',
      demo: '#'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openProjectModal = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const showComingSoonModal = () => {
    setShowComingSoon(true);
  };

  const closeComingSoon = () => {
    setShowComingSoon(false);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="projects-hero">
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
              <span className="title-main">My Digital Creations</span>
              <span className="title-subtitle">Innovation Through Code</span>
            </h1>
            <p className="hero-description">
              Welcome to my digital laboratory! Here you'll find a collection of projects that showcase 
              my journey through the realms of machine learning, web development, and innovative 
              problem-solving. Each project represents a step forward in my quest to master the digital cosmos.
            </p>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="project-categories">
        <div className="container">
          <div className="category-filters">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} 
              data-filter="all" 
              data-tooltip="Show all projects"
              onClick={() => setActiveFilter('all')}
            >
              <i className="fas fa-th"></i>
              All Projects
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'ml' ? 'active' : ''}`} 
              data-filter="ml" 
              data-tooltip="Machine Learning projects"
              onClick={() => setActiveFilter('ml')}
            >
              <i className="fas fa-brain"></i>
              Machine Learning
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`} 
              data-filter="web" 
              data-tooltip="Web development projects"
              onClick={() => setActiveFilter('web')}
            >
              <i className="fas fa-laptop-code"></i>
              Web Development
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'mobile' ? 'active' : ''}`} 
              data-filter="mobile" 
              data-tooltip="Mobile app projects"
              onClick={() => setActiveFilter('mobile')}
            >
              <i className="fas fa-mobile-alt"></i>
              Mobile Apps
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'ai' ? 'active' : ''}`} 
              data-filter="ai" 
              data-tooltip="AI and automation projects"
              onClick={() => setActiveFilter('ai')}
            >
              <i className="fas fa-robot"></i>
              AI & Automation
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid-section">
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card" data-category={project.category} data-tooltip={`${project.title} project`}>
                <div className="project-image">
                  {project.image ? (
                    <img src={project.image} alt={project.title} />
                  ) : (
                    <div className="project-placeholder">
                      <i className="fas fa-shopping-cart"></i>
                    </div>
                  )}
                  <div className="project-overlay">
                    <div className="project-actions">
                      <button className="action-btn" onClick={() => openProjectModal(project.id)} data-tooltip="View details">
                        <i className="fas fa-eye"></i>
                      </button>
                      <a 
                        href={project.github} 
                        className="action-btn" 
                        data-tooltip={project.github === '#' ? "Code coming soon" : "View code"}
                        target={project.github === '#' ? "_self" : "_blank"}
                        rel={project.github === '#' ? "" : "noopener noreferrer"}
                        onClick={project.github === '#' ? (e) => { e.preventDefault(); showComingSoonModal(); } : null}
                      >
                        <i className="fab fa-github"></i>
                      </a>
                      <a 
                        href={project.demo} 
                        className="action-btn" 
                        data-tooltip={project.demo === '#' ? "Demo coming soon" : "Live demo"}
                        target={project.demo === '#' ? "_self" : "_blank"}
                        rel={project.demo === '#' ? "" : "noopener noreferrer"}
                        onClick={project.demo === '#' ? (e) => { e.preventDefault(); showComingSoonModal(); } : null}
                      >
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-category">
                    <i className={`fas ${project.category === 'ml' || project.category === 'ai' ? 'fa-brain' : project.category === 'web' ? 'fa-laptop-code' : 'fa-mobile-alt'}`}></i>
                    {project.category === 'ml' ? 'Machine Learning' : project.category === 'web' ? 'Web Development' : project.category === 'mobile' ? 'Mobile App' : 'AI & Computer Vision'}
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-stats">
                    {project.stats.map((stat, index) => (
                      <div key={index} className="stat">
                        <i className={stat.icon}></i>
                        <span>{stat.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div id="projectModal" className="project-modal" style={{display: 'block'}}>
          <div className="modal-content">
            <div className="modal-header">
              <h2 id="modalTitle">{selectedProject.title}</h2>
              <button className="modal-close" onClick={closeProjectModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-image">
                {selectedProject.image ? (
                  <img id="modalImage" src={selectedProject.image} alt={selectedProject.title} />
                ) : (
                  <div className="project-placeholder">
                    <i className="fas fa-shopping-cart"></i>
                  </div>
                )}
              </div>
              <div className="modal-info">
                <div className="modal-category" id="modalCategory">
                  <i className={`fas ${selectedProject.category === 'ml' || selectedProject.category === 'ai' ? 'fa-brain' : selectedProject.category === 'web' ? 'fa-laptop-code' : 'fa-mobile-alt'}`}></i>
                  <span>
                    {selectedProject.category === 'ml' ? 'Machine Learning' : selectedProject.category === 'web' ? 'Web Development' : selectedProject.category === 'mobile' ? 'Mobile App' : 'AI & Computer Vision'}
                  </span>
                </div>
                <p id="modalDescription">{selectedProject.description}</p>
                <div className="modal-tech" id="modalTech">
                  {selectedProject.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="modal-stats" id="modalStats">
                  {selectedProject.stats.map((stat, index) => (
                    <div key={index} className="stat">
                      <i className={stat.icon}></i>
                      <span>{stat.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <a 
                href={selectedProject.github} 
                id="modalGithub" 
                className="btn-secondary" 
                target={selectedProject.github === '#' ? "_self" : "_blank"}
                rel={selectedProject.github === '#' ? "" : "noopener noreferrer"}
                onClick={selectedProject.github === '#' ? (e) => { e.preventDefault(); showComingSoonModal(); closeProjectModal(); } : null}
              >
                <i className="fab fa-github"></i>
                View Code
              </a>
              <a 
                href={selectedProject.demo} 
                id="modalDemo" 
                className="btn-primary" 
                target={selectedProject.demo === '#' ? "_self" : "_blank"}
                rel={selectedProject.demo === '#' ? "" : "noopener noreferrer"}
                onClick={selectedProject.demo === '#' ? (e) => { e.preventDefault(); showComingSoonModal(); closeProjectModal(); } : null}
              >
                <i className="fas fa-external-link-alt"></i>
                Live Demo
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Coming Soon Modal */}
      {showComingSoon && (
        <div id="comingSoonModal" className="coming-soon-modal" style={{display: 'block'}}>
          <div className="modal-content">
            <div className="coming-soon-icon">
              <i className="fas fa-rocket"></i>
            </div>
            <h2>Coming Soon!</h2>
            <p>This project is currently under development. Stay tuned for updates!</p>
            <button className="btn-primary" onClick={closeComingSoon}>
              <i className="fas fa-check"></i>
              Got it!
            </button>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Interested in My Work?</h2>
            <p>Let's collaborate and create something amazing together!</p>
            <div className="cta-buttons">
              <a href="#contact" className="btn-primary" data-tooltip="Get in touch">
                <i className="fas fa-envelope"></i>
                Contact Me
              </a>
              <a href="https://github.com/Deveshsamant" target="_blank" rel="noopener noreferrer" className="btn-secondary" data-tooltip="View my code">
                <i className="fab fa-github"></i>
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;