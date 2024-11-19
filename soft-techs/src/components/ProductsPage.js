import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './ProductsPage.css'; // Add your CSS for styling

const products = [
  {
    title: 'Cloud Services',
    description: 'Provide scalable storage and computing solutions in the cloud.',
    icon: '☁️',
    price: 'R 500/month',
  },
  {
    title: 'Data Analytics Tools',
    description: 'Develop tools for analyzing and visualizing data to gain insights.',
    icon: '📊',
    price: 'R 750/month',
  },
  {
    title: 'AI Systems',
    description: 'Create intelligent systems for automation and predictive analytics.',
    icon: '🤖',
    price: 'R 1,200/month',
  },
  {
    title: 'Security Software',
    description: 'Offer software solutions for protecting systems and data from threats.',
    icon: '🔒',
    price: 'R 600/month',
  },
  {
    title: 'Custom Software Development',
    description: 'Build tailored software solutions to meet specific business needs.',
    icon: '🛠️',
    price: 'From R 10,000',
  },
  {
    title: 'Mobile Applications',
    description: 'Develop mobile apps for iOS and Android platforms.',
    icon: '📱',
    price: 'From R 8,000',
  },
  {
    title: 'UX/UI Design',
    description: 'Provide design services for user-friendly interfaces and experiences.',
    icon: '🎨',
    price: 'R 1,000/project',
  },
  {
    title: 'DevOps Tools',
    description: 'Create tools to enhance collaboration between development and operations teams.',
    icon: '⚙️',
    price: 'R 700/month',
  },
];

const ProductsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    productTitle: '',
    description: '',
    price: '',
    name: '',
    email: '',
    message: ''
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleShowModal = (product) => {
    setInquiryData({
      productTitle: product.title,
      description: product.description,
      price: product.price,
      name: '',
      email: '',
      message: ''
    });
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInquiryData({ ...inquiryData, [name]: value });
  };

  const validateForm = () => {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    let isValid = true;

    if (!inquiryData.name.trim()) {
      nameInput.setCustomValidity('Please enter your full name.');
      nameInput.reportValidity();
      isValid = false;
    } else {
      nameInput.setCustomValidity('');
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(inquiryData.email)) {
      emailInput.setCustomValidity('Please enter a valid email address.');
      emailInput.reportValidity();
      isValid = false;
    } else {
      emailInput.setCustomValidity('');
    }

    if (!inquiryData.message.trim()) {
      messageInput.setCustomValidity('Please write a message.');
      messageInput.reportValidity();
      isValid = false;
    } else {
      messageInput.setCustomValidity('');
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
  
    try {
      // Submit the inquiry data (which includes product details)
      const response = await axios.post('http://localhost:5000/api/contact', inquiryData);
  
      setResponseMessage(response.data.message);
      setSuccess(true);
  
      // Reset only the user-related fields, keep the product details
      setInquiryData({
        name: '',
        email: '',
        message: '',
        productTitle: inquiryData.productTitle, // keep the productTitle
        description: inquiryData.description,   // keep the description
        price: inquiryData.price,               // keep the price
      });
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      setResponseMessage('There was an error submitting the inquiry.');
      setSuccess(false);
    }
  };

  return (
    <div className="products-page">
      <h1>Our Products & Services</h1>
      <p>
        At Soft Techs, we offer a wide range of innovative products and services designed to meet the unique needs of businesses in the digital age. Explore our offerings below:
      </p>
      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-icon">{product.icon}</div>
            <h2 className="product-title">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button className="buy-now-button" onClick={() => handleShowModal(product)}>Inquire Now</button>
          </div>
        ))}
      </div>

      {/* Inquiry Form Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Product Inquiry: {inquiryData.productTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {responseMessage && (
            <div className={`alert ${success ? 'alert-success' : 'alert-danger'}`}>
              {responseMessage}
            </div>
          )}
          <div>
            <h5>Description:</h5>
            <p>{inquiryData.description}</p>
            <h5>Price:</h5>
            <p>{inquiryData.price}</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={inquiryData.name}
                onChange={handleChange}
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
                value={inquiryData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                value={inquiryData.message}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" variant="primary" className="submit-btn">Submit Inquiry</Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProductsPage;
