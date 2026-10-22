import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import './Contacts.css';
import Footer from '../../components/Footer/Footer';
import Ins from '../../components/SubIns/Ins';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contacts-page">
      <div className="contacts-hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you!</p>
      </div>

      <div className="contacts-container">
        <div className="contacts-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p className="contact-intro">
              Have a question or need assistance? Our friendly team is here to help!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>support@funzymart.com</p>
                  <p>sales@funzymart.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p>1-800-FUNZY-MART</p>
                  <p>(1-800-386-9962)</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div className="contact-text">
                  <h4>Address</h4>
                  <p>123 Toy Street</p>
                  <p>Funville, FL 12345</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Clock size={24} />
                </div>
                <div className="contact-text">
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 9AM - 6PM</p>
                  <p>Saturday - Sunday: 10AM - 4PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Send Us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Ins></Ins>
      <Footer></Footer>
    </div>
  );
};

export default Contacts;
