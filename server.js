const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3002; // Changed from 3001 to 3002

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve static files from the installers directory
app.use('/installers', express.static(path.join(__dirname, 'installers')));

// Specific route for favicon
app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'favicon.ico'));
});

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER || 'aani64257@gmail.com',
    pass: process.env.GMAIL_PASS // You'll need to set up an app password
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.log('❌ Transporter verification error:', error);
    console.log('Please check your GMAIL_USER and GMAIL_PASS in .env file');
    console.log('Make sure you are using an App Password, not your regular Gmail password');
  } else {
    console.log('✅ Server is ready to send emails');
  }
});

// Email sending endpoint - use the same function as Vercel API
app.post('/send-email', async (req, res) => {
  // Import and use the Vercel API function
  try {
    const { sendEmail } = await import('./api/send-email.js');
    await sendEmail(req, res);
  } catch (error) {
    console.error('Error importing sendEmail function:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    success: true, 
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// For React Router to work properly with client-side routing
// This should be the last route to catch all undefined routes and serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`📧 Email server is running on port ${PORT}`);
  console.log(`🏥 Health check: http://localhost:${PORT}/health`);
  console.log(`🚀 POST endpoint: http://localhost:${PORT}/send-email`);
  console.log(`🌐 Static files served from: http://localhost:${PORT}`);
});