import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './ContactFormModal.css'; // Adjust the path as necessary

const ContactFormModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission logic (e.g., sending data to an API)
      console.log('Form submitted:', formData);
      onClose(); // Close the modal after submission
    }
  };

  const validateForm = () => {
    let isValid = true;

    // Name validation
    const nameInput = document.getElementById('name');
    if (!formData.name.trim()) {
      nameInput.setCustomValidity('Please enter your full name.');
      nameInput.reportValidity();
      isValid = false;
    } else {
      nameInput.setCustomValidity('');
    }

    // Email validation
    const emailInput = document.getElementById('email');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      emailInput.setCustomValidity('Please enter a valid email address.');
      emailInput.reportValidity();
      isValid = false;
    } else {
      emailInput.setCustomValidity('');
    }

    // Message validation
    const messageInput = document.getElementById('message');
    if (!formData.message.trim()) {
      messageInput.setCustomValidity('Please write a message.');
      messageInput.reportValidity();
      isValid = false;
    } else {
      messageInput.setCustomValidity('');
    }

    return isValid;
  };

  return (
    <Modal show={isOpen} onHide={onClose} centered>
      <Modal.Header closeButton className="modal-header">
        <Modal.Title className="modal-title">Get in Touch</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here"
              required
            ></textarea>
          </div>
          <Button variant="primary" type="submit" className="btn">
            Submit Inquiry
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ContactFormModal;
