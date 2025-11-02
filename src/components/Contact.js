import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Check online status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }
    }
    
    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if online
    if (!isOnline) {
      setErrorMessage('You are currently offline. Please check your internet connection and try again.');
      return;
    }
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      // Determine the correct API endpoint based on environment
      let apiUrl;
      if (process.env.NODE_ENV === 'production') {
        // In production (Vercel), API functions are available at /api/[function-name]
        apiUrl = '/api/send-email';
      } else {
        // In development, use the proxy
        apiUrl = '/send-email';
      }
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        setShowSuccessModal(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
        setErrors({});
      } else {
        setErrorMessage(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        setErrorMessage('Could not connect to the server. Please make sure the email server is running.');
      } else {
        setErrorMessage('Network error. Please check your connection and try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const toggleFAQ = (index) => {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems[index].classList.toggle('active');
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="starfield">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="star"></div>
          ))}
        </div>
        
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-main">Let's Connect</span>
              <span className="title-subtitle">Join Me in the Digital Cosmos</span>
            </h1>
            <p className="hero-description">
              Ready to embark on a journey through the digital universe together? Whether you're interested 
              in collaborating on a project, discussing technology, or just want to say hello, I'd love to 
              hear from you. Let's explore the infinite possibilities of code and innovation!
            </p>
          </div>
        </div>
      </section>

      {/* Offline Warning */}
      {!isOnline && (
        <div className="offline-warning">
          <div className="warning-content">
            <i className="fas fa-exclamation-triangle"></i>
            <span>You are currently offline. Some features may not work properly.</span>
          </div>
        </div>
      )}

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section" id="contact-form-section">
              <div className="form-container">
                <h2 className="section-title">Send a Message</h2>
                <p className="section-description">
                  Have a project in mind? Want to collaborate? Or just want to chat about technology? 
                  Drop me a message and I'll get back to you as soon as possible!
                </p>
                
                {/* Error message display */}
                {errorMessage && (
                  <div className="error-message">
                    <i className="fas fa-exclamation-circle"></i> {errorMessage}
                  </div>
                )}
                
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        value={formData.firstName}
                        onChange={handleChange}
                        className={errors.firstName ? 'error' : ''}
                        disabled={isSubmitting}
                      />
                      {errors.firstName && <div className="field-error">{errors.firstName}</div>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        value={formData.lastName}
                        onChange={handleChange}
                        className={errors.lastName ? 'error' : ''}
                        disabled={isSubmitting}
                      />
                      {errors.lastName && <div className="field-error">{errors.lastName}</div>}
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'error' : ''}
                      disabled={isSubmitting}
                    />
                    {errors.email && <div className="field-error">{errors.email}</div>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className={errors.subject ? 'error' : ''}
                      disabled={isSubmitting}
                    >
                      <option value="">Select a subject</option>
                      <option value="collaboration">Collaboration Opportunity</option>
                      <option value="project">Project Discussion</option>
                      <option value="job">Job Opportunity</option>
                      <option value="question">Technical Question</option>
                      <option value="feedback">Website Feedback</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && <div className="field-error">{errors.subject}</div>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="6" 
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? 'error' : ''}
                      placeholder="Write your message here"
                      disabled={isSubmitting}
                    ></textarea>
                    {errors.message && <div className="field-error">{errors.message}</div>}
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn-primary submit-btn"
                    disabled={isSubmitting || !isOnline}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i> Sending...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i> Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <h2 className="section-title">Get in Touch</h2>
              <p className="section-description">
                Prefer other ways to connect? Here are all the ways you can reach me across the digital universe.
              </p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="method-content">
                    <h3>Email</h3>
                    <p>aani64257@gmail.com</p>
                    <a href="mailto:aani64257@gmail.com" className="method-link">Send Email</a>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fab fa-linkedin"></i>
                  </div>
                  <div className="method-content">
                    <h3>LinkedIn</h3>
                    <p>Professional Network</p>
                    <a href="https://www.linkedin.com/in/devesh-samant-b78376258/" target="_blank" rel="noopener noreferrer" className="method-link">Connect</a>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fab fa-github"></i>
                  </div>
                  <div className="method-content">
                    <h3>GitHub</h3>
                    <p>Code Repository</p>
                    <a href="https://github.com/Deveshsamant" target="_blank" rel="noopener noreferrer" className="method-link">View Profile</a>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fab fa-instagram"></i>
                  </div>
                  <div className="method-content">
                    <h3>Instagram</h3>
                    <p>Personal Updates</p>
                    <a href="https://www.instagram.com/devesh.samant/" target="_blank" rel="noopener noreferrer" className="method-link">Follow</a>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div className="method-content">
                    <h3>WhatsApp</h3>
                    <p>+91 7820020955</p>
                    <a href="https://wa.me/917820020955" target="_blank" rel="noopener noreferrer" className="method-link">Message</a>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fab fa-telegram"></i>
                  </div>
                  <div className="method-content">
                    <h3>Telegram</h3>
                    <p>+91 7820020955</p>
                    <a href="https://t.me/+917820020955" target="_blank" rel="noopener noreferrer" className="method-link">Chat Now</a>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-code"></i>
                  </div>
                  <div className="method-content">
                    <h3>LeetCode</h3>
                    <p>Coding Challenges</p>
                    <a href="https://leetcode.com/u/deveshsamant1744/" target="_blank" rel="noopener noreferrer" className="method-link">View Profile</a>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fab fa-discord"></i>
                  </div>
                  <div className="method-content">
                    <h3>Discord</h3>
                    <p>Community Server</p>
                    <a href="https://discord.gg/P6gxsv3k" target="_blank" rel="noopener noreferrer" className="method-link">Join Server</a>
                  </div>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="quick-stats">
                <h3>Quick Stats</h3>
                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-number">24/7</div>
                    <div className="stat-label">Response Time</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">100%</div>
                    <div className="stat-label">Response Rate</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">∞</div>
                    <div className="stat-label">Enthusiasm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location-section">
        <div className="container">
          <h2 className="section-title">My Location</h2>
          <p className="section-description">
            Based in the beautiful city of Dehradun, India, but always ready to work with people from around the world!
          </p>
          
          <div className="location-info">
            <div className="location-details">
              <div className="location-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Current Location</h4>
                  <p>Dehradun, Uttarakhand, India</p>
                </div>
              </div>
              <div className="location-item">
                <i className="fas fa-university"></i>
                <div>
                  <h4>University</h4>
                  <p>Graphic Era Hill University</p>
                </div>
              </div>
              <div className="location-item">
                <i className="fas fa-clock"></i>
                <div>
                  <h4>Time Zone</h4>
                  <p>IST (UTC+5:30)</p>
                </div>
              </div>
            </div>
            
            <div className="map-placeholder">
              <i className="fas fa-map"></i>
              <p>Interactive Map Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-description">
            Got questions? Here are some answers to common queries about working with me.
          </p>
          
          <div className="faq-grid">
            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(0)}>
                <h3>What kind of projects do you work on?</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>I work on a wide range of projects including web development, machine learning applications, mobile apps, and automation tools. I'm particularly interested in projects that involve AI, space technology, and innovative solutions to real-world problems.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(1)}>
                <h3>Are you available for freelance work?</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>Yes! I'm always open to interesting freelance opportunities. Whether it's a small project or a long-term collaboration, I'd love to discuss how we can work together to bring your ideas to life.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(2)}>
                <h3>What's your preferred communication method?</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>I'm flexible with communication methods! Email is great for detailed discussions, while WhatsApp or Discord work well for quick chats. For video calls, I'm comfortable with any platform you prefer.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(3)}>
                <h3>How quickly do you respond to messages?</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>I typically respond within 24 hours, often much sooner. I check my messages regularly and prioritize responding to inquiries about potential collaborations and projects.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(4)}>
                <h3>Do you offer mentorship or guidance?</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>Absolutely! I believe in giving back to the community. I'm happy to provide guidance on programming, career advice, or just chat about technology and space exploration. Feel free to reach out!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's turn your ideas into reality and explore the digital cosmos together!</p>
            <div className="cta-buttons">
              <a href="#contact-form-section" className="btn-primary">
                <i className="fas fa-paper-plane"></i> Start a Conversation
              </a>
              <a href="/projects" className="btn-secondary">
                <i className="fas fa-eye"></i> View My Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="success-modal show">
          <div className="modal-content">
            <div className="success-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h2>Message Sent Successfully!</h2>
            <p>Thank you for reaching out! Your message has been sent to aani64257@gmail.com and Devesh will receive it shortly. You should also receive a confirmation email. I'll get back to you as soon as possible!</p>
            <button className="btn-primary" onClick={closeSuccessModal}>
              <i className="fas fa-check"></i> Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;