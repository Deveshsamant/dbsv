# Devesh Samant - Portfolio Website

Welcome to my space-themed portfolio website! This is a showcase of my skills, projects, and passion for technology and space exploration.

## 🚀 Features

- **Modern React Architecture**: Built with React and React Router for smooth navigation
- **Responsive Design**: Fully responsive layout that works on all devices
- **Multiple Themes**: 30+ unique themes including cosmic, gaming, seasonal, and nature themes
- **Interactive Elements**: Custom cursor, robot assistant, and theme effects
- **Project Showcase**: Detailed display of my projects and certifications
- **Contact Form**: Email integration with Nodemailer for direct communication
- **Performance Optimized**: Fast loading times and smooth animations

## 🛠️ Technologies Used

- React.js
- React Router
- CSS3 with custom properties
- JavaScript (ES6+)
- Node.js
- Express.js
- Nodemailer
- Font Awesome Icons
- Google Fonts (Poppins)

## 🚀 Deployment

### Vercel Deployment

This project is configured for easy deployment to Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set up the following environment variables in your Vercel project settings:
   - `GMAIL_USER`: Your Gmail address for sending emails
   - `GMAIL_PASS`: Your Gmail app password (not your regular password)

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-app-password
```

To generate a Gmail app password:
1. Enable 2-factor authentication on your Google account
2. Go to Google Account settings > Security > App passwords
3. Generate a new app password for "Mail"
4. Use this password in your GMAIL_PASS variable

## 🏃‍♂️ Running Locally

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with your Gmail credentials
4. Run the development server: `npm start`
5. Run the email server (for local testing): `npm run server`

For concurrent development (frontend and backend): `npm run dev`

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/                 # React source code
│   ├── components/      # React components
│   ├── hooks/           # Custom React hooks
│   └── styles/          # CSS stylesheets
├── api/                 # Vercel API functions
├── server.js            # Local development server
└── .env                 # Environment variables
```

## 📧 Email Functionality

The contact form uses Nodemailer to send emails. When deployed to Vercel, it uses the Vercel API functions. For local development, it uses the local Express server.

## 🎨 Themes

The portfolio features over 30 unique themes organized into categories:
- Originals (Cosmic Dark, Stellar Light)
- Gaming & Tech (Neon Nexus, Retro Arcade, etc.)
- Seasonal (Winter Wonderland, Autumn Season, etc.)
- Nature (Midnight Ocean, Forest Coding, etc.)
- Space (Galaxy Nebula, Cosmic Storm, etc.)

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you have suggestions for improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍🚀 Author

**Devesh Samant**
- Email: aani64257@gmail.com
- LinkedIn: [Devesh Samant](https://www.linkedin.com/in/devesh-samant-b78376258/)
- GitHub: [Deveshsamant](https://github.com/Deveshsamant)
- Instagram: [devesh.samant](https://www.instagram.com/devesh.samant/)
