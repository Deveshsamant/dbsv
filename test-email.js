// Test script to verify email functionality
const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables

// Use environment variables or fallback to defaults
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER || 'aani64257@gmail.com',
    pass: process.env.GMAIL_PASS || 'your_app_password_here'
  }
});

console.log('Testing email functionality...');
console.log('Using email:', process.env.GMAIL_USER || 'aani64257@gmail.com');

// Test email
const mailOptions = {
  from: process.env.GMAIL_USER || 'aani64257@gmail.com',
  to: process.env.GMAIL_USER || 'aani64257@gmail.com',
  subject: 'Test Email from Portfolio',
  text: 'This is a test email to verify that the email functionality is working correctly.'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('❌ Error sending email:', error.message);
    if (error.code === 'EAUTH') {
      console.log('🔐 Authentication failed. Please check your GMAIL_USER and GMAIL_PASS in the .env file.');
      console.log('📝 Make sure you are using a Gmail App Password, not your regular password.');
      console.log('🔗 Visit: https://myaccount.google.com/apppasswords to generate an App Password');
    }
  } else {
    console.log('✅ Email sent successfully!');
    console.log('📧 Message ID:', info.messageId);
    console.log('📬 Preview URL:', nodemailer.getTestMessageUrl(info));
  }
});