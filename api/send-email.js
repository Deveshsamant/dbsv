import nodemailer from 'nodemailer';

// Export as default for Vercel
export default async function handler(request, response) {
  // Allow both POST requests (for Vercel) and direct calls (for local development)
  if (request.method !== 'POST') {
    // For Vercel, use response object
    if (response && typeof response.status === 'function') {
      return response.status(405).json({ 
        success: false, 
        message: 'Method not allowed' 
      });
    } else {
      // For Express, we need to handle differently
      return { status: 405, json: { success: false, message: 'Method not allowed' } };
    }
  }

  try {
    // Handle both Vercel API format and direct Express format
    const requestData = request.body;
    
    const { firstName, lastName, email, subject, message } = requestData;
    
    console.log('📥 Received email request:', { firstName, lastName, email, subject });
    
    // Validate input
    if (!firstName || !lastName || !email || !subject || !message) {
      if (response && typeof response.status === 'function') {
        return response.status(400).json({ 
          success: false, 
          message: 'All fields are required' 
        });
      } else {
        return { status: 400, json: { success: false, message: 'All fields are required' } };
      }
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      if (response && typeof response.status === 'function') {
        return response.status(400).json({ 
          success: false, 
          message: 'Please provide a valid email address' 
        });
      } else {
        return { status: 400, json: { success: false, message: 'Please provide a valid email address' } };
      }
    }
    
    // Check message length
    if (message.trim().length < 10) {
      if (response && typeof response.status === 'function') {
        return response.status(400).json({ 
          success: false, 
          message: 'Message must be at least 10 characters long' 
        });
      } else {
        return { status: 400, json: { success: false, message: 'Message must be at least 10 characters long' } };
      }
    }
    
    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER || process.env.NEXT_PUBLIC_GMAIL_USER,
        pass: process.env.GMAIL_PASS || process.env.NEXT_PUBLIC_GMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Email content to owner
    const mailOptions = {
      from: `"${firstName} ${lastName}" <${email}>`,
      to: process.env.GMAIL_USER || process.env.NEXT_PUBLIC_GMAIL_USER || 'aani64257@gmail.com',
      replyTo: email,
      subject: `[Portfolio Contact] ${subject}`,
      text: `
        New message from your portfolio website:
        
        Name: ${firstName} ${lastName}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #007bff;">New message from your portfolio website</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <div style="background-color: #fff; padding: 15px; border-left: 4px solid #007bff; white-space: pre-wrap;">
              ${message}
            </div>
          </div>
          <hr style="margin: 30px 0;">
          <p style="font-size: 12px; color: #6c757d;">
            This message was sent from your portfolio website contact form.
          </p>
        </div>
      `
    };
    
    // Send email to owner
    console.log('📤 Sending email to owner...');
    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent to owner successfully');
    
    // Send confirmation email to sender
    const confirmationMailOptions = {
      from: process.env.GMAIL_USER || process.env.NEXT_PUBLIC_GMAIL_USER || 'aani64257@gmail.com',
      to: email,
      subject: 'Confirmation: Message Received',
      text: `
        Hello ${firstName},
        
        Thank you for contacting me through my portfolio website. I've received your message and will get back to you as soon as possible.
        
        Best regards,
        Devesh Samant
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #007bff;">Hello ${firstName},</h2>
          <p>Thank you for contacting me through my portfolio website. I've received your message and will get back to you as soon as possible.</p>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3>Your message details:</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #fff; padding: 15px; border-left: 4px solid #007bff; white-space: pre-wrap;">
              ${message}
            </div>
          </div>
          <p>Best regards,<br><strong>Devesh Samant</strong></p>
          <hr style="margin: 30px 0;">
          <p style="font-size: 12px; color: #6c757d;">
            This is an automated confirmation. Please do not reply to this email.
          </p>
        </div>
      `
    };
    
    console.log('📤 Sending confirmation email to sender...');
    await transporter.sendMail(confirmationMailOptions);
    console.log('✅ Confirmation email sent to sender successfully');
    
    if (response && typeof response.status === 'function') {
      return response.status(200).json({ 
        success: true, 
        message: 'Message sent successfully! You should receive a confirmation email shortly.' 
      });
    } else {
      return { status: 200, json: { success: true, message: 'Message sent successfully! You should receive a confirmation email shortly.' } };
    }
  } catch (error) {
    console.error('❌ Error sending email:', error);
    // More specific error handling
    let errorMessage, statusCode;
    if (error.code === 'EAUTH') {
      console.error('Authentication failed. Check your GMAIL_USER and GMAIL_PASS environment variables.');
      errorMessage = 'Email authentication failed. Please contact the site administrator.';
      statusCode = 500;
    } else if (error.code === 'EENVELOPE') {
      console.error('Invalid email address format.');
      errorMessage = 'Invalid email address. Please check the email format.';
      statusCode = 400;
    } else {
      errorMessage = 'Failed to send message. Please try again later.';
      statusCode = 500;
    }
    
    if (response && typeof response.status === 'function') {
      return response.status(statusCode).json({ 
        success: false, 
        message: errorMessage
      });
    } else {
      return { status: statusCode, json: { success: false, message: errorMessage } };
    }
  }
}

// Export as a named function for Express
export async function sendEmail(request, response) {
  return await handler(request, response);
}