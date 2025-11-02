import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles.css'; // Import the main styles from your original website
import 'devicon/devicon.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import Font Awesome and Google Fonts
const link1 = document.createElement('link');
link1.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
link1.rel = 'stylesheet';
document.head.appendChild(link1);

const link2 = document.createElement('link');
link2.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Exo+2:wght@300;400;500;600;700&display=swap';
link2.rel = 'stylesheet';
document.head.appendChild(link2);

// Ensure the App uses the original theme by default
document.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('selectedTheme') || 'original';
  document.documentElement.setAttribute('data-theme', savedTheme);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();