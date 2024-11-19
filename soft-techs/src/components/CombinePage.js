import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CombinePage.css'; // CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import ContactFormModal from './ContactFormModal'; // Modal component for contact form
import { Container, Row, Col,  } from 'react-bootstrap';

const CombinedPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const logoPath = '/logo-no-background (1).png'; // Logo image path

  useEffect(() => {
    const images = document.querySelectorAll('.features-section img');
    const testimonials = document.querySelectorAll('.testimonial-card');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    images.forEach(image => observer.observe(image));
    testimonials.forEach(testimonial => observer.observe(testimonial));

    // Cleanup observer when component unmounts
    return () => {
      images.forEach(image => observer.unobserve(image));
      testimonials.forEach(testimonial => observer.unobserve(testimonial));
    };
  }, []);

  return (
    <div className="landing-page">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logoPath} alt="Soft-Techs Logo" style={{ maxWidth: '70px' }} />
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="/services" className="nav-link">Our Services</a>
              </li>
              <li className="nav-item">
                <a href="/product" className="nav-link">Product</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Background Video */}
      <div className="video-background">
        <video autoPlay loop muted className="video-foreground">
          <source src="/Navy Tech Cyber Security Concept Video Ad.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Landing Page Header */}
      <div className="hero-section text-center text-white py-5">
        <img className="img-fluid mb-3" src={logoPath} alt="Soft-Techs Logo" style={{ maxWidth: '200px' }} />
        <h2 className="display-4">Softer Productivity for Every Industry</h2>
        <p className="lead">"Soft-Techs offers user-friendly software solutions that boost productivity and streamline workflows."</p>
        <Link to="/learn-more" className="btn btn-warning mx-2 rounded-pill shadow" aria-label="Learn more about Soft-Techs Suite-System">Learn More</Link>
      </div>

      {/* Product Overview Section */}
      <section className="product-overview text-center py-5">
        <div className="container">
          <div className="projects-section mb-4">
            <h2 className="mb-4">Product</h2>
            <div className="project-image">
              <img 
                src={`/Screenshot 2024-07-25 143708.png`} 
                alt="Suits Systems Project" 
                className="img-fluid mb-3" 
                style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', maxWidth: '80%', height: 'auto' }} 
              />
              <p className="mt-3 text-muted">
                Suits Systems: A comprehensive management suite for law firms, enhancing efficiency and client engagement.
              </p>
            </div>
          </div>
          <div className="button-group">
            <Link to="https://www.softtechs.co.za/" className="btn btn-info mx-2 rounded-pill shadow">Explore the Suite</Link>
            <Link to="/demo" className="btn btn-success mx-2 rounded-pill shadow">Get Started with a Demo</Link>
          </div>
        </div>
      </section>

     {/* Feature Section */}
     <section className="features-section">
        <Container>
          <Row className="justify-content-start align-items-center">
            <Col sm={12} md={6} lg={6} className="text-content">
              <h2 className="mb-4 text-left">Discover Our Exclusive Offerings</h2>
              <h3 className="font-weight-bold">Premium Quality</h3>
              <p>Experience top-notch quality with every service we provide, tailored just for you!</p>
              <Link to="/products" className="btn btn-primary mt-4">View Our Products</Link>
            </Col>
            <Col sm={12} md={6} lg={6} className="image-content">
              <img 
                src="/91fa1ba7-e1dc-492c-a1d0-d3554752b0a8_0.jpeg" 
                alt="Exciting Feature" 
                className="img-fluid" 
                style={{ marginLeft: '110px' }} 
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="features-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col sm={12} md={6} className="image-content">
              <img src="/ad0d5346-b722-46e6-b4a7-d18259b2d56d_0.jpeg" alt="Exciting Feature" className="img-fluid" />
            </Col>
            <Col sm={12} md={6} className="text-content">
              <h2 className="mb-4 text-left">Frequently Asked Questions</h2>
              <h3>What services does Soft-Techs offer?</h3>
              <div className="d-flex align-items-start">
                <span style={{ marginRight: '8px' }}>☑️</span>
                <p>We offer a range of services including cloud solutions, data analytics, AI systems, and custom software development tailored for law firms.</p>
              </div>
              <h3>How can I contact Soft-Techs for support?</h3>
              <div className="d-flex align-items-start">
                <span style={{ marginRight: '8px' }}>☑️</span>
                <p>You can reach out to us via the 'Contact Us' button on our website or directly through our support email at support@softtechs.co.za.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="call-to-action-section">
        <div className="container">
          <h2 className="display-4 font-weight-bold text-dark mb-4"> Ready to Get Started?🏁</h2>
          <p className="lead text-dark mb-4">Contact us today for a personalized consultation!</p>
          <button 
            className="btn btn-danger btn-lg rounded-pill shadow" 
            onClick={() => setIsModalOpen(true)}
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Testimonials Section */}
      <section className="testimonials-section bg-light text-center py-5">
        <div className="container">
          <h2 className="mb-4">What Our Clients Say</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="testimonial-card p-4">
                <p>"The team at Soft-Techs transformed our operations and made our workflows seamless!"</p>
                <h5>- Dave Smith</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card p-4">
                <p>"Their dedication to quality and support is unmatched. Highly recommend!"</p>
                <h5>- Vusi Zondo</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card p-4">
                <p>"Soft-Techs delivered exactly what we needed and more. Fantastic experience!"</p>
                <h5>- Susan Lee</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section bg-dark text-white text-center py-4">
        <p>&copy; 2024 Soft-Techs. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default CombinedPage;
