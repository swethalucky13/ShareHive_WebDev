import React, { useState } from 'react';
import axios from 'axios';
import './contactus.css'; 
import Footer from './Footer.js';

function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://share-hive.onrender.com/submit-form', formData);
      if (response.data.success) {
        alert('Form submitted successfully!');
      } else {
        alert('Error submitting form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleToggle = (index) => {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item, i) => {
      if (i === index) {
        item.classList.toggle('active');
        const answer = item.querySelector('p');
        if (answer) {
          answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        }
      } else {
        item.classList.remove('active');
        const answer = item.querySelector('p');
        if (answer) {
          answer.style.display = 'none';
        }
      }
    });
  };


  return (
    <section id="contact">
      <div className="contact-page">

      {/* FAQs Section */}
      <div className="faq-section">
          <h1>Frequently Asked Questions</h1>

          <div className="faq-item" onClick={() => handleToggle(0)}>
            <h2> Question 1. Do I need to sign in or create an account to join public study rooms?</h2>
            <p>No, you can join public study rooms without any login or sign-in requirements. 
               select from available public rooms to get started.</p>
          </div>

          <div className="faq-item" onClick={() => handleToggle(1)}>
            <h2> Question 2. How can I interact with others in the study rooms?</h2>
            <p>You can communicate with others using our text-to-speech recognizer which will recognize the text from what others speak.
               Use this text to translate to your convenient language and reply back.</p>
          </div>

          <div className="faq-item" onClick={() => handleToggle(2)}>
            <h2>Question 3. Can I use the text-to-speech feature in different languages?</h2>
            <p>Yes, our text-to-speech recognizer supports multiple languages. You can communicate in your preferred language, 
                and if needed, utilize our translation feature.</p>
          </div>

          <div className="faq-item" onClick={() => handleToggle(3)}>
            <h2>Question 4. How can I access the self-study room?</h2>
            <p>You can access the self-study room from the main menu. Look for the "Self-Study" option and click to enter.</p>
          </div>

          <div className="faq-item" onClick={() => handleToggle(4)}>
            <h2>Question 5. Can I personalize the background theme while studying in the self-study room?</h2>
            <p>Yes, you have the option to choose from various background themes to create a study environment that suits your preference and helps you focus.</p>
          </div>

          <div className="faq-item" onClick={() => handleToggle(5)}>
            <h2>Question 6. Is technical support available if I encounter any issues while using the application?</h2>
            <p>Yes, our technical support team is available to assist you. You can reach out for help via the contact form provided below.</p>
          </div>

          
        </div>

        {/*contact form*/}
        <div className="contact-form">
        <h3>Contact Us</h3>
        <p>Please submit the below form with your contact details. Our team will contact you soon.</p>
        <form>
          <label htmlFor="fullName" className="label-text">
            Full Name*:
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="email" className="label-text">
            Email*:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="mobile" className="label-text">
            Mobile*:
          </label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="message" className="label-text">
          Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <br />
          <br />
          <button onClick={handleSubmit} type="button" className="button">
            Submit
          </button>
        </form>
        </div>
      </div>
      <Footer />
    </section>

  );
}

export default ContactUs;
