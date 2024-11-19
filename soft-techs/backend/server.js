require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from frontend
  methods: ['GET', 'POST'],
}));

// Nodemailer setup for sending emails
const transporter = nodemailer.createTransport({
  host: 'kassandra.aserv.co.za',
  port: 587,  // Correct SMTP port
  secure: false,  // Use false for SMTP (secure is false for this port)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  debug: true,  // Enable debug output for SMTP connection
});

// Mock endpoint for form submission
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Received contact form submission:\n Name: ${name}\n Email: ${email}\n Message: ${message}`);

  // Construct the email message
  const mailOptions = {
    from: process.env.EMAIL_USER, // Afrihost email address
    to: 'info@softtechs.co.za',    // Replace with your email address
    subject: 'New Contact Form Submission',
    text: `You have received a new contact form submission:\n
           Name: ${name}\n
           Email: ${email}\n
           Message: ${message}`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending email' });
    } else {
      console.log('Email sent: ' + info.response);
      return res.json({ message: 'Form submitted successfully' });
    }
  });
});

// Endpoint for handling the contact form submission
app.post('/api/contact', (req, res) => {
  const { name, email, message, productTitle, description, price } = req.body;
  
  console.log(`Received inquiry for product: ${productTitle}\nName: ${name}\nEmail: ${email}\nMessage: ${message}\nDescription: ${description}\nPrice: ${price}`);

  // Email setup with all the details
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'info@softtechs.co.za',
    subject: `New Inquiry for ${productTitle}`,
    text: `You have received a new inquiry for ${productTitle}:\n\n` +
          `Name: ${name}\n` +
          `Email: ${email}\n` +
          `Message: ${message}\n\n` +
          `Product Description: ${description}\n` +
          `Price: ${price}\n`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending inquiry' });
    } else {
      console.log('Email sent: ' + info.response);
      return res.json({ message: 'Inquiry submitted successfully' });
    }
  });
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
