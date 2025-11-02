import React from 'react';
import './MyApps.css';

const MyApps = () => {
  // Data for Windows apps
  const windowsApps = [
    {
      id: 1,
      name: "FileOrganizer",
      description: "Desktop application built with Python for organizing and managing files on Windows systems. Features file browsing, sorting, and export functionality.",
      fileName: "FileOrganizer.exe",
      fileSize: "34.6 MB",
      platform: "Windows",
      icon: "fa-folder-open",
      // Updated path to point to the public/installers directory
      downloadPath: "/installers/windows/installer/FileOrganizer.exe"
    },
    {
      id: 2,
      name: "Project To-Do Manager",
      description: "Desktop application built with Electron.js for organizing tasks within projects. Features drag-and-drop functionality, multiple projects, and dark/light themes.",
      fileName: "Project To-Do Manager Setup 1.0.0.exe",
      fileSize: "72.5 MB",
      platform: "Windows",
      icon: "fa-tasks",
      // Updated path to point to the public/installers directory
      downloadPath: "/installers/windows/installer/Project To-Do Manager Setup 1.0.0.exe"
    }
  ];

  // Data for Mobile apps
  const mobileApps = [
    {
      id: 1,
      name: "DocKeep",
      description: "Android application for storing and organizing personal documents locally. Features Material Design, image management, and dark/light theme toggle.",
      fileName: "DocKeep.apk",
      fileSize: "14.8 MB",
      platform: "Android",
      icon: "fa-mobile-alt",
      // Updated path to point to the public/installers directory
      downloadPath: "/installers/app/installer/DocKeep.apk"
    }
  ];

  return (
    <div className="my-apps-container">
      <div className="my-apps-header">
        <h1>My Applications</h1>
        <p>Download and use my desktop and mobile applications</p>
      </div>
      
      {/* Main Content Card */}
      <div className="apps-main-card">
        {/* Split Screen Layout */}
        <div className="apps-split-layout">
          {/* Windows Applications Section */}
          <div className="apps-section">
            <div className="section-header">
              <div className="section-icon">
                <i className="fab fa-windows"></i>
              </div>
              <div className="section-text">
                <h2>Windows Applications</h2>
                <p>Desktop applications for Windows operating systems</p>
              </div>
            </div>
            
            <div className="apps-grid">
              {windowsApps.map(app => (
                <div key={app.id} className="app-card">
                  <div className="app-card-header">
                    <div className="app-icon-container">
                      <i className={`fas ${app.icon}`}></i>
                    </div>
                    <div className="app-title-container">
                      <h3>{app.name}</h3>
                      <div className="app-meta-tags">
                        <span className="file-size-tag">{app.fileSize}</span>
                        <span className="platform-tag">{app.platform}</span>
                      </div>
                    </div>
                  </div>
                  <div className="app-card-body">
                    <p className="app-description">{app.description}</p>
                  </div>
                  <div className="app-card-footer">
                    <a 
                      href={app.downloadPath} 
                      className="download-btn"
                      download={app.fileName}
                    >
                      <i className="fas fa-download"></i> Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Divider */}
          <div className="vertical-divider"></div>
          
          {/* Mobile Applications Section */}
          <div className="apps-section">
            <div className="section-header">
              <div className="section-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="section-text">
                <h2>Mobile Applications</h2>
                <p>Mobile applications for Android devices</p>
              </div>
            </div>
            
            <div className="apps-grid">
              {mobileApps.map(app => (
                <div key={app.id} className="app-card">
                  <div className="app-card-header">
                    <div className="app-icon-container">
                      <i className={`fas ${app.icon}`}></i>
                    </div>
                    <div className="app-title-container">
                      <h3>{app.name}</h3>
                      <div className="app-meta-tags">
                        <span className="file-size-tag">{app.fileSize}</span>
                        <span className="platform-tag">{app.platform}</span>
                      </div>
                    </div>
                  </div>
                  <div className="app-card-body">
                    <p className="app-description">{app.description}</p>
                  </div>
                  <div className="app-card-footer">
                    <a 
                      href={app.downloadPath} 
                      className="download-btn"
                      download={app.fileName}
                    >
                      <i className="fas fa-download"></i> Download APK
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyApps;