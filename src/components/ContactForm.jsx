import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset form or send data here
  };

  if (submitted) {
    return (
      <div className="contact-card-container success-state">
        <div className="success-message">
          <div className="success-icon">✓</div>
          <h2>Thank you!</h2>
          <p>Your message has been sent successfully. We'll get back to you shortly.</p>
          <button onClick={() => setSubmitted(false)} className="form-submit-btn">Send another message</button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-card-container">
      <div className="contact-info-side">
        <h2>Contact Us</h2>

        <div className="info-group">
          <label>Address:</label>
          <p>123, Villa Plaza, Hanuman Road, Near Airport, Maharashtra-400057</p>
        </div>

        <div className="info-group">
          <label>Email:</label>
          <a href="mailto:hello@fidato.ai" className="info-link">hello@fidato.ai</a>
        </div>

        <div className="info-group">
          <label>Phone:</label>
          <p>+1 234 567 78</p>
          <span className="availability">Available Mon-Fri 10AM-6PM (IST)</span>
        </div>
      </div>

      <div className="contact-form-side">
        <form className="fidato-contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <div className="form-group">
              <label>Your name *</label>
              <input type="text" placeholder="First Name" required />
            </div>
            <div className="form-group">
              <label>&nbsp;</label>
              <input type="text" placeholder="Last Name" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Your Website *</label>
              <input type="url" placeholder="https://example.com" required />
            </div>
            <div className="form-group">
              <label>Your e-mail address *</label>
              <input type="email" placeholder="example@email.com" required />
            </div>
          </div>

          <div className="form-group full-width">
            <label>Your message *</label>
            <textarea placeholder="Tell us how we can help..." rows="5" required></textarea>
          </div>

          <button type="submit" className="form-submit-btn">
            Send Us A Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
