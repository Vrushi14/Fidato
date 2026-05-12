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
        <div className="contact-bg-svg desktop-only-svg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
          <svg width="100%" height="100%" viewBox="0 0 1200 616" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <rect x="0.5" y="0.5" width="1199" height="615" rx="35.5" fill="white" fillOpacity="0.3" stroke="#E2E2E2" />
          </svg>
        </div>
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
      <div className="contact-bg-svg desktop-only-svg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <svg width="100%" height="100%" viewBox="0 0 1200 616" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <rect x="0.5" y="0.5" width="1199" height="615" rx="35.5" fill="white" fillOpacity="0.3" stroke="#E2E2E2" />
        </svg>
      </div>
      <div className="contact-info-side">
        <h2>Contact Us</h2>

        <div className="info-group">
          <label>Address:</label>
          <p>121, Vile Parle, Hanuman Road, Near Airport Maharashtra-00057</p>
        </div>

        <div className="info-group">
          <label>Email:</label>
          <a href="mailto:hello@fidato.ai" className="info-link">hello@fidato.ai</a>
        </div>

        <div className="info-group">
          <label>Phone:</label>
          <p>+1 234 567 78</p>
          <span className="availability">Available Monday to Friday, 9AM- 6PM (IST)</span>
        </div>
      </div>

      <div className="contact-form-side">
        <div className="form-side-bg desktop-only-svg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
          <svg width="100%" height="100%" viewBox="0 0 716 562" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <rect x="0.5" y="0.5" width="715" height="561" rx="35.5" fill="white" fillOpacity="0.5" stroke="white" />
          </svg>
        </div>
        <form className="fidato-contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <div className="form-group">
              <label>Your name *</label>
              <input type="text" placeholder="First Name" required />
            </div>
            <div className="form-group">
              <label>Your Name *</label>
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

          <div className="form-group full-width" style={{ marginTop: '4px' }}>
            <textarea placeholder="Tell us how we can help..." rows="5" required></textarea>
          </div>

          <button type="submit" className="form-submit-btn">
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
