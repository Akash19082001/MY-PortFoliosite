const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// CORS Configuration
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from your frontend's origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed headers
}));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/contactDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const contactSchema = new mongoose.Schema({
  contactName: { type: String, required: true },
  contactEmail: { type: String, required: true },
  contactSubject: { type: String },
  contactMessage: { type: String, required: true },
});

const Contact = mongoose.model('Contacts', contactSchema);

// API route for handling contact form submissions
app.post('/api/contact', async (req, res) => {
  const { contactName, contactEmail, contactSubject, contactMessage } = req.body;

  try {
    const newContact = new Contact({
      contactName,
      contactEmail,
      contactSubject,
      contactMessage,
    });

    await newContact.save();
    res.status(200).json({ message: 'Your message has been sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send message. Please try again later.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
