import express, { json } from 'express';
import mongoose, { connect, Schema, model } from 'mongoose';
import cors from 'cors';

const app = express();

app.use(json());
app.use(cors());

// Connect to MongoDB Atlas
connect('mongodb+srv://bhumika871999:8719@cluster0.gd32opn.mongodb.net/contactFormDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Error connecting to MongoDB Atlas:', err));

// Create a schema for the contact form data
const contactFormSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  mobile: String,
  message: String,
});

const ContactForm = model('ContactForm', contactFormSchema);


// Endpoint to handle form submissions
app.post('/submit-form', async (req, res) => {
  try {
    const { fullName, email, mobile, message } = req.body;

    // Create a new instance of ContactForm model
    const newFormSubmission = new ContactForm({
      fullName,
      email,
      mobile,
      message,
    });

    // Save the form data to MongoDB
    await newFormSubmission.save();

    // Sending a success response
    res.status(200).json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ success: false, message: 'Error submitting form. Please try again.' });
  }
});

const PORT = 3001; // Choose your desired port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
