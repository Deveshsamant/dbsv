import React, { useState } from 'react';
import '../certifications.css'; // Import the certifications page styles

const Certifications = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      id: 'python',
      title: 'Crash Course on Python',
      category: 'programming',
      image: '/images/python.jpg',
      issuer: 'Google & Coursera',
      description: 'Intensive course on Python programming fundamentals covering data structures, functions, and object-oriented programming concepts.',
      tech: ['Python', 'Programming', 'Data Structures'],
      stats: [
        { icon: 'fas fa-calendar', text: '2024' },
        { icon: 'fas fa-clock', text: '40 Hours' }
      ],
      verify: 'https://www.coursera.org/verify/LES49221JBAH',
      download: '/python.pdf'
    },
    {
      id: 'web',
      title: 'The Web Developer Bootcamp 2024',
      category: 'web',
      image: '/images/web.jpg',
      issuer: 'Udemy',
      description: 'Comprehensive full-stack web development course covering front-end and back-end technologies, databases, and deployment strategies.',
      tech: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
      stats: [
        { icon: 'fas fa-calendar', text: '2024' },
        { icon: 'fas fa-clock', text: '60+ Hours' }
      ],
      verify: 'https://www.udemy.com/certificate/UC-a3a88382-d387-4a2e-93e2-c707ea7586d6/',
      download: '/web.pdf'
    },
    {
      id: 'kotlin',
      title: 'Android & Kotlin Development Masterclass',
      category: 'mobile',
      image: '/images/kotlin.jpg',
      issuer: 'Udemy',
      description: 'Comprehensive course on Android app development using Kotlin, covering UI design, data persistence, networking, and app deployment.',
      tech: ['Kotlin', 'Android Studio', 'Mobile Development', 'UI/UX'],
      stats: [
        { icon: 'fas fa-calendar', text: '2024' },
        { icon: 'fas fa-clock', text: '50+ Hours' }
      ],
      verify: 'https://www.udemy.com/certificate/UC-c05bfd05-f93c-4876-9b84-7fd8f10dc039/',
      download: '/kotlin.pdf'
    }
  ];

  const filteredCertifications = activeFilter === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === activeFilter);

  const openCertModal = (certId) => {
    const cert = certifications.find(c => c.id === certId);
    setSelectedCert(cert);
  };

  const closeCertModal = () => {
    setSelectedCert(null);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="certifications-hero">
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
              <span className="title-main">Professional Certifications</span>
              <span className="title-subtitle">Validating My Digital Expertise</span>
            </h1>
            <p className="hero-description">
              Welcome to my certification showcase! These credentials represent my commitment to continuous 
              learning and professional development in the ever-evolving world of technology. Each certificate 
              is a milestone in my journey through the digital cosmos.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Content */}
      <section className="certifications-content">
        <div className="container">
          {/* Certification Categories */}
          <div className="certification-filters">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} 
              data-filter="all" 
              data-tooltip="Show all certifications"
              onClick={() => setActiveFilter('all')}
            >
              <i className="fas fa-th"></i>
              All Certifications
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'programming' ? 'active' : ''}`} 
              data-filter="programming" 
              data-tooltip="Programming certifications"
              onClick={() => setActiveFilter('programming')}
            >
              <i className="fas fa-code"></i>
              Programming
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`} 
              data-filter="web" 
              data-tooltip="Web development certifications"
              onClick={() => setActiveFilter('web')}
            >
              <i className="fas fa-laptop-code"></i>
              Web Development
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'mobile' ? 'active' : ''}`} 
              data-filter="mobile" 
              data-tooltip="Mobile development certifications"
              onClick={() => setActiveFilter('mobile')}
            >
              <i className="fas fa-mobile-alt"></i>
              Mobile Development
            </button>
          </div>

          {/* Certifications Grid */}
          <div className="certifications-grid" id="certificationsGrid">
            {filteredCertifications.map((cert) => (
              <div key={cert.id} className="certification-card" data-category={cert.category} data-tooltip={`${cert.title} certification`}>
                <div className="cert-image">
                  <img src={cert.image} alt={cert.title} />
                  <div className="cert-overlay">
                    <div className="cert-actions">
                      <button className="action-btn" onClick={() => openCertModal(cert.id)} data-tooltip="View details">
                        <i className="fas fa-eye"></i>
                      </button>
                      <a href={cert.verify} target="_blank" rel="noopener noreferrer" className="action-btn" data-tooltip="Verify online">
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                      <a href={cert.download} target="_blank" rel="noopener noreferrer" className="action-btn" data-tooltip="Download PDF">
                        <i className="fas fa-download"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="cert-content">
                  <div className="cert-category">
                    <i className={`fas ${cert.category === 'programming' ? 'fa-code' : cert.category === 'web' ? 'fa-laptop-code' : 'fa-mobile-alt'}`}></i>
                    {cert.category === 'programming' ? 'Programming' : cert.category === 'web' ? 'Web Development' : 'Mobile Development'}
                  </div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-description">{cert.description}</p>
                  <div className="cert-tech">
                    {cert.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="cert-stats">
                    {cert.stats.map((stat, index) => (
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

      {/* Certification Modal */}
      {selectedCert && (
        <div id="certModal" className="cert-modal" style={{display: 'block'}}>
          <div className="modal-content">
            <div className="modal-header">
              <h2 id="modalTitle">{selectedCert.title}</h2>
              <button className="modal-close" onClick={closeCertModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-image">
                <img id="modalImage" src={selectedCert.image} alt={selectedCert.title} />
              </div>
              <div className="modal-info">
                <div className="modal-category" id="modalCategory">
                  <i className={`fas ${selectedCert.category === 'programming' ? 'fa-code' : selectedCert.category === 'web' ? 'fa-laptop-code' : 'fa-mobile-alt'}`}></i>
                  <span>{selectedCert.category === 'programming' ? 'Programming' : selectedCert.category === 'web' ? 'Web Development' : 'Mobile Development'}</span>
                </div>
                <div className="modal-issuer" id="modalIssuer">{selectedCert.issuer}</div>
                <p id="modalDescription">{selectedCert.description}</p>
                <div className="modal-tech" id="modalTech">
                  {selectedCert.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="modal-stats" id="modalStats">
                  {selectedCert.stats.map((stat, index) => (
                    <div key={index} className="stat">
                      <i className={stat.icon}></i>
                      <span>{stat.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <a href={selectedCert.verify} id="modalVerify" className="btn-secondary" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-external-link-alt"></i>
                Verify Online
              </a>
              <a href={selectedCert.download} id="modalDownload" className="btn-primary" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-download"></i>
                Download PDF
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Interested in My Skills?</h2>
            <p>Let's discuss how my certifications and expertise can contribute to your projects!</p>
            <div className="cta-buttons">
              <a href="#contact" className="btn-primary" data-tooltip="Get in touch">
                <i className="fas fa-envelope"></i>
                Contact Me
              </a>
              <a href="#projects" className="btn-secondary" data-tooltip="See my work">
                <i className="fas fa-eye"></i>
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;