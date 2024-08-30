const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const app = express();
const port =5000;

// Log MongoDB URL for debugging
console.log('MongoDB Connection String:', process.env.MONGO_URL);

// Middleware
app.use(bodyParser.json());

// CORS Configuration
app.use(cors({
  origin: 'https://iam-akash.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
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
